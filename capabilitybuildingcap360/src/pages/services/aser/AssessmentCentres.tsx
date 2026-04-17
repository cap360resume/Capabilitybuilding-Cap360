import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import ASERSubNavbar from "@/components/ASERSubNavbar";
import { ArrowRight, Target, Users, Layers, BarChart3, Award, ClipboardList, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import aser3 from "@/assets/aser3.avif";
import aser4 from "@/assets/aser4.avif";

const AssessmentCentres = () => {
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
      icon: Layers,
      title: "Bespoke Assessment Centre Design",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Every organisation has unique leadership and talent requirements. We design custom assessment centres that reflect your business context, culture, and strategic priorities.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Role analysis:</strong> Deep-dive into target roles to identify critical success factors.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Exercise design:</strong> Custom simulations, case studies, role plays, and group exercises.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Assessor training:</strong> Calibrated assessor panels trained on your competency framework.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Logistics management:</strong> End-to-end coordination from scheduling to technology setup.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a rigorous, fair, and business-relevant assessment experience.</p>
        </>
      ),
    },
    {
      icon: Users,
      title: "Development Centre Programmes",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Development centres shift the focus from selection to growth — providing participants with deep self-awareness and actionable development insights.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Strengths discovery:</strong> Exercises designed to surface hidden strengths and leadership potential.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Feedback sessions:</strong> Real-time coaching and structured feedback from trained assessors.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Development planning:</strong> Personalised development plans created during the centre itself.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Follow-up support:</strong> Post-centre coaching sessions to sustain development momentum.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is accelerated leadership growth and talent pipeline readiness.</p>
        </>
      ),
    },
    {
      icon: BarChart3,
      title: "Virtual & Hybrid Assessment Solutions",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Our virtual and hybrid assessment centres maintain the rigour of in-person programmes while offering flexibility, scalability, and cost efficiency.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Technology platform:</strong> Purpose-built virtual assessment environments with integrated observation tools.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Digital exercises:</strong> Online simulations, virtual group discussions, and async video assessments.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Global reach:</strong> Assess candidates across time zones without travel barriers.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Data security:</strong> Enterprise-grade security and privacy compliance.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is flexible, high-quality assessment at scale.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Target className="w-8 h-8 text-cap-red" />, title: "Bespoke assessment design", desc: "Custom centres built around your business context, competency framework, and specific role requirements." },
    { icon: <Award className="w-8 h-8 text-cap-red" />, title: "Accelerated leadership pipeline", desc: "Identify high-potential talent earlier and build robust succession pipelines through development centres." },
    { icon: <ClipboardList className="w-8 h-8 text-cap-red" />, title: "Objective selection decisions", desc: "Reduce bias in hiring and promotion with standardised, multi-method assessment processes." },
    { icon: <CheckCircle className="w-8 h-8 text-cap-red" />, title: "Actionable development insights", desc: "Rich individual feedback reports with clear development recommendations and coaching pathways." },
    { icon: <Layers className="w-8 h-8 text-cap-red" />, title: "Scalable virtual delivery", desc: "Hybrid and fully virtual assessment centres that maintain rigour while reducing cost and complexity." },
  ];

  const GAP = visibleCards === 1 ? 16 : 24;
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
  }, [GAP, visibleCards]);

  // Initial setup
  useEffect(() => {
    const w = getCardWidth();
    if (w > 0) {
      setOffset(w * cloneOffset);
      setCarouselReady(true);
    }
  }, [getCardWidth, cloneOffset]);

  // Re-calculate when visibleCards changes (breakpoint switch)
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

  // Handle window resize without breakpoint change
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
        <span className="text-xs text-cap-red font-semibold">Assessment & Development Centres</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={aser3} alt="Assessment & Development Centres" className="w-full h-[400px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Assessment & Development Centres</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Identify, evaluate, and develop talent through immersive, multi-method assessment experiences that predict real-world performance and accelerate leadership readiness.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">Assessment and development centres combine multiple evaluation methods — simulations, exercises, interviews, and psychometrics — into an integrated programme that provides the most comprehensive view of an individual's capabilities. Whether for selection, promotion, or development, our centres deliver the insights organisations need to make high-stakes talent decisions with confidence.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-red uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">3×</div>
              <p className="text-mid text-muted-white leading-relaxed">Assessment centres are 3× more predictive of job performance than traditional interviews alone, according to meta-analytic research.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-red">talent identification</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={aser4} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-red mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From interviews to immersive evaluation</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">Traditional selection processes fail to capture the complexity of leadership and high-impact roles. Assessment centres create a controlled environment where candidates demonstrate competencies through realistic business scenarios — providing rich, observable evidence that traditional methods simply cannot match.</p>
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

      {/* ── "What you'll achieve" carousel — fully responsive ── */}
      <section className="py-10 sm:py-14 md:py-20 bg-card/30" ref={bRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading — 4-step responsive scale */}
          <motion.h2
            className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-bold mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={bInView ? { opacity: 1, y: 0 } : {}}
          >
            What you'll achieve
          </motion.h2>

          {/* Carousel wrapper — clips the sliding track */}
          <div className="overflow-hidden w-full" ref={containerRef}>
            <div
              ref={trackRef}
              className="flex"
              style={{
                /* Gap is applied via inline style so JS offset calc always stays in sync */
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
                    width: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                    minWidth: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                  }}
                >
                  {/* Icon wrapper scales the SVG at each breakpoint */}
                  <div className="[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">
                    {card.icon}
                  </div>

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

          {/* Navigation buttons — scale with breakpoint */}
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
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Design your next assessment centre</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AssessmentCentres;