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
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <Button variant="ghost" size="sm" className="mb-8" onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
            {post.excerpt && <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>}
            {post.featured_image && (
              <img src={post.featured_image} alt={post.title} className="w-full rounded-xl mb-10" />
            )}
            {post.content && (
              <div className="prose prose-invert prose-lg max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_a]:text-cap-blue [&_blockquote]:border-l-cap-orange" dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
