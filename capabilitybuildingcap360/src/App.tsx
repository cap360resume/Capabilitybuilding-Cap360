import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index.tsx";
import WhatWeDo from "./pages/WhatWeDo.tsx";
import WhatWeThink from "./pages/WhatWeThink.tsx";
import WhoWeAre from "./pages/WhoWeAre.tsx";
import CareersPage from "./pages/Careers.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";
import ASER from "./pages/services/ASER.tsx";
import HRCAMS from "./pages/services/HRCAMS.tsx";
import TCB from "./pages/services/TCB.tsx";
import PACE from "./pages/services/PACE.tsx";
import PerformanceManagement from "./pages/services/hrcams/PerformanceManagement.tsx";
import TotalRewards from "./pages/services/hrcams/TotalRewards.tsx";
import LabourLaw from "./pages/services/hrcams/LabourLaw.tsx";
import GenAIHR from "./pages/services/hrcams/GenAIHR.tsx";
import OrgDesign from "./pages/services/hrcams/OrgDesign.tsx";
import ManagedHR from "./pages/services/hrcams/ManagedHR.tsx";
import LeadershipDevelopment from "./pages/services/tcb/LeadershipDevelopment.tsx";
import DigitalUpskilling from "./pages/services/tcb/DigitalUpskilling.tsx";
import TeamEffectiveness from "./pages/services/tcb/TeamEffectiveness.tsx";
import InnovationDesignThinking from "./pages/services/tcb/InnovationDesignThinking.tsx";
import LearningExperienceDesign from "./pages/services/tcb/LearningExperienceDesign.tsx";
import CertificationCompliance from "./pages/services/tcb/CertificationCompliance.tsx";
import CompetencyAssessments from "./pages/services/aser/CompetencyAssessments.tsx";
import AssessmentCentres from "./pages/services/aser/AssessmentCentres.tsx";
import PsychometricTesting from "./pages/services/aser/PsychometricTesting.tsx";
import TalentAnalytics from "./pages/services/aser/TalentAnalytics.tsx";
import CareerPathArchitecture from "./pages/services/pace/RecruiterMapping.tsx";
import CourseRecommendations from "./pages/services/pace/CourseRecommendations.tsx";
import JobSearchStrategy from "./pages/services/pace/JobSearchStrategy.tsx";
import LinkedInOptimization from "./pages/services/pace/LinkedInOptimization.tsx";
import CareerTransition from "./pages/services/pace/ApplyOnYourBehalf.tsx";
import InterviewPreparation from "./pages/services/pace/InterviewPreparation.tsx";
import OurCompany from "./pages/who-we-are/OurCompany.tsx";
import OurValues from "./pages/who-we-are/OurValues.tsx";
import OfficeLocations from "./pages/who-we-are/OfficeLocations.tsx";
import SearchResults from "./pages/SearchResults";


// Admin pages
import AdminLogin from "./pages/admin/Login.tsx";
import ResetPassword from "./pages/admin/ResetPassword.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Contacts from "./pages/admin/Contacts.tsx";
import Bookings from "./pages/admin/Bookings.tsx";
import Leads from "./pages/admin/Leads.tsx";
import BlogList from "./pages/admin/BlogList.tsx";
import BlogEditor from "./pages/admin/BlogEditor.tsx";
import Settings from "./pages/admin/Settings.tsx";
import ManageAdmins from "./pages/admin/ManageAdmins.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
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
            {/* Who We Are sub-pages */}
            <Route path="/who-we-are/our-company" element={<OurCompany />} />
            <Route path="/who-we-are/our-values" element={<OurValues />} />
            <Route path="/who-we-are/office-locations" element={<OfficeLocations />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
