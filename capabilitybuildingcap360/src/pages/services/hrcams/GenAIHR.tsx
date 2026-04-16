import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { ArrowRight, Bot, Cpu, Zap, BrainCircuit, LineChart, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import hrai from "@/assets/hr-ai.jpg";
import genai from "@/assets/gen-ai.jpg"

const GenAIHR = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Target,
      title: "Organisation Restructuring & Role Clarity",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Organisation design starts with a simple question — is your current
            structure enabling your strategy or holding it back? We help align
            structure with business goals for clarity and efficiency.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Current state diagnostics:</strong> Identifying gaps in structure, roles, and reporting.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Design principles:</strong> Defining the right structure — functional, matrix, or hybrid.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Role clarity:</strong> Clear accountabilities, decision rights, and responsibilities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Span of control:</strong> Optimising team sizes for effective leadership.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a streamlined structure with clear roles and accountability.</p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Staffing Norms & Productivity Benchmarks",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Headcount decisions should be driven by data, not assumptions. We
            help define the right staffing levels aligned to productivity and
            business growth.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Benchmarking:</strong> Revenue-to-headcount comparison with industry standards.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Productivity norms:</strong> Defining output-per-employee benchmarks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Scaling models:</strong> Structured headcount planning as business expands.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is optimal staffing aligned with efficiency and growth.</p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Succession Planning & Leadership Pipeline Mapping",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Succession planning ensures continuity across critical roles, not just
            leadership positions. We help build a strong internal pipeline with
            clear readiness and development plans.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Critical roles:</strong> Identifying positions with highest business impact.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Readiness mapping:</strong> 0–6, 6–12, and 12+ month successor identification.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Development plans:</strong> Structured actions to build future leaders.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Succession dashboards:</strong> Clear visibility for leadership and board review.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a strong leadership pipeline and reduced continuity risk.</p>
        </>
      ),
    },
    {
      icon: Target,
      title: "M&A and Integration HR Advisory",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            M&A brings significant people complexity. We help organisations manage
            integration smoothly while minimising cultural, structural, and
            compliance risks.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">HR due diligence:</strong> Assessing people, compliance, and cultural risks pre-deal.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Cultural integration:</strong> Structured plans to align teams and build a unified culture.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Compensation alignment:</strong> Harmonising pay and policies without attrition risk.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Structural integration:</strong> Designing the combined org structure and operating model.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a smooth integration with minimal disruption and risk.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Bot className="w-8 h-8 text-cap-yellow" />, title: "AI-automated HR workflows", desc: "Eliminate manual processing with intelligent bots that handle queries, approvals, and document generation." },
    { icon: <BrainCircuit className="w-8 h-8 text-cap-yellow" />, title: "Predictive talent insights", desc: "Anticipate attrition, identify high-potential employees, and forecast hiring needs with ML models." },
    { icon: <Cpu className="w-8 h-8 text-cap-yellow" />, title: "Gen AI content & productivity", desc: "Auto-generate policies, JDs, training content, and communications with enterprise-grade AI." },
    { icon: <LineChart className="w-8 h-8 text-cap-yellow" />, title: "Real-time people analytics", desc: "Dashboards that surface actionable insights from employee data across the entire lifecycle." },
    { icon: <Zap className="w-8 h-8 text-cap-yellow" />, title: "Operational efficiency gains", desc: "Reduce HR processing time by 60-80% while improving accuracy and employee satisfaction." },
  ];

  const visibleCards = 3;
  const GAP = 24;

  const infiniteCards = [...cards, ...cards, ...cards];
  const cloneOffset = cards.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselReady, setCarouselReady] = useState(false);
  const isTransitioningRef = useRef(false);

  const getCardWidth = useCallback((): number => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const totalGaps = GAP * (visibleCards - 1);
    return (containerWidth - totalGaps) / visibleCards + GAP;
  }, []);

  useEffect(() => {
    const w = getCardWidth();
    if (w > 0) {
      setOffset(w * cloneOffset);
      setCarouselReady(true);
    }
  }, [getCardWidth, cloneOffset]);

  useEffect(() => {
    const onResize = () => {
      const w = getCardWidth();
      if (w > 0) {
        setOffset(w * (cloneOffset + currentIndex));
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getCardWidth, cloneOffset, currentIndex]);

  const slideTo = useCallback(
    (newIndex: number) => {
      if (isTransitioningRef.current) return;
      const w = getCardWidth();
      if (w === 0) return;
      isTransitioningRef.current = true;
      setIsTransitioning(true);
      setCurrentIndex(newIndex);
      setOffset(w * (cloneOffset + newIndex));
    },
    [getCardWidth, cloneOffset]
  );

  const handleNext = useCallback(() => slideTo(currentIndex + 1), [currentIndex, slideTo]);
  const handlePrev = useCallback(() => slideTo(currentIndex - 1), [currentIndex, slideTo]);

  const handleTransitionEnd = useCallback(() => {
    const w = getCardWidth();
    let newIndex = currentIndex;
    if (currentIndex >= cards.length) {
      newIndex = currentIndex - cards.length;
    } else if (currentIndex < 0) {
      newIndex = currentIndex + cards.length;
    }
    if (newIndex !== currentIndex) {
      setIsTransitioning(false);
      setCurrentIndex(newIndex);
      setOffset(w * (cloneOffset + newIndex));
    } else {
      setIsTransitioning(false);
    }
    isTransitioningRef.current = false;
  }, [currentIndex, cards.length, getCardWidth, cloneOffset]);
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar title="Services" titlePath="/what-we-do" items={[
        { label: "ASER", path: "/what-we-do/services/aser" },
        { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
        { label: "TCB", path: "/what-we-do/services/tcb" },
        { label: "PACE", path: "/what-we-do/services/pace" },
      ]} />
      <HRCAMSSubNavbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">HRCAMS</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-yellow font-semibold">Gen AI for HR</span>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={genai} alt="Gen AI HR" className="w-full h-[450px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Gen AI for HR & Operational Productivity
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Harness the power of generative AI and machine learning to transform HR operations, predict workforce trends, and boost enterprise productivity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stat section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Generative AI is not a future promise — it's a present reality transforming how HR operates. From automated candidate screening to predictive attrition models, AI is enabling HR teams to move from administrative processors to strategic business partners.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-yellow uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">76%</div>
              <p className="text-mid text-muted-white leading-relaxed">
                of HR leaders say AI will fundamentally change how their function operates within the next 2 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How vision, strategy and implementation are transforming{" "}
            <span className="text-cap-yellow">HR with AI</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={hrai} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-yellow mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From manual processes to intelligent automation</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                The most impactful AI implementations in HR aren't flashy chatbots — they're the invisible automations that eliminate thousands of hours of manual work. Smart document processing, intelligent routing, and predictive analytics are turning HR from a cost centre into a strategic advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20" ref={sRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[28px] md:text-[36px] font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={sInView ? { opacity: 1, y: 0 } : {}}
          >
            How We Support Your Growth
          </motion.h2>
          <div className="border-t border-border/30">
            {solutions.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <div key={item.title} className="border-b border-border/30 relative">
                  {isOpen && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cap-yellow"
                      layoutId="accordionBar"
                    />
                  )}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                    className="flex justify-between items-center w-full text-left cursor-pointer py-5 pl-4"
                  >
                    <span className="text-[25px] font-semibold">{item.title}</span>
                    <span className="text-2xl text-cap-yellow font-light w-8 text-center">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-8 pb-6 text-[20px]">{item.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Infinite carousel section ───────────────────────────────────────── */}
      <section className="py-20 bg-card/30" ref={bRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[28px] md:text-[36px] font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={bInView ? { opacity: 1, y: 0 } : {}}
          >
            What you'll achieve
          </motion.h2>

          <div className="overflow-hidden" ref={containerRef}>
            <div
              ref={trackRef}
              className="flex gap-6"
              style={{
                transform: `translateX(-${offset}px)`,
                transition: isTransitioning ? "transform 500ms ease" : "none",
                visibility: carouselReady ? "visible" : "hidden",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {infiniteCards.map((card, i) => (
                <div
                  key={i}
                  data-card
                  className="bg-card border border-border/30 p-8 flex-shrink-0"
                  style={{
                    width: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                    minWidth: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                  }}
                >
                  {card.icon}
                  <h3 className="text-[24px] font-bold mt-4 mb-2">{card.title}</h3>
                  <p className="text-[18px] text-muted-white leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-lg"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-lg"
            >
              →
            </button>
          </div>
        </div>
      </section>
      {/* ─────────────────────────────────────────────────────────────────────── */}

      {/* CTA */}
      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">
            Unlock AI-powered HR transformation
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all"
          >
            Get started <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenAIHR;