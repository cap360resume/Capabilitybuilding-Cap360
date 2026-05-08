import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Upload, Download, Plus, X } from "lucide-react";

const SERVICE_PAGES = [
  { value: "aser", label: "ASER" },
  { value: "hrcams", label: "HRCAMS" },
  { value: "tcb", label: "TCB" },
  { value: "pace", label: "PACE" },
];

const Documents = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", category: "Program Guide", service_page: "aser", file: null as File | null });

  const handleDownload = useCallback(async (fileUrl: string, title: string) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = title || "document";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err: any) {
      toast({ title: "Download failed", description: "Try disabling your ad-blocker or download manually.", variant: "destructive" });
    }
  }, [toast]);

  const { data: documents, isLoading } = useQuery({
    queryKey: ["admin-documents"],
    queryFn: async () => {
      const { data, error } = await supabase.from("downloadable_documents").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("downloadable_documents").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-documents"] });
      toast({ title: "Document deleted" });
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, is_active }: { id: string; is_active: boolean }) => {
      const { error } = await supabase.from("downloadable_documents").update({ is_active }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-documents"] }),
  });

  const handleUpload = async () => {
    if (!form.file || !form.title) {
      toast({ title: "Please fill title and select a file", variant: "destructive" });
      return;
    }
    setUploading(true);
    try {
      const ext = form.file.name.split(".").pop();
      const fileName = `${Date.now()}-${form.title.replace(/\s+/g, "-").toLowerCase()}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("documents").upload(fileName, form.file);
      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage.from("documents").getPublicUrl(fileName);

      const { error: insertError } = await supabase.from("downloadable_documents").insert({
        title: form.title,
        description: form.description,
        file_url: urlData.publicUrl,
        category: form.category,
        service_page: form.service_page,
      });
      if (insertError) throw insertError;

      queryClient.invalidateQueries({ queryKey: ["admin-documents"] });
      toast({ title: "Document uploaded successfully" });
      setForm({ title: "", description: "", category: "Program Guide", service_page: "aser", file: null });
      setShowForm(false);
    } catch (err: any) {
      toast({ title: "Upload failed", description: err.message, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Documents</h1>
            <p className="text-muted-foreground text-sm">Manage downloadable program guides and resources</p>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            {showForm ? <><X className="w-4 h-4 mr-2" /> Cancel</> : <><Plus className="w-4 h-4 mr-2" /> Upload Document</>}
          </Button>
        </div>

        {showForm && (
          <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Title *</Label>
                <Input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="ASER Program Guide 2026" />
              </div>
              <div>
                <Label>Category</Label>
                <Input value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} placeholder="Program Guide" />
              </div>
            </div>
            <div>
              <Label>Description</Label>
              <Textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Brief description..." />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Service Page</Label>
                <Select value={form.service_page} onValueChange={v => setForm(f => ({ ...f, service_page: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {SERVICE_PAGES.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>File *</Label>
                <Input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx" onChange={e => setForm(f => ({ ...f, file: e.target.files?.[0] || null }))} />
              </div>
            </div>
            <Button onClick={handleUpload} disabled={uploading}>
              <Upload className="w-4 h-4 mr-2" /> {uploading ? "Uploading..." : "Upload & Save"}
            </Button>
          </div>
        )}

        <div className="bg-card border border-border/50 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-border/50 bg-secondary/30">
              <tr>
                <th className="text-left p-3 font-medium">Title</th>
                <th className="text-left p-3 font-medium">Category</th>
                <th className="text-left p-3 font-medium">Service</th>
                <th className="text-left p-3 font-medium">Downloads</th>
                <th className="text-left p-3 font-medium">Active</th>
                <th className="text-left p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={6} className="p-6 text-center text-muted-foreground">Loading...</td></tr>
              ) : documents?.length === 0 ? (
                <tr><td colSpan={6} className="p-6 text-center text-muted-foreground">No documents yet</td></tr>
              ) : documents?.map(doc => (
                <tr key={doc.id} className="border-b border-border/20">
                  <td className="p-3 font-medium">{doc.title}</td>
                  <td className="p-3 text-muted-foreground">{doc.category}</td>
                  <td className="p-3 text-muted-foreground uppercase">{doc.service_page}</td>
                  <td className="p-3 text-muted-foreground">{doc.download_count}</td>
                  <td className="p-3">
                    <Switch checked={doc.is_active} onCheckedChange={v => toggleMutation.mutate({ id: doc.id, is_active: v })} />
                  </td>
                  <td className="p-3 flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleDownload(doc.file_url, doc.title)}><Download className="w-3 h-3" /></Button>
                    <Button size="sm" variant="destructive" onClick={() => deleteMutation.mutate(doc.id)}><Trash2 className="w-3 h-3" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Documents;
