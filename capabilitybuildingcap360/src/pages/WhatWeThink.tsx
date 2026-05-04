import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/insights-hero.jpg";
import card1 from "@/assets/card-1.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

const fallbackImages = [card1, card3, card4];

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string | null;
  created_at: string;
  category: string | null;
}

const FILTERS = ["All", "Talent Acquisition", "HR Strategy", "Leadership", "Assessment", "Workforce Trends"];

const WhatWeThink = () => {
  const navigate = useNavigate();
  const { ref, isInView } = useScrollAnimation(0.05);
  const { ref: articlesRef, isInView: articlesInView } = useScrollAnimation(0.05);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState<BlogPost | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, featured_image, published_at, created_at, category")
        .eq("is_published", true)
        .order("published_at", { ascending: false, nullsFirst: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Failed to load blog posts:", error);
      } else if (data) {
        setPosts(data as BlogPost[]);
        setFeatured((data[0] as BlogPost) || null);
      }
      setLoading(false);
    };

    fetchPosts();

    const channel = supabase
      .channel("blog_posts_latest_thinking")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "blog_posts" },
        () => fetchPosts()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          label="What We Think"
          title="Insights that shape the future"
          subtitle="Perspectives, research, and industry thinking from CAP360 - on talent, leadership, HR transformation, and the future of work."
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
                  src={featured?.featured_image || card1}
                  alt={featured?.title || "Featured Research"}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block">Featured Insight</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {featured?.title || "The Future-Ready Workforce: What Enterprises Must Build Today"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {featured?.excerpt ||
                    "The organizations winning tomorrow are building capability now - not reacting to skill gaps after they appear. From smarter hiring to structured succession, the future-ready enterprise is one that treats workforce development as a continuous, integrated system rather than a one-time programme."}
                </p>
                <motion.button
                  type="button"
                  onClick={() => featured && navigate(`/blog/${featured.slug}`)}
                  className="cta-link text-lg"
                  whileHover={{ x: 5 }}
                >
                  Read the article
                  <ChevronRight className="w-5 h-5 text-cap-orange" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Latest Thinking — dynamic from blog_posts */}
        <section className="section-dark py-24" ref={articlesRef}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={articlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Latest Thinking
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={articlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Industry news, blogs, and CAP360 perspectives — coming regularly. Stay ahead of the curve.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0 }}
              animate={articlesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {FILTERS.map((f) => (
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

            {loading ? (
              <div className="text-center py-16 text-muted-foreground">Loading latest insights…</div>
            ) : (() => {
              const filtered = activeFilter === "All"
                ? posts
                : posts.filter((p) => (p.category || "").toLowerCase() === activeFilter.toLowerCase());

              if (filtered.length === 0) {
                return (
                  <div className="text-center py-16 text-muted-foreground">
                    {posts.length === 0
                      ? "No published articles yet. Check back soon!"
                      : `No articles in "${activeFilter}" yet.`}
                  </div>
                );
              }

              return (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFilter}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {filtered.map((post, i) => (
                      <motion.button
                        key={post.id}
                        type="button"
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="group text-left bg-card border border-border/30 overflow-hidden hover:border-cap-blue/40 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 * i }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="overflow-hidden h-56">
                          <img
                            src={post.featured_image || fallbackImages[i % fallbackImages.length]}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6">
                          <span className="text-xs font-bold tracking-widest text-cap-blue uppercase mb-3 block">
                            {(post.category || "CAP360 Perspective").toUpperCase()}
                          </span>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-cap-blue transition-colors leading-snug">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                          <span className="cta-link text-sm">
                            Read more
                            <ChevronRight className="w-4 h-4 text-cap-orange" />
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              );
            })()}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhatWeThink;
