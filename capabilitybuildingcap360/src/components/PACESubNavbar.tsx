import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const paceLinks = [
  { label: "Career Path Architecture", path: "/what-we-do/services/pace/career-path-architecture" },
  { label: "Professional Coaching", path: "/what-we-do/services/pace/professional-coaching" },
  { label: "Role Alignment", path: "/what-we-do/services/pace/role-alignment" },
  { label: "Succession Planning", path: "/what-we-do/services/pace/succession-planning" },
  { label: "Career Transition", path: "/what-we-do/services/pace/career-transition" },
  { label: "Individual Development", path: "/what-we-do/services/pace/individual-development" },
];

const PACESubNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeItem = paceLinks.find((l) => location.pathname === l.path);

  return (
    <div className="bg-secondary/80 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            <span className="flex-shrink-0 pr-6 py-3 text-xs font-bold tracking-wider text-cap-orange uppercase whitespace-nowrap">PACE</span>
            <div className="h-4 w-px bg-border/40 flex-shrink-0" />
            {paceLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button key={item.path} onClick={() => navigate(item.path)} className={`relative flex-shrink-0 px-5 py-3.5 text-xs font-medium whitespace-nowrap transition-colors ${isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground hover:bg-muted/50"}`}>
                  {item.label}
                  {isActive && <motion.div layoutId="pace-underline" className="absolute bottom-0 left-2 right-2 h-[2px] bg-cap-orange" transition={{ type: "spring", bounce: 0.2, duration: 0.4 }} />}
                </button>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground">
            <span className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-cap-orange uppercase">PACE</span>
              {activeItem && (<><span className="text-border/60">·</span><span className="text-foreground/70 text-xs">{activeItem.label}</span></>)}
            </span>
            <ChevronDown className={`w-4 h-4 text-foreground/60 transition-transform duration-200 ${mobileOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pb-3 space-y-0.5">
              {paceLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (<button key={item.path} onClick={() => { navigate(item.path); setMobileOpen(false); }} className={`block w-full text-left px-4 py-2.5 text-xs font-medium rounded transition-colors ${isActive ? "text-foreground bg-muted/60 border-l-2 border-cap-orange" : "text-foreground/60 hover:text-foreground hover:bg-muted/30"}`}>{item.label}</button>);
              })}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PACESubNavbar;
