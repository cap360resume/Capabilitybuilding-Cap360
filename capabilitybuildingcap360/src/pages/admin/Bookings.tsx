import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Search, Trash2 } from "lucide-react";

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  preferred_date: string | null;
  preferred_time: string | null;
  meeting_type: string;
  notes: string | null;
  status: string;
  created_at: string;
}

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchBookings = async () => {
    const { data } = await supabase.from("bookings").select("*").order("created_at", { ascending: false });
    setBookings((data as Booking[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchBookings(); }, []);

  const deleteBooking = async (id: string) => {
    await supabase.from("bookings").delete().eq("id", id);
    toast({ title: "Deleted", description: "Booking removed" });
    fetchBookings();
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("bookings").update({ status } as any).eq("id", id);
    fetchBookings();
  };

  const filtered = bookings.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.email.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (s: string) => {
    if (s === "confirmed") return "default";
    if (s === "cancelled") return "destructive";
    return "secondary";
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
            <p className="text-muted-foreground mt-1">{bookings.length} total bookings</p>
          </div>
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search bookings..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div className="border border-border/50 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">No bookings found</TableCell></TableRow>
              ) : filtered.map((b) => (
                <TableRow key={b.id}>
                  <TableCell className="font-medium">{b.name}</TableCell>
                  <TableCell>{b.email}</TableCell>
                  <TableCell>{b.preferred_date || "—"}</TableCell>
                  <TableCell>{b.preferred_time || "—"}</TableCell>
                  <TableCell className="capitalize">{b.meeting_type}</TableCell>
                  <TableCell>
                    <Badge variant={statusColor(b.status) as any} className="cursor-pointer" onClick={() => {
                      const next = b.status === "pending" ? "confirmed" : b.status === "confirmed" ? "cancelled" : "pending";
                      updateStatus(b.id, next);
                    }}>{b.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300" onClick={() => deleteBooking(b.id)}><Trash2 className="w-4 h-4" /></Button>
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

export default Bookings;
