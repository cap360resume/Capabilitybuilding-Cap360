import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronRight, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/who-we-are-hero.jpg";
import { Target, Users, Globe, Lightbulb, TrendingUp } from "lucide-react";

const accordionItems = [
  {
    title: "End-to-End Capability Ecosystem",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">CAP360 is one of the few partners that covers the full talent lifecycle — from acquisition to career acceleration — under a single integrated ecosystem.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Hiretek for smart, quality talent acquisition beyond the résumé</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />ASER for data-driven, objective assessment of talent at every level</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />HRCAMS, TCB & PACE for consulting, upskilling, and career growth</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Strategic HR Transformation",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Through HRCAMS, go beyond advisory — we embed ourselves as strategic HR partners to drive meaningful, measurable transformation within enterprise organizations.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Managed HR services tailored to the complexity of large organizations</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />People strategy aligned directly with business objectives</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Long-term partnerships built on trust, outcomes, and accountability</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Enterprise-Grade Learning & Development",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Our TCB and PACE pillars are purpose-built to upskill workforces and accelerate careers — equipping enterprises with the human capital they need to lead in a rapidly evolving world.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Capability building programs designed for scale and measurable impact</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Professional alignment solutions for leadership and high-potential talent</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Career acceleration frameworks that retain and grow top performers</li>
        </ul>
      </div>
    ),
  },
];

const sliderCards = [
  { icon: Target, title: "5 Integrated Service Pillars", description: "HIRETEK, HRCAMS, PACE, ASER & TCB — a complete capability building ecosystem under one roof." },
  { icon: Users, title: "Founded in 2018", description: "Over half a decade of focused expertise in building future-ready workforces for enterprises." },
  { icon: Globe, title: "Enterprise-Focused", description: "Dedicated to serving large and complex organizations with tailored, high-impact solutions." },
  { icon: Lightbulb, title: "Data-Driven Approach", description: "From ASER's objective evaluations to Hiretek's smart acquisition — decisions backed by insight." },
  { icon: TrendingUp, title: "Proven Outcomes", description: "Future-ready workforce. Better leadership. High-performing organizations — delivered consistently." },
];

const OurCompany = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const navigate = useNavigate();
  const { ref: contextRef, isInView: contextVisible } = useScrollAnimation();
  const { ref: visionRef, isInView: visionVisible } = useScrollAnimation();
  const { ref: accordionRef, isInView: accordionVisible } = useScrollAnimation();
  const { ref: sliderRef, isInView: sliderVisible } = useScrollAnimation();

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
  const GAP = visibleCards === 1 ? 0 : 24;
  const cards = sliderCards;
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
      if (w > 0) {
        setOffset(w * (cloneOffset + currentIndex));
      }
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
    if (currentIndex >= cards.length) {
      newIndex = currentIndex - cards.length;
    } else if (currentIndex < 0) {
      newIndex = currentIndex + cards.length;
    }
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
      <main>
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border/30">
          <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center gap-2 text-xs text-muted-foreground">
            <button onClick={() => navigate("/who-we-are")} className="hover:text-foreground transition-colors">Who We Are</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Our Company</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={heroImg} alt="Our Company" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">Our Company</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  CAP360 is a full-spectrum Capability Building Ecosystem — bringing together quality hiring, talent assessment, HR consulting, workforce upskilling, and career acceleration under one integrated platform. partner with enterprises to build workforces that are future-ready, leadership-strong, and built to perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section ref={contextRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${contextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Founded in 2018 with a simple yet powerful mission — to help professionals at every career stage achieve their full potential — CAP360 has grown into a trusted capability partner for enterprises. Our integrated approach spans talent acquisition, assessment science, HR advisory, learning & development, and professional career enhancement, enabling organizations to transform their human capital from the ground up.
              </p>
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <div className="text-5xl font-bold text-cap-orange mb-3">360°</div>
                <p className="text-muted-foreground">A complete view of capability building — from the moment talent is hired to the point where leaders are made. CAP360 covers every stage of the professional journey for the enterprises we serve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section ref={visionRef} className={`py-16 lg:py-24 transition-all duration-700 ${visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Our Vision & Strategy</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={heroImg} alt="Vision" className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Envision a world where every organization thrives through the strength of its people. Our strategy is to be the most trusted end-to-end capability partner for enterprises — delivering integrated solutions that align talent with business goals, build future-ready leadership, and create high-performing organizations. believe that people strategy is business strategy, and we exist to bridge that gap with precision, expertise, and purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Accordion */}
        <section ref={accordionRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${accordionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">What Sets Us Apart</h2>
            <div className="space-y-4 max-w-4xl">
              {accordionItems.map((item, i) => (
                <div key={i} className="border border-border/50 rounded-xl overflow-hidden bg-card">
                  <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                    <div className="flex items-center gap-4">
                      <div className={`w-1 h-8 rounded-full transition-colors ${activeIndex === i ? "bg-cap-orange" : "bg-border"}`} />
                      <span className="text-lg font-semibold text-foreground">{item.title}</span>
                    </div>
                    {activeIndex === i ? <Minus className="w-5 h-5 text-cap-orange" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
                  </button>
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="px-6 pb-6 pl-16">{item.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Infinite Carousel: By the Numbers ───────────────────────────────── */}
        <section ref={sliderRef} className={`py-10 sm:py-14 md:py-20 transition-all duration-700 ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 md:mb-10">By the Numbers</h2>

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
                    className="bg-card border border-border/50 rounded-xl flex-shrink-0 flex flex-col p-4 sm:p-6 md:p-8"
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
                    <card.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-cap-orange mb-4" />
                    <h3 className="text-[15px] sm:text-[17px] md:text-[18px] lg:text-xl font-bold text-foreground mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-border hover:bg-secondary flex items-center justify-center transition-colors rounded-full text-sm sm:text-base md:text-lg"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-border hover:bg-secondary flex items-center justify-center transition-colors rounded-full text-sm sm:text-base md:text-lg"
              >
                →
              </button>
            </div>
          </div>
        </section>
        {/* ─────────────────────────────────────────────────────────────────────── */}

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-cap-navy">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build Capability with CAP360?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Discover how our integrated ecosystem of hiring, assessment, consulting, and learning solutions can transform your organization's human capital.</p>
            <button onClick={() => navigate("/contact")} className="px-8 py-4 bg-cap-orange hover:bg-cap-orange/90 text-white font-semibold rounded-lg transition-colors">Get in Touch</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurCompany;