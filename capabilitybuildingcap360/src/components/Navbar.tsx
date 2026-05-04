import { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown, Search, Globe, Menu, X, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/cap360-logo.png";

// ─── Searchable content index ─────────────────────────────────────────────────
const SEARCH_INDEX = [
  { label: "Assessment Services (ASER)", path: "/what-we-do/services/aser", tags: ["assessment", "aser", "evaluation", "talent"] },
  { label: "HR Consulting & Advisory (HRCAMS)", path: "/what-we-do/services/hrcams", tags: ["hr", "consulting", "advisory", "hrcams"] },
  { label: "Training & Capability Building (TCB)", path: "/what-we-do/services/tcb", tags: ["training", "tcb", "learning", "capability"] },
  { label: "Professional Alignment & Career Enhancement (PACE)", path: "/what-we-do/services/pace", tags: ["pace", "career", "coaching"] },
  { label: "Hiretek", path: "https://www.hiretek.in/", tags: ["hiretek", "recruitment", "hiring", "staffing"] },
  { label: "Our Company", path: "/who-we-are/our-company", tags: ["about", "company", "mission"] },
  { label: "Our Values", path: "/who-we-are/our-values", tags: ["values", "culture"] },
  { label: "Contact Us", path: "/contact", tags: ["contact", "reach"] },
  { label: "Banking", path: "/what-we-do/industries/banking", tags: ["banking", "finance"] },
  { label: "Communications & Media", path: "/what-we-do/industries/communications-media", tags: ["communications", "media", "telecom"] },
  { label: "Health", path: "/what-we-do/industries/health", tags: ["health", "healthcare"] },
  { label: "High Tech", path: "/what-we-do/industries/high-tech", tags: ["tech", "technology", "software"] },
  { label: "Insurance", path: "/what-we-do/industries/insurance", tags: ["insurance"] },
  { label: "Life Sciences", path: "/what-we-do/industries/life-sciences", tags: ["life sciences", "pharma"] },
  { label: "Retail", path: "/what-we-do/industries/retail", tags: ["retail", "consumer"] },
  { label: "The Future of Talent Assessment", path: "/what-we-think/future-of-talent-assessment", tags: ["assessment", "ai", "talent", "future", "article"] },
  { label: "Building a Culture of Continuous Learning", path: "/what-we-think/continuous-learning-culture", tags: ["learning", "culture", "development", "article"] },
  { label: "HR Transformation: From Admin to Strategic Partner", path: "/what-we-think/hr-transformation", tags: ["hr", "strategy", "transformation", "article"] },
  { label: "Navigating Career Transitions", path: "/what-we-think/career-transitions", tags: ["career", "transition", "article"] },
  { label: "HR Consultant – Banking Sector", path: "/careers/hr-consultant-banking", tags: ["job", "hr", "banking", "careers"] },
  { label: "Assessment Specialist", path: "/careers/assessment-specialist", tags: ["job", "assessment", "careers"] },
  { label: "Learning & Development Manager", path: "/careers/ld-manager", tags: ["job", "learning", "development", "careers"] },
  { label: "PACE Career Coach", path: "/careers/pace-career-coach", tags: ["job", "pace", "career", "careers"] },
];

const megaMenuData = {
  "What we do": [
    {
      title: "Services", links: [
        { label: "HR Consulting & Advisory Managed Services (HRCAMS)", path: "/what-we-do/services/hrcams" },
        { label: "Talent Acquisition (HIRETEK)", path: "https://www.hiretek.in/", external: true }, // ✅ external
        { label: "Professional Alignment & Career Enhancement (PACE)", path: "/what-we-do/services/pace" },
        { label: "Training & Capability Building (TCB)", path: "/what-we-do/services/tcb" },
        { label: "Assessment Services (ASER)", path: "/what-we-do/services/aser" },
      ]
    },
    {
      title: "Industries", links: [
        { label: "Banking" }, { label: "Communications & Media" }, { label: "Health" },
        { label: "High Tech" }, { label: "Insurance" }, { label: "Life Sciences" }, { label: "Retail" },
      ]
    },
  ],
  "Who we are": [
    {
      title: "About CAP360", links: [
        { label: "Our Company", path: "/who-we-are/our-company" },
        { label: "Our Values", path: "/who-we-are/our-values" },
      ]
    },
    {
      title: "Contact Us", links: [
        { label: "Contact", path: "/contact" },
      ]
    },
  ],
};

const mainPages = ["/", "/what-we-do", "/what-we-think", "/who-we-are", "/careers"];

const navItems = [
  { label: "What we do", hasDropdown: true, path: "/what-we-do" },
  { label: "What we think", hasDropdown: false, path: "/what-we-think" },
  { label: "Who we are", hasDropdown: true, path: "/who-we-are" },
  { label: "Careers", hasDropdown: false, path: "/careers" },
  { label: "Admin", hasDropdown: false, path: "/admin" },
];

function HighlightMatch({ text, query }) {
  if (!query) return <span>{text}</span>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, idx)}
      <strong style={{ fontWeight: 700, color: "#111827" }}>{text.slice(idx, idx + query.length)}</strong>
      {text.slice(idx + query.length)}
    </span>
  );
}

// ✅ Helper: navigate internally or open externally
const handleLinkClick = (link, navigate, onClose?) => {
  if (link.external) {
    window.open(link.path, "_blank", "noopener,noreferrer");
  } else if (link.path) {
    navigate(link.path);
  }
  onClose?.();
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isMainPage = mainPages.includes(location.pathname);

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return SEARCH_INDEX.filter(item =>
      item.label.toLowerCase().includes(q) ||
      item.tags.some(t => t.includes(q))
    ).slice(0, 6);
  }, [searchQuery]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setSearchOpen(false);
    setSearchQuery("");
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (!isMainPage && currentY > 150 && currentY > lastScrollY.current) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!searchOpen) return;
      if (e.key === "Escape") { closeSearch(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); setActiveSuggestion(p => Math.min(p + 1, suggestions.length - 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActiveSuggestion(p => Math.max(p - 1, -1)); }
      else if (e.key === "Enter" && activeSuggestion >= 0) { e.preventDefault(); handleSuggestionClick(suggestions[activeSuggestion]); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen, suggestions, activeSuggestion]);

  const openSearch = () => { setSearchOpen(true); setActiveMenu(null); setSearchQuery(""); setActiveSuggestion(-1); };
  const closeSearch = () => { setSearchOpen(false); setSearchQuery(""); setActiveSuggestion(-1); };

  // ✅ Handles external links in search suggestions too
  const handleSuggestionClick = (item) => {
    if (item.external) {
      window.open(item.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.path);
    }
    closeSearch();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (activeSuggestion >= 0 && suggestions[activeSuggestion]) {
      handleSuggestionClick(suggestions[activeSuggestion]);
    } else if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      closeSearch();
    }
  };

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (megaMenuData[label]) setActiveMenu(label);
  };
  const handleMouseLeave = () => { timeoutRef.current = setTimeout(() => setActiveMenu(null), 200); };
  const handleMegaEnter = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navHidden && !activeMenu && !searchOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled ? "bg-white shadow-lg shadow-gray-200/50 border-b border-gray-200" : "bg-white border-b border-gray-100"
        }`}
        onMouseLeave={!searchOpen ? handleMouseLeave : undefined}
      >
        <div className="container mx-auto flex items-center h-[72px] px-4 lg:px-8 gap-4">

          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 transition-all duration-300"
            style={{ opacity: searchOpen ? 0 : 1, pointerEvents: searchOpen ? "none" : "auto", width: searchOpen ? "0px" : "auto", overflow: "hidden" }}
          >
            <img src={logo} alt="CAP360" className="h-10 w-auto" />
          </a>

          {/* Desktop nav links */}
          {!searchOpen && (
            <div className="hidden lg:flex items-center justify-center gap-0 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`relative px-5 py-6 text-lg font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                    activeMenu === item.label ? "text-gray-900" : "text-black hover:text-gray-700"
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onClick={() => {
                    if (item.hasDropdown) { setActiveMenu(activeMenu === item.label ? null : item.label); }
                    else { navigate(item.path); }
                  }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === item.label ? "rotate-180" : ""}`} />
                  )}
                  {activeMenu === item.label && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-0 left-5 right-5 h-[2px] bg-cap-orange" transition={{ type: "spring", bounce: 0.2, duration: 0.4 }} />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Mobile toggle */}
          <button className="lg:hidden text-gray-700 p-2 ml-auto relative z-10" onClick={() => setMobileOpen(!mobileOpen)}>
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="w-6 h-6" /></motion.div>
                : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-6 h-6" /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>

        {/* Autocomplete dropdown */}
        <AnimatePresence>
          {searchOpen && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              style={{ position: "absolute", top: "72px", left: 0, right: 0, backgroundColor: "#fff", borderTop: "1px solid #e5e7eb", boxShadow: "0 8px 24px rgba(0,0,0,0.10)", zIndex: 100 }}
            >
              <div className="container mx-auto px-4 lg:px-8">
                <ul style={{ listStyle: "none", margin: 0, padding: "8px 0" }}>
                  {suggestions.map((item, i) => (
                    <li key={item.path}>
                      <button
                        onClick={() => handleSuggestionClick(item)}
                        onMouseEnter={() => setActiveSuggestion(i)}
                        style={{
                          width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: "12px",
                          padding: "12px 16px", background: activeSuggestion === i ? "#f9fafb" : "transparent",
                          border: "none", cursor: "pointer", borderRadius: "6px", transition: "background 0.15s",
                        }}
                      >
                        <Search style={{ width: 15, height: 15, color: "#9ca3af", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.95rem", color: "#4b5563" }}>
                          <HighlightMatch text={item.label} query={searchQuery} />
                        </span>
                        {/* ✅ Show external icon for Hiretek in search */}
                        {item.external
                          ? <ChevronRight style={{ width: 16, height: 16, color: "#d1d5db", marginLeft: "auto" }} />
                          : <ChevronRight style={{ width: 16, height: 16, color: "#d1d5db", marginLeft: "auto" }} />
                        }
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mega Menu */}
        <AnimatePresence>
          {!searchOpen && activeMenu && megaMenuData[activeMenu] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden lg:block overflow-hidden border-t border-gray-800"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-black">
                <div className="container mx-auto px-4 lg:px-8 py-10">
                  <div className="grid grid-cols-3 gap-12">
                    {megaMenuData[activeMenu].map((col) => (
                      <div key={col.title}>
                        <h3 className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-5">{col.title}</h3>
                        <ul className="space-y-3">
                          {col.links.map((link) => (
                            <li key={link.label}>
                              <button
                                onClick={() => handleLinkClick(link, navigate, () => setActiveMenu(null))}
                                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-200 text-left"
                              >
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                  {link.label}
                                </span>
                                {/* ✅ Show ExternalLink icon for Hiretek, ChevronRight for others */}
                                {link.external
                                  ? <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-cap-orange" />
                                  : <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-cap-orange" />
                                }
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 pt-6 border-t border-gray-800">
                    <button
                      onClick={() => { const item = navItems.find(n => n.label === activeMenu); if (item) { navigate(item.path); setActiveMenu(null); } }}
                      className="cta-link text-sm text-cap-blue"
                    >
                      See all {activeMenu.toLowerCase()}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto pt-[72px]"
          >
            <div className="px-6 py-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="border-b border-gray-200"
                >
                  <button
                    className="w-full flex items-center justify-between py-5 text-xl font-semibold text-gray-800"
                    onClick={() => {
                      if (item.hasDropdown) { setMobileExpanded(mobileExpanded === item.label ? null : item.label); }
                      else { navigate(item.path); setMobileOpen(false); }
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-gray-500 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />}
                  </button>
                  <AnimatePresence>
                    {item.hasDropdown && mobileExpanded === item.label && megaMenuData[item.label] && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="pb-5 space-y-6">
                          {megaMenuData[item.label].map((col) => (
                            <div key={col.title}>
                              <h4 className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-3">{col.title}</h4>
                              <ul className="space-y-2.5 pl-2">
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <button
                                      onClick={() => handleLinkClick(link, navigate, () => setMobileOpen(false))}
                                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors text-left"
                                    >
                                      {link.label}
                                      {/* ✅ External icon on mobile too */}
                                      {link.external && <ExternalLink className="w-3 h-3 text-gray-400" />}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-col gap-4">
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 border-b border-gray-300 pb-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search CAP360..."
                    className="flex-1 text-base text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                  />
                  {searchQuery && <button type="submit" className="text-sm text-cap-orange font-medium">Go</button>}
                </form>
                {suggestions.length > 0 && (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {suggestions.map(item => (
                      <li key={item.path}>
                        <button
                          onClick={() => { handleSuggestionClick(item); setMobileOpen(false); }}
                          style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", background: "none", border: "none", borderBottom: "1px solid #f3f4f6", cursor: "pointer" }}
                        >
                          <Search style={{ width: 14, height: 14, color: "#9ca3af", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.9rem", color: "#374151" }}>
                            <HighlightMatch text={item.label} query={searchQuery} />
                          </span>
                          {/* ✅ External icon in mobile search suggestions */}
                          {item.external && <ExternalLink style={{ width: 12, height: 12, color: "#9ca3af", marginLeft: "auto" }} />}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>Global (EN)</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;