import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import card1 from "@/assets/card-1.jpg";
import {
  BookOpen,
  Award,
  Laptop,
  Users,
  Lightbulb,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  Brain,
  MessageSquare,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import heroImg from "@/assets/heroImg.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";
import ShivinderMandhotra from "@/assets/Shivinder.png";

const serviceSubNav = [
  { label: "Overview", path: "#overview" },
  { label: "Why Choose Us", path: "#why-us" },
  { label: "Our Approach", path: "#approach" },
  { label: "Programs", path: "#programs" },
  { label: "Leader", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const offerings = [
  {
    icon: BookOpen,
    title: "Leadership Development",
    description:
      "Immersive learning for emerging and senior leaders building strategic thinking and change leadership.",
    color: "bg-cap-blue",
    gradient: "from-cap-blue/10 to-transparent",
    path: "/what-we-do/services/tcb/leadership-development",
  },
  {
    icon: Laptop,
    title: "Innovation & Design Thinking",
    description:
      "Role-based academies covering AI, data analytics, cloud computing, and cybersecurity.",
    color: "bg-cap-blue",
    gradient: "from-cap-blue/10 to-transparent",
    path: "/what-we-do/services/tcb/innovation-design-thinking",
  },
  {
    icon: Users,
    title: "Team Effectiveness & Collaboration",
    description:
      "Enhance communication, collaboration, and interpersonal skills to build a more cohesive workforce.",
    color: "bg-cap-green",
    gradient: "from-cap-green/10 to-transparent",
    path: "/what-we-do/services/tcb/team-effectiveness",
  },
  // {
  //   icon: Lightbulb,
  //   title: "Sales & Customer Excellence",
  //   description: "Boost revenue with training on consultative selling, negotiation, and customer experience management.",
  //   color: "bg-cap-red",
  //   gradient: "from-cap-red/10 to-transparent",
  //   path: "/what-we-do/services/tcb/sales-customer-excellence"
  // },

  {
    icon: Lightbulb,
    title: "certification & compliance training",
    description:
      "Boost revenue with training on consultative selling, negotiation, and customer experience management.",
    color: "bg-cap-red",
    gradient: "from-cap-red/10 to-transparent",
    path: "/what-we-do/services/tcb/certification-compliance",
  },
  {
    icon: GraduationCap,
    title: "Learning Experience Design",
    description:
      "Custom blended ecosystems with micro-learning, gamification, and mentoring.",
    color: "bg-cap-dark-blue",
    gradient: "from-cap-dark-blue/10 to-transparent",
    path: "/what-we-do/services/tcb/learning-experience-design",
  },
  // {
  //   icon: Award,
  //   title: "Behavioral Mindset Training",
  //   description: "Transform workplace culture with programs focused on growth mindset, resilience, and emotional intelligence.",
  //   color: "bg-cap-blue",
  //   gradient: "from-cap-blue/10 to-transparent",
  //   path: "/what-we-do/services/tcb/behavioral-mindset-training"
  // },

  {
    icon: Award,
    title: "Digital & Technical Upskilling",
    description:
      "Transform workplace culture with programs focused on growth mindset, resilience, and emotional intelligence.",
    color: "bg-cap-blue",
    gradient: "from-cap-blue/10 to-transparent",
    path: "/what-we-do/services/tcb/digital-upskilling",
  },
];

const whyChooseUs = [
  {
    icon: TrendingUp,
    title: "28+ Years Experience",
    desc: "Led by a seasoned corporate leader with real-world sales and organizational expertise",
  },
  {
    icon: Brain,
    title: "Certified Power Coach",
    desc: "Advanced behavioral coaching credentials enabling genuine transformation, not just information transfer",
  },
  {
    icon: Target,
    title: "Vertical TCB Approach",
    desc: "Comprehensive top-to-bottom organizational development ensuring cascading impact and alignment",
  },
  {
    icon: Zap,
    title: "90-Day Reinforcement",
    desc: "Monthly coaching, peer learning, and performance tracking ensuring behavioral change sticks",
  },
  {
    icon: Users,
    title: "Customized for All Sizes",
    desc: "Scalable solutions for startups, mid-market companies, and large enterprises across India",
  },
  {
    icon: CheckCircle2,
    title: "Measurable Results",
    desc: "Transparent ROI reporting with baseline metrics, progress tracking, and business impact validation",
  },
];

const phases = [
  {
    step: "01",
    title: "Assessment & Customization",
    desc: "In-depth needs analysis, skill gap assessment, and customized program design aligned to your goals",
    icon: Target,
  },
  {
    step: "02",
    title: "Immersive Delivery",
    desc: "Engaging workshops with role-plays, simulations, case studies, and practical frameworks you can apply immediately",
    icon: Zap,
  },
  {
    step: "03",
    title: "90-Day Reinforcement",
    desc: "Monthly coaching calls, one-on-one sessions, real-world support, and performance metric tracking",
    icon: TrendingUp,
  },
  {
    step: "04",
    title: "ROI & Improvement",
    desc: "Outcome based reporting on business impact, behavioral change validation, and continuous improvement recommendations",
    icon: CheckCircle2,
  },
];

const programStreams = [
  { title: "Sales Management", modules: 8, icon: Target },
  { title: "Leadership Development", modules: 7, icon: Users },
  { title: "Communication Dynamics", modules: 6, icon: MessageSquare },
  { title: "Change Management", modules: 6, icon: TrendingUp },
  { title: "Emotional Intelligence", modules: 5, icon: Brain },
  { title: "Team Building", modules: 6, icon: Users },
];

const stats = [
  { value: "5K+", desc: "Professionals trained across all programmes" },
  { value: "95%", desc: "Participant satisfaction rate" },
  { value: "60%", desc: "Average capability uplift measured" },
  { value: "5 ", desc: "Decades of cumulative industry experience" },
];

const trendingInsights = [
  {
    category: "RESEARCH REPORT",
    title: "The Future of Corporate Learning in 2026",
  },
  { category: "PERSPECTIVE", title: "From Training to Transformation" },
  { category: "BLOG", title: "Gamification in Corporate Training" },
  {
    category: "CASE STUDY",
    title: "Measuring Training ROI: Beyond Satisfaction",
  },
];

// ─── Mosaic card images (replace these with your own assets if needed) ────────
const mosaicImages = [
  "https://images.unsplash.com/photo-1758691736407-02406d18df6c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1758873269035-aae0e1fd3422?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const TCB = () => {
  const navigate = useNavigate();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: whyRef, isInView: whyInView } = useScrollAnimation(0.1);
  const { ref: phaseRef, isInView: phaseInView } = useScrollAnimation(0.1);
  const { ref: programRef, isInView: programInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } =
    useScrollAnimation(0.1);
  const { ref: leadersRef, isInView: leadersInView } = useScrollAnimation(0.1);
  const trendingScrollRef = useRef<HTMLDivElement>(null);
  const [activeProgram, setActiveProgram] = useState(0);

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

  // ─── Mosaic grid layout builder ─────────────────────────────────────────────
  // Pattern per every 4 offerings:
  //   Row A: [card 0] [card 1]
  //   Row B: [image]  [card 2]
  //   Row C: [card 3] [image]
  //   Row D: [card 4] [card 5]  ← if more offerings exist
  type MosaicCell =
    | { type: "card"; item: (typeof offerings)[0]; index: number }
    | { type: "image"; src: string };

  const buildMosaicRows = (): MosaicCell[][] => {
    const rows: MosaicCell[][] = [];
    let cardIdx = 0;
    let imgIdx = 0;
    // Pattern repeats every 4 rows for each group of 4 cards
    const PATTERN: Array<["card" | "image", "card" | "image"]> = [
      ["card", "card"],
      ["image", "card"],
      ["card", "image"],
      ["card", "card"],
    ];
    let patternRow = 0;

    while (cardIdx < offerings.length) {
      const [left, right] = PATTERN[patternRow % PATTERN.length];
      const row: MosaicCell[] = [];

      for (const slot of [left, right]) {
        if (slot === "card") {
          if (cardIdx < offerings.length) {
            row.push({
              type: "card",
              item: offerings[cardIdx],
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

  const mosaicRows = buildMosaicRows();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar
        title="Training & Capability Building"
        titlePath="/what-we-do/services/tcb"
        items={serviceSubNav}
      />

      {/* ── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
          <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-cap-blue/10 blur-[120px]" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-cap-blue font-semibold text-[14px] tracking-wider uppercase">
              Transform Your Organization
            </span>
          </motion.div>

          <motion.h1
            className="text-[42px] md:text-[58px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-4xl mt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Training & Capability Building
          </motion.h1>

          <motion.p
            className="text-[18px] md:text-[20px] text-muted-white leading-[1.7] max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Build future-ready capabilities at scale. Transform knowledge gaps
            into competitive advantages through immersive, outcome-driven
            learning experiences designed by industry leaders with muilti domain expertise.
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
              className="bg-cap-blue text-white px-6 py-3 font-semibold hover:bg-cap-blue/90 transition-all rounded-md inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                document.getElementById("programs")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="relative z-10 border border-white/30 text-white px-8 py-4 font-semibold hover:border-cap-blue/50 hover:bg-cap-blue/10 transition-all rounded-md"
            >
              Explore Solutions
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Section ──────────────────────────────────────────────────────── */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[26px] md:text-[34px] font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
          >
            Impact By The Numbers
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
                <div className="w-12 h-1 bg-gradient-to-r from-cap-blue to-cap-dark-blue mb-6 group-hover:w-16 transition-all duration-300" />
                <span className="text-[44px] md:text-[52px] font-black text-white block mb-2">
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

      {/* ── Overview Section ───────────────────────────────────────────────────── */}
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
              <p className="text-lg text-cap-blue tracking-wide mb-2 font-bold">
                ABOUT CAP360
              </p>
              <h2 className="text-[32px] md:text-[42px] font-bold leading-tight">
                Building Capabilities That Drive
                <span className="text-cap-blue"> Real Business Impact</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-l-2 border-cap-blue/40 pl-6">
                <p className="text-[18px] text-muted-white leading-[1.8]">
                  <span className="text-white font-medium">Cap360</span>{" "}
                  stands for
                  <span className="text-white font-medium">
                    {" "}
                    "Capability Building 360"
                  </span>
                  —a one-stop solution provider specializing in corporate
                  training, executive coaching, and business consultancy.
                </p>
              </div>
              <div className="border-l-2 border-cap-blue/40 pl-6">
                <p className="text-[18px] text-muted-white leading-[1.8]">
                  We go beyond workshops—conducting deep organizational
                  assessments, designing tailored solutions, and delivering
                  long-term capability building with measurable outcomes.
                </p>
              </div>
            </div>
            <div className="mt-12 h-[2px] w-16 bg-cap-blue" />
          </motion.div>
        </div>
      </section>

      {/* ── Programs / Offerings — ACCENTURE MOSAIC GRID ──────────────────────── */}
  {/* ── Programs / Offerings — ACCENTURE MOSAIC GRID ── */}
      <section
        id="programs"
        className="py-24"
        style={{ background: "var(--background, #000)" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={offerInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12"
          >
            <h2 className="text-[34px] md:text-[42px] font-bold mb-4">
              Our Training Solutions
            </h2>
            <p className="text-[18px] text-muted-white max-w-2xl">
              Comprehensive, modular programs addressing every aspect of
              organizational capability development.
            </p>
          </motion.div>

          {/* Mosaic grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={offerInView ? { opacity: 1 } : {}}
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
                          alt="training visual"
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

                  // Card cell
                  const item = cell.item;
                  const accentHex = "#1A66E6";

                  return (
                    <motion.div
                      key={item.title}
                      className="mosaic-card group"
                      initial={{ opacity: 0, y: 24 }}
                      animate={offerInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.08 * cell.index, duration: 0.4 }}
                      onClick={() => navigate(item.path)}
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

                      {/* Eyebrow / Label */}
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
                        {item.title}
                      </div>

                      {/* Title — fades out on hover */}
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
                        {item.title}
                      </div>

                      {/* Description — fades in on hover */}
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
                        {item.description}
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

                      {/* Overlay — fades in on hover */}
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

      {/* ── Why Choose Us ──────────────────────────────────────────────────────── */}
      <section
        id="why-us"
        className="py-28 section-navy relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-cap-blue/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-cap-blue/10 rounded-full blur-[100px] -z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            ref={whyRef}
            className="mb-20 max-w-3xl"
          >
            <div className="inline-block mb-4">
              <div className="h-[3px] w-16 bg-cap-blue rounded-full mb-3" />
              <span className="text-cap-blue text-lg tracking-wider uppercase font-bold">
                Why Cap360
              </span>
            </div>
            <h2 className="text-[34px] md:text-[44px] font-bold leading-tight mb-6">
              Why Choose <span className="text-cap-blue">Cap360?</span>
            </h2>
            <p className="text-[18px] text-muted-white leading-relaxed">
              Founder-led expertise combined with certified coaching credentials
              and a proven track record of measurable business results.
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
                className="group relative rounded-xl p-[1px] bg-gradient-to-br from-cap-blue/20 via-transparent to-cap-blue/20 hover:from-cap-blue/40 transition-all duration-500"
              >
                <div className="h-full w-full bg-background/60 backdrop-blur-xl border border-white/5 rounded-xl p-8 relative overflow-hidden transition-all duration-300 group-hover:bg-background/70 group-hover:shadow-[0_10px_40px_rgba(255,115,0,0.15)]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cap-blue/5 to-transparent" />
                  <div className="flex items-start gap-4 mb-5 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cap-blue/20 to-cap-blue/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition duration-300 shadow-inner">
                      <item.icon className="w-6 h-6 text-cap-blue" />
                    </div>
                    <h3 className="text-[17px] font-semibold leading-snug group-hover:text-cap-blue transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[18px] text-muted-white leading-[1.7] pl-[4.25rem] relative z-10">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cap-blue group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our Approach ───────────────────────────────────────────────────────── */}
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
              Our 4-Phase Approach
            </h2>
            <p className="text-[18px] text-muted-white leading-relaxed">
              A structured methodology designed to ensure training leads to real
              behavioral transformation and measurable business outcomes.
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
                  <div className="hidden lg:block absolute top-20 left-full w-[80%] h-[2px] bg-gradient-to-r from-cap-blue/60 to-transparent" />
                )}

                {/* Card */}
                <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-cap-blue/30 to-transparent hover:from-cap-blue/60 transition-all duration-500">
                  <div className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-cap-blue/10 transition-all duration-500">
                    {/* Top */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Step + Title */}
                      <div>
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cap-blue/10 text-cap-blue font-bold text-lg mb-4 group-hover:scale-110 transition">
                          {phase.step}
                        </div>

                        <h3 className="text-[18px] font-semibold group-hover:text-cap-blue transition-colors">
                          {phase.title}
                        </h3>
                      </div>

                      {/* Icon */}
                      <div className="p-3 rounded-xl bg-cap-blue/10 group-hover:bg-cap-blue/20 transition">
                        <phase.icon className="w-6 h-6 text-cap-blue group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[16px] text-muted-white leading-relaxed">
                      {phase.desc}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="mt-6 h-[2px] w-0 bg-cap-blue group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Program Streams ────────────────────────────────────────────────────── */}
      {/* <section className="py-24 section-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={programInView ? { opacity: 1, y: 0 } : {}}
            ref={programRef}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-6">
              Program Streams
            </h2>
            <p className="text-[18px] text-muted-white max-w-2xl">
              Modular training organized into specialized streams, available
              standalone or as part of integrated organizational development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programStreams.map((program, i) => (
              <motion.div
                key={program.title}
                className="group bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-sm border border-border/40 p-8 rounded-lg cursor-pointer hover:border-cap-blue/60 hover:bg-background/80 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={programInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                onClick={() => setActiveProgram(i)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[18px] font-bold group-hover:text-cap-blue transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-[16px] text-muted-white mt-1">
                      {program.modules} modules included
                    </p>
                  </div>
                  <program.icon className="w-10 h-10 text-cap-blue/40 group-hover:text-cap-blue group-hover:scale-110 transition-all" />
                </div>
                <div className="w-24 h-1 bg-cap-blue/30 group-hover:bg-cap-blue group-hover:w-32 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Trending / Insights ────────────────────────────────────────────────── */}
      {/* <section id="trending" className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={trendingInView ? { opacity: 1, y: 0 } : {}}
              ref={trendingRef}
            >
              <h2 className="text-[32px] md:text-[42px] font-bold mb-2">
                Insights & Resources
              </h2>
              <p className="text-[18px] text-muted-white">
                Stay updated with latest trends in corporate learning and
                transformation.
              </p>
            </motion.div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollTrending("left")}
                className="p-2 border border-border/40 text-white/60 hover:text-white hover:border-cap-blue/60 transition-all rounded-md hover:bg-cap-blue/5"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTrending("right")}
                className="p-2 border border-border/40 text-white/60 hover:text-white hover:border-cap-blue/60 transition-all rounded-md hover:bg-cap-blue/5"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[18px] font-semibold text-white hover:text-cap-blue transition-colors group"
            >
              View all insights{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 bg-cap-blue/20 text-cap-blue rounded-md group-hover:bg-cap-blue group-hover:text-background transition-all">
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
                className="flex-shrink-0 w-[320px] group cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                animate={trendingInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i }}
              >
                <div className="relative h-[380px] overflow-hidden rounded-lg border border-border/30 group-hover:border-cap-blue/40 transition-all">
                  <img
                    src={trendingImages[i % trendingImages.length]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-[11px] font-bold text-cap-blue uppercase tracking-[0.15em] mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-[18px] font-bold text-white leading-snug group-hover:text-cap-blue transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Meet Our Trainer ───────────────────────────────────────────────────── */}
      <section
        id="leaders"
        className="py-24 section-navy relative overflow-hidden" ref={leadersRef}
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cap-blue/5 rounded-full blur-3xl -z-0" />

        <div className="w-full px-6 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            ref={leadersRef}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-2">
              Meet Our Trainer
            </h2>
            <p className="text-[18px] text-muted-white">
              28+ years of corporate leadership combined with certified coaching
              expertise
            </p>
          </motion.div>

          <motion.div
            className="max-w-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* IMAGE (your format) */}
              <div className="md:col-span-1">
                <div className="w-full max-w-sm mx-auto aspect-square rounded-xl overflow-hidden border border-border/40">
                  <img
                    src={ShivinderMandhotra} // make sure card1 is imported or defined
                    alt="Shivinder Mandhotra"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="md:col-span-2">
                <h3 className="text-[28px] font-bold mb-2">
                  Shivinder Mandhotra
                </h3>

                <p className="text-cap-blue font-semibold text-[14px] mb-6 uppercase tracking-wider">
                  Lead Trainer
                </p>

                <div className="space-y-6 mb-8">
                  <p className="text-[17px] text-muted-white leading-[1.8]">
                    A rare combination of seasoned corporate leader and
                    certified Power Coach, Shivinder brings 28+ years of
                    hands-on experience across India's most respected
                    organizations—Godrej & Boyce, Wipro, Amardeep Designs, and
                    Intex Technologies.
                  </p>

                  <p className="text-[17px] text-muted-white leading-[1.8]">
                    He's a proven turnaround specialist with expertise in
                    transforming sales operations, managing complex
                    implementations, and leading cross-functional teams to
                    deliver exceptional results.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "Power Coach Certified",
                      sub: "Coaching & Leadership International Inc, Canada",
                    },
                    {
                      title: "MBA Marketing",
                      sub: "Symbiosis Institute, Pune",
                    },
                    {
                      title: "Multiple Certifications",
                      sub: "Executive Coach, Life Coach, PoSH Trainer",
                    },
                    {
                      title: "Advisory Member",
                      sub: "Administrator Chandigarh & Governor Punjab",
                    },
                  ].map((cred) => (
                    <div key={cred.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cap-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[14px]">
                          {cred.title}
                        </p>
                        <p className="text-[16px] text-muted-white">
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
                  className="bg-cap-blue text-white px-6 py-3 font-semibold hover:bg-cap-blue/90 transition-all rounded-md inline-flex items-center gap-2"
                >
                  Schedule with Shivinder
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
              <span className="text-cap-blue font-semibold text-[14px] tracking-wider uppercase">
                Ready to Transform?
              </span>
              <h2 className="text-[40px] md:text-[54px] font-black leading-[1.1] mt-4 mb-6">
                Let's build your winning team
              </h2>
              <p className="text-[18px] text-muted-white mb-8 max-w-xl">
                Schedule a consultation with our experts and discover how Cap360
                can transform your organization through results-driven training
                and coaching.
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
              rel="noopener noreferrer" className="bg-cap-blue text-white px-8 py-4 font-semibold hover:bg-cap-blue/90 transition-all hover:shadow-lg rounded-md inline-flex items-center gap-2">
                Start Your Journey <ChevronRight className="w-4 h-4" />
              </a>
              <button className="border border-white/20 text-white px-8 py-4 font-semibold hover:border-cap-blue/50 hover:bg-cap-blue/5 transition-all rounded-md">
                Download Program Guide
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Careers Section ────────────────────────────────────────────────────── */}
      {/* <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
            <circle cx="650" cy="150" r="120" stroke="white" />
            <circle cx="750" cy="100" r="200" stroke="white" />
            <path d="M500 400 C600 300, 700 500, 800 400" stroke="white" fill="transparent" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-gray-300 text-lg max-w-xl leading-relaxed mb-10">
            Work alongside industry experts to deliver transformational training and coaching solutions that help organizations unlock their full potential.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cap-blue to-cap-red px-8 py-4 rounded-md font-semibold text-background shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Explore Open Positions
          </motion.button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default TCB;
