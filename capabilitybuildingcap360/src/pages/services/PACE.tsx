import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import { motion } from "framer-motion";
import {
  Compass,
  Rocket,
  Target,
  TrendingUp,
  UserCheck,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  Zap,
  Brain,
  Linkedin,
  MessageSquare,
  Award,
  Search,
  Users,
  Bold,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import heroImg from "@/assets/service-hero-pace.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";
import card1 from "@/assets/card-1.jpg";
import creativecapability from "@/assets/creativecapability.png";
import digitalcapability from "@/assets/digital capability.png";


const serviceSubNav = [
  { label: "What to do", path: "#services" },
  { label: "Why Choose Cap360", path: "#trending" },
  { label: "How We work", path: "#howWeWork" },
  {label: "Leader", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const mosaicImages = [creativecapability, digitalcapability];

const subServices = [
  {
    icon: Compass,
    title: "Career Path Architecture",
    title2:
      "Designing Structured Career Pathways With Clear Growth Trajectories",
    description:
      "Design structured career pathways with clear milestones, competency requirements, and growth trajectories for every role family across your organization.",
    path: "/what-we-do/services/pace/career-path-architecture",
  },
  {
    icon: UserCheck,
    title: "Professional Coaching & Mentoring",
    title2: "Accelerating Leadership Readiness Through Certified Coaching",
    description:
      "One-on-one and group coaching programmes led by certified coaches that accelerate leadership readiness and professional effectiveness at every level.",
    path: "/what-we-do/services/pace/professional-coaching",
  },
  {
    icon: Rocket,
    title: "Career Transition Support",
    title2: "Comprehensive Outplacement and Career Transition Services",
    description:
      "Comprehensive outplacement and career transition services including resume building, interview preparation, and job placement support for transitioning employees.",
    path: "/what-we-do/services/pace/career-transition",
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
}
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
    title: "Empowering Careers, One Step at a Time",
    desc: "At Career Advancement Program (CAP360), we believe that a fulfilling career isn’t built by chance — it’s built by strategy, support, and the right tools. We help professionals at every stage, from fresh graduates to seasoned executives, bridge the gap between talent and opportunity.",
  },
  {
    icon: Brain,
    title: "From Resume Service to Career Platform",
    desc: "What started as a resume writing service has evolved into a full-spectrum career growth platform offering personalized coaching, job search support, executive branding, and placement assistance.",
  },
  {
    icon: Target,
    title: "Guiding Careers with Strategy",
    desc: "We have helped hundreds of professionals clarify their direction, build impactful profiles, and secure roles that truly match their potential in a fast-changing and competitive job market.",
  },
  {
    icon: Zap,
    title: "Founded with Purpose (2018)",
    desc: "CAP360 was founded in 2018 with a mission to help professionals achieve their full potential through structured, personalized, and strategic career guidance.",
  },
  {
    icon: Users,
    title: "Leadership with Real Experience",
    desc: "Founded by Gurpriit Singh Anand, who experienced corporate career challenges firsthand and began helping professionals through coaching — turning that insight into a scalable career solution.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Impact Across Industries",
    desc: "We have supported 5,000+ professionals across 25+ industries in securing interviews, negotiating better salaries, and building meaningful, fulfilling careers through personalized attention.",
  },
];

const targetAudiences = [
  "Large Enterprises: Building enterprise-wide career architecture and succession frameworks",
  "Mid-Market Organizations: Scaling career development while maintaining personal connection",
  "Growth-Stage Companies: Creating career clarity that helps you attract and retain top talent",
  "Private Equity Backed Firms: Aligning talent development across portfolio companies",
  "Public Sector Organizations: Driving workforce capability and career progression at scale",
];

const phases = [
  {
    step: "01",
    title: "Discovery & Assessment",
    desc: "We conduct a thorough evaluation of your current career frameworks, talent landscape, and business objectives. This phase identifies gaps, quick wins, and long-term transformation opportunities.",
    icon: Target,
  },
  {
    step: "02",
    title: "Strategy & Planning",
    desc: "Based on our findings, we develop a tailored career development roadmap that prioritizes initiatives, allocates resources, and defines success metrics. Your team stays engaged throughout.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Implementation & Execution",
    desc: "Our teams execute with precision, managing stakeholder communication, change management, and day-to-day operations. We combine your internal knowledge with our external expertise.",
    icon: TrendingUp,
  },
  {
    step: "04",
    title: "Optimization & Support",
    desc: "Post-implementation, we monitor performance, gather feedback, and continuously optimize career programmes. Our support model ensures you realize full value from your investment.",
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
      desc: "career transformation programmes delivered across India.",
    },
    {
      value: "40%",
      desc: "higher employee engagement in organizations with structured career alignment programmes",
    },
    {
      value: "30%",
      desc: "lower attrition rates for companies investing in professional development and career coaching",
    },
    {
      value: "Only 20%",
      desc: "of employees say their organization has a clear and transparent career path framework.",
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
            Empower your people to thrive. PACE aligns individual career
            aspirations with organizational goals, creating a workforce that is
            engaged, purpose-driven, and future-ready.
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
              Explore Programs
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
                Transforming Careers Into a
                <span className="text-cap-green">
                  {" "}
                  Strategic Growth Engine
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-l-2 border-cap-green/40 pl-6">
                <p className="text-[18px] text-muted-white leading-[1.8]">
                  <span className="text-white font-medium">PACE</span>{" "}
                  (Professional Alignment & Career Enhancement) is designed to
                  help organizations move beyond transactional talent management
                  and build{" "}
                  <span className="text-white font-medium">
                    future-ready, high-impact career ecosystems
                  </span>
                  .
                </p>
              </div>

              <div className="border-l-2 border-cap-green/40 pl-6">
                <p className="text-[18px] text-muted-white leading-[1.8]">
                  We go beyond frameworks—partnering with organizations to
                  assess, design, and transform career capabilities, powered by
                  certified coaches and data-driven insights delivering
                  continuous support, innovation, and measurable business
                  outcomes.
                </p>
              </div>
            </div>

            <div className="mt-12 h-[2px] w-16 bg-cap-green" />
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES — MOSAIC GRID ===== */}
    {/* ===== SERVICES — MOSAIC GRID ===== */}
      <section id="services" className="py-24" ref={servicesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[34px] md:text-[40px] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          >
            Reinvent with PACE
          </motion.h2>
          <p className="text-[18px] text-muted-white mb-14 max-w-2xl">
            Six integrated service lines designed to transform every dimension
            of your people's careers. Each service line is modular yet
            interconnected—choose one solution or combine multiple for
            comprehensive transformation.
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
      {/* =====  Why Cap360 (TAB SECTION) ===== */}
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
              Every engagement begins with understanding your unique challenges
              and goals. We follow a structured approach to deliver
              transformation.
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
              From fast-scaling startups to complex enterprises, we partner with
              organizations navigating growth, transformation, and career
              complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-cap-green/20 to-transparent border border-cap-green/30 backdrop-blur-md"
            >
              <p className="text-[17px] text-white font-medium">
                We don't just support careers — we enable business scalability
                through structured people development models.
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

      {/* ===== TRENDING ===== */}
      {/* <section id="trending" className="py-24" ref={trendingRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <motion.h2
              className="text-[34px] md:text-[40px] font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={trendingInView ? { opacity: 1, y: 0 } : {}}
            >
              What's trending with PACE?
            </motion.h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollTrending("left")}
                className="p-2 border border-border/40 text-white/60 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTrending("right")}
                className="p-2 border border-border/40 text-white/60 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[18px] font-semibold text-white hover:gap-3 transition-all"
            >
              View all work{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 bg-cap-green text-background rounded-sm">
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
                    <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.15em] mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-[20px] font-bold text-white leading-snug mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
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
              5,000+ professionals transformed across 25+ industries | Executive
              Coach & Career Strategist | Leadership Development Specialist
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
                  CEO & Founder — CAP360
                </p>
                <div className="space-y-4 mb-8">
                  <p className="text-[17px] text-muted-white leading-[1.8]">
                    Founder and Career Coach at CAP360, dedicated to empowering
                    professionals to unlock their potential and reach new career
                    heights. With deep expertise in executive coaching, strategic
                    career planning, and leadership development, he partners with
                    clients — from rising managers to C-suite leaders — to
                    navigate transitions, strengthen their leadership presence,
                    and achieve purposeful growth.
                  </p>
                  <p className="text-[17px] text-muted-white leading-[1.8]">
                    His approach combines vision, practical insight, and trusted
                    mentorship. To date, CAP360 has helped over 5,000
                    professionals across 25+ industries secure interviews,
                    negotiate better salaries, and build fulfilling careers —
                    powered by industry expertise and personalised attention to
                    each client's unique journey.
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
                      sub: "Guiding professionals through purposeful, high-confidence career moves",
                    },
                    {
                      title: "Leadership Development",
                      sub: "Strengthening leadership presence and long-term growth capability",
                    },
                    {
                      title: "Startup Mentor",
                      sub: "Supporting founders and early-stage leaders with strategic clarity",
                    },
                    {
                      title: "Professional Branding",
                      sub: "Building compelling personal brands that open the right doors",
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
                Transform Your Career with the Right Support
              </h2>
              <p className="text-[18px] text-muted-white mb-8 max-w-xl">
                 Join our career development team and help people build fulfilling,
                purpose-driven careers aligned with their fullest potential.
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
              rel="noopener noreferrer" className="bg-cap-green text-white px-8 py-4 font-semibold hover:bg-cap-green/90 transition-all hover:shadow-lg rounded-md inline-flex items-center gap-2">
                Start Your Journey <ChevronRight className="w-4 h-4" />
              </a>
              <button className="border border-white/20 text-white px-8 py-4 font-semibold hover:border-cap-green/50 hover:bg-cap-green/5 transition-all rounded-md">
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

export default PACE;
