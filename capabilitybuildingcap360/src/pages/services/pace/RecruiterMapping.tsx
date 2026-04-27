import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import PACESubNavbar from "@/components/PACESubNavbar";
import {
  ArrowRight,
  Map,
  Layers,
  TrendingUp,
  Target,
  Award,
  BarChart3,
  Users,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import HRmapping from "@/assets/HRMapping.png";
import CareerPath from "@/assets/CareerPathArchitecture.png";

const RecruiterMapping = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Map,
      title: "HR & Talent Acquisition Mapping",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Identify the exact HR heads, talent acquisition leads, and hiring managers at your target companies — and reach out to them directly on your behalf, putting your profile in front of the people who actually make hiring decisions.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Decision-maker identification:</strong> Research and map the specific individuals responsible for hiring at your seniority level in target organisations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Direct outreach:</strong> Personalised messages sent to HR and hiring managers — not just generic portal applications.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Hidden opportunity access:</strong> Many senior roles are filled before they are posted publicly — our outreach gives you access to this hidden market.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Follow-up management:</strong> Manage all follow-ups and responses to keep conversations warm and moving forward.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-mid">
            The outcome is your profile reaching decision-makers — not just portals.
          </p>
        </>
      ),
    },
    {
      icon: Layers,
      title: "Target Company Research & Strategy",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Build a precision target list of organisations that are the right fit for your experience, seniority, compensation expectations, and career goals — then pursue them through multiple channels simultaneously.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Company profiling:</strong> Deep research into target organisations — culture, growth stage, leadership gaps, and hiring patterns.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Industry mapping:</strong> Identify high-growth sectors and organisations actively expanding at your level.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Multi-channel pursuit:</strong> We approach target companies via job portals, LinkedIn, direct HR outreach, and professional networks simultaneously.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Competitor intelligence:</strong> Insights on where your peers are moving to help refine your targeting strategy.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-mid">
            The outcome is a focused, intelligence-driven pursuit of the organisations where you belong.
          </p>
        </>
      ),
    },
    {
      icon: TrendingUp,
      title: "Recruiter Network & Referral Activation",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Leverage our established network of senior recruiters, executive search consultants, and industry contacts to generate referrals and warm introductions — accelerating your path to the right conversations.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Recruiter introductions:</strong> Connect your profile with relevant executive recruiters who specialise in your function and sector.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Referral strategy:</strong> Identify and activate referral pathways through your existing network that you may not have considered.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">LinkedIn network expansion:</strong> Strategic connection building with relevant professionals, decision-makers, and industry influencers.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-mid">
                <strong className="text-white">Warm outreach management:</strong> Craft and send personalised messages to your network on your behalf — professionally and strategically.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-mid">
            The outcome is a warm, relationship-driven pipeline that complements your active application strategy.
          </p>
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
    {
      icon: <Map className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Access to the hidden job market",
      desc: "Up to 70% of senior roles are filled without public posting. Our HR mapping puts you in front of opportunities before they reach job boards.",
    },
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Direct decision-maker access",
      desc: "Your profile reaches HR heads and hiring managers directly — bypassing automated screening and portal queues.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Stronger referral pipeline",
      desc: "Warm introductions and network activations that generate higher response rates than cold applications.",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Precision company targeting",
      desc: "A focused, researched target list ensures every outreach effort is directed at organisations that are truly the right fit.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Faster path to conversations",
      desc: "Direct outreach consistently generates interview conversations faster than portal-only approaches at the senior level.",
    },
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar
        title="Services"
        titlePath="/what-we-do"
        items={[
          { label: "ASER", path: "/what-we-do/services/aser" },
          { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
          { label: "TCB", path: "/what-we-do/services/tcb" },
          { label: "PACE", path: "/what-we-do/services/pace" },
        ]}
      />
      <PACESubNavbar />
      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">PACE</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-green font-semibold">HR & Recruiter Mapping</span>
      </div>

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={HRmapping} alt="HR & Recruiter Mapping" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              HR & Recruiter Mapping
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Don't wait for job boards to find you. We identify the exact HRs, talent leads, and hiring managers at your target companies — and reach out to them directly on your behalf.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Intro + Data ── */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[22px] text-muted-white leading-[1.8]">
              At the senior level, the most valuable opportunities rarely appear on job boards. They are filled through relationships, referrals, and direct conversations between decision-makers. Our HR mapping service gives you access to this hidden market — by putting your profile directly in front of the people who hire, before positions are even publicly advertised.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-green uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">70%</div>
              <p className="text-[18px] text-muted-white leading-relaxed">
                of senior-level positions are filled without ever being publicly advertised — making direct HR outreach essential at the leadership level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision section ── */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How intelligence, relationships and direct outreach are transforming{" "}
            <span className="text-cap-green">Senior Hiring</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={CareerPath} alt="Vision" className="w-full h-[450px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-green mb-6" />
              <h3 className="text-[24px] font-bold mb-4">From portal dependency to direct access</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                Relying solely on job portals at the senior level is like fishing in a small pond when the entire ocean is available. Our HR mapping approach expands your reach exponentially — identifying and engaging the right people at the right organisations, through personalised, professional outreach that positions you as the candidate they were looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section className="py-20" ref={sRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[28px] md:text-[36px] font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={sInView ? { opacity: 1, y: 0 } : {}}
          >
            How We Map and Reach the Right People
          </motion.h2>
          <div className="border-t border-border/30">
            {solutions.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <div key={item.title} className="border-b border-border/30 relative">
                  {isOpen && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cap-green"
                      layoutId="accordionBar"
                    />
                  )}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                    className="flex justify-between items-center w-full text-left cursor-pointer py-5 pl-4"
                  >
                    <span className="text-[25px] font-semibold">{item.title}</span>
                    <span className="text-2xl text-cap-green font-light w-8 text-center">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
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

      {/* ── Carousel ── */}
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

      {/* ── CTA ── */}
      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[22px] font-bold mb-4 text-primary-white">
            Get your profile in front of the people who hire
          </h2>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">
            Start HR mapping <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecruiterMapping;