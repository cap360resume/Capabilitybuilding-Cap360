import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import PACESubNavbar from "@/components/PACESubNavbar";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Target,
  Award,
  Layers,
  BarChart3,
  Compass,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import peopledevelopment from "@/assets/peopledevelopment.png";
import coaching from "@/assets/coaching.png";

const CourseRecommendations = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Target,
      title: "Profile Gap Analysis",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Assess your current experience, skills, and qualifications
            against the roles you're targeting — identifying the gaps that
            matter most to hiring managers in your space.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Role benchmarking:</strong>{" "}
                We compare your profile against current JDs and hiring
                patterns in your target sector.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Skill mapping:</strong>{" "}
                Hard and soft skills are mapped to what recruiters and
                decision-makers are actively screening for.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Certification review:</strong>{" "}
                Existing credentials are evaluated for relevance, recency,
                and market recognition.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Priority scoring:</strong>{" "}
                Gaps are ranked by impact — so you invest your time where it
                actually moves your candidacy forward.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is a clear, prioritised view of exactly what to
            address — and what to ignore.
          </p>
        </>
      ),
    },
    {
      icon: BookOpen,
      title: "Personalised Course Suggestions",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Based on your gap analysis, we recommend specific courses,
            certifications, and learning programmes — matched to your
            career goals, timeline, and learning style.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Curated shortlist:</strong>{" "}
                We don't give you a list of 50 options — we recommend the
                3–5 most relevant courses for your specific profile.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Platform coverage:</strong>{" "}
                Recommendations span top platforms — Coursera, LinkedIn
                Learning, IIM skills, NIIT, and others relevant to your
                domain.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Recognised certifications:</strong>{" "}
                Where relevant, we flag industry-recognised certifications
                that add measurable credibility to your profile.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Timeline guidance:</strong>{" "}
                Suggestions are matched to your job search timeline — quick
                wins first, deeper learning second.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is a focused upskilling plan that strengthens your
            profile without derailing your search.
          </p>
        </>
      ),
    },
    {
      icon: TrendingUp,
      title: "Market-Aligned Skill Trends",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Keep our recommendations grounded in what the market is
            actually hiring for — not generic skill lists, but real-time
            demand signals from your target roles and industries.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Sector-specific insights:</strong>{" "}
                Skills in demand across BFSI, IT, manufacturing, FMCG, and
                other key sectors, mapped to senior roles.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Emerging skill areas:</strong>{" "}
                Highlight skills gaining momentum — AI fluency, data
                literacy, ESG, and digital leadership — before they become
                table stakes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">JD keyword intelligence:</strong>{" "}
                Recommendations are informed by the actual language hiring
                managers are using in live job descriptions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Leadership skill focus:</strong>{" "}
                Senior-level skill suggestions go beyond technical — covering
                strategic thinking, stakeholder management, and P&L
                ownership.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is a profile that speaks the language of the roles
            you're targeting.
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
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Faster role placement",
      desc: "Targeted upskilling removes the profile gaps that slow down or block your candidacy at shortlisting stage.",
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Higher recruiter visibility",
      desc: "Profiles enriched with in-demand skills and certifications rank higher in recruiter searches on LinkedIn and Naukri.",
    },
    {
      icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Stronger applications",
      desc: "Skill-market alignment means every application we submit on your behalf is backed by a profile that matches what's being asked for.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Interview confidence",
      desc: "Knowing you've addressed the key gaps means you walk into every interview with a stronger, more credible story.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />,
      title: "Long-term career edge",
      desc: "Skills aligned to market trends keep you competitive not just for this role — but for the next one too.",
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
        <span className="text-xs text-cap-green font-semibold">
          Skills & Course Recommendations
        </span>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img
              src={peopledevelopment}
              alt="Skills & Course Recommendations"
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
              Skills & Course Recommendations
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.8]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The right skills at the right time. Analyse your profile
              against live market demand and recommend the exact courses and
              certifications that will move your candidacy forward — faster.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Senior professionals often lose opportunities not because of
              experience — but because their profile doesn't reflect the skills
              the market is currently screening for. Pace bridges that gap.
              Identify exactly what's missing, then point you to the most
              effective way to address it — so every application submit on
              your behalf is backed by a profile that's genuinely competitive.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-green uppercase block mb-3">
                DATA
              </span>
              <div className="text-[56px] font-black leading-none mb-3">
                63%
              </div>
              <p className="text-mid text-muted-white leading-relaxed">
                of senior professionals are screened out at the profile stage
                due to skill gaps that are addressable with targeted
                upskilling — not years of experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / strategy section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            From generic upskilling to{" "}
            <span className="text-cap-green">precision career alignment</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={coaching}
              alt="Skills alignment"
              className="w-full h-[350px] object-cover"
            />
            <div>
              <div className="w-12 h-1 bg-cap-green mb-6" />
              <h3 className="text-[22px] font-bold mb-4">
                We don't recommend courses — we recommend the right courses
              </h3>
              <p className="text-[20px] text-muted-white leading-[1.8]">
                Generic learning platforms give you hundreds of options and
                leave the decision to you. Pace does the analysis first —
                identifying the specific skills your target roles demand, the
                gaps in your current profile, and the shortest path to
                closing them. Every suggestion is personalised, market-tested,
                and timed to your job search — not your long-term learning
                wishlist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion — How We Support */}
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

      {/* Infinite carousel — What you'll achieve */}
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
                    width:
                      visibleCards === 1
                        ? "100%"
                        : `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                    minWidth:
                      visibleCards === 1
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

      {/* CTA */}
      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">
            Know exactly where to upskill — and get placed faster
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all"
          >
            Get your skill analysis <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseRecommendations;