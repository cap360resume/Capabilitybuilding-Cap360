import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, featured_image, published_at, created_at")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .then(({ data }) => {
        setPosts((data as BlogPost[]) || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cap-blue/10 via-white to-cap-orange/10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cap-orange/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cap-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm ring-1 ring-cap-blue/20"
          >
            <Sparkles className="w-4 h-4 text-cap-orange" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cap-blue">
              CAP360 Blog
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]"
          >
            <span className="bg-gradient-to-r from-cap-blue via-cap-orange to-cap-red bg-clip-text text-transparent">
              Insights
            </span>{" "}
            <span className="text-neutral-900">&</span>{" "}
            <span className="bg-gradient-to-r from-cap-green via-cap-blue to-cap-dark-blue bg-clip-text text-transparent">
              Perspectives
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1.5 w-32 bg-gradient-to-r from-cap-blue via-cap-orange to-cap-red rounded-full mb-8 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed"
          >
            Expert insights on HR consulting, talent management, and
            organizational excellence.
          </motion.p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center py-16 text-neutral-500">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 text-neutral-500">
              No posts yet. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden ring-1 ring-neutral-200 hover:ring-cap-blue/40 hover:shadow-2xl hover:shadow-cap-blue/10 transition-all duration-300"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="overflow-hidden relative">
                    {post.featured_image ? (
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-52 bg-gradient-to-br from-cap-blue/10 via-cap-orange/10 to-cap-red/10 flex items-center justify-center">
                        <Sparkles className="w-10 h-10 text-cap-orange/60" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-cap-blue">
                      Insight
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                      <Calendar className="w-3 h-3 text-cap-orange" />
                      <span className="font-medium">
                        {new Date(
                          post.published_at || post.created_at
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-neutral-900 mb-2 leading-snug group-hover:bg-gradient-to-r group-hover:from-cap-blue group-hover:to-cap-orange group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-neutral-600 text-sm line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-cap-blue group-hover:gap-3 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4 text-cap-orange" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
