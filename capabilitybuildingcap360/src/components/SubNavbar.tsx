import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface SubNavItem {
  label: string;
  path: string;
}

interface SubNavbarProps {
  title: string;
  titlePath: string;
  items: SubNavItem[];
}

const SubNavbar = ({ title, titlePath, items }: SubNavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Extract section IDs from hash paths for scroll spy
  const sectionIds = items
    .filter((item) => item.path.startsWith("#"))
    .map((item) => item.path.replace("#", ""));

  const activeSection = useScrollSpy(sectionIds, 160);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 150 && currentY > lastScrollY.current) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isItemActive = (item: SubNavItem) => {
    if (item.path.startsWith("#")) {
      return activeSection === item.path.replace("#", "");
    }
    return location.pathname === item.path;
  };

  const handleClick = (item: SubNavItem) => {
    if (item.path.startsWith("#")) {
      const el = document.getElementById(item.path.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(item.path);
    }
  };

  return (
    <div
      className={`sticky z-40 bg-primary border-b border-primary/80 transition-all duration-500 ${
        navHidden ? "top-0" : "top-[72px]" 
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
          {/* Left: Service title */}
          <button
            onClick={() => navigate(titlePath)}
            className="flex-shrink-0 pr-8 py-4 text-[16px] font-bold text-primary-foreground whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            {title}
          </button>

          {/* Right: Contextual links — desktop */}
          <div className="hidden md:flex items-center gap-0">
            {items.map((item) => {
              const isActive = isItemActive(item);
              return (
                <button
                  key={item.path}
                  onClick={() => handleClick(item)}
                  className={`relative flex-shrink-0 px-5 py-4 text-[16px] font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="subnav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[3px] bg-primary-foreground"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile: horizontal scroll all links */}
          <div className="flex md:hidden items-center gap-0">
            {items.map((item) => {
              const isActive = isItemActive(item);
              return (
                <button
                  key={item.path}
                  onClick={() => handleClick(item)}
                  className={`relative flex-shrink-0 px-4 py-4 text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="subnav-underline-mobile"
                      className="absolute bottom-0 left-1 right-1 h-[2px] bg-primary-foreground"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
