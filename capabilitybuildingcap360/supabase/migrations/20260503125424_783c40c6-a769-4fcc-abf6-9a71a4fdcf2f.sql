
-- Create jobs table
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL DEFAULT 'General',
  location TEXT NOT NULL DEFAULT 'Remote',
  type TEXT NOT NULL DEFAULT 'Full-time',
  description TEXT,
  requirements TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  posted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active jobs" ON public.jobs FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage jobs" ON public.jobs FOR ALL TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

-- Create job_applications table
CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE NOT NULL,
  applicant_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  resume_url TEXT,
  cover_letter TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit application" ON public.job_applications FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can view applications" ON public.job_applications FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update applications" ON public.job_applications FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete applications" ON public.job_applications FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

-- Triggers
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON public.jobs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed dummy jobs
INSERT INTO public.jobs (title, slug, category, location, type, description, requirements) VALUES
('Senior HR Consultant', 'senior-hr-consultant', 'Strategy & Consulting', 'Mumbai, India', 'Full-time', 'Lead HR transformation projects for enterprise clients. Drive strategic initiatives across talent management, organizational design, and workforce planning.', 'MBA in HR or related field. 8+ years in HR consulting. Strong client management skills.'),
('Talent Acquisition Specialist', 'talent-acquisition-specialist', 'Talent Acquisition', 'Delhi, India', 'Full-time', 'Design and execute recruitment strategies for high-volume and executive hiring across industries.', '5+ years in talent acquisition. Experience with ATS platforms. Strong stakeholder management.'),
('Learning Experience Designer', 'learning-experience-designer', 'Technology', 'Bangalore, India', 'Full-time', 'Create engaging digital learning experiences using modern instructional design methodologies and LMS platforms.', '3+ years in L&D or instructional design. Proficiency in Articulate, Captivate, or similar tools.'),
('Organizational Development Manager', 'org-development-manager', 'Strategy & Consulting', 'Hyderabad, India', 'Full-time', 'Drive organizational effectiveness through culture transformation, change management, and leadership development programs.', '7+ years in OD consulting. Certification in change management preferred.'),
('Psychometric Assessment Analyst', 'psychometric-assessment-analyst', 'Assessment', 'Remote', 'Contract', 'Administer and interpret psychometric assessments for talent evaluation and leadership development initiatives.', 'Masters in Psychology. Certified in SHL/Hogan/MBTI. 3+ years in assessment.'),
('HR Technology Consultant', 'hr-technology-consultant', 'Technology', 'Pune, India', 'Full-time', 'Implement and optimize HRIS, ATS, and workforce analytics platforms for enterprise clients.', '5+ years with SAP SuccessFactors, Workday, or similar. Strong analytical skills.'),
('Executive Coach', 'executive-coach', 'Leadership', 'Mumbai, India', 'Part-time', 'Provide one-on-one coaching to C-suite and senior leaders on leadership effectiveness and career transitions.', 'ICF PCC or MCC certification. 10+ years executive coaching experience.'),
('Compensation & Benefits Analyst', 'compensation-benefits-analyst', 'Operations', 'Chennai, India', 'Full-time', 'Design competitive compensation structures and benefits programs aligned with market benchmarks.', '4+ years in C&B. Experience with salary surveys and job evaluation methodologies.'),
('Workforce Planning Intern', 'workforce-planning-intern', 'Operations', 'Remote', 'Internship', 'Support workforce analytics projects including headcount modeling, attrition analysis, and talent supply-demand forecasting.', 'Currently pursuing MBA in HR. Strong Excel and data visualization skills.'),
('Leadership Development Facilitator', 'leadership-dev-facilitator', 'Leadership', 'Gurgaon, India', 'Full-time', 'Design and facilitate leadership development workshops and programs for mid to senior-level managers.', '6+ years in L&D facilitation. Expertise in experiential learning methodologies.');
