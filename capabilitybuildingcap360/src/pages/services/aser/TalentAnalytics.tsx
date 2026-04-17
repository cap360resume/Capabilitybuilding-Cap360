import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import ASERSubNavbar from "@/components/ASERSubNavbar";
import { ArrowRight, BarChart3, TrendingUp, Database, PieChart, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import benchmarking from "@/assets/benchmarking.png";
import talenbenchmarking from "@/assets/Talent benchmarking.png";

const TalentAnalytics = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ── Responsive visible cards ──────────────────────────────────────────────
  const [visibleCards, setVisibleCards] = useState(3);
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCards(1);
      else if (w < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const solutions = [
    {
      icon: Database,
      title: "Talent Data Infrastructure & Integration",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">We help you build the data foundations needed for meaningful talent analytics — integrating disparate HR data sources into a unified, accessible platform.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Data audit:</strong> Assess current talent data quality, completeness, and accessibility.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Integration design:</strong> Connect HRIS, ATS, LMS, and performance data into a unified analytics layer.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Data governance:</strong> Establish data quality standards, ownership, and privacy compliance.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Metric design:</strong> Define KPIs and leading indicators aligned to workforce strategy.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a solid data foundation for strategic workforce decisions.</p>
        </>
      ),
    },
    {
      icon: TrendingUp,
      title: "Predictive Workforce Analytics",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Move beyond descriptive reporting to predictive models that anticipate workforce trends — enabling proactive talent management.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Attrition modelling:</strong> Predict flight risk at individual and team levels with actionable retention insights.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Performance prediction:</strong> Identify factors that drive high performance and replicate success patterns.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Skills gap forecasting:</strong> Project future capability needs based on business strategy.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Workforce planning:</strong> Scenario modelling for headcount, costs, and capability requirements.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is forward-looking talent intelligence that enables proactive decisions.</p>
        </>
      ),
    },
    {
      icon: BarChart3,
      title: "Benchmarking & Talent Market Intelligence",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Understand how your talent practices compare to industry peers — using external benchmarks to calibrate your talent strategy.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Compensation benchmarking:</strong> Market data analysis for pay equity and competitive positioning.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Engagement benchmarks:</strong> Compare engagement scores against industry and regional norms.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Talent flow analysis:</strong> Track where talent is coming from and going to in your industry.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Best practice insights:</strong> Learn from leading organisations' talent strategies.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is competitive talent intelligence for strategic advantage.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Unified talent data platform", desc: "Integrated HR data from multiple sources providing a single view of your workforce and talent pipeline." },
    { icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Predictive workforce insights", desc: "Anticipate attrition, performance trends, and skills gaps before they impact business outcomes." },
    { icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Competitive benchmarking", desc: "Understand how your talent practices compare to market peers for strategic positioning." },
    { icon: <PieChart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Executive-ready dashboards", desc: "Visual analytics that communicate workforce insights to leadership in clear, actionable formats." },
    { icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Data-driven talent strategy", desc: "Transform talent management from reactive to strategic with evidence-based decision frameworks." },
  ];

  const GAP = visibleCards === 1 ? 0 : 24;

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
    if (visibleCards === 1) return containerWidth;
    const totalGaps = GAP * (visibleCards - 1);
    return (containerWidth - totalGaps) / visibleCards + GAP;
  }, [GAP, visibleCards]);

  useEffect(() => {
    const w = getCardWidth();
    if (w > 0) {
      setOffset(w * cloneOffset);
      setCarouselReady(true);
    }
  }, [getCardWidth, cloneOffset]);

  useEffect(() => {
    setIsTransitioning(false);
    isTransitioningRef.current = false;
    setCurrentIndex(0);
    const w = getCardWidth();
    if (w > 0) {
      setOffset(w * cloneOffset);
      setCarouselReady(true);
    }
  }, [visibleCards]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onResize = () => {
      const w = getCardWidth();
      if (w > 0) setOffset(w * (cloneOffset + currentIndex));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getCardWidth, cloneOffset, currentIndex]);

  const slideTo = useCallback((newIndex: number) => {
    if (isTransitioningRef.current) return;
    const w = getCardWidth();
    if (w === 0) return;
    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setOffset(w * (cloneOffset + newIndex));
  }, [getCardWidth, cloneOffset]);

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
      <SubNavbar title="Services" titlePath="/what-we-do" items={[
        { label: "ASER", path: "/what-we-do/services/aser" },
        { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
        { label: "TCB", path: "/what-we-do/services/tcb" },
        { label: "PACE", path: "/what-we-do/services/pace" },
      ]} />
      <ASERSubNavbar />

      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">ASER</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-red font-semibold">Talent Analytics & Benchmarking</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={benchmarking} alt="Talent Analytics & Benchmarking" className="w-full h-[400px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Talent Analytics & Benchmarking</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Turn talent data into strategic advantage. Our analytics and benchmarking services transform workforce data into predictive insights that drive better talent decisions.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">Talent analytics transforms raw HR data into strategic intelligence. By integrating data across your talent ecosystem — from recruitment and performance to engagement and attrition — we help organisations move from reactive reporting to predictive, prescriptive workforce management.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-red uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">5×</div>
              <p className="text-mid text-muted-white leading-relaxed">Organisations with mature talent analytics capabilities are 5× more likely to make faster, higher-quality talent decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-red">talent intelligence</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={talenbenchmarking} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-red mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From spreadsheet reporting to strategic workforce intelligence</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">Most organisations have more talent data than they realise — but it's trapped in silos, inconsistent in quality, and rarely analysed beyond basic reporting. We help organisations unlock the full potential of their talent data, building analytics capabilities that drive strategic workforce planning and competitive advantage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" ref={sRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[28px] md:text-[36px] font-bold mb-10" initial={{ opacity: 0, y: 20 }} animate={sInView ? { opacity: 1, y: 0 } : {}}>How We Support Your Growth</motion.h2>
          <div className="border-t border-border/30">
            {solutions.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <div key={item.title} className="border-b border-border/30 relative">
                  {isOpen && <motion.div className="absolute left-0 top-0 bottom-0 w-1 bg-cap-red" layoutId="accordionBar" />}
                  <button onClick={() => setActiveIndex(isOpen ? null : i)} className="flex justify-between items-center w-full text-left cursor-pointer py-5 pl-4">
                    <span className="text-[25px] font-semibold">{item.title}</span>
                    <span className="text-2xl text-cap-red font-light w-8 text-center">{isOpen ? "–" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
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

      {/* ── "What you'll achieve" carousel ── */}
      <section className="py-10 sm:py-14 md:py-20 bg-card/30" ref={bRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.h2
            className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-bold mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={bInView ? { opacity: 1, y: 0 } : {}}
          >
            What you'll achieve
          </motion.h2>

          <div className="overflow-hidden w-full" ref={containerRef}>
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: `${GAP}px`,
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
                  className="bg-card border border-border/30 flex-shrink-0 flex flex-col p-4 sm:p-6 md:p-8"
                  style={{
                    width: visibleCards === 1
                      ? "100%"
                      : `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                    minWidth: visibleCards === 1
                      ? "100%"
                      : `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                    overflow: "hidden",
                    wordBreak: "break-word",
                  }}
                >
                  {card.icon}

                  <h3 className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] font-bold mt-3 sm:mt-4 mb-1 sm:mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-muted-white leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-sm sm:text-base md:text-lg"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-sm sm:text-base md:text-lg"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Unlock the power of your talent data</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TalentAnalytics;