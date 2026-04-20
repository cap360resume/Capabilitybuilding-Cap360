import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"name" | "email" | "phone" | "preferred_date" | "preferred_time" | "captcha", string>>;

const TIME_SLOTS = Array.from({ length: 17 }, (_, i) => {
  const totalMins = 10 * 60 + i * 30;
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  const label = `${h > 12 ? h - 12 : h}:${m === 0 ? "00" : "30"} ${h >= 12 ? "PM" : "AM"}`;
  const value = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  return { label, value };
});

const genCaptcha = () => {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const ops = ["+", "-", "×"] as const;
  const op = ops[Math.floor(Math.random() * ops.length)];
  const answer = op === "+" ? a + b : op === "-" ? a - b : a * b;
  return { question: `${a} ${op} ${b} = ?`, answer };
};

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const toISODate = (d: Date) => d.toISOString().split("T")[0];
const formatDate = (d: Date) => d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

// Returns grid of days for a given month view (Mon-start)
const buildCalendarDays = (year: number, month: number) => {
  const first = new Date(year, month, 1);
  const startDow = (first.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
};

const BookingForm = () => {
  const today = new Date(); today.setHours(0, 0, 0, 0);

  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", preferred_date: "", preferred_time: "", meeting_type: "demo", notes: "" });
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(genCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const { toast } = useToast();
  const calRef = useRef<HTMLDivElement>(null);

  // Close calendar on outside click
  useEffect(() => {
    if (!showCalendar) return;
    const handler = (e: MouseEvent) => {
      if (calRef.current && !calRef.current.contains(e.target as Node)) setShowCalendar(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showCalendar]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setForm((f) => ({ ...f, name: cleaned }));
    setErrors((err) => ({ ...err, name: undefined }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
    if (cleaned.replace(/\D/g, "").length <= 10) {
      setForm((f) => ({ ...f, phone: cleaned }));
      setErrors((err) => ({ ...err, phone: undefined }));
    }
  };

  const handleCaptchaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9-]/g, "");
    setCaptchaInput(val);
    setErrors((err) => ({ ...err, captcha: undefined }));
  };

  const handleDayClick = (day: Date) => {
    const dow = day.getDay();
    if (day < today || dow === 0 || dow === 6) return;
    setSelectedDay(day);
    setForm((f) => ({ ...f, preferred_date: toISODate(day) }));
    setErrors((err) => ({ ...err, preferred_date: undefined }));
    setShowCalendar(false);
  };

  const prevMonth = () => { if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); } else setCalMonth(m => m - 1); };
  const nextMonth = () => { if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); } else setCalMonth(m => m + 1); };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    else if (form.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (form.phone.replace(/\D/g, "").length < 7) e.phone = "Enter a valid phone number.";
    if (!form.preferred_date) e.preferred_date = "Please select a date.";
    if (!form.preferred_time) e.preferred_time = "Please select a time slot.";
    if (!captchaInput.trim()) e.captcha = "Please solve the math problem.";
    else if (parseInt(captchaInput) !== captcha.answer) e.captcha = "Incorrect answer. Please try again.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      if (errs.captcha) { setCaptcha(genCaptcha()); setCaptchaInput(""); }
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("bookings").insert({
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255),
      phone: form.phone.trim().slice(0, 20),
      company: form.company.trim().slice(0, 100) || null,
      preferred_date: form.preferred_date,
      preferred_time: form.preferred_time,
      meeting_type: form.meeting_type,
      notes: form.notes.trim().slice(0, 500) || null,
    });
    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Booking submitted!", description: "We'll confirm your booking shortly." });
      setForm({ name: "", email: "", phone: "", company: "", preferred_date: "", preferred_time: "", meeting_type: "demo", notes: "" });
      setSelectedDay(undefined);
      setErrors({});
      setCaptcha(genCaptcha());
      setCaptchaInput("");
    }
    setLoading(false);
  };

  const cells = buildCalendarDays(calYear, calMonth);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg" noValidate>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
        <input name="website_url" type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label>Name *</Label>
          <Input value={form.name} onChange={handleName} maxLength={100} placeholder="John Doe" className={errors.name ? "border-destructive" : ""} />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <Label>Email *</Label>
          <Input type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((err) => ({ ...err, email: undefined })); }} maxLength={255} className={errors.email ? "border-destructive" : ""} />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label>Phone * <span className="text-muted-foreground text-xs">(max 10 digits)</span></Label>
          <Input type="tel" inputMode="numeric" value={form.phone} onChange={handlePhone} maxLength={11} placeholder="+91XXXXXXXXXX" className={errors.phone ? "border-destructive" : ""} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          {!errors.phone && <p className="text-xs text-muted-foreground">{form.phone.replace(/\D/g, "").length}/10 digits</p>}
        </div>
        <div className="space-y-1">
          <Label>Company</Label>
          <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={100} />
        </div>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Custom Calendar */}
        <div className="space-y-1" ref={calRef}>
          <Label>Preferred Date * <span className="text-muted-foreground text-xs">(Mon–Fri only)</span></Label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCalendar((v) => !v)}
              className={`w-full flex items-center gap-2 h-10 rounded-md border px-3 py-2 text-sm bg-background text-left transition-colors
                ${errors.preferred_date ? "border-destructive" : "border-input"} hover:border-ring focus:outline-none focus:ring-2 focus:ring-ring`}
            >
              <CalendarIcon className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className={selectedDay ? "text-foreground" : "text-muted-foreground"}>
                {selectedDay ? formatDate(selectedDay) : "Pick a date"}
              </span>
            </button>

            {showCalendar && (
              <div className="absolute z-50 mt-1 w-72 bg-background border border-border rounded-xl shadow-xl p-3">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <button type="button" onClick={prevMonth} className="p-1 rounded hover:bg-muted transition-colors text-foreground">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-semibold text-foreground">{MONTHS[calMonth]} {calYear}</span>
                  <button type="button" onClick={nextMonth} className="p-1 rounded hover:bg-muted transition-colors text-foreground">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 mb-1">
                  {DAYS.map((d) => (
                    <div key={d} className={`text-center text-xs font-medium py-1 ${d === "Sa" || d === "Su" ? "text-muted-foreground/40" : "text-muted-foreground"}`}>
                      {d}
                    </div>
                  ))}
                </div>

                {/* Day cells */}
                <div className="grid grid-cols-7 gap-y-0.5">
                  {cells.map((day, i) => {
                    if (!day) return <div key={`empty-${i}`} />;
                    const dow = day.getDay();
                    const isWeekend = dow === 0 || dow === 6;
                    const isPast = day < today;
                    const isDisabledDay = isWeekend || isPast;
                    const isSelected = selectedDay && toISODate(day) === toISODate(selectedDay);
                    const isToday = toISODate(day) === toISODate(today);
                    return (
                      <button
                        key={toISODate(day)}
                        type="button"
                        disabled={isDisabledDay}
                        onClick={() => handleDayClick(day)}
                        className={`
                          w-full aspect-square flex items-center justify-center rounded-lg text-xs font-medium transition-colors
                          ${isDisabledDay ? "text-muted-foreground/30 cursor-not-allowed" : "hover:bg-muted cursor-pointer text-foreground"}
                          ${isSelected ? "!bg-primary !text-primary-foreground" : ""}
                          ${isToday && !isSelected ? "border border-primary text-primary" : ""}
                        `}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">Weekends unavailable</p>
              </div>
            )}
          </div>
          {errors.preferred_date && <p className="text-xs text-destructive">{errors.preferred_date}</p>}
        </div>

        {/* Time Slot */}
        <div className="space-y-1">
          <Label>Preferred Time * <span className="text-muted-foreground text-xs">(10 AM–6 PM)</span></Label>
          <Select value={form.preferred_time} onValueChange={(v) => { setForm({ ...form, preferred_time: v }); setErrors((err) => ({ ...err, preferred_time: undefined })); }}>
            <SelectTrigger className={errors.preferred_time ? "border-destructive" : ""}>
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent>
              {TIME_SLOTS.map((slot) => (
                <SelectItem key={slot.value} value={slot.value}>{slot.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.preferred_time && <p className="text-xs text-destructive">{errors.preferred_time}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <Label>Meeting Type</Label>
        <Select value={form.meeting_type} onValueChange={(v) => setForm({ ...form, meeting_type: v })}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="demo">Product Demo</SelectItem>
            <SelectItem value="consultation">Consultation</SelectItem>
            <SelectItem value="discovery">Discovery Call</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label>Notes</Label>
        <Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} maxLength={500} rows={3} />
        <p className="text-xs text-muted-foreground text-right">{form.notes.length}/500</p>
      </div>

      {/* Math CAPTCHA */}
      <div className="rounded-lg border border-border bg-muted/40 px-4 py-3 space-y-2">
        <Label className="text-sm font-medium">Verify you're human *</Label>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono bg-background border border-border rounded px-3 py-1.5 select-none tracking-wide text-foreground">
            {captcha.question}
          </span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Answer"
            value={captchaInput}
            onChange={handleCaptchaInput}
            maxLength={4}
            className={`w-24 h-10 rounded-md border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors
              ${errors.captcha ? "border-destructive" : "border-input"}`}
          />
          <button
            type="button"
            onClick={() => { setCaptcha(genCaptcha()); setCaptchaInput(""); setErrors((err) => ({ ...err, captcha: undefined })); }}
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors whitespace-nowrap"
          >
            New question
          </button>
        </div>
        {errors.captcha && <p className="text-xs text-destructive">{errors.captcha}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        <CalendarIcon className="w-4 h-4 mr-2" /> {loading ? "Submitting..." : "Book Meeting"}
      </Button>
    </form>
  );
};

export default BookingForm;