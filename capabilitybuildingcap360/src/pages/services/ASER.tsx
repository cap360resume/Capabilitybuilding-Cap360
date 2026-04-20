import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import ASERSubNavbar from "@/components/ASERSubNavbar";
import { motion } from "framer-motion";
import {
  Users,
  BarChart3,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  Brain,
  Layers,
  LineChart,
  Lightbulb,
  Link,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import heroImg from "@/assets/service-hero-aser.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";
import saurabh from "@/assets/SaurabhNanda.png";
import aser2 from "@/assets/aser2.png";
import aser1 from "@/assets/Aser-1.avif";

const serviceSubNav = [
  { label: "What to do", path: "#services" },
  { label: "Why Choose Cap360", path: "#trending" },
  { label: "How We Work", path: "#howWeWork" },
  { label: "Leader", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

// Mosaic image cells
const mosaicImages = [aser1, aser2];

const subServices = [
  {
    icon: BarChart3,
    title: "Competency-Based Assessments",
    title2: "Measuring What Truly Predicts Performance",
    description:
      "Scientifically designed assessments that measure behavioral competencies, cognitive abilities, and domain-specific knowledge aligned to your organizational framework and role requirements.",
    path: "/what-we-do/services/aser/competency-assessments",
  },
  {
    icon: Users,
    title: "Assessment & Development Centres",
    title2: "360° Insights Into Leadership Potential and Role Readiness",
    description:
      "Multi-method, multi-assessor evaluation programmes that provide deep insights into leadership potential, critical thinking, and readiness for pivotal roles across your organization.",
    path: "/what-we-do/services/aser/assessment-centres",
  },
  {
    icon: Brain,
    title: "Psychometric Testing",
    title2: "Validated Science Behind Every Talent Decision",
    description:
      "Deploy validated psychometric instruments measuring personality traits, aptitude, and emotional intelligence — ensuring every recruitment and development decision is grounded in data.",
    path: "/what-we-do/services/aser/psychometric-testing",
  },
  {
    icon: LineChart,
    title: "Talent Analytics & Benchmarking",
    title2: "Turning Talent Data Into Strategic Intelligence",
    description:
      "Data-driven talent analytics that benchmark individual and team capabilities against industry standards, revealing gaps and opportunities across your entire workforce.",
    path: "/what-we-do/services/aser/talent-analytics",
  },
  // {
  //   icon: ClipboardList,
  //   title: "360° Feedback & Leadership Diagnostics",
  //   title2: "Unlocking Self-Awareness and Leadership Growth",
  //   description:
  //     "Structured multi-rater feedback processes that help leaders understand their impact, identify blind spots, and accelerate personal and professional development.",
  //   path: "/what-we-do/services/aser/360-feedback",
  // },
  // {
  //   icon: Lightbulb,
  //   title: "AI-Powered Talent Intelligence",
  //   title2: "Redefining Assessment with Generative AI",
  //   description:
  //     "Leverage AI-driven simulations, adaptive assessments, and predictive models to identify high-potential talent faster and with greater precision than traditional methods.",
  //   path: "/what-we-do/services/aser/talent",
  // },
];

const trendingInsights = [
  {
    category: "RESEARCH REPORT",
    title: "The Science of Assessment: Predicting Performance in 2026",
    description:
      "How next-generation psychometric tools are raising the accuracy bar for talent prediction.",
  },
  {
    category: "PERSPECTIVE",
    title: "Beyond IQ: The Rise of Emotional Intelligence Assessments",
    description:
      "Why EQ is becoming the defining predictor of leadership success in the modern workplace.",
  },
  {
    category: "BLOG",
    title: "Assessment Centres in a Virtual World",
    description:
      "How leading organizations are delivering immersive, bias-free assessments at global scale.",
  },
  {
    category: "RESEARCH REPORT",
    title: "AI-Powered Talent Analytics: Opportunities & Ethics",
    description:
      "Navigating the promise and responsibility of AI-driven talent decisions.",
  },
  {
    category: "PERSPECTIVE",
    title: "Building a Talent Intelligence Function from Scratch",
    description:
      "A practical guide to embedding data-driven assessment into your talent strategy.",
  },
];

// const partners = [
//   {
//     name: "Hogan Assessments",
//     description:
//       "World-leading personality assessments for predicting workplace performance and leadership.",
//   },
//   {
//     name: "SHL",
//     description:
//       "Global leader in talent measurement, providing validated assessments across all levels.",
//   },
//   {
//     name: "Korn Ferry",
//     description:
//       "Organizational consulting firm delivering leadership and talent development solutions.",
//   },
//   {
//     name: "MeritTrac",
//     description:
//       "India's largest assessment services company powering large-scale talent evaluation.",
//   },
// ];

const targetAudiences = [
  "Large Enterprises: Designing complex, competency-based assessment architectures for global workforces",
  "Mid-Market Organizations: Scaling talent identification while maintaining assessment rigour",
  "Growth-Stage Companies: Building talent evaluation foundations that support rapid hiring",
  "Private Equity Backed Firms: Assessing leadership quality and capability gaps across portfolio companies",
  "Public Sector Organizations: Running transparent, merit-based assessment processes at scale",
];

const phases = [
  {
    step: "01",
    title: "Discovery & Framework Design",
    desc: "We conduct a thorough analysis of your role requirements, competency frameworks, and talent strategy. This phase identifies what capabilities to assess and maps them to validated measurement tools.",
    icon: Target,
  },
  {
    step: "02",
    title: "Tool Selection & Customization",
    desc: "Based on our findings, we select and customize the right mix of psychometric, situational, and competency tools — building an assessment architecture that is precise, fair, and fit-for-purpose.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Assessment Delivery & Evaluation",
    desc: "Our trained assessors and digital platforms deliver assessments with consistency and rigour. Multi-rater, multi-method evaluation ensures every decision is objective, defensible, and insightful.",
    icon: TrendingUp,
  },
  {
    step: "04",
    title: "Insights, Reporting & Action Planning",
    desc: "Detailed individual and group reports translate assessment data into clear development actions. We guide your leaders and HR teams to act decisively on findings.",
    icon: CheckCircle2,
  },
];

const whyChooseUs = [
  {
    icon: TrendingUp,
    title: "15+ Years of Expertise",
    desc: "Led by experienced professionals with deep knowledge of talent assessment, behavioral science, and organizational effectiveness",
  },
  {
    icon: Brain,
    title: "Certified Assessment Specialists",
    desc: "Accredited in globally recognized psychometric tools ensuring reliable, unbiased, and scientifically validated insights",
  },
  {
    icon: Target,
    title: "Holistic Talent Insights",
    desc: "Comprehensive evaluation of personality, cognitive abilities, and behavioral traits for accurate hiring and development decisions",
  },
  {
    icon: Zap,
    title: "Actionable Reports",
    desc: "Clear, easy-to-understand reports with practical recommendations for hiring, promotions, and employee development",
  },
  {
    icon: Users,
    title: "Scalable for All Organizations",
    desc: "Flexible assessment solutions tailored for startups, mid-sized companies, and large enterprises across industries",
  },
  {
    icon: CheckCircle2,
    title: "Data-Driven Results",
    desc: "Evidence-based insights with benchmarking, analytics, and measurable impact on hiring quality and performance outcomes",
  },
];

const ASER = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: servicesRef, isInView: servicesInView } =
    useScrollAnimation(0.1);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: whyRef, isInView: whyInView } = useScrollAnimation(0.1);
  const { ref: howWeWorkRef, isInView: howWeWorkInView } = useScrollAnimation(0.1);
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
      value: "10K+",
      desc: "professionals assessed across Asia",
    },
    {
      value: "85%+",
      desc: "prediction accuracy for future job performance using our frameworks",
    },
    {
      value: "3x",
      desc: "faster leadership pipeline development compared to traditional methods",
    },
    {
      value: "Only 22%",
      desc: "of organizations say they use validated, science-backed assessments consistently across all hiring levels.",
    },
  ];

  const mosaicRows = buildMosaicRows();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar
        title="ASER"
        titlePath="/what-we-do/services/aser"
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
            Assessment Services 
          </motion.h1>
          <motion.p
            className="text-[18px] md:text-[20px] text-muted-whiteleading-[1.6] max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Unlock the true potential of your workforce with scientifically
            validated assessment solutions that identify, evaluate, and develop
            talent at every level.
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
              className="bg-cap-red text-white px-6 py-3 font-semibold hover:bg-cap-red/90 transition-all rounded-md inline-flex items-center gap-2"
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
              className="border border-White/30 text-White px-8 py-4 font-semibold hover:border-cap-red/50 hover:bg-cap-red/10 transition-all rounded-md"
            >
              Explore Solutions
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
            ASER now
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
                <div className="w-12 h-1 bg-gradient-to-r from-cap-red to-cap-red mb-6 group-hover:w-16 transition-all duration-300" />
                <span className="text-[44px] md:text-[52px] font-black text-whiteblock mb-2">
                  {stat.value}
                </span>
                <p className="text-[18px] text-muted-whiteleading-[1.6]">
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
              <p className="text-lg text-cap-red tracking-wide mb-2 font-bold">
                ABOUT ASER
              </p>
              <h2 className="text-[32px] md:text-[42px] font-bold leading-tight">
                Transforming Talent Decisions Into
                <span className="text-cap-red"> Competitive Advantage</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-l-2 border-cap-red/40 pl-6">
                <p className="text-[18px] text-muted-whiteleading-[1.8]">
                  <span className="text-whitefont-medium">ASER</span>{" "}
                  (Assessment Services & Evaluation Solutions) is designed to
                  help organizations move beyond intuition-based hiring and
                  build
                  <span className="text-whitefont-medium">
                    {" "}
                    data-driven, high-performance talent pipelines
                  </span>
                  .
                </p>
              </div>

              <div className="border-l-2 border-cap-red/40 pl-6">
                <p className="text-[18px] text-muted-whiteleading-[1.8]">
                  We go beyond off-the-shelf tools — partnering with
                  organizations to design, deploy, and interpret bespoke
                  assessment architectures, powered by a Global Assessment
                  Delivery Center delivering scale, consistency, and actionable
                  intelligence.
                </p>
              </div>
            </div>

            <div className="mt-12 h-[2px] w-16 bg-cap-red" />
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES — MOSAIC GRID ===== */}
  <section id="services" className="py-24" ref={servicesRef}>
  <div className="container mx-auto px-4 lg:px-8">
    <motion.h2
      className="text-[34px] md:text-[40px] font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
    >
      Reinvent with ASER
    </motion.h2>
    <p className="text-[18px] text-muted-white mb-14 max-w-2xl mb-5">
      Six integrated assessment solutions designed to transform every stage of
      the talent lifecycle. Each solution is modular yet interconnected — choose
      one or combine multiple for end-to-end talent intelligence.
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

            /* ── Card cell ── */
            const s = cell.item;
            const accentHex = "#E85C2D";

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
                  {s.title2}
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
        id="trending"
        className="py-28 section-navy relative overflow-hidden" ref={trendingRef}
      >
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-cap-red/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-cap-red/10 rounded-full blur-[100px] -z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            ref={whyRef}
            className="mb-20 max-w-3xl"
          >
            <div className="inline-block mb-4">
              <div className="h-[3px] w-16 bg-cap-red rounded-full mb-3" />
              <span className="text-cap-red text-lg tracking-wider uppercase font-bold">
                Why Cap360
              </span>
            </div>
            <h2 className="text-[34px] md:text-[44px] font-bold leading-tight mb-6">
              Why Choose <span className="text-cap-red">Cap360?</span>
            </h2>
            <p className="text-[18px] text-muted-whiteleading-relaxed">
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
                className="group relative rounded-xl p-[1px] bg-gradient-to-br from-cap-red/20 via-transparent to-cap-red/20 hover:from-cap-red/40 transition-all duration-500"
              >
                <div className="h-full w-full bg-background/60 backdrop-blur-xl border border-white/5 rounded-xl p-8 relative overflow-hidden transition-all duration-300 group-hover:bg-background/70 group-hover:shadow-[0_10px_40px_rgba(255,115,0,0.15)]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cap-red/5 to-transparent" />
                  <div className="flex items-start gap-4 mb-5 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cap-red/20 to-cap-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition duration-300 shadow-inner">
                      <item.icon className="w-6 h-6 text-cap-red" />
                    </div>
                    <h3 className="text-[17px] font-semibold leading-snug group-hover:text-cap-red transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[18px] text-muted-whiteleading-[1.7] pl-[4.25rem] relative z-10">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cap-red group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section id="howWeWork" className="py-28 relative" ref={howWeWorkRef}>
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
            <p className="text-[18px] text-muted-whiteleading-relaxed">
              Every engagement begins with understanding your unique talent
              challenges and business goals. We follow a structured approach to
              design and deliver impactful assessments.
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
                  <div className="hidden lg:block absolute top-20 left-full w-[80%] h-[2px] bg-gradient-to-r from-cap-red/60 to-transparent" />
                )}

                {/* Card */}
                <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-cap-red/30 to-transparent hover:from-cap-red/60 transition-all duration-500">
                  <div className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-cap-red/10 transition-all duration-500">
                    {/* Top */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cap-red/10 text-cap-red font-bold text-lg mb-4 group-hover:scale-110 transition">
                          {phase.step}
                        </div>
                        <h3 className="text-[18px] font-semibold group-hover:text-cap-red transition-colors">
                          {phase.title}
                        </h3>
                      </div>
                      <div className="p-3 rounded-xl bg-cap-red/10 group-hover:bg-cap-red/20 transition">
                        <phase.icon className="w-6 h-6 text-cap-red group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[17px] text-muted-whiteleading-relaxed">
                      {phase.desc}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="mt-6 h-[2px] w-0 bg-cap-red group-hover:w-full transition-all duration-500" />
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
              className="text-muted-whitetext-[17px] leading-relaxed mb-10"
            >
              From hyper-growth startups to complex multinationals, we partner
              with organizations that take talent decisions seriously — and want
              the science to back them up.
            </motion.p>

            {/* Highlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-cap-red/20 to-transparent border border-cap-red/30 backdrop-blur-md"
            >
              <p className="text-[17px] text-whitefont-medium">
                We don't just run assessments — we build a talent intelligence
                capability that powers every hire, promotion, and development
                decision.
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
                <div className="absolute -left-[38px] top-2 w-4 h-4 rounded-full bg-cap-red shadow-lg shadow-cap-red/40 group-hover:scale-125 transition" />

                {/* Card */}
                <div className="p-2 rounded-xl bg-card/50 border border-border/20 hover:border-cap-red/40 transition-all duration-300 group-hover:-translate-y-1">
                  <p className="text-[18px] text-muted-whitegroup-hover:text-whitetransition">
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
                className="px-5 py-2 rounded-full bg-card/40 border border-border/20 text-[18px] text-muted-whitehover:border-cap-red/50 hover:text-whitetransition cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>

        {/* BACKGROUND LIGHT */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cap-red/10 blur-[140px] rounded-full pointer-events-none" />
      </section>

      {/* ===== TRENDING ===== */}
      {/* <section id="trending" className="py-24" ref={trendingRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <motion.h2
              className="text-[32px] md:text-[40px] font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={trendingInView ? { opacity: 1, y: 0 } : {}}
            >
              What's trending with ASER?
            </motion.h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollTrending("left")}
                className="p-2 border border-border/40 text-foreground/60 hover:text-whitetransition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTrending("right")}
                className="p-2 border border-border/40 text-foreground/60 hover:text-whitetransition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[18px] font-semibold text-whitehover:gap-3 transition-all"
            >
              View all work{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 bg-cap-red text-background rounded-sm">
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
                    <span className="text-[11px] font-bold text-foreground/70 uppercase tracking-[0.15em] mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-[20px] font-bold text-whiteleading-snug mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
                className="bg-card/40 border border-border/30 p-8 hover:border-cap-red/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center text-[18px] font-black text-primary-white${i === 0 ? "bg-cap-red" : i === 1 ? "bg-cap-red" : i === 2 ? "bg-cap-red" : "bg-cap-green"}`}
                >
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-[18px] font-bold mb-3 group-hover:text-cap-red transition-colors">
                  {p.name}
                </h3>
                <p className="text-[14px] text-muted-whiteleading-[1.6] mb-4">
                  {p.description}
                </p>
                <span className="cta-link text-[14px]">
                  Learn more{" "}
                  <ChevronRightclassName="w-3.5 h-3.5 text-cap-red" />
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
                title: "Leader in Everest Group Talent Assessment Services PEAK Matrix® 2025",
                description: "Recognized for market impact and vision in talent assessment and evaluation services.",
              },
              {
                title: "Best Assessment Solutions Provider — MENA HR Excellence Awards 2024",
                description: "Awarded for delivering measurable improvements in talent prediction and workforce quality.",
              },
              {
                title: "Top 10 Talent Intelligence Platform — HR Tech Outlook 2024",
                description: "Selected for innovative AI-powered assessment and analytics approaches.",
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
                <Award className="w-8 h-8 text-cap-red mb-4" />
                <h3 className="text-[18px] font-bold mb-3">{a.title}</h3>
                <p className="text-[14px] text-muted-whiteleading-[1.6]">
                  {a.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== MEET OUR LEADER ===== */}
      <section
        id="leaders"
        className="py-24 section-navy relative overflow-hidden" ref={leadersRef}
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cap-red/5 rounded-full blur-3xl -z-0" />
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
            <p className="text-[18px] text-muted-white">
              Career Coach & International Youth Mentor | Advisor, CAP360 |
              Behavioural Science Expert | TEDx Speaker | Karamveer Chakra
              Awardee
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
                    src={saurabh}
                    alt="Saurabh Nanda"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-[28px] font-bold mb-2">Saurabh Nanda</h3>
                <p className="text-cap-red font-semibold text-[14px] mb-6 uppercase tracking-wider">
                  Career Coach & International Youth Mentor | Advisor — CAP360
                </p>

                <div className="space-y-6 mb-8">
                  <p className="text-[17px] text-muted-whiteleading-[1.8]">
                    Saurabh Nanda bridges behavioural science with career
                    transformation. Supporting 2000+ professionals across 35+
                    countries, he goes beyond traditional coaching to address
                    the psychological roots of career challenges—from burnout
                    and imposter syndrome to transitions and anxiety.
                  </p>

                  <p className="text-[17px] text-muted-whiteleading-[1.8]">
                    A former IT professional turned career psychologist,
                    two-time TEDx speaker, and Karamveer Chakra Awardee, Saurabh
                    combines evidence-based frameworks with AI-driven insights
                    through CAP360.
                  </p>

                  <p className="text-[17px] text-muted-whiteleading-[1.8]">
                    He helps clients understand not just what to do, but why
                    they do it. His approach: sustainable success begins with
                    self-understanding—honoring both professional ambition and
                    mental well-being.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "NIT Jalandhar",
                      sub: "Engineering Graduate | Strong foundation in analytical thinking",
                    },
                    {
                      title: "Behavioural Science Expert",
                      sub: "Specializing in career psychology, mindset, and human behaviour",
                    },
                    {
                      title: "TEDx Speaker",
                      sub: "Two-time speaker on career transformation & mindset",
                    },
                    {
                      title: "Karamveer Chakra Awardee",
                      sub: "Recognized for impact in career guidance & youth mentorship",
                    },
                    {
                      title: "Career Psychology",
                      sub: "Deep behavioural insights to guide meaningful career decisions",
                    },
                    {
                      title: "Leadership Coaching",
                      sub: "Enabling leaders to grow with clarity and resilience",
                    },
                    {
                      title: "Leadership Development",
                      sub: "Building future-ready leadership capabilities",
                    },
                    {
                      title: "Strategic Career Planning",
                      sub: "Structured pathways for long-term career success",
                    },
                  ].map((cred) => (
                    <div key={cred.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cap-red flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[14px]">
                          {cred.title}
                        </p>
                        <p className="text-[16px] text-muted-foreground">
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
                  className="bg-cap-red text-white px-6 py-3 font-semibold hover:bg-cap-red/90 transition-all rounded-md inline-flex items-center gap-2"
                >
                  Schedule with Saurabh Nanda
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}

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
              <span className="text-cap-red font-semibold text-[14px] tracking-wider uppercase">
                Ready to Transform?
              </span>
              <h2 className="text-[40px] md:text-[54px] font-black leading-[1.1] mt-4 mb-6">
                Join us in your journey
              </h2>
              <p className="text-[18px] text-muted-white mb-8 max-w-xl">
                 Join our assessment team and help organizations identify, evaluate,
                 and develop their most critical asset — their people.
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
              rel="noopener noreferrer" className="bg-cap-red text-white px-8 py-4 font-semibold hover:bg-cap-red/90 transition-all hover:shadow-lg rounded-md inline-flex items-center gap-2">
                Start Your Journey <ChevronRight className="w-4 h-4" />
              </a>
              <button className="border border-white/20 text-white px-8 py-4 font-semibold hover:border-cap-red/50 hover:bg-cap-red/5 transition-all rounded-md">
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

export default ASER;
