import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import TCBSubNavbar from "@/components/TCBSubNavbar";
import { ArrowRight, Lightbulb, Palette, Rocket, FlaskConical, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import innovation from "@/assets/invention-design.jpg";
import creativecapability from "@/assets/creativecapability.png";

const InnovationDesignThinking = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Lightbulb,
      title: "Design Thinking Workshops",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Immersive workshops teaching human-centered design methodology - empathize, define, ideate, prototype, and test.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Empathy Mapping:</strong> Deep customer research and persona development for human-centered solutions.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Ideation Sprints:</strong> Structured brainstorming with convergent and divergent thinking techniques.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Rapid Prototyping:</strong> Build and test low-fidelity prototypes in days, not months.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a repeatable innovation process that solves real customer problems.</p>
        </>
      ),
    },
    {
      icon: Rocket,
      title: "Intrapreneurship Programmes",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Build internal innovation ecosystems with idea incubation, pitch competitions, and seed funding processes.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Idea Platforms:</strong> Digital idea submission, voting, and development tracking systems.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Innovation Sprints:</strong> Time-boxed innovation projects with cross-functional teams.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Pitch Days:</strong> Dragon's Den-style events where teams pitch to leadership for funding.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a thriving innovation culture that generates and scales new ideas.</p>
        </>
      ),
    },
    {
      icon: FlaskConical,
      title: "Innovation Culture Development",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Transform organisational mindset with psychological safety, fail-fast experimentation, and innovation metrics.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Safety to Fail:</strong> Build environments where experimentation is encouraged and failure is a learning tool.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Innovation Metrics:</strong> Track innovation pipeline health, idea-to-launch velocity, and ROI.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Leadership Buy-in:</strong> Executive sponsorship frameworks and innovation governance models.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is an organisation where innovation is everyone's job, not a separate function.</p>
        </>
      ),
    },
  ];

  // ─── Responsive visible cards ─────────────────────────────────────────────
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

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Design thinking capability", desc: "Embed human-centered design as a core problem-solving approach across the organisation." },
    { icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Internal innovation pipeline", desc: "Create structured pathways from idea to implementation with intrapreneurship programmes." },
    { icon: <FlaskConical className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Experimentation culture", desc: "Build a fail-fast, learn-fast culture that accelerates innovation velocity." },
    { icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Creative problem-solving", desc: "Equip teams with lateral thinking and structured creativity techniques." },
    { icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Innovation ROI", desc: "Measure and demonstrate the business impact of innovation investments." },
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
    if (w > 0) { setOffset(w * cloneOffset); setCarouselReady(true); }
  }, [getCardWidth, cloneOffset]);

  useEffect(() => {
    setIsTransitioning(false);
    isTransitioningRef.current = false;
    setCurrentIndex(0);
    const w = getCardWidth();
    if (w > 0) { setOffset(w * cloneOffset); setCarouselReady(true); }
  }, [visibleCards]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onResize = () => { const w = getCardWidth(); if (w > 0) setOffset(w * (cloneOffset + currentIndex)); };
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
    if (newIndex !== currentIndex) { setIsTransitioning(false); setCurrentIndex(newIndex); setOffset(w * (cloneOffset + newIndex)); }
    else setIsTransitioning(false);
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
      <TCBSubNavbar />

      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">TCB</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-blue font-semibold">Innovation & Design Thinking</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={innovation} alt="Innovation" className="w-full h-[450px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Innovation & Design Thinking</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Unlock creative potential across your organisation. Our design thinking programmes turn complex challenges into innovative, human-centered solutions.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">Innovation isn't a department - it's a mindset. The most innovative organisations don't wait for breakthroughs; they systematically build the culture, skills, and processes that make innovation predictable and repeatable. Our approach combines design thinking methodology with intrapreneurship frameworks to unlock creative potential at every level.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-blue uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">84%</div>
              <p className="text-mid text-muted-white leading-relaxed">of executives say innovation is important to growth, but only 6% are satisfied with their innovation performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-blue">creative capability</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={creativecapability} alt="Vision" className="w-full h-[450px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-blue mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From ad-hoc ideas to systematic innovation</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">The most innovative companies don't rely on random eureka moments. They build innovation systems - structured processes for identifying problems, generating ideas, testing prototypes, and scaling solutions. Design thinking provides the methodology; intrapreneurship provides the engine.</p>
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
                  {isOpen && <motion.div className="absolute left-0 top-0 bottom-0 w-1 bg-cap-blue" layoutId="accordionBar" />}
                  <button onClick={() => setActiveIndex(isOpen ? null : i)} className="flex justify-between items-center w-full text-left cursor-pointer py-5 pl-4">
                    <span className="text-[25px] font-semibold">{item.title}</span>
                    <span className="text-2xl text-cap-blue font-light w-8 text-center">{isOpen ? "–" : "+"}</span>
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

      {/* ── Infinite carousel section ───────────────────────────────────────── */}
      <section className="py-10 sm:py-14 md:py-20 bg-card/30" ref={bRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-bold mb-6 sm:mb-8 md:mb-10" initial={{ opacity: 0, y: 20 }} animate={bInView ? { opacity: 1, y: 0 } : {}}>What you'll achieve</motion.h2>

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
                    width: visibleCards === 1 ? "100%" : `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                    minWidth: visibleCards === 1 ? "100%" : `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                    overflow: "hidden",
                    wordBreak: "break-word",
                  }}
                >
                  {card.icon}
                  <h3 className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] font-bold mt-3 sm:mt-4 mb-1 sm:mb-2 leading-snug">{card.title}</h3>
                  <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-muted-white leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
            <button onClick={handlePrev} aria-label="Previous slide" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-sm sm:text-base md:text-lg">←</button>
            <button onClick={handleNext} aria-label="Next slide" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-sm sm:text-base md:text-lg">→</button>
          </div>
        </div>
      </section>
      {/* ─────────────────────────────────────────────────────────────────────── */}

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Ignite innovation across your organisation</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InnovationDesignThinking;