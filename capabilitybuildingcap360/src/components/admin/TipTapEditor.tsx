import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Quote, Code, LinkIcon, ImageIcon, Undo, Redo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const TipTapEditor = ({ content, onChange }: TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Start writing your blog post..." }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const ext = file.name.split(".").pop();
      const path = `${Date.now()}.${ext}`;
      const { data, error } = await supabase.storage.from("blog-images").upload(path, file);
      if (error) return;
      const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(data.path);
      editor.chain().focus().setImage({ src: urlData.publicUrl }).run();
    };
    input.click();
  };

  const addLink = () => {
    const url = prompt("Enter URL:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  const ToolBtn = ({ onClick, active, children }: { onClick: () => void; active?: boolean; children: React.ReactNode }) => (
    <Button type="button" size="sm" variant={active ? "default" : "ghost"} className="h-8 w-8 p-0" onClick={onClick}>
      {children}
    </Button>
  );

  return (
    <div className="border border-border/50 rounded-lg overflow-hidden">
      <div className="flex flex-wrap gap-1 p-2 border-b border-border/50 bg-secondary/30">
        <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}><Bold className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")}><Italic className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive("heading", { level: 1 })}><Heading1 className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })}><Heading2 className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")}><List className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")}><ListOrdered className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")}><Quote className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive("codeBlock")}><Code className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={addLink}><LinkIcon className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={addImage}><ImageIcon className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().undo().run()}><Undo className="w-4 h-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().redo().run()}><Redo className="w-4 h-4" /></ToolBtn>
      </div>
      <EditorContent editor={editor} className="prose prose-invert max-w-none p-4 min-h-[300px] [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[300px]" />
    </div>
  );
};

export default TipTapEditor;
