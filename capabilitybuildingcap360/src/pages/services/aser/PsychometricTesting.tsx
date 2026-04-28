import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import ASERSubNavbar from "@/components/ASERSubNavbar";
import { ArrowRight, Brain, Fingerprint, PieChart, BarChart3, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import psychometric from "@/assets/psychometric testing.png";
import psychology from "@/assets/psychology.avif";

const PsychometricTesting = () => {
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
      icon: Brain,
      title: "Cognitive & Aptitude Assessments",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">We deploy validated cognitive assessments that measure the mental abilities most predictive of job performance — providing objective data to support selection and development decisions.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Verbal reasoning:</strong> Ability to understand and evaluate written information and draw logical conclusions.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Numerical reasoning:</strong> Capacity to interpret, analyse, and draw conclusions from numerical data.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Abstract reasoning:</strong> Ability to identify patterns, think conceptually, and solve novel problems.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Learning agility:</strong> Assessments that predict how quickly individuals can acquire and apply new knowledge.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is objective cognitive data that predicts job performance and learning potential.</p>
        </>
      ),
    },
    {
      icon: Fingerprint,
      title: "Personality & Behavioural Profiling",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Understanding personality traits helps predict how individuals will behave at work, interact with teams, and respond to challenges. Our profiling tools provide deep insights into work styles and motivational drivers.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Work personality:</strong> Traits that influence job performance, teamwork, and leadership style.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Motivational drivers:</strong> What energises and engages individuals — critical for role fit and retention.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Derailers:</strong> Risk factors that may emerge under pressure or in specific contexts.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Cultural fit:</strong> Alignment between individual values and organisational culture.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a rich understanding of the person behind the CV.</p>
        </>
      ),
    },
    {
      icon: PieChart,
      title: "Emotional Intelligence & Situational Judgement",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">EQ and situational judgement are critical predictors of leadership effectiveness and interpersonal performance. We assess these capabilities using validated, scenario-based instruments.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Self-awareness:</strong> Understanding one's emotions, strengths, and impact on others.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Social skills:</strong> Ability to influence, collaborate, and navigate complex interpersonal dynamics.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Situational judgement:</strong> Custom SJTs simulating real workplace scenarios to evaluate decision-making quality.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-red mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Ethical reasoning:</strong> How individuals navigate moral dilemmas and value conflicts in professional contexts.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is predictive insights into real-world leadership and interpersonal effectiveness.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Brain className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Objective cognitive insights", desc: "Validated assessments that measure reasoning ability and learning agility — the strongest predictors of job performance." },
    { icon: <Fingerprint className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Deep personality understanding", desc: "Comprehensive profiles revealing work styles, motivational drivers, and potential derailers for better role fit decisions." },
    { icon: <PieChart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Emotional intelligence data", desc: "Measure EQ competencies that drive leadership effectiveness, team dynamics, and stakeholder relationships." },
    { icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Reduced hiring risk", desc: "Evidence-based selection that reduces mis-hires and improves the predictive validity of talent decisions." },
    { icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-red" />, title: "Benchmarked talent data", desc: "Compare individual results against industry norms and internal benchmarks for contextualised insights." },
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
        <span className="text-xs text-cap-red font-semibold">Psychometric Testing</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={psychology} alt="Psychometric Testing" className="w-full h-[400px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Psychometric Testing</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Unlock the science of talent. Our psychometric tools provide objective, reliable, and predictive insights into cognitive abilities, personality traits, and emotional intelligence.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">Psychometric testing brings scientific rigour to talent decisions. By measuring cognitive abilities, personality traits, emotional intelligence, and situational judgement, we provide organisations with objective data that complements interviews and assessments — enabling better hiring, development, and succession planning outcomes.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-red uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">82%</div>
              <p className="text-mid text-muted-white leading-relaxed">of Fortune 500 companies use psychometric assessments as part of their talent selection and development processes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-red">talent science</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={psychometric} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-red mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From gut feeling to data-driven talent science</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">Organisations that rely solely on interviews and CVs miss critical dimensions of candidate suitability. Psychometric testing adds layers of objective, validated data — measuring how people think, what drives them, and how they're likely to behave — creating a more complete and predictive picture of talent.</p>
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
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Discover the power of psychometric insights</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Explore testing <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PsychometricTesting;