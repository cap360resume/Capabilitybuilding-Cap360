
-- Create downloadable documents table
CREATE TABLE public.downloadable_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Program Guide',
  service_page TEXT NOT NULL DEFAULT 'aser',
  is_active BOOLEAN NOT NULL DEFAULT true,
  download_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.downloadable_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage documents" ON public.downloadable_documents
  FOR ALL TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Anyone can view active documents" ON public.downloadable_documents
  FOR SELECT TO public USING (is_active = true);

CREATE TRIGGER update_documents_updated_at
  BEFORE UPDATE ON public.downloadable_documents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for documents
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true);

CREATE POLICY "Anyone can download documents" ON storage.objects
  FOR SELECT USING (bucket_id = 'documents');

CREATE POLICY "Admins can upload documents" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'documents' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete documents" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'documents' AND has_role(auth.uid(), 'admin'::app_role));
