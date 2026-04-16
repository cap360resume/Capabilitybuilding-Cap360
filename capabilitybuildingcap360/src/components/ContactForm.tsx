import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Error", description: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contacts").insert({
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255),
      phone: form.phone.trim().slice(0, 20) || null,
      company: form.company.trim().slice(0, 100) || null,
      message: form.message.trim().slice(0, 1000),
    });
    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="company">Company</Label>
          <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={100} />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1000} rows={4} />
      </div>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        <Send className="w-4 h-4 mr-2" /> {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
