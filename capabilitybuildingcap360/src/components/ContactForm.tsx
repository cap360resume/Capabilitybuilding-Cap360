import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "captcha", string>>;

const genCaptcha = () => {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const ops = ["+", "-", "×"] as const;
  const op = ops[Math.floor(Math.random() * ops.length)];
  const answer = op === "+" ? a + b : op === "-" ? a - b : a * b;
  return { question: `${a} ${op} ${b} = ?`, answer };
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(genCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const { toast } = useToast();

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
    // Only allow digits and minus sign
    const val = e.target.value.replace(/[^0-9-]/g, "");
    setCaptchaInput(val);
    setErrors((err) => ({ ...err, captcha: undefined }));
  };

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    else if (form.name.trim().length < 2) e.name = "Name must be at least 2 characters.";

    if (!form.email.trim()) e.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Enter a valid email address.";

    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (form.phone.replace(/\D/g, "").length < 7) e.phone = "Enter a valid phone number.";

    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";

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
    const { error } = await supabase.from("contacts").insert({
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255),
      phone: form.phone.trim().slice(0, 20),
      company: form.company.trim().slice(0, 100) || null,
      message: form.message.trim().slice(0, 1000),
    });
    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setErrors({});
      setCaptcha(genCaptcha());
      setCaptchaInput("");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg" noValidate>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
        <input name="website_url" type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" value={form.name} onChange={handleName} maxLength={100} placeholder="John Doe" className={errors.name ? "border-destructive" : ""} />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" value={form.email} onChange={set("email")} maxLength={255} className={errors.email ? "border-destructive" : ""} />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="phone">Phone * <span className="text-muted-foreground text-xs">(max 10 digits)</span></Label>
          <Input id="phone" type="tel" inputMode="numeric" value={form.phone} onChange={handlePhone} maxLength={11} placeholder="+91XXXXXXXXXX" className={errors.phone ? "border-destructive" : ""} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          {!errors.phone && <p className="text-xs text-muted-foreground">{form.phone.replace(/\D/g, "").length}/10 digits</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="company">Company</Label>
          <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={100} />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" value={form.message} onChange={set("message")} maxLength={1000} rows={4} className={errors.message ? "border-destructive" : ""} />
        <div className="flex justify-between items-center">
          {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : <span />}
          <p className="text-xs text-muted-foreground">{form.message.length}/1000</p>
        </div>
      </div>

      {/* Math CAPTCHA */}
      <div className="rounded-lg border border-border bg-muted/40 px-4 py-3 space-y-2">
        <Label className="text-sm font-medium">Verify you're human *</Label>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono bg-background border border-border rounded px-3 py-1.5 select-none tracking-wide text-foreground">
            {captcha.question}
          </span>
          {/* Plain input — no shadcn Input here to avoid any spinner inheritance */}
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
        <Send className="w-4 h-4 mr-2" /> {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;