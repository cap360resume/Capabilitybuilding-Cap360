import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

const BookingForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", preferred_date: "", preferred_time: "", meeting_type: "demo", notes: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Error", description: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("bookings").insert({
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255),
      phone: form.phone.trim().slice(0, 20) || null,
      company: form.company.trim().slice(0, 100) || null,
      preferred_date: form.preferred_date || null,
      preferred_time: form.preferred_time || null,
      meeting_type: form.meeting_type,
      notes: form.notes.trim().slice(0, 500) || null,
    });
    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Booking submitted!", description: "We'll confirm your booking shortly." });
      setForm({ name: "", email: "", phone: "", company: "", preferred_date: "", preferred_time: "", meeting_type: "demo", notes: "" });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label>Name *</Label>
          <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} />
        </div>
        <div className="space-y-1">
          <Label>Email *</Label>
          <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label>Phone</Label>
          <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} />
        </div>
        <div className="space-y-1">
          <Label>Company</Label>
          <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={100} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label>Preferred Date</Label>
          <Input type="date" value={form.preferred_date} onChange={(e) => setForm({ ...form, preferred_date: e.target.value })} />
        </div>
        <div className="space-y-1">
          <Label>Preferred Time</Label>
          <Input type="time" value={form.preferred_time} onChange={(e) => setForm({ ...form, preferred_time: e.target.value })} />
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
      </div>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        <Calendar className="w-4 h-4 mr-2" /> {loading ? "Submitting..." : "Book Meeting"}
      </Button>
    </form>
  );
};

export default BookingForm;
