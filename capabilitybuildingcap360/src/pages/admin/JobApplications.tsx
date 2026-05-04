import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface Application {
  id: string;
  applicant_name: string;
  email: string;
  phone: string | null;
  cover_letter: string | null;
  status: string;
  created_at: string;
  job_id: string;
  job_title?: string;
}

const STATUSES = ["pending", "reviewed", "shortlisted", "rejected"];

const JobApplications = () => {
  const [apps, setApps] = useState<Application[]>([]);
  const [jobs, setJobs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const load = async () => {
      const [appsRes, jobsRes] = await Promise.all([
        supabase.from("job_applications").select("*").order("created_at", { ascending: false }),
        supabase.from("jobs").select("id, title"),
      ]);
      if (jobsRes.data) {
        const map: Record<string, string> = {};
        jobsRes.data.forEach((j: any) => { map[j.id] = j.title; });
        setJobs(map);
      }
      if (appsRes.data) setApps(appsRes.data as Application[]);
      setLoading(false);
    };
    load();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("job_applications").update({ status }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to update status.", variant: "destructive" });
    } else {
      setApps((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
    }
  };

  const statusColor = (s: string) => {
    if (s === "shortlisted") return "default";
    if (s === "reviewed") return "secondary";
    if (s === "rejected") return "destructive";
    return "outline";
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Applications</h1>
          <p className="text-muted-foreground mt-1">Review all applications submitted through the careers page</p>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading…</p>
        ) : apps.length === 0 ? (
          <p className="text-muted-foreground">No applications yet.</p>
        ) : (
          <div className="border border-border/50 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Job</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apps.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell className="font-medium">{a.applicant_name}</TableCell>
                    <TableCell>{a.email}</TableCell>
                    <TableCell>{a.phone || "—"}</TableCell>
                    <TableCell>{jobs[a.job_id] || "Unknown"}</TableCell>
                    <TableCell>{new Date(a.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Select value={a.status} onValueChange={(v) => updateStatus(a.id, v)}>
                        <SelectTrigger className="w-[130px]">
                          <Badge variant={statusColor(a.status) as any} className="capitalize">{a.status}</Badge>
                        </SelectTrigger>
                        <SelectContent>
                          {STATUSES.map((s) => (
                            <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default JobApplications;
