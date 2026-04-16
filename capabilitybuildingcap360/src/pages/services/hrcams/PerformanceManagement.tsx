import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { ArrowRight, Target, BarChart3, Users, Sliders, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/service-hero-hrcams.jpg";
import Performance from "@/assets/Performance.png";

const PerformanceManagement = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Target,
      title: "Goal Setting & OKR Frameworks",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Align individual performance with business strategy through structured goal-setting methodologies that drive clarity and accountability.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">OKR Deployment:</strong> Cascading objectives from leadership to individual contributors.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">KPI Design:</strong> Measurable performance indicators aligned to role expectations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Quarterly Reviews:</strong> Regular check-ins to track progress and recalibrate.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Alignment Dashboards:</strong> Real-time visibility into organisational goal progress.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is a performance culture driven by clarity, alignment, and continuous progress.
          </p>
        </>
      ),
    },
    {
      icon: BarChart3,
      title: "Continuous Feedback & Coaching Culture",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Move beyond annual reviews to a culture of ongoing feedback, coaching conversations, and real-time recognition.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Feedback Frameworks:</strong> Structured models for constructive and developmental feedback.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Manager Coaching:</strong> Training managers to become effective performance coaches.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Recognition Systems:</strong> Peer-to-peer and manager recognition programmes.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is engaged employees who grow through continuous development conversations.
          </p>
        </>
      ),
    },
    {
      icon: Sliders,
      title: "Performance Calibration & Analytics",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Ensure fairness and consistency in performance evaluations through data-driven calibration and advanced analytics.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Calibration Sessions:</strong> Structured cross-functional calibration to eliminate bias.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">9-Box Grid:</strong> Talent mapping for performance vs. potential analysis.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Analytics Dashboards:</strong> Trend analysis, bell curves, and manager effectiveness scores.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is fair, transparent, and data-backed performance decisions.
          </p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Target className="w-8 h-8 text-cap-yellow" />, title: "Strategic goal alignment", desc: "Cascade business objectives into individual goals with clear ownership and measurable outcomes." },
    { icon: <BarChart3 className="w-8 h-8 text-cap-yellow" />, title: "Data-driven evaluations", desc: "Replace subjective reviews with analytics-backed performance assessments and calibration." },
    { icon: <Users className="w-8 h-8 text-cap-yellow" />, title: "Coaching-led culture", desc: "Transform managers into performance coaches who drive continuous development conversations." },
    { icon: <Award className="w-8 h-8 text-cap-yellow" />, title: "Fair reward differentiation", desc: "Link performance outcomes to compensation, promotions, and development opportunities transparently." },
    { icon: <Sliders className="w-8 h-8 text-cap-yellow" />, title: "Continuous improvement", desc: "Build feedback loops that enable real-time course correction and sustained high performance." },
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
      if (w > 0) setOffset(w * (cloneOffset + currentIndex));
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
    if (currentIndex >= cards.length) newIndex = currentIndex - cards.length;
    else if (currentIndex < 0) newIndex = currentIndex + cards.length;
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
      <SubNavbar
        title="Services"
        titlePath="/what-we-do"
        items={[
          { label: "ASER", path: "/what-we-do/services/aser" },
          { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
          { label: "TCB", path: "/what-we-do/services/tcb" },
          { label: "PACE", path: "/what-we-do/services/pace" },
        ]}
      />
      <HRCAMSSubNavbar />

      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">HRCAMS</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-yellow font-semibold">Performance Management</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={heroImg} alt="Performance Management" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Performance Management & Effectiveness
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Build a high-performance culture where goals are clear, feedback is continuous, and every individual contributes to organisational success.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Performance management is the backbone of organisational effectiveness. When done right, it connects individual contributions to strategic outcomes, enables fair reward differentiation, and creates a culture of continuous improvement. Our approach blends proven frameworks with modern tools to build systems that people actually use.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-yellow uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">74%</div>
              <p className="text-mid text-muted-white leading-relaxed">
                of employees feel their performance review is inaccurate, leading to disengagement and attrition in high-performing talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How vision, strategy and implementation are transforming{" "}
            <span className="text-cap-yellow">performance culture</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={Performance} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-yellow mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From annual reviews to continuous performance enablement</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                The traditional annual review is dead. Forward-thinking organisations are replacing once-a-year evaluations with continuous feedback loops, real-time goal tracking, and coaching conversations that happen weekly, not yearly. This shift drives 3x higher engagement and 2x better retention of top performers.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">
            Transform your performance culture
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

export default PerformanceManagement;