import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/admin/AdminLayout";
import TipTapEditor from "@/components/admin/TipTapEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, ImageIcon } from "lucide-react";

const BlogEditor = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      supabase.from("blog_posts").select("*").eq("id", id).single().then(({ data }) => {
        if (data) {
          const d = data as any;
          setTitle(d.title); setSlug(d.slug); setContent(d.content || "");
          setExcerpt(d.excerpt || ""); setFeaturedImage(d.featured_image || "");
          setMetaTitle(d.meta_title || ""); setMetaDesc(d.meta_description || "");
          setIsPublished(d.is_published);
        }
      });
    }
  }, [id, isEditing]);

  const generateSlug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing || slug === generateSlug(title)) setSlug(generateSlug(val));
  };

  const uploadFeaturedImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const ext = file.name.split(".").pop();
      const path = `featured/${Date.now()}.${ext}`;
      const { data, error } = await supabase.storage.from("blog-images").upload(path, file);
      if (error) { toast({ title: "Upload failed", description: error.message, variant: "destructive" }); return; }
      const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(data.path);
      setFeaturedImage(urlData.publicUrl);
    };
    input.click();
  };

  const handleSave = async () => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: "Error", description: "Title and slug are required", variant: "destructive" });
      return;
    }
    setLoading(true);
    const postData: any = {
      title, slug, content, excerpt, featured_image: featuredImage || null,
      meta_title: metaTitle || null, meta_description: metaDesc || null,
      is_published: isPublished,
      published_at: isPublished ? new Date().toISOString() : null,
      author_id: user?.id,
    };

    if (isEditing) {
      const { error } = await supabase.from("blog_posts").update(postData).eq("id", id);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); }
      else { toast({ title: "Saved", description: "Blog post updated" }); }
    } else {
      const { error } = await supabase.from("blog_posts").insert(postData);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); }
      else { toast({ title: "Created", description: "Blog post created" }); navigate("/admin/blog"); }
    }
    setLoading(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/admin/blog")}><ArrowLeft className="w-4 h-4" /></Button>
            <h1 className="text-2xl font-bold text-foreground">{isEditing ? "Edit Post" : "New Post"}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch checked={isPublished} onCheckedChange={setIsPublished} />
              <Label className="text-sm">{isPublished ? "Published" : "Draft"}</Label>
            </div>
            <Button onClick={handleSave} disabled={loading}><Save className="w-4 h-4 mr-2" /> {loading ? "Saving..." : "Save"}</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Enter post title" className="text-lg" />
            </div>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="post-url-slug" />
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <TipTapEditor content={content} onChange={setContent} />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader><CardTitle className="text-sm">Featured Image</CardTitle></CardHeader>
              <CardContent>
                {featuredImage ? (
                  <div className="space-y-2">
                    <img src={featuredImage} alt="Featured" className="w-full rounded-lg" />
                    <Button variant="outline" size="sm" className="w-full" onClick={uploadFeaturedImage}>Change Image</Button>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full" onClick={uploadFeaturedImage}><ImageIcon className="w-4 h-4 mr-2" /> Upload Image</Button>
                )}
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader><CardTitle className="text-sm">Excerpt</CardTitle></CardHeader>
              <CardContent>
                <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Brief summary..." rows={3} />
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader><CardTitle className="text-sm">SEO</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label className="text-xs">Meta Title</Label>
                  <Input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="SEO title" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Meta Description</Label>
                  <Textarea value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)} placeholder="SEO description" rows={2} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader><CardTitle className="text-sm">Tags</CardTitle></CardHeader>
              <CardContent>
                <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="tag1, tag2, tag3" />
                <p className="text-xs text-muted-foreground mt-1">Comma-separated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BlogEditor;
