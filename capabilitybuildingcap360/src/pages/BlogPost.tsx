import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  published_at: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single()
      .then(({ data }) => {
        setPost(data as Post | null);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (post?.meta_title) document.title = post.meta_title;
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center text-neutral-500">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Post Not Found</h1>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      {/* Decorative gradient backdrop */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-cap-blue/5 via-cap-orange/5 to-transparent pointer-events-none" />

        <article className="relative pt-32 pb-24 px-4">
          <div className="container mx-auto max-w-3xl">
            <Button
              variant="ghost"
              size="sm"
              className="mb-8 text-neutral-700 hover:text-cap-blue hover:bg-cap-blue/5"
              onClick={() => navigate("/blog")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
                <Calendar className="w-4 h-4 text-cap-orange" />
                <span className="font-medium">
                  {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span className="uppercase tracking-wider text-xs font-semibold text-cap-blue">
                  CAP360 Insights
                </span>
              </div>

              {/* Highlighted headline with colorful gradient */}
              <h1 className="relative text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                <span className="bg-gradient-to-r from-cap-blue via-cap-orange to-cap-red bg-clip-text text-transparent">
                  {post.title}
                </span>
                <span className="block h-1.5 w-24 mt-5 bg-gradient-to-r from-cap-blue via-cap-orange to-cap-red rounded-full" />
              </h1>

              {post.excerpt && (
                <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-10 font-light">
                  {post.excerpt}
                </p>
              )}

              {post.featured_image && (
                <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-neutral-200">
                  <img src={post.featured_image} alt={post.title} className="w-full" />
                </div>
              )}

              {post.content && (
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight
                    [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-extrabold [&_h1]:mt-12 [&_h1]:mb-4
                    [&_h1]:bg-gradient-to-r [&_h1]:from-cap-blue [&_h1]:to-cap-orange [&_h1]:bg-clip-text [&_h1]:text-transparent
                    [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-cap-dark-blue [&_h2]:mt-10 [&_h2]:mb-3
                    [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-cap-blue [&_h3]:mt-8 [&_h3]:mb-2
                    [&_p]:text-neutral-700 [&_p]:leading-[1.85] [&_p]:text-lg [&_p]:mb-5
                    [&_a]:text-cap-blue [&_a]:font-medium [&_a]:underline [&_a]:decoration-cap-orange/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-cap-orange
                    [&_strong]:text-neutral-900 [&_strong]:font-semibold
                    [&_em]:text-cap-orange [&_em]:font-medium
                    [&_blockquote]:border-l-4 [&_blockquote]:border-cap-orange [&_blockquote]:bg-cap-orange/5 [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:rounded-r-lg [&_blockquote]:text-neutral-800 [&_blockquote]:not-italic
                    [&_ul]:my-5 [&_ul>li]:text-neutral-700 [&_ul>li]:text-lg [&_ul>li]:mb-2 [&_ul>li::marker]:text-cap-orange
                    [&_ol>li]:text-neutral-700 [&_ol>li]:text-lg [&_ol>li]:mb-2 [&_ol>li::marker]:text-cap-blue [&_ol>li::marker]:font-bold
                    [&_code]:bg-cap-blue/10 [&_code]:text-cap-dark-blue [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
                    [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-8"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}
            </motion.div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
