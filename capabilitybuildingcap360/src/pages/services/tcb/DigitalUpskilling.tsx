import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import TCBSubNavbar from "@/components/TCBSubNavbar";
import { ArrowRight, Monitor, Code, Database, Cloud, BarChart3, Shield, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import TechnicalUpskilling from "@/assets/Technical-Upskilling.png";
import DigitalUpskillingImg from "@/assets/digital capability.png";

const DigitalUpskilling = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Monitor,
      title: "Digital Literacy & Fluency Programmes",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Build foundational digital capabilities across your workforce — ensuring every employee can leverage technology confidently.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Digital fundamentals:</strong> Cloud computing, data basics, cybersecurity awareness, and digital collaboration.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">AI literacy:</strong> Understanding AI, machine learning, and automation for non-technical audiences.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Data-driven thinking:</strong> Building comfort with data interpretation and evidence-based decisions.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Digital mindset:</strong> Fostering curiosity, experimentation, and continuous learning.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a digitally confident workforce ready for technology-driven change.</p>
        </>
      ),
    },
    {
      icon: Code,
      title: "Technical Skills Acceleration",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">For technical teams, we deliver deep-dive upskilling in the technologies that matter most to your business strategy.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Cloud & DevOps:</strong> AWS, Azure, GCP certification paths and hands-on cloud engineering.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Data & analytics:</strong> SQL, Python, data visualisation, and advanced analytics techniques.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">AI & ML:</strong> Practical AI/ML skills for building and deploying intelligent systems.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Cybersecurity:</strong> Security engineering, threat detection, and compliance frameworks.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is technical teams with cutting-edge skills aligned to business needs.</p>
        </>
      ),
    },
    {
      icon: Cloud,
      title: "Digital Transformation Enablement",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Technology transformations fail without people transformation. We design change enablement programmes that build the skills and mindsets for successful digital adoption.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Change champions:</strong> Train internal digital champions to drive adoption and peer learning.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Platform training:</strong> Role-based training for new technology platforms and systems.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Process redesign:</strong> Rethinking workflows to maximise the value of new digital tools.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Adoption tracking:</strong> Metrics and feedback loops to monitor and accelerate adoption.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is successful digital transformation powered by people readiness.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Monitor className="w-8 h-8 text-cap-blue" />, title: "Enterprise digital fluency", desc: "A workforce that confidently uses digital tools, interprets data, and embraces technology-driven ways of working." },
    { icon: <Code className="w-8 h-8 text-cap-blue" />, title: "Future-ready technical skills", desc: "Technical teams equipped with the latest skills in cloud, AI, data, and cybersecurity to drive innovation." },
    { icon: <Database className="w-8 h-8 text-cap-blue" />, title: "Accelerated digital adoption", desc: "Faster, smoother technology transitions through structured change enablement and champion networks." },
    { icon: <BarChart3 className="w-8 h-8 text-cap-blue" />, title: "Measurable skills ROI", desc: "Clear metrics linking digital upskilling investments to productivity gains and business performance." },
    { icon: <Shield className="w-8 h-8 text-cap-blue" />, title: "Reduced digital skills risk", desc: "Proactive skills gap closure that protects against talent shortages and technology disruption." },
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
        <span className="text-xs text-cap-blue font-semibold">Digital & Technical Upskilling</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={TechnicalUpskilling} alt="Digital & Technical Upskilling" className="w-full h-[400px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Digital & Technical Upskilling</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Future-proof your workforce. Our digital upskilling programmes build the technical capabilities and digital mindsets your organisation needs to compete and innovate.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">The digital skills gap is widening. As AI, cloud computing, and data analytics transform every industry, organisations must rapidly upskill their workforce to remain competitive. Our programmes cover the full spectrum — from digital literacy for all employees to deep technical training for specialists.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-blue uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">77%</div>
              <p className="text-mid text-muted-white leading-relaxed">of CEOs identify digital skills gaps as the biggest threat to their organisation's growth and competitive positioning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-blue">digital capability</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={DigitalUpskillingImg} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-blue mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From technology adoption to technology mastery</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">Investing in technology without investing in people leads to underutilised platforms. Our approach starts with skills assessment, aligns learning to business priorities, and delivers practical, hands-on training that translates directly into improved performance and innovation capacity.</p>
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
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Future-proof your workforce with digital skills</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DigitalUpskilling;