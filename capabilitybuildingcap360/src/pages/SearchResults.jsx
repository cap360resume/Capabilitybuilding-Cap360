import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, FileText, Briefcase, Globe, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Searchable content index ────────────────────────────────────────────────
// Add / edit entries here as your site grows.
const CONTENT_INDEX = [
  // Nav / Pages
  { type: "page", title: "Assessment Services (ASER)", description: "Comprehensive talent assessment and evaluation solutions for your organization.", path: "/what-we-do/services/aser", tags: ["assessment", "evaluation", "talent", "services"] },
  { type: "page", title: "HR Consulting & Advisory (HRCAMS)", description: "Strategic HR consulting and advisory services to transform your workforce.", path: "/what-we-do/services/hrcams", tags: ["hr", "consulting", "advisory", "human resources"] },
  { type: "page", title: "Training & Capability Building (TCB)", description: "End-to-end learning and development programs for capability growth.", path: "/what-we-do/services/tcb", tags: ["training", "learning", "development", "capability"] },
  { type: "page", title: "Professional Alignment & Career Enhancement (PACE)", description: "Career coaching and professional alignment programs for growth.", path: "/what-we-do/services/pace", tags: ["career", "coaching", "professional", "pace"] },
  { type: "page", title: "Our Company", description: "Learn about CAP360's mission, history, and leadership team.", path: "/who-we-are/our-company", tags: ["about", "company", "mission", "history"] },
  { type: "page", title: "Our Values", description: "The core principles and values that guide everything we do at CAP360.", path: "/who-we-are/our-values", tags: ["values", "culture", "principles"] },
  { type: "page", title: "Contact Us", description: "Get in touch with the CAP360 team.", path: "/contact", tags: ["contact", "reach", "support"] },

  // Industries
  { type: "industry", title: "Banking", description: "HR and assessment solutions tailored for the banking and financial services sector.", path: "/what-we-do/industries/banking", tags: ["banking", "finance", "financial services"] },
  { type: "industry", title: "Communications & Media", description: "Workforce solutions for the communications and media industry.", path: "/what-we-do/industries/communications-media", tags: ["communications", "media", "telecom"] },
  { type: "industry", title: "Health", description: "HR consulting and capability building for healthcare organizations.", path: "/what-we-do/industries/health", tags: ["health", "healthcare", "medical"] },
  { type: "industry", title: "High Tech", description: "Talent and assessment services for high-technology companies.", path: "/what-we-do/industries/high-tech", tags: ["tech", "technology", "software", "it"] },
  { type: "industry", title: "Insurance", description: "Specialized HR solutions for insurance sector organizations.", path: "/what-we-do/industries/insurance", tags: ["insurance", "risk"] },
  { type: "industry", title: "Life Sciences", description: "Workforce capability programs for pharma and life sciences firms.", path: "/what-we-do/industries/life-sciences", tags: ["life sciences", "pharma", "biotech"] },
  { type: "industry", title: "Retail", description: "People and performance solutions for the retail industry.", path: "/what-we-do/industries/retail", tags: ["retail", "consumer", "commerce"] },

  // Blog / What we think
  { type: "article", title: "The Future of Talent Assessment in 2025", description: "How AI and data-driven tools are reshaping how organizations identify and evaluate talent.", path: "/what-we-think/future-of-talent-assessment", tags: ["assessment", "ai", "talent", "future"] },
  { type: "article", title: "Building a Culture of Continuous Learning", description: "Why continuous capability development is the key differentiator for high-performing organizations.", path: "/what-we-think/continuous-learning-culture", tags: ["learning", "culture", "development", "training"] },
  { type: "article", title: "HR Transformation: From Admin to Strategic Partner", description: "A practical guide for HR leaders navigating the shift to strategic business partnership.", path: "/what-we-think/hr-transformation", tags: ["hr", "strategy", "transformation", "leadership"] },
  { type: "article", title: "Navigating Career Transitions in the Modern Workforce", description: "Insights and frameworks for professionals managing career pivots and transitions.", path: "/what-we-think/career-transitions", tags: ["career", "transition", "pace", "professional"] },

  // Careers
  { type: "career", title: "HR Consultant – Banking Sector", description: "Join our advisory team delivering HR transformation projects for leading banks.", path: "/careers/hr-consultant-banking", tags: ["hr", "consulting", "banking", "job"] },
  { type: "career", title: "Assessment Specialist", description: "Design and deliver talent assessments across industries. Entry to mid-level role.", path: "/careers/assessment-specialist", tags: ["assessment", "talent", "specialist", "job"] },
  { type: "career", title: "Learning & Development Manager", description: "Lead our training and capability building practice for enterprise clients.", path: "/careers/ld-manager", tags: ["learning", "development", "training", "manager", "job"] },
  { type: "career", title: "PACE Career Coach", description: "Help professionals navigate career enhancement and alignment programs.", path: "/careers/pace-career-coach", tags: ["career", "coach", "pace", "job"] },
];

const TYPE_META = {
  page:     { label: "Page",     Icon: Globe,     color: "text-blue-500",   bg: "bg-blue-50" },
  industry: { label: "Industry", Icon: Users,     color: "text-purple-500", bg: "bg-purple-50" },
  article:  { label: "Article",  Icon: FileText,  color: "text-green-500",  bg: "bg-green-50" },
  career:   { label: "Career",   Icon: Briefcase, color: "text-cap-orange", bg: "bg-orange-50" },
};

const FILTERS = ["All", "Pages", "Industries", "Articles", "Careers"];
const FILTER_TYPE_MAP = {
  All: null,
  Pages: "page",
  Industries: "industry",
  Articles: "article",
  Careers: "career",
};

function highlight(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part)
      ? <mark key={i} className="bg-yellow-200 text-gray-900 rounded px-0.5">{part}</mark>
      : part
  );
}

function searchContent(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return CONTENT_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.tags.some(tag => tag.includes(q))
  );
}

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQ = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(initialQ);
  const [query, setQuery] = useState(initialQ);
  const [activeFilter, setActiveFilter] = useState("All");

  // Sync query from URL
  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    setInputValue(q);
    setActiveFilter("All");
  }, [searchParams]);

  const results = useMemo(() => searchContent(query), [query]);

  const filtered = useMemo(() => {
    const type = FILTER_TYPE_MAP[activeFilter];
    return type ? results.filter(r => r.type === type) : results;
  }, [results, activeFilter]);

  const counts = useMemo(() => ({
    All: results.length,
    Pages: results.filter(r => r.type === "page").length,
    Industries: results.filter(r => r.type === "industry").length,
    Articles: results.filter(r => r.type === "article").length,
    Careers: results.filter(r => r.type === "career").length,
  }), [results]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue.trim() });
    }
  };

  const S = {
    page:     { bg: "#eff6ff", color: "#3b82f6" },
    industry: { bg: "#f5f3ff", color: "#8b5cf6" },
    article:  { bg: "#f0fdf4", color: "#22c55e" },
    career:   { bg: "#fff7ed", color: "#f97316" },
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "72px", backgroundColor: "#f9fafb", color: "#111827" }}>

      {/* Search header */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb" }}>
        <div className="container mx-auto px-4 lg:px-8 py-10">
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "1.5rem" }}>Search</h1>

          <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: "12px", maxWidth: "672px", backgroundColor: "#f3f4f6", borderRadius: "12px", padding: "10px 16px" }}>
            <Search style={{ width: 20, height: 20, color: "#9ca3af", flexShrink: 0 }} />
            <input
              autoFocus
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Search pages, articles, careers..."
              style={{ flex: 1, background: "transparent", fontSize: "1rem", color: "#1f2937", outline: "none", border: "none" }}
            />
            {inputValue && (
              <button type="button" onClick={() => { setInputValue(""); setSearchParams({}); }} style={{ color: "#9ca3af", background: "none", border: "none", cursor: "pointer", display: "flex" }}>
                <X style={{ width: 16, height: 16 }} />
              </button>
            )}
            <button type="submit" style={{ padding: "6px 16px", backgroundColor: "var(--cap-orange, #f97316)", color: "#fff", fontSize: "0.875rem", fontWeight: 600, borderRadius: "8px", border: "none", cursor: "pointer" }}>
              Search
            </button>
          </form>

          {/* Filter tabs */}
          {query && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", flexWrap: "wrap" }}>
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    border: activeFilter === f ? "1px solid #111827" : "1px solid #e5e7eb",
                    backgroundColor: activeFilter === f ? "#111827" : "#ffffff",
                    color: activeFilter === f ? "#ffffff" : "#4b5563",
                    transition: "all 0.2s",
                  }}
                >
                  {f}
                  {counts[f] > 0 && (
                    <span style={{ marginLeft: "6px", fontSize: "0.75rem", color: activeFilter === f ? "#d1d5db" : "#9ca3af" }}>
                      {counts[f]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 lg:px-8 py-10" style={{ maxWidth: "896px", backgroundColor: "#f9fafb" }}>
        {!query ? (
          <div style={{ textAlign: "center", paddingTop: "80px", paddingBottom: "80px", color: "#9ca3af" }}>
            <Search style={{ width: 40, height: 40, margin: "0 auto 12px", opacity: 0.3 }} />
            <p style={{ fontSize: "1.125rem" }}>Enter a search term above to get started.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", paddingTop: "80px", paddingBottom: "80px" }}>
            <p style={{ fontSize: "1.125rem", color: "#6b7280", marginBottom: "8px" }}>
              No results found for <strong style={{ color: "#111827" }}>"{query}"</strong>
            </p>
            <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>Try a different keyword or browse using the navigation above.</p>
          </div>
        ) : (
          <>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "24px" }}>
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for{" "}
              <strong style={{ color: "#111827" }}>"{query}"</strong>
            </p>
            <AnimatePresence mode="wait">
              <motion.ul
                key={activeFilter + query}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}
              >
                {filtered.map((item, i) => {
                  const { Icon, label } = TYPE_META[item.type];
                  const { bg, color } = S[item.type];
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <button
                        onClick={() => navigate(item.path)}
                        style={{ width: "100%", textAlign: "left", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e5e7eb", padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: "16px", transition: "border-color 0.2s, box-shadow 0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#9ca3af"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.boxShadow = "none"; }}
                      >
                        <span style={{ marginTop: "2px", padding: "8px", borderRadius: "8px", backgroundColor: bg, flexShrink: 0, display: "flex" }}>
                          <Icon style={{ width: 16, height: 16, color }} />
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color }}>
                            {label}
                          </span>
                          <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", margin: "2px 0 4px" }}>
                            {highlight(item.title, query)}
                          </h3>
                          <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: 0 }}>
                            {highlight(item.description, query)}
                          </p>
                          <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "4px" }}>{item.path}</p>
                        </div>
                        <ArrowRight style={{ width: 16, height: 16, color: "#d1d5db", flexShrink: 0, marginTop: "4px", transition: "color 0.2s" }} />
                      </button>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}