import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Search, Trash2, Eye } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchContacts = async () => {
    const { data } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
    setContacts((data as Contact[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchContacts(); }, []);

  const markAsRead = async (id: string) => {
    await supabase.from("contacts").update({ is_read: true } as any).eq("id", id);
    fetchContacts();
  };

  const deleteContact = async (id: string) => {
    await supabase.from("contacts").delete().eq("id", id);
    toast({ title: "Deleted", description: "Contact submission removed" });
    fetchContacts();
  };

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Contact Submissions</h1>
            <p className="text-muted-foreground mt-1">{contacts.length} total submissions</p>
          </div>
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search contacts..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div className="border border-border/50 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">No submissions found</TableCell></TableRow>
              ) : filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.company || "—"}</TableCell>
                  <TableCell className="max-w-xs truncate">{c.message}</TableCell>
                  <TableCell>
                    <Badge variant={c.is_read ? "secondary" : "default"}>{c.is_read ? "Read" : "New"}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{new Date(c.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {!c.is_read && (
                        <Button size="sm" variant="ghost" onClick={() => markAsRead(c.id)}><Eye className="w-4 h-4" /></Button>
                      )}
                      <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300" onClick={() => deleteContact(c.id)}><Trash2 className="w-4 h-4" /></Button>
                    </div>
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

export default Contacts;
