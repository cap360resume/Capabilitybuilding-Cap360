import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Insights & <span className="text-cap-orange">Perspectives</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-muted-foreground max-w-2xl">
            Expert insights on HR consulting, talent management, and organizational excellence.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center py-16 text-muted-foreground">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">No posts yet. Check back soon!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    {post.featured_image ? (
                      <img src={post.featured_image} alt={post.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-52 bg-secondary flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.published_at || post.created_at).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-cap-orange transition-colors mb-2">{post.title}</h2>
                  {post.excerpt && <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>}
                  <div className="flex items-center gap-1 mt-3 text-sm text-cap-blue group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
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
