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
  {
    title: "Assessment Services (ASER)",
    description:
      "Scientifically validated assessment solutions that identify, evaluate, and develop talent at every level of your organization.",
    link: "Learn more",
    image: card1,
    path: "/what-we-do/services/aser",
  },
  {
    title: "HR Consulting & Advisory (HRCAMS)",
    description:
      "Transform your HR function into a strategic business partner with our six-pillar consulting framework.",
    link: "Learn more",
    image: card3,
    path: "/what-we-do/services/hrcams",
  },
  {
    title: "Training & Capability Building (TCB)",
    description:
      "Build future-ready capabilities at scale through immersive, outcome-driven learning experiences.",
    link: "Learn more",
    image: card4,
    path: "/what-we-do/services/tcb",
  },
  {
    title: "Professional Alignment & Career Enhancement (PACE)",
    description:
      "Align individual career aspirations with organizational goals for an engaged, purpose-driven workforce.",
    link: "Learn more",
    image: card1,
    path: "/what-we-do/services/pace",
  },
];

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Build high-performance teams and future-ready leaders equipped to navigate regulatory complexity and digital transformation in financial services.",
  },
  {
    title: "Manufacturing & Engineering",
    description:
      "Develop technical talent pipelines and upskill frontline-to-leadership workforces to drive operational excellence and Industry 4.0 readiness.",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    description:
      "Strengthen clinical and administrative capability through targeted assessment, hiring, and learning solutions built for complex healthcare environments.",
  },
  {
    title: "Information Technology & SaaS",
    description:
      "Accelerate talent acquisition and capability building for fast-scaling tech organizations — from engineering roles to product leadership.",
  },
  {
    title: "Retail & Consumer Goods",
    description:
      "Build agile, customer-centric teams with the skills to adapt to evolving market demands, omnichannel growth, and supply chain complexity.",
  },
  {
    title: "Infrastructure & Energy",
    description:
      "Develop workforce capability and succession pipelines for large-scale infrastructure and energy enterprises operating in high-stakes environments.",
  },
];

// Change the section label from "PLATFORMS" to:
"OUR ECOSYSTEM"

// Change the heading from "Technology platforms that drive innovation" to:
"Five pillars. One integrated capability ecosystem."

// Change the platforms array to:
const platforms = [
  {
    title: "HireTek",
    description:
      "Beyond the résumé — our hiring methodology evaluates candidates on competency, culture fit, and long-term potential to reduce mis-hires and improve quality of joins.",
    // link: "Learn More",
  },
  {
    title: "ASER",
    description:
      "Objective, science-backed talent assessments that remove bias from decisions — whether you're selecting campus hires, promoting managers, or benchmarking leadership teams.",
    // link: "Learn More",
  },
  {
    title: "HRCAMS",
    description:
      "We embed as your strategic HR partner — designing org structures, building people policies, driving culture change, and managing HR operations end-to-end.",
    // link: "Learn More",
  },
  {
    title: "TCB",
    description:
      "Tailored capability building programs that upskill teams at scale — from functional training to behavioural workshops — with measurable impact on performance.",
    // link: "Learn More",
  },
  {
    title: "PACE",
    description:
      "Career acceleration for high-potential individuals and leadership cohorts — coaching, mentoring, and structured development journeys that retain and grow top talent.",
    // link: "Learn More",
  },
];

const stats = [
{ value: "30+", label: "Industries Served" },
{ value: "Global", label: "Delivery Presence" },
{ value: "98%", label: "Client Satisfaction" },
{ value: "10+", label: "Years of Experience" }
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
      <ContentGrid
        sectionLabel="Services"
        heading="Our services power transformation at scale"
        cards={services}
        columns={2}
      />
      <ContentGrid
        sectionLabel="Industries"
        heading="Deep expertise across every major industry"
        cards={industries}
        columns={3}
        variant="navy"
      />
      <QuoteSection />
      <ContentGrid
        sectionLabel="OUR ECOSYSTEM"
        heading="Five pillars. One integrated capability ecosystem."
        cards={platforms}
        columns={4}
      />
    </main>
    <Footer />
  </div>
);

export default WhatWeDo;
