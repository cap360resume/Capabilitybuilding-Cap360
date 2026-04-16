import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/insights-hero.jpg";
import card1 from "@/assets/card-1.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

const filters = ["All", "AI & Technology", "Strategy", "Sustainability", "Talent", "Industry"];

const articles = [
  { category: "AI & Technology", title: "Total Enterprise Reinvention: How AI is Redefining the Enterprise", description: "Organizations that adopt a reinvention strategy anchored in technology are growing revenue 2× faster.", image: card1, tag: "Research Report" },
  { category: "Strategy", title: "The CFO Reimagined: From Steward to Strategist", description: "Modern finance leaders are transforming from cost controllers into growth architects.", image: card3, tag: "Perspectives" },
  { category: "Sustainability", title: "The Green Behind the Cloud: Sustainability in Technology", description: "How responsible cloud migration can cut emissions and drive business value simultaneously.", image: card4, tag: "Research Report" },
  { category: "Talent", title: "Work, Workforce, Workers: Reinvented", description: "The future of work demands new skills, new structures and a radically human approach.", image: card1, tag: "Trends" },
  { category: "AI & Technology", title: "Generative AI: A New Frontier for Enterprise Productivity", description: "Leaders adopting GenAI at scale are already seeing 40% productivity gains in key workflows.", image: card3, tag: "Perspectives" },
  { category: "Industry", title: "Banking on Change: The Digital Bank of 2030", description: "Next-gen banking platforms are redefining customer engagement and operational resilience.", image: card4, tag: "Industry Brief" },
];

const WhatWeThink = () => {
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
          title="Insights that shape the future"
          subtitle="Research, perspectives and trend analysis from the minds behind the world's most ambitious transformations."
          image={heroImg}
          ctaText="Explore research"
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
                  alt="Featured Research"
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block">Featured Research</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Total Enterprise Reinvention
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The most transformative companies are setting a new performance frontier by centering their strategy on a strong digital core and reinventing every part of the enterprise.
                </p>
                <motion.a href="#" className="cta-link text-lg" whileHover={{ x: 5 }}>
                  Read the report
                  <ArrowRight className="w-5 h-5 text-cap-orange" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter & Articles */}
        <section className="section-dark py-24" ref={articlesRef}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={articlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Latest Thinking
            </motion.h2>
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
                      <span className="cta-link text-sm">
                        Read more
                        <ArrowRight className="w-4 h-4 text-cap-orange" />
                      </span>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeThink;
