import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/insights-hero.jpg";
import card1 from "@/assets/card-1.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

const filters = ["All", "Talent Acquisition", "HR Strategy", "Leadership", "Assessment", "Workforce Trends"];

const articles = [
  {
    category: "Talent Acquisition",
    title: "Why Résumé-First Hiring Is Costing Enterprises More Than They Realise",
    description: "Traditional screening methods miss up to 60% of high-potential candidates. Here's how competency-based hiring changes the equation.",
    image: card1,
    tag: "CAP360 Perspective",
  },
  {
    category: "HR Strategy",
    title: "People Strategy Is Business Strategy — Bridging the Gap in Indian Enterprises",
    description: "Most HR functions still operate reactively. The organizations pulling ahead are the ones treating human capital as a strategic lever.",
    image: card3,
    tag: "Industry Brief",
  },
  {
    category: "Assessment",
    title: "The Science Behind Objective Talent Assessment: Removing Bias from the Equation",
    description: "How structured, data-driven evaluation frameworks lead to better hiring decisions, lower attrition, and stronger team performance.",
    image: card4,
    tag: "Research Note",
  },
  {
    category: "Leadership",
    title: "Building Leadership Pipelines That Don't Break Under Pressure",
    description: "Succession planning is no longer a boardroom checkbox. Organizations that invest in pipeline depth outperform peers by 2.3× in continuity metrics.",
    image: card1,
    tag: "CAP360 Perspective",
  },
  {
    category: "Workforce Trends",
    title: "The Upskilling Imperative: Why L&D Is Now a Retention Tool",
    description: "Enterprises that invest in structured capability building see 40% higher retention among high-potential employees — the numbers don't lie.",
    image: card3,
    tag: "Trends",
  },
  {
    category: "HR Strategy",
    title: "M&A and the People Problem: How HR Due Diligence Determines Deal Success",
    description: "Over 70% of mergers fail to meet their targets — and most failures trace back to people and culture misalignment, not financials.",
    image: card4,
    tag: "Industry Brief",
  },
];

const WhatWeThink = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, isInView } = useScrollAnimation(0.05);
  const { ref: articlesRef, isInView: articlesInView } = useScrollAnimation(0.05);

  const filtered = activeFilter === "All" ? articles : articles.filter((a) => a.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          label="What We Think"
          title="Thinking that shapes better workforces"
          subtitle="Perspectives, research, and industry thinking from CAP360 — on talent, leadership, HR transformation, and the future of work."
          image={heroImg}
          // ctaText="Explore insights"
          // ctaAction={() => navigate("/what-we-think")}
        />

        {/* Featured Insight */}
        <section className="section-navy py-24" ref={ref}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={card1}
                  alt="Featured Insight"
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block">Featured Perspective</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  The Future-Ready Workforce: What Enterprises Must Build Today
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The organizations winning tomorrow are building capability now — not reacting to skill gaps after they appear. From smarter hiring to structured succession, the future-ready enterprise is one that treats workforce development as a continuous, integrated system rather than a one-time programme.
                </p>
                {/* <motion.button
                  onClick={() => navigate("/what-we-think")}
                  className="cta-link text-lg"
                  whileHover={{ x: 5 }}
                >
                  Read the perspective
                  <ChevronRight className="w-5 h-5 text-cap-orange" />
                </motion.button> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter & Articles */}
        <section className="section-dark py-24" ref={articlesRef}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={articlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Thinking</h2>
              <p className="text-muted-foreground text-base">
                Industry news, blogs, and CAP360 perspectives — coming regularly. Stay ahead of the curve.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0 }}
              animate={articlesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 text-sm font-medium border transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-cap-orange text-background border-cap-orange"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {filtered.map((article, i) => (
                  <motion.a
                    key={article.title}
                    href="#"
                    className="group bg-card border border-border/30 overflow-hidden hover:border-cap-blue/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="overflow-hidden h-48">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold tracking-widest text-cap-blue uppercase mb-3 block">{article.tag}</span>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-cap-blue transition-colors leading-snug">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.description}</p>
                      {/* <span className="cta-link text-sm">
                        Read more
                        <ChevronRight className="w-4 h-4 text-cap-orange" />
                      </span> */}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Coming Soon nudge */}
            <motion.div
              className="mt-16 border border-border/30 bg-card p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={articlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-2 block">Coming Soon</span>
                <h3 className="text-xl font-bold mb-1">Industry news, blogs & CAP360 research — published regularly.</h3>
                <p className="text-sm text-muted-foreground">We'll be sharing workforce insights, HR trends, and CAP360 thinking here. Check back soon.</p>
              </div>
              <a
                href="/contact"
                className="cta-link text-sm whitespace-nowrap"
              >
                Get notified
                <ChevronRight className="w-4 h-4 text-cap-orange" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeThink;