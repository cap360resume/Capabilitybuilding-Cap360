import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import TCBSubNavbar from "@/components/TCBSubNavbar";
import { ArrowRight, BookOpen, Monitor, Gamepad2, BarChart3, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import learning from "@/assets/learning.png";
import Learningdesign from "@/assets/learning-design.png";

const LearningExperienceDesign = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: BookOpen,
      title: "Curriculum Architecture",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Design learning journeys with clear outcomes, progressive complexity, and blended modalities that maximise retention.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Learning Paths:</strong> Role-based, skill-based, and competency-based curriculum design.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Blended Learning:</strong> Optimal mix of instructor-led, self-paced, social, and experiential learning.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Microlearning:</strong> Bite-sized, mobile-first content for just-in-time learning at the point of need.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is learning journeys that drive real skill development and behaviour change.</p>
        </>
      ),
    },
    {
      icon: Monitor,
      title: "Digital Learning Platforms",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Build and deploy custom e-learning experiences with interactive modules, video content, and adaptive paths.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">LXP Design:</strong> Learning experience platform configuration and content curation.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Interactive Content:</strong> Scenario-based modules, simulations, and branching narratives.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">AI Personalisation:</strong> Adaptive learning paths that adjust to individual pace and preferences.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is engaging digital learning that people choose to use, not have to use.</p>
        </>
      ),
    },
    {
      icon: Gamepad2,
      title: "Gamification & Engagement",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Integrate game mechanics to drive learner motivation, engagement, and completion rates.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Points & Badges:</strong> Achievement systems that recognise effort and milestone completion.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Leaderboards:</strong> Competitive elements that drive healthy engagement and social learning.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Challenges & Quests:</strong> Progressive difficulty levels that maintain engagement through mastery loops.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is 3x higher completion rates and sustained learning engagement.</p>
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
    { icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Outcome-driven curricula", desc: "Learning paths designed backwards from business outcomes to skill requirements." },
    { icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Engaging digital experiences", desc: "Interactive, scenario-based e-learning that drives real skill development." },
    { icon: <Gamepad2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Gamified learning journeys", desc: "Game mechanics that boost engagement, completion, and knowledge retention." },
    { icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "Learning analytics & ROI", desc: "Measure learning effectiveness with data on engagement, skills, and business impact." },
    { icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-blue" />, title: "AI-personalised learning", desc: "Adaptive paths that adjust to individual pace, preferences, and learning style." },
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
        <span className="text-xs text-cap-blue font-semibold">Learning Experience Design</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={learning} alt="LXD" className="w-full h-[400px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Learning Experience Design</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Create learning experiences that stick. We design engaging, outcome-driven programmes that transform how your people learn and grow.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">The average employee forgets 70% of training content within 24 hours and 90% within a week. Traditional learning design fails because it focuses on content delivery rather than experience design. Our LXD approach puts the learner at the center, creating memorable, engaging experiences that drive lasting behaviour change.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-blue uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">90%</div>
              <p className="text-mid text-muted-white leading-relaxed">of traditional training content is forgotten within one week — LXD-designed programmes achieve 3x better retention.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-blue">learning design</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={Learningdesign} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-blue mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From content delivery to experience design</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">Learning experience design borrows from UX design, behavioural science, and game design to create programmes people want to engage with. By focusing on learner motivation, contextual relevance, and spaced practice, LXD-designed programmes deliver measurably better outcomes.</p>
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
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Design learning that transforms performance</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LearningExperienceDesign;