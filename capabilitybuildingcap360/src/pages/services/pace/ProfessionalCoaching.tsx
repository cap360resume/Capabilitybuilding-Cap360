import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import PACESubNavbar from "@/components/PACESubNavbar";
import {
  ArrowRight,
  UserCheck,
  MessageCircle,
  Target,
  Award,
  Users,
  BarChart3,
  Heart,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import peopledevelopment from "@/assets/peopledevelopment.png";
import coaching from "@/assets/coaching.png";

const ProfessionalCoaching = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: UserCheck,
      title: "Executive & Leadership Coaching",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            One-on-one coaching for senior leaders focusing on strategic impact,
            stakeholder influence, and personal effectiveness in high-stakes
            environments.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Strategic coaching:</strong>{" "}
                Helping leaders navigate complex decisions, stakeholder
                dynamics, and transformation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Transition coaching:</strong>{" "}
                Supporting leaders moving into new roles, organisations, or
                expanded scope.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Performance coaching:</strong>{" "}
                Targeted interventions to accelerate leadership effectiveness.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Executive presence:</strong>{" "}
                Building gravitas, communication impact, and boardroom
                confidence.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is leaders who perform at their peak with sustained
            personal growth.
          </p>
        </>
      ),
    },
    {
      icon: MessageCircle,
      title: "Group & Team Coaching",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Cohort-based coaching that builds collective capability while
            fostering peer learning and accountability networks.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Leadership cohorts:</strong> Peer
                coaching groups for emerging and mid-level leaders.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Team coaching:</strong>{" "}
                Facilitated sessions to improve team dynamics, trust, and
                performance.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Action learning:</strong> Real
                business challenges as the vehicle for group learning and
                growth.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Coaching culture:</strong>{" "}
                Building internal coaching capability and a coaching mindset
                across leaders.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is stronger teams and a self-sustaining coaching
            culture.
          </p>
        </>
      ),
    },
    {
      icon: Award,
      title: "Mentoring Programme Design",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            We design and implement structured mentoring programmes that connect
            experience with aspiration — accelerating development and
            strengthening organisational knowledge transfer.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Programme architecture:</strong>{" "}
                End-to-end mentoring programme design with clear objectives and
                structure.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Matching methodology:</strong>{" "}
                Skills and interest-based matching algorithms for optimal
                pairings.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Mentor training:</strong>{" "}
                Equipping mentors with frameworks, tools, and conversation
                skills.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Impact tracking:</strong>{" "}
                Measuring mentoring outcomes and programme effectiveness.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is a thriving mentoring ecosystem that accelerates
            talent development.
          </p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    {
      icon: <UserCheck className="w-8 h-8 text-cap-green" />,
      title: "Accelerated leadership growth",
      desc: "Executive coaching that delivers measurable improvements in leadership effectiveness and strategic impact.",
    },
    {
      icon: <Users className="w-8 h-8 text-cap-green" />,
      title: "Stronger team performance",
      desc: "Group and team coaching that builds trust, improves collaboration, and drives collective results.",
    },
    {
      icon: <Heart className="w-8 h-8 text-cap-green" />,
      title: "Embedded coaching culture",
      desc: "Internal coaching capability that sustains development momentum long after formal programmes end.",
    },
    {
      icon: <Target className="w-8 h-8 text-cap-green" />,
      title: "Higher talent retention",
      desc: "Coaching investment that signals commitment to employee growth and reduces turnover of key talent.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cap-green" />,
      title: "Measurable coaching ROI",
      desc: "Structured measurement frameworks that demonstrate the business impact of coaching investments.",
    },
  ];

  const visibleCards = 3;
  const GAP = 24; // gap-6 = 24px

  // Triple the cards for seamless infinite loop
  const infiniteCards = [...cards, ...cards, ...cards];
  const cloneOffset = cards.length; // middle set starts at this index

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselReady, setCarouselReady] = useState(false);
  const isTransitioningRef = useRef(false);

  // Derive card width from the container: (containerWidth - gaps) / visibleCards
  const getCardWidth = useCallback((): number => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const totalGaps = GAP * (visibleCards - 1);
    return (containerWidth - totalGaps) / visibleCards + GAP;
  }, []);

  // Initialise to the middle clone set — hide until ready to avoid flash
  useEffect(() => {
    const w = getCardWidth();
    if (w > 0) {
      setOffset(w * cloneOffset);
      setCarouselReady(true);
    }
  }, [getCardWidth, cloneOffset]);

  // Recalculate on resize so offset stays accurate
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

  const handleNext = useCallback(() => {
    slideTo(currentIndex + 1);
  }, [currentIndex, slideTo]);

  const handlePrev = useCallback(() => {
    slideTo(currentIndex - 1);
  }, [currentIndex, slideTo]);

  // After the CSS transition ends, silently jump back to the middle clone set
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
        <span className="text-xs text-cap-green font-semibold">
          Professional Coaching & Mentoring
        </span>
      </div>
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img
              src={peopledevelopment}
              alt="Professional Coaching & Mentoring"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Professional Coaching & Mentoring
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.8]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Accelerate growth through expert guidance. Our coaching and
              mentoring programmes unlock potential and accelerate professional
              development at every level.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Professional coaching and mentoring are among the most powerful
              development interventions available. Our programmes combine
              certified coaching expertise with structured mentoring frameworks
              — creating personalised growth experiences that drive lasting
              behaviour change, improved performance, and stronger leadership at
              all levels.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-green uppercase block mb-3">
                DATA
              </span>
              <div className="text-[56px] font-black leading-none mb-3">
                70%
              </div>
              <p className="text-mid text-muted-white leading-relaxed">
                of individuals who receive coaching report improved work
                performance, better relationships, and more effective
                communication skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How vision, strategy and implementation are transforming{" "}
            <span className="text-cap-green">people development</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={coaching}
              alt="Vision"
              className="w-full h-[350px] object-cover"
            />
            <div>
              <div className="w-12 h-1 bg-cap-green mb-6" />
              <h3 className="text-[22px] font-bold mb-4">
                From training programmes to personalised growth journeys
              </h3>
              <p className="text-[20px] text-muted-white leading-[1.8]">
                Generic training programmes deliver generic results. Coaching
                and mentoring provide the personalised, contextualised support
                that drives real behaviour change. Our approach combines the
                rigour of certified coaching methodologies with deep
                understanding of your organisational context — ensuring every
                coaching engagement delivers measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" ref={sRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[28px] md:text-[36px] font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={sInView ? { opacity: 1, y: 0 } : {}}
          >
            How We Support Your Growth
          </motion.h2>
          <div className="border-t border-border/30">
            {solutions.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <div
                  key={item.title}
                  className="border-b border-border/30 relative"
                >
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
                    <span className="text-[25px] font-semibold">
                      {item.title}
                    </span>
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
                        <div className="pl-4 pr-8 pb-6 text-[20px]">
                          {item.content}
                        </div>
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
      <section className="py-20 bg-card/30" ref={bRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[28px] md:text-[36px] font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={bInView ? { opacity: 1, y: 0 } : {}}
          >
            What you'll achieve
          </motion.h2>

          <div className="overflow-hidden" ref={containerRef}>
            <div
              ref={trackRef}
              className="flex gap-6"
              style={{
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
                  className="bg-card border border-border/30 p-8 flex-shrink-0"
                  style={{
                    width: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                    minWidth: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                  }}
                >
                  {card.icon}
                  <h3 className="text-[24px] font-bold mt-4 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[18px] text-muted-white leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-lg"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-border/50 flex items-center justify-center hover:bg-card transition-colors text-lg"
            >
              →
            </button>
          </div>
        </div>
      </section>
      {/* ─────────────────────────────────────────────────────────────────────── */}

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">
            Invest in coaching that delivers results
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all"
          >
            Find a coach <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProfessionalCoaching;