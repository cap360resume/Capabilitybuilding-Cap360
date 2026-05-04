import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronRight, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/who-we-are-hero.jpg";
import coaching from "@/assets/coaching.png"
import { Heart, Shield, Users, Sparkles, HandHeart } from "lucide-react";

const accordionItems = [
  {
    title: "Client Value Creation",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">We exist to create measurable value for our clients - across every engagement, every interaction.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Delivering outcomes that matter, not just outputs</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Bringing the best of our global expertise to every project</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Building long-term partnerships based on trust and results</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Integrity & Transparency",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Honesty and ethical conduct form the bedrock of everything we do.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Upholding the highest standards of corporate governance</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Transparent communication with all stakeholders</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Zero tolerance for unethical practices</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Respect for the Individual",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Celebrate diversity and believe every individual brings unique value.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Fostering an inclusive workplace where all voices are heard</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Investing in continuous learning and professional growth</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Supporting work-life balance and employee wellbeing</li>
        </ul>
      </div>
    ),
  },
];

const sliderCards = [
  { icon: Heart, title: "Stewardship", description: "Take care of what matters - our people, our clients, our communities, and our planet." },
  { icon: Shield, title: "Best People", description: "Attract and develop the best talent, providing them with opportunities to grow and excel." },
  { icon: Users, title: "One Global Network", description: "Collaborate across borders and cultures to deliver seamless, integrated solutions." },
  { icon: Sparkles, title: "Innovation", description: "Embrace change and continuously seek better ways to serve our clients and communities." },
  { icon: HandHeart, title: "Corporate Citizenship", description: "Give back through pro-bono work, sustainability initiatives, and community engagement." },
];

const OurValues = () => {
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
        <div className="bg-secondary/30 border-b border-border/30">
          <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center gap-2 text-xs text-muted-foreground">
            <button onClick={() => navigate("/who-we-are")} className="hover:text-foreground transition-colors">Who We Are</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Our Values</span>
          </div>
        </div>

        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={coaching} alt="Our Values" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">Our Values</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our core values define who we are and guide every decision we make. They shape our culture, drive our behaviour, and inspire us to create 360° value for clients, people, and communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={contextRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${contextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Values are not just words on a wall - they are lived experiences. At CAP360, our values are embedded in every client engagement, every internal initiative, and every community programme we support.
              </p>
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <div className="text-5xl font-bold text-cap-orange mb-3">100%</div>
                <p className="text-muted-foreground">of our employees complete annual ethics and values training, ensuring our principles are consistently upheld across every level of the organization.</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={visionRef} className={`py-16 lg:py-24 transition-all duration-700 ${visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Living Our Values</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={heroImg} alt="Values in action" className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our values come alive through action. From mentoring future leaders to championing sustainability, demonstrate our commitment daily - creating an environment where integrity, innovation, and inclusion thrive together.
              </p>
            </div>
          </div>
        </section>

        <section ref={accordionRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${accordionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">Our Core Principles</h2>
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

        {/* ── Infinite Carousel: What We Stand For ────────────────────────────── */}
        <section ref={sliderRef} className={`py-10 sm:py-14 md:py-20 transition-all duration-700 ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 md:mb-10">What We Stand For</h2>

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

        <section className="py-16 lg:py-24 bg-cap-navy">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Values That Drive Results</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Our values are not just aspirational - they are the foundation of every client relationship and every outcome we deliver.</p>
            <button onClick={() => navigate("/contact")} className="px-8 py-4 bg-cap-orange hover:bg-cap-orange/90 text-white font-semibold rounded-lg transition-colors">Connect With Us</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurValues;