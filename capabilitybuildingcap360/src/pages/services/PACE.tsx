import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import { motion } from "framer-motion";
import {  Rocket, Target, TrendingUp, UserCheck,ChevronRight,CheckCircle2,Zap, Brain, Linkedin, MessageSquare, Award, Search, Users,BookOpen, Download,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import heroImg from "@/assets/service-hero-pace.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";
import GSA from "@/assets/Head-gsa.png";
import creativecapability from "@/assets/creativecapability.png";
import digitalcapability from "@/assets/digital capability.png";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";


const serviceSubNav = [
  { label: "What We Do", path: "#services" },
  { label: "Why Choose Cap360", path: "#trending" },
  { label: "How We Work", path: "#howWeWork" },
  { label: "Leader", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const mosaicImages = [creativecapability, digitalcapability];

const subServices = [
     {
    icon: Rocket,
    title: "We Apply on Your Behalf",
    title2: "Your Candidacy Stays Active - Even While You Work",
    description:
      "Our team applies to curated, relevant roles on your behalf every single day - so your job search runs consistently and at scale, without you lifting a finger.",
    path: "/what-we-do/services/pace/career-transition",
  },
  
  {
    icon: Users,
    title: "HR & Recruiter Mapping",
    title2: "Direct Outreach to the People Who Actually Hire",
    description:
      "We identify and reach out to HR heads, talent acquisition leads, and hiring managers at target companies - putting your profile directly in front of decision-makers, not just portals.",
    path: "/what-we-do/services/pace/career-path-architecture",
  },

 {
  icon: Search,
  title: "Job Search Strategy & Targeting",
  title2: "Align Your Skills With the Roles That Matter Most",
  description:
    "Structured job search strategy covering career goal alignment, industry and role mapping, smart application techniques, job tracking tools, company targeting, and referral strategies to maximize opportunities.",
  path: "/what-we-do/services/pace/job-search-strategy",
},
{
  icon: Linkedin,
  title: "LinkedIn Optimization",
  title2: "Transform Your Profile Into a Powerful Career Tool",
  description:
    "End-to-end LinkedIn optimization including profile makeover, keyword strategy, headline creation, content planning, network expansion, and engagement frameworks to improve visibility and opportunities.",
  path: "/what-we-do/services/pace/linkedin-optimization",
},
{
  icon: MessageSquare,
  title: "Interview Preparation",
  title2: "Master the Art of Interviewing With Confidence",
  description:
    "Comprehensive interview preparation including mock sessions, industry-specific questions, STAR and CARL method training, salary negotiation practice, and follow-up strategies for success.",
  path: "/what-we-do/services/pace/interview-preparation",
},
 {
  icon: BookOpen,
  title: "Skills & Course Recommendations",
  title2: "Close the Gaps That Are Costing You Interviews",
  description:
    "We analyse your profile as per market requirements and recommend the most relevant courses and certifications that strengthen your profile - and also make you future ready for the evolving job market.",
  path: "/what-we-do/services/pace/professional-coaching",
},


];

const trendingInsights = [
  {
    category: "RESEARCH REPORT",
    title: "Career Architecture in the Age of AI",
    description:
      "How leading organizations are reimagining career pathways to attract and retain top talent in the AI era.",
  },
  {
    category: "PERSPECTIVE",
    title: "The ROI of Executive Coaching",
    description:
      "Why organizations investing in structured coaching programmes see measurable returns across every leadership tier.",
  },
  {
    category: "BLOG",
    title: "Succession Planning Beyond the C-Suite",
    description:
      "Building deep succession pipelines that extend well beyond senior leadership for true organizational resilience.",
  },
  {
    category: "RESEARCH REPORT",
    title: "Internal Mobility: The Untapped Talent Strategy",
    description:
      "How internal career mobility is becoming the most powerful retention and engagement lever available to HR.",
  },
  {
    category: "PERSPECTIVE",
    title: "Individual Development Planning at Scale",
    description:
      "Deploying personalised IDP frameworks across large workforces without losing depth or impact.",
  },
];

const partners = [
  {
    name: "SAP SuccessFactors",
    description:
      "Comprehensive career development solutions powered by SAP's enterprise platform.",
  },
  {
    name: "Workday",
    description:
      "Cloud-based talent management delivering adaptive career planning and workforce insights.",
  },
  {
    name: "Oracle HCM",
    description:
      "Enterprise talent solutions that unify career development and succession planning.",
  },
  {
    name: "Microsoft Viva",
    description:
      "Employee experience platform bringing together career growth and skills development.",
  },
];

const whyChooseUs = [
  {
    icon: TrendingUp,
    title: "We Do the Work - You Stay Focused",
    desc: "No portals to manage. No applications to track. Our team runs your entire job search daily while you continue excelling in your current role. You stay focused; we stay relentless.",
  },
  {
    icon: Brain,
    title: "HR Mapping, Not Just Job Boards",
    desc: "Go beyond listings. Our team directly identifies and reaches out to HR heads, talent acquisition leads, and hiring managers - accessing opportunities before they are even posted.",
  },
  {
    icon: Target,
    title: "Built for Senior Professionals",
    desc: "Understand how hiring works at senior levels - longer cycles, referral-driven decisions, and relationship-first processes. Our approach is calibrated for leaders, not entry-level candidates.",
  },
  {
    icon: Zap,
    title: "Founded with Purpose (2018)",
    desc: "CAP360 was founded in 2018 with a single mission: help senior professionals achieve their full potential through structured, personalised, and strategically executed career guidance.",
  },
  {
    icon: Users,
    title: "Research based outcomes",
    desc: "Conduct in-depth research across both international and Indian markets to identify the most relevant opportunities aligned with your career profile. Our process begins with detailed company mapping-shortlisting organizations that match your experience, industry, and career aspirations.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Impact Across Global Markets",
    desc: "Empowered 50+ senior professionals across 25+ industries - supporting their transition into high-impact roles across India and global markets through stronger visibility, better negotiations, and strategic career positioning.",
  },
];

const targetAudiences = [
  "Mid to Senior Management: Managers, Senior Managers, and AGM/DGM professionals ready to move up or across industries",
  "VP & Director Level: Leaders seeking roles where their experience commands the right compensation and mandate",
  "C-Suite Executives: CFOs, CTOs, COOs, and CMOs navigating a high-stakes, relationship-driven search",
  "Industry Changers: Experienced professionals making a planned, strategic pivot to a new sector or function",
  "Returning Professionals: Senior talent re-entering the market after a sabbatical, relocation, or transition",
];

const phases = [
  {
    step: "01",
    title: "Deep-Dive Consultation",
    desc: "Understand your career history, target roles, preferred industries, compensation expectations, and geography. This forms the complete foundation of your personalised search strategy.",
    icon: Target,
  },
  {
    step: "02",
    title: "Profile Build & Optimisation",
    desc: "Craft or overhaul your resume, LinkedIn profile, and all job portal presences - positioning you precisely for senior roles with the right keywords, narrative, and executive framing.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Active Search & Direct Outreach",
    desc: "We apply to roles on your behalf, map relevant HRs and hiring managers, and initiate targeted outreach - running a consistent, high-volume search that would be impossible to do alone.",
    icon: TrendingUp,
  },
  {
    step: "04",
    title: "Interview & Offer Support",
    desc: "When interview calls come in, we prepare you thoroughly for every round. We also guide salary negotiation so you walk away with the strongest possible offer.",
    icon: CheckCircle2,
  },
];

const PACE = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: servicesRef, isInView: servicesInView } =
    useScrollAnimation(0.1);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: gcRef, isInView: gcInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } =
    useScrollAnimation(0.1);
  const { ref: howWeWorkRef, isInView: howWeWorkInView } =
    useScrollAnimation(0.1);
  const { ref: leadersRef, isInView: leadersInView } = useScrollAnimation(0.1);
  const { ref: phaseRef, isInView: phaseInView } = useScrollAnimation(0.1);
  const navigate = useNavigate();
  const trendingScrollRef = useRef<HTMLDivElement>(null);
  const { ref: whyRef, isInView: whyInView } = useScrollAnimation(0.1);

   const { data: programGuides = [] } = useQuery({
    queryKey: ["pace-program-guides"],
    queryFn: async () => {
      const { data, error } = await supabase.from("downloadable_documents").select("*").eq("service_page", "pace").eq("is_active", true).order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const scrollTrending = (dir: "left" | "right") => {
    if (trendingScrollRef.current) {
      trendingScrollRef.current.scrollBy({
        left: dir === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  type MosaicCell =
    | { type: "card"; item: (typeof subServices)[0]; index: number }
    | { type: "image"; src: string };

  const buildMosaicRows = (): MosaicCell[][] => {
    const rows: MosaicCell[][] = [];
    let cardIdx = 0;
    let imgIdx = 0;
    const PATTERN: Array<["card" | "image", "card" | "image"]> = [
      ["card", "card"],
      ["image", "card"],
      ["card", "image"],
      ["card", "card"],
    ];
    let patternRow = 0;

    while (cardIdx < subServices.length) {
      const [left, right] = PATTERN[patternRow % PATTERN.length];
      const row: MosaicCell[] = [];

      for (const slot of [left, right]) {
        if (slot === "card") {
          if (cardIdx < subServices.length) {
            row.push({
              type: "card",
              item: subServices[cardIdx],
              index: cardIdx,
            });
            cardIdx++;
          }
        } else {
          row.push({
            type: "image",
            src: mosaicImages[imgIdx % mosaicImages.length],
          });
          imgIdx++;
        }
      }

      if (row.length > 0) rows.push(row);
      patternRow++;
    }

    return rows;
  };

  const stats = [
    {
      value: "50+",
      desc: "Senior professionals placed across the global.",
    },
    {
      value: "25+",
      desc: "Industries served - from technology and finance to manufacturing and healthcare.",
    },
    {
      value: "3×",
      desc: "More interview calls generated within the first 60 days.",
    },
    {
      value: "50+",
      desc: "Career programmes delivered pan-India, with measurable placement outcomes.",
    },
  ];

  const mosaicRows = buildMosaicRows();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar
        title="PACE"
        titlePath="/what-we-do/services/pace"
        items={serviceSubNav}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
           <span className="text-sm text-cap-green font-semibold">PACE</span>
          <motion.h1
            className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Alignment & Career Enhancement
          </motion.h1>
          <motion.p
            className="text-[18px] md:text-[20px] text-muted-white leading-[1.6] max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            PACE aligns individual career
            aspirations with industry demand, creating a link between talent and opportunity. We empower professionals to navigate their career journeys with confidence, purpose, and strategic insight-helping them become more
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="/contact#booking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cap-green text-white px-6 py-3 font-semibold hover:bg-cap-green/90 transition-all rounded-md inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                const section = document.getElementById("services");
                if (section) {
                  const yOffset = -80;
                  const y =
                    section.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="border border-white/30 text-white px-8 py-4 font-semibold hover:border-cap-green/50 hover:bg-cap-green/10 transition-all rounded-md"
            >
              Explore Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[26px] md:text-[34px] font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
          >
            PACE now
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
              >
                <div className="w-12 h-1 bg-gradient-to-r from-cap-green to-cap-green mb-6 group-hover:w-16 transition-all duration-300" />
                <span className="text-[44px] md:text-[52px] font-black text-muted-white block mb-2">
                  {stat.value}
                </span>
                <p className="text-[18px] text-muted-white leading-[1.6]">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC OVERVIEW ===== */}
      <section
        id="overview"
        className="py-24 bg-gradient-to-b from-background to-secondary/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={offerInView ? { opacity: 1, y: 0 } : {}}
            ref={offerRef}
          >
            <div className="mb-10">
              <p className="text-lg text-cap-green tracking-wide mb-2 font-bold">
                ABOUT PACE
              </p>
              <h2 className="text-[34px] md:text-[42px] font-bold leading-tight">
                Your Personal Career Team,
                <span className="text-cap-green"> Working Every Day.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-l-2 border-cap-green/40 pl-6">
                <p className="text-[18px] text-muted-white leading-[1.8]">
                  <span className="text-white font-medium">PACE</span>{" "}
                  is a fully managed job search service designed exclusively for{" "}
                  <span className="text-white font-medium">
                    mid to senior level professionals
                  </span>{" "}
                  who are serious about their next move.
                </p>
              </div>

              <div className="border-l-2 border-cap-green/40 pl-6">
                <p className="text-[18px] text-muted-white leading-[1.8]">
                  More than just advice and frameworks, we take ownership of your search. From profile optimisation and portal management to applying on your behalf and mapping HRs directly, PACE operates as your dedicated career team from day one.
                </p>
              </div>
            </div>

            <div className="mt-12 h-[2px] w-16 bg-cap-green" />
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES - MOSAIC GRID ===== */}
      <section id="services" className="py-24" ref={servicesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[34px] md:text-[40px] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          >
            Everything Your Job Search Needs - Done for You
          </motion.h2>
          <p className="text-[18px] text-muted-white mb-14 max-w-2xl">
           Six Integrated Solutions that cover every dimension of a senior-level job search. Choose one or combine all - each is modular yet designed to work powerfully together.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {mosaicRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                  gap: 8,
                }}
              >
                {row.map((cell, colIdx) => {
                  if (cell.type === "image") {
                    return (
                      <div
                        key={`img-${rowIdx}-${colIdx}`}
                        style={{
                          height: "clamp(200px, 30vw, 340px)",
                          overflow: "hidden",
                          background: "#111",
                        }}
                      >
                        <img
                          src={cell.src}
                          alt="service visual"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                    );
                  }

                  const s = cell.item;
                  const accentHex = "#20915C";

                  return (
                    <motion.div
                      key={s.title}
                      className="mosaic-card group"
                      initial={{ opacity: 0, y: 24 }}
                      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.08 * cell.index, duration: 0.4 }}
                      onClick={() => navigate(s.path)}
                      style={{
                        position: "relative",
                        background: "hsl(var(--card))",
                        height: "clamp(260px, 30vw, 340px)",
                        padding: "clamp(28px, 4vw, 60px) clamp(20px, 3vw, 36px) 28px",
                        cursor: "pointer",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "inherit",
                        border: "1px solid hsl(var(--border) / 0.3)",
                      }}
                    >
                      {/* Accent bar */}
                      <div
                        style={{
                          width: 32,
                          height: 3,
                          background: accentHex,
                          marginBottom: 16,
                          flexShrink: 0,
                        }}
                      />

                      {/* Label */}
                      <div
                        style={{
                          fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "hsl(var(--muted-white))",
                          marginBottom: 12,
                          flexShrink: 0,
                        }}
                      >
                        {s.title}
                      </div>

                      {/* Title - fades out on hover */}
                      <div
                        className="mosaic-title"
                        style={{
                          fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                          fontWeight: 700,
                          lineHeight: 1.25,
                          color: "hsl(var(--white))",
                          flex: 1,
                          marginTop: "clamp(16px, 3vw, 35px)",
                        }}
                      >
                        {s.title2}
                      </div>

                      {/* Description - fades in on hover */}
                      <div
                        className="mosaic-desc"
                        style={{
                          fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
                          fontWeight: 400,
                          lineHeight: 1.65,
                          color: "hsl(var(--muted-white))",
                          position: "absolute",
                          top: "clamp(110px, 18vw, 135px)",
                          left: "clamp(20px, 3vw, 36px)",
                          right: "clamp(20px, 3vw, 36px)",
                          bottom: 60,
                          overflow: "hidden",
                          pointerEvents: "none",
                        }}
                      >
                        {s.description}
                      </div>

                      {/* Learn more */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginTop: "auto",
                          paddingTop: 16,
                          flexShrink: 0,
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "hsl(var(--white))",
                          }}
                        >
                          Learn more
                        </span>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            background: accentHex,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <ChevronRight size={18} color="#fff" />
                        </div>
                      </div>

                      {/* Overlay - fades in on hover */}
                      <div
                        className="mosaic-overlay"
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "block",
                          transition: "opacity 300ms ease",
                          background: `linear-gradient(135deg, ${accentHex}18, transparent)`,
                          pointerEvents: "none",
                          zIndex: 0,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Why Cap360 (TAB SECTION) ===== */}
      <section
        id="trending"
        className="py-28 section-navy relative overflow-hidden" ref={trendingRef}
      >
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-cap-green/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-cap-green/10 rounded-full blur-[100px] -z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            ref={whyRef}
            className="mb-20 max-w-3xl"
          >
            <div className="inline-block mb-4">
              <div className="h-[3px] w-16 bg-cap-green rounded-full mb-3" />
              <span className="text-cap-green text-lg tracking-wider uppercase font-bold">
                Why Cap360
              </span>
            </div>
            <h2 className="text-[34px] md:text-[44px] font-bold leading-tight mb-6">
              Why Choose <span className="text-cap-green">Cap360?</span>
            </h2>
            <p className="text-[18px] text-muted-white leading-relaxed">
              Founder-led expertise, a done-for-you model, and a proven track record of placing 50+ senior professionals across India.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group relative rounded-xl p-[1px] bg-gradient-to-br from-cap-green/20 via-transparent to-cap-green/20 hover:from-cap-green/40 transition-all duration-500"
              >
                <div className="h-full w-full bg-background/60 backdrop-blur-xl border border-white/5 rounded-xl p-8 relative overflow-hidden transition-all duration-300 group-hover:bg-background/70 group-hover:shadow-[0_10px_40px_rgba(255,115,0,0.15)]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cap-green/5 to-transparent" />
                  <div className="flex items-start gap-4 mb-5 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cap-green/20 to-cap-green/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition duration-300 shadow-inner">
                      <item.icon className="w-6 h-6 text-cap-green" />
                    </div>
                    <h3 className="text-[17px] font-semibold leading-snug group-hover:text-cap-green transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[18px] text-muted-white leading-[1.7] pl-[4.25rem] relative z-10">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cap-green group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section id="howWeWork" className="py-28 relative" ref={howWeWorkRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phaseInView ? { opacity: 1, y: 0 } : {}}
            ref={phaseRef}
            className="mb-20 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-[34px] md:text-[44px] font-bold mb-6 tracking-tight">
              How We Work With You
            </h2>
            <p className="text-[18px] text-muted-white leading-relaxed">
              Every engagement begins with a deep understanding of who you are and where you want to go. We follow a structured four-step model to deliver real, measurable results.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            initial="hidden"
            animate={phaseInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {phases.map((phase, i) => (
              <motion.div
                key={phase.step}
                className="group relative"
                variants={itemVariants}
              >
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-[80%] h-[2px] bg-gradient-to-r from-cap-green/60 to-transparent" />
                )}

                <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-cap-green/30 to-transparent hover:from-cap-green/60 transition-all duration-500">
                  <div className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-cap-green/10 transition-all duration-500">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cap-green/10 text-cap-green font-bold text-lg mb-4 group-hover:scale-110 transition">
                          {phase.step}
                        </div>
                        <h3 className="text-[18px] font-semibold group-hover:text-cap-green transition-colors">
                          {phase.title}
                        </h3>
                      </div>
                      <div className="p-3 rounded-xl bg-cap-green/10 group-hover:bg-cap-green/20 transition">
                        <phase.icon className="w-8 h-8 text-cap-green group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    <p className="text-[17px] text-muted-white leading-relaxed">
                      {phase.desc}
                    </p>

                    <div className="mt-6 h-[2px] w-0 bg-cap-green group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-32 section-navy relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky top-18 h-fit">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[38px] md:text-[48px] font-bold leading-tight mb-6"
            >
              Who We Serve
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-white text-[17px] leading-relaxed mb-10"
            >
              PACE is built for senior professionals who are serious about their next move - and who want experts handling the execution while they focus on what they do best.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-cap-green/20 to-transparent border border-cap-green/30 backdrop-blur-md"
            >
              <p className="text-[17px] text-white font-medium">
                We don't just guide careers - we run your search, manage your presence, and put your profile in front of the people who hire.
              </p>
            </motion.div>
          </div>

          <div className="relative border-l border-border/30 pl-8 space-y-10">
            {targetAudiences.map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[38px] top-2 w-4 h-4 rounded-full bg-cap-green shadow-lg shadow-cap-green/40 group-hover:scale-125 transition" />
                <div className="p-2 rounded-xl bg-card/50 border border-border/20 hover:border-cap-green/40 transition-all duration-300 group-hover:-translate-y-1">
                  <p className="text-[18px] text-muted-white group-hover:text-white transition">
                    {audience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[24px] font-semibold mb-10"
          >
            Industries We Power
          </motion.h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Financial Services",
              "Technology",
              "Manufacturing",
              "Retail",
              "Healthcare",
              "Telecom",
              "Energy",
              "Hospitality",
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 rounded-full bg-card/40 border border-border/20 text-[18px] text-muted-white hover:border-cap-green/50 hover:text-white transition cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cap-green/10 blur-[140px] rounded-full pointer-events-none" />
      </section>

      {/* ===== MEET OUR LEADER ===== */}
      <section
        id="leaders"
        className="py-24 section-navy relative overflow-hidden" ref={leadersRef}
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cap-green/5 rounded-full blur-3xl -z-0" />
        <div className="w-full px-6 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            ref={leadersRef}
            className="mb-16"
          >
            <h2 className="text-[34px] md:text-[42px] font-bold mb-2">
              Meet Our Leader
            </h2>
            <p className="text-[18px] text-muted-white">
              50+ senior professionals placed across 25+ industries | Executive Coach & Career Strategist | Leadership Development Specialist
            </p>
          </motion.div>
          <motion.div
            className="max-w-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-full max-w-sm mx-auto aspect-square rounded-xl overflow-hidden border border-border/40">
                  <img
                    src={GSA}
                    alt="Gurpriit Singh Anand"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-[28px] font-bold mb-2">
                  Gurpriit Singh Anand
                </h3>
                <p className="text-cap-green font-semibold text-[14px] mb-6 uppercase tracking-wider">
                  CEO & Founder - CAP360
                </p>
                <div className="space-y-4 mb-8">
                  <p className="text-[17px] text-muted-white leading-[1.8]">
                    Founder and Career Coach at CAP360, dedicated to empowering senior professionals to unlock their potential and land roles that truly match their calibre. With deep expertise in executive coaching, strategic career planning, and leadership development, Gurpriit partners with clients - from rising managers to C-suite leaders - to navigate career transitions with confidence and purpose.
                  </p>
                  <p className="text-[17px] text-muted-white leading-[1.8]">
                    Having experienced corporate career challenges firsthand, he built PACE to give senior professionals the dedicated support, strategic execution, and expert guidance that most job searches lack. To date, CAP360 has helped over 50+ professionals across 25+ industries secure more interviews, negotiate stronger packages, and build fulfilling careers - with personalised attention at every step.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "Executive Coaching",
                      sub: "Partnering with leaders from rising managers to C-suite executives",
                    },
                    {
                      title: "Career Transitions",
                      sub: "Guiding senior professionals through high-confidence career moves",
                    },
                    {
                      title: "Leadership Development",
                      sub: "Strengthening leadership presence and long-term growth capability",
                    },
                    {
                      title: "HR & Recruiter Mapping",
                      sub: "Connecting clients directly with the people who make hiring decisions",
                    },
                    {
                      title: "Professional Branding",
                      sub: "Building compelling profiles that open the right doors at senior level",
                    },
                    {
                      title: "Strategic Career Planning",
                      sub: "Designing tailored roadmaps aligned to each client's ambitions",
                    },
                  ].map((cred) => (
                    <div key={cred.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cap-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[14px]">
                          {cred.title}
                        </p>
                        <p className="text-[15px] text-muted-white">
                          {cred.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact#booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cap-green text-background px-6 py-3 font-semibold hover:bg-cap-green/90 transition-all rounded-md inline-flex items-center gap-2 text-white"
                >
                  Schedule with Gurpriit Singh Anand
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-r from-background via-background to-secondary overflow-hidden py-20">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
            <circle cx="650" cy="150" r="120" stroke="currentColor" />
            <circle cx="750" cy="100" r="200" stroke="currentColor" />
            <path
              d="M500 400 C600 300, 700 500, 800 400"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-cap-green font-semibold text-[14px] tracking-wider uppercase">
                Ready to Transform?
              </span>
              <h2 className="text-[40px] md:text-[54px] font-black leading-[1.1] mt-4 mb-6">
                Let Us Run Your Search While You Focus on What You Do Best.
              </h2>
              <p className="text-[18px] text-muted-white mb-8 max-w-xl">
                Book a free 30-minute consultation with Gurpriit Singh Anand to understand exactly how PACE will work for your career goals - and what results you can expect.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cap-green text-white px-8 py-4 font-semibold hover:bg-cap-green/90 transition-all hover:shadow-lg rounded-md inline-flex items-center gap-2"
              >
                Schedule a Free Consultation <ChevronRight className="w-4 h-4" />
              </a>
             {programGuides.length > 0 && (
              <a href={programGuides[0].file_url} target="_blank" rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 font-semibold hover:border-cap-green/50 hover:bg-cap-green/5 transition-all rounded-md"
                >
                  <Download className="w-5 h-5" /> Download Program Guide
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PACE;