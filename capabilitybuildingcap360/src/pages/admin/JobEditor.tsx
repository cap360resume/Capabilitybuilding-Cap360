import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = ["Strategy & Consulting", "Talent Acquisition", "Technology", "Assessment", "Leadership", "Operations", "General"];
const TYPES = ["Full-time", "Part-time", "Contract", "Internship"];

const JobEditor = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "General",
    location: "Remote",
    type: "Full-time",
    description: "",
    requirements: "",
    is_active: true,
  });

  useEffect(() => {
    if (!id) return;
    supabase.from("jobs").select("*").eq("id", id).single().then(({ data }) => {
      if (data) setForm({
        title: data.title,
        slug: data.slug,
        category: data.category,
        location: data.location,
        type: data.type,
        description: data.description || "",
        requirements: data.requirements || "",
        is_active: data.is_active,
      });
    });
  }, [id]);

  const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (val: string) => {
    setForm((p) => ({ ...p, title: val, slug: isEdit ? p.slug : generateSlug(val) }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.slug.trim()) {
      toast({ title: "Error", description: "Title is required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = {
      title: form.title,
      slug: form.slug,
      category: form.category,
      location: form.location,
      type: form.type,
      description: form.description || null,
      requirements: form.requirements || null,
      is_active: form.is_active,
    };

    const { error } = isEdit
      ? await supabase.from("jobs").update(payload).eq("id", id)
      : await supabase.from("jobs").insert(payload);

    setSaving(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: isEdit ? "Updated" : "Created", description: "Job saved successfully." });
      navigate("/admin/jobs");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-3xl space-y-6">
        <Button variant="ghost" onClick={() => navigate("/admin/jobs")} className="gap-2 mb-2">
          <ArrowLeft className="w-4 h-4" /> Back to Jobs
        </Button>
        <h1 className="text-3xl font-bold text-foreground">{isEdit ? "Edit Job" : "New Job"}</h1>

        <form onSubmit={handleSave} className="space-y-5">
          <div>
            <Label>Title *</Label>
            <Input value={form.title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="e.g. Senior HR Consultant" />
          </div>
          <div>
            <Label>Slug</Label>
            <Input value={form.slug} onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Category</Label>
              <Select value={form.category} onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <Label>Location</Label>
              <Input value={form.location} onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))} placeholder="e.g. Mumbai, India" />
            </div>
            <div>
              <Label>Type</Label>
              <Select value={form.type} onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label>Description</Label>
            <Textarea rows={5} value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} placeholder="Job description…" />
          </div>
          <div>
            <Label>Requirements</Label>
            <Textarea rows={4} value={form.requirements} onChange={(e) => setForm((p) => ({ ...p, requirements: e.target.value }))} placeholder="Requirements…" />
          </div>
          <div className="flex items-center gap-3">
            <Switch checked={form.is_active} onCheckedChange={(v) => setForm((p) => ({ ...p, is_active: v }))} />
            <Label>Active (visible on careers page)</Label>
          </div>
          <Button type="submit" disabled={saving}>{saving ? "Saving…" : isEdit ? "Update Job" : "Create Job"}</Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default JobEditor;
