import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, Mail, Calendar, Target, FileText, Settings, LogOut, Home, ShieldCheck, Briefcase, Users  } from "lucide-react";
import logo from "@/assets/cap360-logo.png";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { label: "Contacts", icon: Mail, path: "/admin/contacts" },
  { label: "Bookings", icon: Calendar, path: "/admin/bookings" },
  { label: "CTA Leads", icon: Target, path: "/admin/leads" },
  { label: "Blog Posts", icon: FileText, path: "/admin/blog" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
  { label: "Jobs", icon: Briefcase, path: "/admin/jobs" },
  { label: "Applications", icon: Users, path: "/admin/applications" },
];

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border/50 flex flex-col">
      <div className="p-6 border-b border-border/50">
        <img src={logo} alt="CAP360" className="h-8" />
        <p className="text-xs text-muted-foreground mt-1">Admin Panel</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/admin" && location.pathname.startsWith(item.path));
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border/50 space-y-1">
        <button onClick={() => navigate("/")} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
          <Home className="w-4 h-4" />
          View Site
        </button>
        <button onClick={signOut} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
