import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, Target, FileText } from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({ contacts: 0, bookings: 0, leads: 0, posts: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [c, b, l, p] = await Promise.all([
        supabase.from("contacts").select("id", { count: "exact", head: true }),
        supabase.from("bookings").select("id", { count: "exact", head: true }),
        supabase.from("cta_leads").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        contacts: c.count ?? 0,
        bookings: b.count ?? 0,
        leads: l.count ?? 0,
        posts: p.count ?? 0,
      });
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "Contact Submissions", value: stats.contacts, icon: Mail, color: "text-blue-400" },
    { label: "Bookings", value: stats.bookings, icon: Calendar, color: "text-green-400" },
    { label: "CTA Leads", value: stats.leads, icon: Target, color: "text-orange-400" },
    { label: "Blog Posts", value: stats.posts, icon: FileText, color: "text-purple-400" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome to the CAP360 admin panel</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card key={card.label} className="border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{card.label}</CardTitle>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{card.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
