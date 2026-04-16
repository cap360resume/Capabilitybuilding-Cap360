import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Search, Trash2 } from "lucide-react";

interface Lead {
  id: string;
  email: string;
  name: string | null;
  source: string;
  page_url: string | null;
  created_at: string;
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchLeads = async () => {
    const { data } = await supabase.from("cta_leads").select("*").order("created_at", { ascending: false });
    setLeads((data as Lead[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchLeads(); }, []);

  const deleteLead = async (id: string) => {
    await supabase.from("cta_leads").delete().eq("id", id);
    toast({ title: "Deleted", description: "Lead removed" });
    fetchLeads();
  };

  const filtered = leads.filter((l) =>
    l.email.toLowerCase().includes(search.toLowerCase()) ||
    (l.name?.toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">CTA Leads</h1>
            <p className="text-muted-foreground mt-1">{leads.length} total leads</p>
          </div>
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search leads..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div className="border border-border/50 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Page</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No leads found</TableCell></TableRow>
              ) : filtered.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.name || "—"}</TableCell>
                  <TableCell>{l.email}</TableCell>
                  <TableCell><Badge variant="secondary">{l.source}</Badge></TableCell>
                  <TableCell className="max-w-xs truncate text-muted-foreground">{l.page_url || "—"}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{new Date(l.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300" onClick={() => deleteLead(l.id)}><Trash2 className="w-4 h-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Leads;
