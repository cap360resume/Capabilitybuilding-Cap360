import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import PACESubNavbar from "@/components/PACESubNavbar";
import { ArrowRight, Mic, Target, BookOpen, DollarSign, Mail, Layers, CheckCircle, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import interview from "@/assets/interview-concept.jpg";
import offer from "@/assets/offer.jpg";

const InterviewPreparation = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Mic,
      title: "Mock Interview Sessions",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Realistic, structured practice interviews that simulate the pressure of the real thing — so candidates walk in confident, not anxious.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Live practice rounds:</strong> One-on-one sessions with experienced coaches replicating real interview formats.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Recorded feedback:</strong> Video review to identify body language, tone, and pacing improvements.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Iterative improvement:</strong> Multiple rounds with progressive difficulty to build genuine readiness.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Stress inoculation:</strong> Curveball and pressure questions that prepare candidates for the unexpected.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is candidates who perform at their best when it matters most.</p>
        </>
      ),
    },
    {
      icon: Layers,
      title: "Industry-Specific Question Banks",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Generic interview prep only goes so far. We build targeted question sets tailored to your industry, function, and seniority level.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Sector-aligned content:</strong> Questions drawn from financial services, technology, healthcare, FMCG, and more.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Role-specific Q&A practice:</strong> Customised question sets matched to job descriptions and competency frameworks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Technical + behavioural blend:</strong> Coverage across functional knowledge, leadership, and situational judgement.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Regularly updated libraries:</strong> Questions refreshed to reflect current hiring trends and interviewer priorities.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is targeted preparation that speaks directly to the role at hand.</p>
        </>
      ),
    },
    {
      icon: BookOpen,
      title: "STAR & CARL Method Training",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Compelling answers aren't improvised — they're structured. We train candidates to communicate their experience with clarity, precision, and impact.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">STAR framework:</strong> Situation, Task, Action, Result — the gold standard for behavioural interview responses.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">CARL method:</strong> Context, Action, Result, Learning — ideal for development-focused or reflective questions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Story banking:</strong> Building a personal library of 8–12 high-impact stories adaptable across question types.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Answer editing:</strong> Cutting rambling, sharpening results, and landing with confidence.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is structured, memorable answers that win offers.</p>
        </>
      ),
    },
    {
      icon: DollarSign,
      title: "Salary Negotiation Practice",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Most candidates leave money on the table. We equip them with the knowledge, language, and confidence to negotiate effectively and professionally.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Market benchmarking:</strong> Understanding pay ranges by role, sector, and geography to anchor negotiations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Negotiation scripts:</strong> Practised language for counter-offers, package discussions, and difficult conversations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Total compensation framing:</strong> Looking beyond base salary to benefits, equity, flexibility, and growth.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Roleplay sessions:</strong> Live practice navigating real negotiation scenarios with coaching feedback.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is candidates who secure the offer they deserve.</p>
        </>
      ),
    },
    {
      icon: Mail,
      title: "Interview Follow-Up Strategies",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            The interview doesn't end when you leave the room. We coach candidates on the post-interview actions that reinforce their candidacy and keep them front of mind.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Thank-you note templates:</strong> Personalised, timely messages that reinforce fit and enthusiasm.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Follow-up timing:</strong> When and how often to follow up without appearing overeager or disengaged.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Handling rejections:</strong> Requesting feedback, staying professional, and maintaining relationships for future opportunities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Decision management:</strong> Navigating multiple offers, timelines, and competing pressures with composure.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is candidates who remain compelling long after the interview ends.</p>
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
    { icon: <Mic className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Interview confidence", desc: "Candidates who have rehearsed extensively perform better under pressure, answering with clarity and composure." },
    { icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Higher offer rates", desc: "Structured preparation directly improves conversion from interview stage to offer, shortening job search timelines." },
    { icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Stronger compensation outcomes", desc: "Candidates trained in negotiation consistently secure packages closer to — or above — their target range." },
    { icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Role-fit clarity", desc: "Deep preparation helps candidates articulate their value proposition with precision, aligning their story to the role." },
    { icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Measurable readiness", desc: "Progress benchmarks and mock session scoring give coaches and candidates a clear view of interview readiness." },
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
      <PACESubNavbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">PACE</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-green font-semibold">Interview Preparation</span>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={interview} alt="Interview Preparation" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Interview Preparation
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Master the art of interviewing. Our comprehensive preparation programmes combine mock sessions, structured storytelling techniques, and negotiation coaching — so every candidate walks in ready to win.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stat section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Interviews are a learnable skill. The difference between candidates who land offers and those who don't often has nothing to do with capability — it comes down to preparation. Structured practice, proven frameworks like STAR and CARL, and deliberate rehearsal of salary conversations transform nervous candidates into confident performers who can clearly articulate their value and close at every stage of the process.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-green uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">3×</div>
              <p className="text-mid text-muted-white leading-relaxed">
                Candidates who practise structured mock interviews are up to three times more likely to receive an offer than those who prepare informally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How rigorous preparation turns promising candidates into{" "}
            <span className="text-cap-green">confident offer-winners</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={offer} alt="Interview Coaching" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-green mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From hoping for the best to walking in prepared</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                Most candidates over-prepare on their CV and under-prepare on everything else. Our approach flips that. Through structured mock sessions, role-specific question practice, STAR and CARL storytelling training, and live salary negotiation roleplays, candidates develop the muscle memory and mental composure to perform consistently — not just on a good day. Every element of the interview is rehearsed until it feels natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20" ref={sRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[28px] md:text-[36px] font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={sInView ? { opacity: 1, y: 0 } : {}}
          >
            How We Support Your Preparation
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

      {/* ── Infinite carousel section ───────────────────────────────────────── */}
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
      {/* ─────────────────────────────────────────────────────────────────────── */}

      {/* CTA */}
      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">
            Give your candidates the preparation advantage
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all"
          >
            Get started <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InterviewPreparation;