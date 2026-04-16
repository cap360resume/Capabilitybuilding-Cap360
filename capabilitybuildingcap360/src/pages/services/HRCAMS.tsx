import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Settings,
  Users,
  BarChart3,
  Building2,
  Award,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  Brain,
  MessageSquare,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import heroImg from "@/assets/service-hero-hrcams.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";
import card1 from "@/assets/card-1.jpg";
import LabourLaw from "@/assets/labourlow.webp";
import Performance from "@/assets/Performance.png";

const serviceSubNav = [
  { label: "What to do", path: "#services" },
  { label: "What's trending", path: "#trending" },
  { label: "Partners", path: "#partners" },
  { label: "How we work", path: "#how-we-work" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

// Mosaic image cells — swap with your own assets if needed
const mosaicImages = [Performance, LabourLaw];

const subServices = [
  {
    icon: BarChart3,
    title: "Performance Management & Organisation Effectiveness",
    title2:
      "Strengthening Organisational Capability Through Structured Frameworks",
    description:
      "Design and implement performance frameworks that align individual goals with organizational strategy, driving accountability and continuous improvement.",
    path: "/what-we-do/services/hrcams/performance-management",
  },
  {
    icon: Settings,
    title: "Total Rewards Architecture",
    title2:
      "Aligning Compensation and Benefits with Business Goals and Workforce Expectations",
    description:
      "Build competitive compensation, benefits, and recognition programmes that attract, retain, and motivate top talent across all levels.",
    path: "/what-we-do/services/hrcams/total-rewards",
  },
  {
    icon: Shield,
    title: "Labour Law Compliance & HR Governance",
    title2: "Ensuring Compliance and Effective HR Management",
    description:
      "Ensure full compliance with evolving labour regulations while establishing robust HR governance frameworks and audit-ready processes.",
    path: "/what-we-do/services/hrcams/labour-law",
  },
  {
    icon: Brain,
    title: "Gen AI for HR & Operational Productivity",
    title2: "Leveraging Generative AI for HR Transformation",
    description:
      "Leverage generative AI to automate HR workflows, enhance decision-making, and drive unprecedented operational efficiency.",
    path: "/what-we-do/services/hrcams/gen-ai-hr",
  },
  {
    icon: Building2,
    title: "Organisation Design & Workforce Planning",
    title2: "Building Agile Organizational Structures",
    description:
      "Architect agile organizational structures and workforce strategies that adapt to market dynamics and future business needs.",
    path: "/what-we-do/services/hrcams/org-design",
  },
  {
    icon: Users,
    title: "Managed HR Services (Outsourced HR)",
    title2: "End-to-End Outsourced HR Operations",
    description:
      "End-to-end outsourced HR operations — payroll, compliance, employee lifecycle, and more — so you can focus on core business.",
    path: "/what-we-do/services/hrcams/managed-hr",
  },
];

const trendingInsights = [
  {
    category: "RESEARCH REPORT",
    title: "The Future of Performance Management in the Age of AI",
    description:
      "How leading organizations are reimagining performance frameworks to drive continuous growth.",
  },
  {
    category: "PERSPECTIVE",
    title: "Total Rewards 2026: Beyond Compensation",
    description:
      "Why organizations must rethink total rewards strategies to attract and retain talent.",
  },
  {
    category: "BLOG",
    title: "Labour Law Compliance in a Post-Pandemic World",
    description:
      "Navigating the evolving regulatory landscape and ensuring your HR practices remain audit-ready.",
  },
  {
    category: "RESEARCH REPORT",
    title: "Gen AI for HR: From Hype to Impact",
    description:
      "Real-world use cases where generative AI is transforming HR operations and decision-making.",
  },
  {
    category: "PERSPECTIVE",
    title: "Organisation Design for the Hybrid Workforce",
    description:
      "Building agile organizational structures that support distributed teams and flexible work models.",
  },
];

const partners = [
  {
    name: "SAP SuccessFactors",
    description:
      "Comprehensive HR solutions powered by SAP's enterprise platform.",
  },
  {
    name: "Workday",
    description:
      "Cloud-based HCM platform delivering adaptive planning and workforce insights.",
  },
  {
    name: "Oracle HCM",
    description:
      "Enterprise human capital management solutions that unify HR processes.",
  },
  {
    name: "Microsoft Viva",
    description:
      "Employee experience platform bringing together communications and insights.",
  },
];

const leaders = [
  {
    name: "Dr. Sarah Al-Rashid",
    role: "Lead — HRCAMS, Global",
    initials: "SA",
  },
  { name: "Marcus Chen", role: "Lead — Performance & OD", initials: "MC" },
  {
    name: "Priya Narayanan",
    role: "Lead — Total Rewards & Compliance",
    initials: "PN",
  },
  { name: "James Okonkwo", role: "Lead — Gen AI for HR", initials: "JO" },
];

const gcCapabilities = [
  "24/7 Operations: Round-the-clock support ensuring no request falls through the cracks",
  "Specialized Teams: Subject matter experts in payroll, compliance, benefits, and technology",
  "Scalability: Quickly scale resources up or down based on your needs",
  "Cost Efficiency: Deliver world-class services at a fraction of in-house costs",
  "Technology Integration: Seamless integration with your HRIS, payroll, and benefits platforms",
  "Security & Compliance: Enterprise-grade data protection and regulatory adherence",
];

const targetAudiences = [
  "Large Enterprises: Designing complex, multinational HR operating models",
  "Mid-Market Organizations: Scaling HR functions while maintaining agility",
  "Growth-Stage Companies: Building HR foundations that support rapid scaling",
  "Private Equity Backed Firms: Streamlining HR operations across portfolio companies",
  "Public Sector Organizations: Navigating regulatory complexity while improving efficiency",
];

const stats = [
  { value: "130+", desc: "HR transformations delivered across sectors" },
  { value: "85%", desc: "average productivity improvement for our clients" },
  {
    value: "98%",
    desc: "compliance accuracy achieved across managed HR operations",
  },
  { value: "72%", desc: "reduction in HR process turnaround time" },
];

const HRCAMS = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: servicesRef, isInView: servicesInView } =
    useScrollAnimation(0.1);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: gcRef, isInView: gcInView } = useScrollAnimation(0.1);
  const { ref: howWeWorkRef, isInView: howWeWorkInView } =
    useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } =
    useScrollAnimation(0.1);
  const { ref: partnersRef, isInView: partnersInView } =
    useScrollAnimation(0.1);
  const { ref: leadersRef, isInView: leadersInView } = useScrollAnimation(0.1);
  const { ref: phaseRef, isInView: phaseInView } = useScrollAnimation(0.1);
  const navigate = useNavigate();
  const trendingScrollRef = useRef<HTMLDivElement>(null);

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
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // ── Mosaic grid layout builder ──────────────────────────────────────────────
  // Pattern: [card, card] → [image, card] → [card, image] → [card, card] → repeat
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
      value: "500+",
      desc: "organizations served across MENA, Africa and South Asia",
    },
    {
      value: "40%",
      desc: "average HR cost reduction achieved for managed services clients",
    },
    {
      value: "3x",
      desc: "faster hiring turnaround achieved through optimized talent acquisition strategies",
    },
    {
      value: "Only 13%",
      desc: 'of companies are "extremely confident" they have the right HR digital capabilities for Gen AI.',
    },
  ];

  const phases = [
    {
      step: "01",
      title: "Discovery & Assessment",
      desc: "We conduct a thorough evaluation of your current HR function, technology landscape, and business objectives. This phase identifies pain points, quick wins, and long-term transformation opportunities.",
      icon: Target,
    },
    {
      step: "02",
      title: "Strategy & Planning",
      desc: "Based on our findings, we develop a tailored roadmap that prioritizes initiatives, allocates resources, and defines success metrics. Your team remains engaged throughout this process.",
      icon: Zap,
    },
    {
      step: "03",
      title: "Implementation & Execution",
      desc: "Our teams execute with precision, managing stakeholder communication, change management, and day-to-day operations. We combine your internal knowledge with our external expertise for optimal results.",
      icon: TrendingUp,
    },
    {
      step: "04",
      title: "Optimization & Support",
      desc: "Post-implementation, we monitor performance, gather feedback, and continuously optimize. Our support model ensures you realize full value from your investment.",
      icon: CheckCircle2,
    },
  ];

  const mosaicRows = buildMosaicRows();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar
        title="HRCAMS"
        titlePath="/what-we-do/services/hrcams"
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
          <motion.h1
            className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HR consulting, advisory & managed services
          </motion.h1>
          <motion.p
            className="text-[18px] md:text-[20px] text-muted-White leading-[1.6] max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Transform your HR function from an administrative cost centre into a
            strategic business partner. Unlock workforce excellence through
            technology-led, insight-driven consulting powered by our Global
            Capability Center.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/contact#booking"
              className="bg-cap-yellow text-background px-6 py-3 font-semibold hover:bg-cap-yellow/90 transition-all rounded-md inline-flex items-center gap-2"
            >
              Schedule with Radhakrishnan K V
              <ChevronRight className="w-4 h-4" />
            </Link>

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
              className="border border-White/30 text-White px-8 py-4 font-semibold hover:border-cap-yellow/50 hover:bg-cap-yellow/10 transition-all rounded-md"
            >
              Explore Programs
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[26px] md:text-[32px] font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
          >
            HRCAMS now
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
                <div className="w-12 h-1 bg-gradient-to-r from-cap-yellow to-cap-red mb-6 group-hover:w-16 transition-all duration-300" />
                <span className="text-[44px] md:text-[52px] font-black text-White block mb-2">
                  {stat.value}
                </span>
                <p className="text-[18px] text-muted-White leading-[1.6]">
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
              <p className="text-lg text-cap-yellow tracking-wide mb-2 font-bold">
                ABOUT HRCAMS
              </p>
              <h2 className="text-[32px] md:text-[42px] font-bold leading-tight">
                Transforming HR Into a
                <span className="text-cap-yellow">
                  {" "}
                  Strategic Growth Engine
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-l-2 border-cap-yellow/40 pl-6">
                <p className="text-[18px] text-muted-White leading-[1.8]">
                  <span className="text-White font-medium">HRCAMS</span> (HR
                  Capability & Managed Services) is designed to help
                  organizations move beyond traditional HR operations and build
                  <span className="text-White font-medium">
                    {" "}
                    future-ready, high-impact people functions
                  </span>
                  .
                </p>
              </div>

              <div className="border-l-2 border-cap-yellow/40 pl-6">
                <p className="text-[18px] text-muted-White leading-[1.8]">
                  We go beyond tools—partnering with organizations to assess,
                  design, and transform HR capabilities, powered by a Global
                  Capability Center delivering continuous support, innovation,
                  and measurable business outcomes.
                </p>
              </div>
            </div>

            <div className="mt-12 h-[2px] w-16 bg-cap-yellow" />
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES — ACCENTURE MOSAIC GRID ===== */}
      <section id="services" className="py-24" ref={servicesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header — unchanged */}
          <motion.h2
            className="text-[34px] md:text-[40px] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          >
            Reinvent with HRCAMS
          </motion.h2>
          <p className="text-[18px] text-muted-White mb-14 max-w-2xl">
            Six integrated service lines designed to transform every dimension
            of your HR function. Each service line is modular yet
            interconnected—choose one solution or combine multiple lines for
            comprehensive transformation.
          </p>

          {/* Mosaic grid */}
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
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                }}
              >
                {row.map((cell, colIdx) => {
                  if (cell.type === "image") {
                    return (
                      <div
                        key={`img-${rowIdx}-${colIdx}`}
                        style={{
                          height: 340,
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
                  /* ── Card cell ── */
                  const s = cell.item;
                  const accentColors = [
                    "bg-cap-yellow",
                    "bg-cap-yellow",
                    "bg-cap-green",
                    "bg-cap-red",
                    "bg-cap-dark-yellow",
                    "bg-cap-yellow",
                  ];
                  const accentHex = [
                    "#F6AE01",
                    "#F6AE01",
                    "#F6AE01",
                    "#F6AE01",
                    "#F6AE01",
                    "#F6AE01",
                  ];

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
                        height: 340,
                        padding: "60px 36px 28px",
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
                          background: accentHex[cell.index % accentHex.length],
                          marginBottom: 16,
                          flexShrink: 0,
                        }}
                      />

                      {/* Label */}
                      <div
                        style={{
                          fontSize: "1.15rem",
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

                      {/* Title — fades out on hover */}
                      <div
                        className="mosaic-title"
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          lineHeight: 1.25,
                          color: "hsl(var(--white))",
                          flex: 1,
                          marginTop: 35,
                        }}
                      >
                        {s.title2}
                      </div>

                      {/* Description — fades in on hover */}
                      <div
                        className="mosaic-desc"
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 400,
                          lineHeight: 1.65,
                          color: "hsl(var(--muted-white))",
                          position: "absolute",
                          top: 135,
                          left: 36,
                          right: 36,
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
                            background:
                              accentHex[cell.index % accentHex.length],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <ChevronRight size={18} color="#fff" />
                        </div>
                      </div>

                      {/* Overlay — fades in on hover */}
                      <div
                        className="mosaic-overlay"
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "block", // ← CHANGED from "none"
                          transition: "opacity 300ms ease",
                          background: `linear-gradient(135deg, ${accentHex[cell.index % accentHex.length]}18, transparent)`,
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

      {/* ===== GLOBAL CAPABILITY CENTER ===== */}
      <section
        id="gcc"
        className="py-28 section-navy relative overflow-hidden"
        ref={gcRef}
      >
        {/* Background Glow Effects */}
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-cap-yellow/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-cap-yellow/10 rounded-full blur-[100px] -z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gcInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={gcRef}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-[34px] md:text-[42px] font-semibold leading-tight text-white mb-6 tracking-[-0.5px]">
              Our Competitive Advantage:
              <span className="block text-cap-yellow">
                Global Capability Center
              </span>
            </h2>

            <p className="text-[18px] text-muted-White leading-[1.9]">
              Our Global Capability Center is the backbone of HRCAMS.
              Strategically located to deliver 24/7 support across multiple time
              zones, our center combines cost efficiency with operational
              excellence.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gcCapabilities.map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={gcInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className="bg-card/40 border border-border/20 p-6 rounded-2xl 
                          backdrop-blur-md transition-all duration-300
                          hover:bg-card/60 hover:-translate-y-2 hover:shadow-xl
                          hover:border-cap-yellow/40"
                >
                  {/* Top Glow Line */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cap-yellow/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl bg-cap-yellow/20 flex items-center justify-center mb-5 
                            transition-all duration-300 group-hover:scale-110 group-hover:bg-cap-yellow/30"
                  >
                    <Check className="w-6 h-6 text-cap-yellow" />
                  </div>

                  {/* Text */}
                  <p className="text-[15px] text-muted-White leading-[1.8] tracking-[0.2px]">
                    {capability}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}

      <section id="approach" className="py-28 relative">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phaseInView ? { opacity: 1, y: 0 } : {}}
            ref={phaseRef}
            className="mb-20 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-[34px] md:text-[44px] font-bold mb-6 tracking-tight">
              How We Work With You
            </h2>
            <p className="text-[18px] text-muted-White leading-relaxed">
              Every engagement begins with understanding your unique challenges
              and goals. We follow a structured approach to deliver
              transformation.
            </p>
          </motion.div>

          {/* Cards */}
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
                {/* Connector Line */}
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-[80%] h-[2px] bg-gradient-to-r from-cap-yellow/60 to-transparent" />
                )}

                {/* Card */}
                <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-cap-yellow/30 to-transparent hover:from-cap-yellow/60 transition-all duration-500">
                  <div className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-cap-yellow/10 transition-all duration-500">
                    {/* Top */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Step + Title */}
                      <div>
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cap-yellow/10 text-cap-yellow font-bold text-lg mb-4 group-hover:scale-110 transition">
                          {phase.step}
                        </div>

                        <h3 className="text-[18px] font-semibold group-hover:text-cap-yellow transition-colors">
                          {phase.title}
                        </h3>
                      </div>

                      {/* Icon */}
                      <div className="p-3 rounded-xl bg-cap-yellow/10 group-hover:bg-cap-yellow/20 transition">
                        <phase.icon className="w-6 h-6 text-cap-yellow group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[15px] text-muted-White leading-relaxed">
                      {phase.desc}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="mt-6 h-[2px] w-0 bg-cap-yellow group-hover:w-full transition-all duration-500" />
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
          {/* LEFT SIDE - STICKY CONTENT */}
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
              className="text-muted-White text-[17px] leading-relaxed mb-10"
            >
              From fast-scaling startups to complex enterprises, we partner with
              organizations navigating growth, transformation, and workforce
              complexity.
            </motion.p>

            {/* Highlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-cap-yellow/20 to-transparent border border-cap-yellow/30 backdrop-blur-md"
            >
              <p className="text-[17px] text-White font-medium">
                We don’t just support HR — we enable business scalability
                through structured workforce models.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE - TIMELINE STYLE */}
          <div className="relative border-l border-border/30 pl-8 space-y-10">
            {targetAudiences.map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Dot */}
                <div className="absolute -left-[38px] top-2 w-4 h-4 rounded-full bg-cap-yellow shadow-lg shadow-cap-yellow/40 group-hover:scale-125 transition" />

                {/* Card */}
                <div className="p-2 rounded-xl bg-card/50 border border-border/20 hover:border-cap-yellow/40 transition-all duration-300 group-hover:-translate-y-1">
                  <p className="text-[18px] text-muted-White group-hover:text-White transition">
                    {audience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INDUSTRIES SECTION */}
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
                className="px-5 py-2 rounded-full bg-card/40 border border-border/20 text-[18px] text-muted-White hover:border-cap-yellow/50 hover:text-White transition cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>

        {/* BACKGROUND LIGHT */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cap-yellow/10 blur-[140px] rounded-full pointer-events-none" />
      </section>

      {/* ===== TRENDING ===== */}
      <section id="trending" className="py-24" ref={trendingRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <motion.h2
              className="text-[32px] md:text-[40px] font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={trendingInView ? { opacity: 1, y: 0 } : {}}
            >
              What's trending with HRCAMS?
            </motion.h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollTrending("left")}
                className="p-2 border border-border/40 text-White/60 hover:text-White transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTrending("right")}
                className="p-2 border border-border/40 text-White/60 hover:text-White transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[18px] font-semibold text-White hover:gap-3 transition-all"
            >
              View all work{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 bg-cap-yellow text-background rounded-sm">
                <ChevronRight className="w-4 h-4" />
              </span>
            </a>
          </div>
          <div
            ref={trendingScrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          >
            {trendingInsights.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex-shrink-0 w-[320px] overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                animate={trendingInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={trendingImages[i % trendingImages.length]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-[11px] font-bold text-White/70 uppercase tracking-[0.15em] mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-[20px] font-bold text-White leading-snug mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      {/* <section id="partners" className="py-24 section-navy" ref={partnersRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
          >
            Partners in change
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                className="bg-card/40 border border-border/30 p-8 hover:border-cap-yellow/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center text-[18px] font-black text-primary-White ${i === 0 ? "bg-cap-yellow" : i === 1 ? "bg-cap-yellow" : i === 2 ? "bg-cap-red" : "bg-cap-green"}`}
                >
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-[18px] font-bold mb-3 group-hover:text-cap-yellow transition-colors">
                  {p.name}
                </h3>
                <p className="text-[14px] text-muted-White leading-[1.6] mb-4">
                  {p.description}
                </p>
                <span className="cta-link text-[14px]">
                  Learn more{" "}
                  <ChevronRightclassName="w-3.5 h-3.5 text-cap-yellow" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== AWARDS ===== */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[32px] md:text-[40px] font-bold mb-14">
            Awards and recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title:
                  "Leader in Everest Group HR Outsourcing PEAK Matrix® 2025",
                description:
                  "Recognized for market impact and vision in HR outsourcing services.",
              },
              {
                title:
                  "Best HR Consulting Firm — MENA HR Excellence Awards 2024",
                description:
                  "Awarded for transformative HR consulting solutions.",
              },
              {
                title:
                  "Top 10 HR Technology Solutions Provider — CIO Review 2024",
                description:
                  "Selected for innovative technology-led HR consulting approaches.",
              },
            ].map((a, i) => (
              <motion.div
                key={a.title}
                className="bg-card border border-border/30 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i }}
              >
                <Award className="w-8 h-8 text-cap-yellow mb-4" />
                <h3 className="text-[18px] font-bold mb-3">{a.title}</h3>
                <p className="text-[14px] text-muted-White leading-[1.6]">
                  {a.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== MEET OUR TRAINER ===== */}
      <section
        id="founder"
        className="py-24 section-navy relative overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cap-yellow/5 rounded-full blur-3xl -z-0" />
        <div className="w-full px-6 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            ref={leadersRef}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-2">
              Meet Our Leader
            </h2>
            <p className="text-[18px] text-muted-White">
              37+ years of corporate leadership and strategic HR expertise |
              Chief of Staff-level strategic partner to CEOs | AI-Enabled HR
              Transformation Specialist
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
                    src={card1}
                    alt="Shivinder Mandhotra"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-[28px] font-bold mb-2">
                  Radhakrishnan K V
                </h3>
                <p className="text-cap-yellow font-semibold text-[14px] mb-6 uppercase tracking-wider">
                  Leader
                </p>
                <div className="space-y-6 mb-8">
                  <p className="text-[17px] text-muted-White leading-[1.8]">
                    Spent 37+ years with NIIT Group, most recently as SVP – HR &
                    Special Projects, partnering with leadership across 5,000+
                    employees in India, US, Europe, and China. Drove enterprise
                    transformation, performance management, compensation
                    strategy, and HR technology initiatives.{" "}
                  </p>
                  {/* <p className="text-[17px] text-muted-White leading-[1.8]">
                   He has 37+ years with the NIIT Group, most recently as SVP – HR & Special Projects, operating in a Chief of Staff capacity to the CEO while simultaneously serving as Strategic HR Advisor to NIIT Learning Systems Limited 
                  </p> */}
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "Strategy & Organization",
                      sub: "Translating strategic intent into operating models and decision frameworks",
                    },
                    {
                      title: "AI-Enabled HR Solutions",
                      sub: "Pragmatic AI applications for process simplification and decision-making",
                    },
                    {
                      title: "NIIT",
                      sub: "Professional Diploma in Network Centered Computing ",
                    },
                    { title: "MBA Marketing", sub: " XLRI, Jamshedpur " },
                  ].map((cred) => (
                    <div key={cred.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cap-yellow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[14px]">
                          {cred.title}
                        </p>
                        <p className="text-[15px] text-muted-White">
                          {cred.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
             <Link
              to="/contact#booking"
              className="bg-cap-yellow text-background px-6 py-3 font-semibold hover:bg-cap-yellow/90 transition-all rounded-md inline-flex items-center gap-2"
            >
              Schedule with Radhakrishnan K V
              <ChevronRight className="w-4 h-4" />
            </Link>
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
              <span className="text-cap-yellow font-semibold text-[14px] tracking-wider uppercase">
                Ready to Transform?
              </span>
              <h2 className="text-[40px] md:text-[54px] font-black leading-[1.1] mt-4 mb-6">
                Let's build your winning team
              </h2>
              <p className="text-[18px] text-muted-white mb-8 max-w-xl">
                Join our assessment team and help organizations identify,
                evaluate, and develop their most critical asset — their people.
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
                className="bg-cap-yellow text-white px-8 py-4 font-semibold hover:bg-cap-yellow/90 transition-all hover:shadow-lg rounded-md inline-flex items-center gap-2"
              >
                Start Your Journey
                <ChevronRight className="w-4 h-4" />
              </a>

              <button className="border border-white/20 text-white px-8 py-4 font-semibold hover:border-cap-yellow/50 hover:bg-cap-yellow/5 transition-all rounded-md">
                Download Program Guide
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRCAMS;
