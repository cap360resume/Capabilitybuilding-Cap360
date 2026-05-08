import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index.tsx"));
const JobsList = lazy(() => import("./pages/admin/JobsList.tsx"));
const JobEditor = lazy(() => import("./pages/admin/JobEditor.tsx"));
const JobApplications = lazy(() => import("./pages/admin/JobApplications.tsx"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo.tsx"));
const WhatWeThink = lazy(() => import("./pages/WhatWeThink.tsx"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre.tsx"));
const CareersPage = lazy(() => import("./pages/Careers.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const ASER = lazy(() => import("./pages/services/ASER.tsx"));
const HRCAMS = lazy(() => import("./pages/services/HRCAMS.tsx"));
const TCB = lazy(() => import("./pages/services/TCB.tsx"));
const PACE = lazy(() => import("./pages/services/PACE.tsx"));
const PerformanceManagement = lazy(() => import("./pages/services/hrcams/PerformanceManagement.tsx"));
const TotalRewards = lazy(() => import("./pages/services/hrcams/TotalRewards.tsx"));
const LabourLaw = lazy(() => import("./pages/services/hrcams/LabourLaw.tsx"));
const GenAIHR = lazy(() => import("./pages/services/hrcams/GenAIHR.tsx"));
const OrgDesign = lazy(() => import("./pages/services/hrcams/OrgDesign.tsx"));
const ManagedHR = lazy(() => import("./pages/services/hrcams/ManagedHR.tsx"));
const LeadershipDevelopment = lazy(() => import("./pages/services/tcb/LeadershipDevelopment.tsx"));
const DigitalUpskilling = lazy(() => import("./pages/services/tcb/DigitalUpskilling.tsx"));
const TeamEffectiveness = lazy(() => import("./pages/services/tcb/TeamEffectiveness.tsx"));
const InnovationDesignThinking = lazy(() => import("./pages/services/tcb/InnovationDesignThinking.tsx"));
const LearningExperienceDesign = lazy(() => import("./pages/services/tcb/LearningExperienceDesign.tsx"));
const CertificationCompliance = lazy(() => import("./pages/services/tcb/CertificationCompliance.tsx"));
const CompetencyAssessments = lazy(() => import("./pages/services/aser/CompetencyAssessments.tsx"));
const AssessmentCentres = lazy(() => import("./pages/services/aser/AssessmentCentres.tsx"));
const PsychometricTesting = lazy(() => import("./pages/services/aser/PsychometricTesting.tsx"));
const TalentAnalytics = lazy(() => import("./pages/services/aser/TalentAnalytics.tsx"));
const CareerPathArchitecture = lazy(() => import("./pages/services/pace/RecruiterMapping.tsx"));
const CourseRecommendations = lazy(() => import("./pages/services/pace/CourseRecommendations.tsx"));
const JobSearchStrategy = lazy(() => import("./pages/services/pace/JobSearchStrategy.tsx"));
const LinkedInOptimization = lazy(() => import("./pages/services/pace/LinkedInOptimization.tsx"));
const CareerTransition = lazy(() => import("./pages/services/pace/ApplyOnYourBehalf.tsx"));
const InterviewPreparation = lazy(() => import("./pages/services/pace/InterviewPreparation.tsx"));
const OurCompany = lazy(() => import("./pages/who-we-are/OurCompany.tsx"));
const OurValues = lazy(() => import("./pages/who-we-are/OurValues.tsx"));
const OfficeLocations = lazy(() => import("./pages/who-we-are/OfficeLocations.tsx"));
const SearchResults = lazy(() => import("./pages/SearchResults"));

// Admin pages
const AdminLogin = lazy(() => import("./pages/admin/Login.tsx"));
const ResetPassword = lazy(() => import("./pages/admin/ResetPassword.tsx"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard.tsx"));
const Contacts = lazy(() => import("./pages/admin/Contacts.tsx"));
const Bookings = lazy(() => import("./pages/admin/Bookings.tsx"));
const Leads = lazy(() => import("./pages/admin/Leads.tsx"));
const BlogList = lazy(() => import("./pages/admin/BlogList.tsx"));
const BlogEditor = lazy(() => import("./pages/admin/BlogEditor.tsx"));
const Settings = lazy(() => import("./pages/admin/Settings.tsx"));
const ManageAdmins = lazy(() => import("./pages/admin/ManageAdmins.tsx"));
const Documents = lazy(() => import("./pages/admin/Documents.tsx"));
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/what-we-think" element={<WhatWeThink />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/search" element={<SearchResults />} />

              {/* Service pages */}
              <Route path="/what-we-do/services/aser" element={<ASER />} />
              <Route path="/what-we-do/services/hrcams" element={<HRCAMS />} />
              <Route path="/what-we-do/services/tcb" element={<TCB />} />
              <Route path="/what-we-do/services/pace" element={<PACE />} />
              {/* HRCAMS sub-pages */}
              <Route path="/what-we-do/services/hrcams/performance-management" element={<PerformanceManagement />} />
              <Route path="/what-we-do/services/hrcams/total-rewards" element={<TotalRewards />} />
              <Route path="/what-we-do/services/hrcams/labour-law" element={<LabourLaw />} />
              <Route path="/what-we-do/services/hrcams/gen-ai-hr" element={<GenAIHR />} />
              <Route path="/what-we-do/services/hrcams/org-design" element={<OrgDesign />} />
              <Route path="/what-we-do/services/hrcams/managed-hr" element={<ManagedHR />} />
              {/* TCB sub-pages */}
              <Route path="/what-we-do/services/tcb/leadership-development" element={<LeadershipDevelopment />} />
              <Route path="/what-we-do/services/tcb/digital-upskilling" element={<DigitalUpskilling />} />
              <Route path="/what-we-do/services/tcb/team-effectiveness" element={<TeamEffectiveness />} />
              <Route path="/what-we-do/services/tcb/innovation-design-thinking" element={<InnovationDesignThinking />} />
              <Route path="/what-we-do/services/tcb/learning-experience-design" element={<LearningExperienceDesign />} />
              <Route path="/what-we-do/services/tcb/certification-compliance" element={<CertificationCompliance />} />
              {/* ASER sub-pages */}
              <Route path="/what-we-do/services/aser/competency-assessments" element={<CompetencyAssessments />} />
              <Route path="/what-we-do/services/aser/assessment-centres" element={<AssessmentCentres />} />
              <Route path="/what-we-do/services/aser/psychometric-testing" element={<PsychometricTesting />} />
              <Route path="/what-we-do/services/aser/talent-analytics" element={<TalentAnalytics />} />
              {/* PACE sub-pages */}
              <Route path="/what-we-do/services/pace/career-path-architecture" element={<CareerPathArchitecture />} />
              <Route path="/what-we-do/services/pace/professional-coaching" element={<CourseRecommendations />} />
              <Route path="/what-we-do/services/pace/job-search-strategy" element={<JobSearchStrategy />} />
              <Route path="/what-we-do/services/pace/linkedIn-optimization" element={<LinkedInOptimization />} />
              <Route path="/what-we-do/services/pace/career-transition" element={<CareerTransition />} />
              <Route path="/what-we-do/services/pace/interview-preparation" element={<InterviewPreparation />} />
              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/reset-password" element={<ResetPassword />} />
              <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/admin/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
              <Route path="/admin/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
              <Route path="/admin/leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
              <Route path="/admin/blog" element={<ProtectedRoute><BlogList /></ProtectedRoute>} />
              <Route path="/admin/blog/new" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
              <Route path="/admin/blog/edit/:id" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
              <Route path="/admin/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
              <Route path="/admin/manage-admins" element={<ProtectedRoute><ManageAdmins /></ProtectedRoute>} />
              <Route path="/admin/jobs" element={<ProtectedRoute><JobsList /></ProtectedRoute>} />
              <Route path="/admin/jobs/new" element={<ProtectedRoute><JobEditor /></ProtectedRoute>} />
              <Route path="/admin/jobs/edit/:id" element={<ProtectedRoute><JobEditor /></ProtectedRoute>} />
              <Route path="/admin/applications" element={<ProtectedRoute><JobApplications /></ProtectedRoute>} />
              <Route path="/admin/documents" element={<ProtectedRoute><Documents /></ProtectedRoute>} />

              {/* Who We Are sub-pages */}
              <Route path="/who-we-are/our-company" element={<OurCompany />} />
              <Route path="/who-we-are/our-values" element={<OurValues />} />
              <Route path="/who-we-are/office-locations" element={<OfficeLocations />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;