import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContentGrid from "@/components/ContentGrid";
import StatsBanner from "@/components/StatsBanner";
import QuoteSection from "@/components/QuoteSection";
import heroImg from "@/assets/what-we-do-hero.jpg";
import card1 from "@/assets/card-1.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

const services = [
  { title: "Assessment Services (ASER)", description: "Scientifically validated assessment solutions that identify, evaluate, and develop talent at every level of your organization.", link: "Learn more", image: card1, path: "/what-we-do/services/aser" },
  { title: "HR Consulting & Advisory (HRCAMS)", description: "Transform your HR function into a strategic business partner with our six-pillar consulting framework.", link: "Learn more", image: card3, path: "/what-we-do/services/hrcams" },
  { title: "Training & Capability Building (TCB)", description: "Build future-ready capabilities at scale through immersive, outcome-driven learning experiences.", link: "Learn more", image: card4, path: "/what-we-do/services/tcb" },
  { title: "Professional Alignment & Career Enhancement (PACE)", description: "Align individual career aspirations with organizational goals for an engaged, purpose-driven workforce.", link: "Learn more", image: card1, path: "/what-we-do/services/pace" },
];

const industries = [
  { title: "Banking & Capital Markets", description: "Drive growth with personalized customer experiences and modernized core operations." },
  { title: "Communications & Media", description: "Transform content strategies and monetize platforms with next-gen digital solutions." },
  { title: "Health & Public Service", description: "Improve citizen outcomes and operational efficiency through digital innovation." },
  { title: "High Tech", description: "Accelerate innovation cycles and create new revenue streams with cutting-edge technology." },
  { title: "Insurance", description: "Modernize underwriting, claims and distribution with AI-powered platforms." },
  { title: "Retail & Consumer Goods", description: "Create seamless omnichannel experiences and agile supply chains." },
];

const platforms = [
  { title: "Cloud", description: "Migrate, modernize and manage applications across multi-cloud environments.", link: "Explore" },
  { title: "Data & AI", description: "Unlock the full value of data with advanced analytics and responsible AI solutions.", link: "Explore" },
  { title: "Security", description: "Build cyber resilience with end-to-end security services and managed detection.", link: "Explore" },
  { title: "Enterprise Platforms", description: "Transform with SAP, Salesforce, Oracle and other leading platforms.", link: "Explore" },
];

const stats = [
  { value: "750K+", label: "Employees worldwide" },
  { value: "120+", label: "Countries served" },
  { value: "9,000+", label: "Clients globally" },
  { value: "$65B+", label: "Revenue in 2025" },
];

const WhatWeDo = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <PageHero
        label="What We Do"
        title="360° value for every stakeholder"
        subtitle="We help organizations across all industries and geographies build their digital core, optimize operations, and accelerate growth."
        image={heroImg}
        ctaText="Explore our services"
      />
      <StatsBanner stats={stats} />
      <ContentGrid sectionLabel="Services" heading="Our services power transformation at scale" cards={services} columns={2} />
      <ContentGrid sectionLabel="Industries" heading="Deep expertise across every major industry" cards={industries} columns={3} variant="navy" />
      <QuoteSection />
      <ContentGrid sectionLabel="Platforms" heading="Technology platforms that drive innovation" cards={platforms} columns={4} />
    </main>
    <Footer />
  </div>
);

export default WhatWeDo;
