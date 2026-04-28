import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import ASERSubNavbar from "@/components/ASERSubNavbar";
import { ArrowRight, Target, ClipboardList, Users, BarChart3, Shield, CheckCircle, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/service-hero-aser.jpg";
import aser1 from "@/assets/Aser-1.avif";

const CompetencyAssessments = () => {
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
      icon: Target,
      title: "Competency Framework Design",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">We design robust competency frameworks tailored to your organisation's strategy, culture, and role requirements — ensuring assessments measure what truly matters.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Role mapping:</strong> Identify critical competencies for each role family and level.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Behavioural indicators:</strong> Define observable, measurable behaviours for each competency level.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Proficiency scales:</strong> Create clear progression ladders from foundational to expert levels.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Validation:</strong> Stakeholder workshops and pilot testing to ensure framework accuracy.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a validated, organisation-specific competency architecture.</p>
        </>
      ),
    },
    {
      icon: ClipboardList,
      title: "Multi-Method Assessment Delivery",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">We deploy a blend of assessment methodologies to ensure comprehensive, reliable evaluation of competencies across all levels of your organisation.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">360° feedback:</strong> Multi-rater assessments capturing perspectives from managers, peers, and direct reports.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Structured interviews:</strong> Behavioural event interviews aligned to competency frameworks.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Simulation exercises:</strong> Role plays, case studies, and in-basket exercises for real-world evaluation.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Digital assessments:</strong> Online platforms for scalable, standardised competency measurement.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is objective, multi-dimensional competency insights.</p>
        </>
      ),
    },
    {
      icon: Users,
      title: "Insights, Reporting & Development Planning",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Assessment data is only valuable when it drives action. We deliver rich analytics and structured development recommendations that connect assessment outcomes to business priorities.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Individual reports:</strong> Detailed competency profiles with strengths, gaps, and development recommendations.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Organisation heatmaps:</strong> Aggregate competency data across teams, functions, and levels.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Talent calibration:</strong> Data-driven inputs for succession planning and talent reviews.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Development roadmaps:</strong> Prioritised learning paths based on competency gaps.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is actionable talent intelligence that drives development and decisions.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Validated competency frameworks", desc: "Organisation-specific competency models aligned to strategy, culture, and role requirements for accurate talent assessment." },
    { icon: <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Objective talent evaluation", desc: "Multi-method assessments that eliminate bias and deliver reliable, comparable competency data across the workforce." },
    { icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Data-driven talent decisions", desc: "Rich analytics and heatmaps that inform succession planning, talent reviews, and strategic workforce investments." },
    { icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Targeted development plans", desc: "Personalised development roadmaps based on assessed competency gaps, linked to business-critical capability needs." },
    { icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Scalable assessment solutions", desc: "Digital and in-person assessment platforms that scale from team-level evaluations to enterprise-wide programmes." },
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
     <SubNavbar
        title="Services"
        titlePath="/what-we-do"
        items={[
          { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
          { label: "PACE", path: "/what-we-do/services/pace" },
          { label: "TCB", path: "/what-we-do/services/tcb" },
          { label: "ASER", path: "/what-we-do/services/aser" },
          {
            label: "HIRETEK",
            path: "https://www.hiretek.in/",
            external: true,
          },
        ]}
      />
      <ASERSubNavbar />

      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">ASER</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-red font-semibold">Competency-Based Assessments</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={heroImg} alt="Competency-Based Assessments" className="w-full h-[400px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Competency-Based Assessments</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Measure what matters. Our competency-based assessments provide objective, reliable insights into your workforce capabilities — powering better hiring, development, and succession decisions.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">Competency-based assessments go beyond traditional evaluations by measuring the specific behaviours, skills, and attributes that predict success in each role. Our approach combines validated frameworks with multi-method assessment delivery — providing organisations with the talent intelligence they need to make confident people decisions.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-red uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">74%</div>
              <p className="text-mid text-muted-white leading-relaxed">of organisations using competency-based assessments report significantly improved quality of hire and internal talent mobility outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-red">talent assessment</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={aser1} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-red mb-6" />
              <h3 className="text-[22px] font-bold mb-4">Move from subjective judgment to evidence-based evaluation</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">Traditional assessments often rely on gut feeling and unstructured interviews, leading to inconsistent hiring and promotion decisions. Competency-based assessments establish a common language for talent, enabling objective evaluation against validated behavioural indicators — reducing bias and improving prediction of on-the-job performance.</p>
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
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Elevate your talent assessment strategy</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CompetencyAssessments;