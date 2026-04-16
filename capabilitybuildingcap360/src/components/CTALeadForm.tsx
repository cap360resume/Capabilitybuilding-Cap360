import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

interface CTALeadFormProps {
  source?: string;
  buttonText?: string;
  showName?: boolean;
}

const CTALeadForm = ({ source = "homepage", buttonText = "Get Started", showName = false }: CTALeadFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("cta_leads").insert({
      email: email.trim().slice(0, 255),
      name: name.trim().slice(0, 100) || null,
      source,
      page_url: window.location.pathname,
    });
    if (error) {
      toast({ title: "Error", description: "Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Thank you!", description: "We'll be in touch soon." });
      setEmail(""); setName("");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      {showName && (
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={100} className="sm:w-40" />
      )}
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required maxLength={255} className="sm:w-64" />
      <Button type="submit" disabled={loading}>
        {loading ? "..." : buttonText} <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </form>
  );
};

export default CTALeadForm;
