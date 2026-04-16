import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import TCBSubNavbar from "@/components/TCBSubNavbar";
import { ArrowRight, Shield, FileCheck, Award, ClipboardCheck, BarChart3, Target, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import Training from "@/assets/Certification-Compliance-Training.png";
import compliance from "@/assets/compliance-management.jpeg";

const CertificationCompliance = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Shield,
      title: "Regulatory Compliance Training",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Stay ahead of evolving regulations with comprehensive compliance training programmes that protect your organisation and empower your people to act responsibly.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Health & safety:</strong> OSHA, workplace safety, hazard identification, and emergency response training.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Data protection:</strong> GDPR, POPIA, and data privacy compliance training for all employee levels.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Anti-bribery & ethics:</strong> FCPA, UK Bribery Act, and ethical conduct training programmes.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Industry-specific:</strong> Financial services, healthcare, manufacturing, and sector-specific regulatory training.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a compliant, risk-aware workforce that protects your business.</p>
        </>
      ),
    },
    {
      icon: Award,
      title: "Professional Certification Programmes",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Invest in your people's professional growth with structured certification preparation programmes that boost expertise, credibility, and career progression.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Project management:</strong> PMP, PRINCE2, and Agile certification preparation and support.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">HR certifications:</strong> SHRM, CIPD, and SHRM-SCP preparation programmes.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Quality & process:</strong> Six Sigma, Lean, and ISO certification tracks.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Domain-specific:</strong> Industry certifications tailored to your sector's requirements.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is certified professionals who bring validated expertise to your organisation.</p>
        </>
      ),
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Tracking & Accreditation Management",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">Managing compliance across a large organisation requires systematic tracking, reporting, and renewal management. We provide the systems and processes to keep you audit-ready.</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Certification tracking:</strong> Digital platforms to monitor certification status and renewal deadlines.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Audit preparation:</strong> Gap analysis and readiness assessments for regulatory audits.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Compliance dashboards:</strong> Real-time visibility into compliance metrics across the organisation.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-blue mt-2 flex-shrink-0" /><span className="text-muted-white text-md"><strong className="text-white">Automated reminders:</strong> Proactive notifications for expiring certifications and training renewals.</span></li>
          </ul>
          <p className="text-muted-white text-md">The outcome is always-on compliance visibility and audit readiness.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Shield className="w-8 h-8 text-cap-blue" />, title: "Reduced compliance risk", desc: "Comprehensive training programmes that minimise regulatory exposure and protect against penalties and reputational damage." },
    { icon: <Award className="w-8 h-8 text-cap-blue" />, title: "Certified workforce", desc: "Employees with industry-recognised certifications that validate expertise and enhance organisational credibility." },
    { icon: <ClipboardCheck className="w-8 h-8 text-cap-blue" />, title: "Audit-ready organisation", desc: "Real-time compliance tracking and reporting that ensures you're always prepared for regulatory inspections." },
    { icon: <BarChart3 className="w-8 h-8 text-cap-blue" />, title: "Compliance visibility", desc: "Dashboard analytics providing leadership with clear views of training completion, certification status, and risk areas." },
    { icon: <Layers className="w-8 h-8 text-cap-blue" />, title: "Scalable compliance systems", desc: "Digital platforms that scale compliance management from single-site operations to global, multi-jurisdictional programmes." },
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
        <span className="text-xs text-cap-blue font-semibold">Certification & Compliance Training</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden"><img src={Training} alt="Certification & Compliance Training" className="w-full h-[400px] object-cover" /></div>
          <div>
            <motion.h1 className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Certification & Compliance Training</motion.h1>
            <motion.p className="text-[20px] text-muted-white leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Stay compliant, stay competitive. We deliver comprehensive certification and compliance training that protects your business and empowers your people with validated expertise.</motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">In an increasingly regulated business environment, compliance training and professional certifications are not optional — they're essential. Our programmes combine mandatory regulatory training with professional development certifications, supported by digital tracking systems that keep your organisation audit-ready and your people certified.</p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-blue uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">$14M</div>
              <p className="text-mid text-muted-white leading-relaxed">is the average cost of non-compliance for organisations, including penalties, business disruption, and reputational damage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">How vision, strategy and implementation are transforming <span className="text-cap-blue">compliance culture</span></h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={compliance} alt="Vision" className="w-full h-[450px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-blue mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From checkbox compliance to embedded governance culture</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">Compliance training is often treated as a tick-box exercise — but true compliance requires a culture of accountability, awareness, and continuous learning. Our approach transforms compliance from an annual obligation into an embedded part of how your organisation operates, reducing risk and building trust.</p>
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
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Ensure compliance across your organisation</h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CertificationCompliance;