import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import TCBSubNavbar from "@/components/TCBSubNavbar";
import { ArrowRight, Users, MessageSquare, Handshake, Zap, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import team from "@/assets/Team-Effectiveness.png";
import teambuilding from "@/assets/team-building.png";

const TeamEffectiveness = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Users,
      title: "High-Performing Team Workshops",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Facilitated sessions that build trust, clarify roles, and establish team norms for sustained high performance.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Team Diagnostics:</strong> Assess team health across trust, conflict, commitment, accountability, and results.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Role Clarity:</strong> Define accountabilities, decision rights, and collaboration protocols.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Team Charter:</strong> Co-create operating principles, meeting norms, and communication standards.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a cohesive team aligned around shared goals and mutual accountability.</p>
        </>
      ),
    },
    {
      icon: MessageSquare,
      title: "Communication & Feedback Culture",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Training programmes that develop psychological safety, constructive feedback habits, and transparent communication.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Psychological Safety:</strong> Build environments where people feel safe to speak up, challenge, and experiment.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Feedback Skills:</strong> Radical candour, SBI model, and feedforward techniques for all team members.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Conflict Resolution:</strong> Constructive disagreement frameworks that turn conflict into collaboration.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is teams that communicate openly and resolve issues before they escalate.</p>
        </>
      ),
    },
    {
      icon: Handshake,
      title: "Cross-Functional Collaboration",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Break down silos with structured collaboration frameworks and inter-departmental alignment programmes.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Shared OKRs:</strong> Align cross-functional teams around common objectives and key results.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Collaboration Labs:</strong> Design sprints that bring together diverse teams to solve real problems.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Network Analysis:</strong> Map collaboration patterns and identify bottlenecks in information flow.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is seamless collaboration that drives faster, better business outcomes.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Users className="w-8 h-8 text-cap-blue" />, title: "High-performing teams", desc: "Build cohesive teams with clear roles, shared accountability, and trust-based dynamics." },
    { icon: <MessageSquare className="w-8 h-8 text-cap-blue" />, title: "Open feedback culture", desc: "Create psychological safety where honest communication drives continuous improvement." },
    { icon: <Handshake className="w-8 h-8 text-cap-blue" />, title: "Cross-functional alignment", desc: "Break silos with shared objectives and structured collaboration frameworks." },
    { icon: <Zap className="w-8 h-8 text-cap-blue" />, title: "Agile team dynamics", desc: "Equip teams with agile ways of working for faster delivery and adaptation." },
    { icon: <Target className="w-8 h-8 text-cap-blue" />, title: "Measurable team outcomes", desc: "Track team effectiveness with diagnostics, pulse surveys, and performance metrics." },
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
    if (w > 0) { setOffset(w * cloneOffset); setCarouselReady(true); }
  }, [getCardWidth, cloneOffset]);

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
      <SubNavbar title="Services" titlePath="/what-we-do" items={[{ label: "ASER", path: "/what-we-do/services/aser" }, { label: "HRCAMS", path: "/what-we-do/services/hrcams" }, { label: "TCB", path: "/what-we-do/services/tcb" }, { label: "PACE", path: "/what-we-do/services/pace" }]} />
      <TCBSubNavbar />

      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">TCB</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-blue font-semibold">Team Effectiveness</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={team} alt="Team Effectiveness" className="w-full h-[400px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Team Effectiveness & Collaboration</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Transform groups into high-performing teams. We build the trust, communication, and collaboration skills that drive extraordinary results.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">Team effectiveness is the multiplier that turns individual talent into collective performance. Research consistently shows that how teams work together matters more than who is on the team. Our approach builds the foundations of trust, communication, and accountability that high-performing teams need.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-blue uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">5x</div>
              <p className="text-mid text-muted-white leading-relaxed">high-performing teams deliver 5x more output than average teams — the difference is in how they work together, not who they are.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-blue">team dynamics</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={teambuilding} alt="Vision" className="w-full h-[450px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-blue mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From individual stars to collective intelligence</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">Google's Project Aristotle proved that the best teams aren't made up of the smartest individuals — they're teams with psychological safety, dependability, structure, meaning, and impact. We apply these research-backed principles to transform your team dynamics.</p>
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

      <section className="py-20 bg-card/30" ref={bRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[28px] md:text-[36px] font-bold mb-10" initial={{ opacity: 0, y: 20 }} animate={bInView ? { opacity: 1, y: 0 } : {}}>What you'll achieve</motion.h2>
          <div className="overflow-hidden" ref={containerRef}>
            <div ref={trackRef} className="flex gap-6" style={{ transform: `translateX(-${offset}px)`, transition: isTransitioning ? "transform 500ms ease" : "none", visibility: carouselReady ? "visible" : "hidden" }} onTransitionEnd={handleTransitionEnd}>
              {infiniteCards.map((card, i) => (
                <div key={i} data-card className="bg-card border border-border/30 p-8 flex-shrink-0" style={{ width: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`, minWidth: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})` }}>
                  {card.icon}
                  <h3 className="text-[24px] font-bold mt-4 mb-2">{card.title}</h3>
                  <p className="text-[18px] text-muted-white leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={handlePrev} className="w-10 h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-lg">←</button>
            <button onClick={handleNext} className="w-10 h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-lg">→</button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Build teams that deliver extraordinary results</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamEffectiveness;