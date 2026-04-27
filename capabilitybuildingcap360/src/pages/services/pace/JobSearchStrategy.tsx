import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import PACESubNavbar from "@/components/PACESubNavbar";
import { ArrowRight, Compass, Map, Send, BarChart3, Users, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import jobcampaign from "@/assets/Jobcampaign.png";
import jobsearch from "@/assets/jobsearch.jpg"

const JobSearchStrategy = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Compass,
      title: "Career Goals Alignment",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            A focused job search starts with knowing exactly what you're aiming for. Work with candidates to define clear, meaningful career goals that guide every decision in their search.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Values clarification:</strong> Identifying the non-negotiables — culture, flexibility, impact, growth — that define the right role.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Short and long-term goal mapping:</strong> Connecting the next role to a 3–5 year career trajectory.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Skills-to-aspirations gap analysis:</strong> Understanding what's needed to reach the target role and how to close the gap.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Priority scoring:</strong> Ranking opportunities against personal criteria to avoid wasted effort on poor-fit roles.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a purposeful search strategy built around what actually matters to the individual.</p>
        </>
      ),
    },
    {
      icon: Map,
      title: "Industry & Role Mapping",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Help candidates look beyond the obvious and discover where their skills have the greatest leverage — sometimes in sectors they hadn't considered.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Transferable skills audit:</strong> Identifying which capabilities travel across sectors and roles.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Adjacent industry exploration:</strong> Mapping growth sectors where the candidate's profile is in demand.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Job title equivalency mapping:</strong> Surfacing roles that match the candidate's profile under different titles or functions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Market demand insights:</strong> Understanding where hiring is accelerating and where it's stalling.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a broader, smarter target list that maximises opportunity.</p>
        </>
      ),
    },
    {
      icon: Send,
      title: "Smart Job Application Techniques",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Strategically — focusing on quality over quantity to maximise their chances of success.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">CV customisation frameworks:</strong> Adapting CVs and cover letters to specific roles without starting from scratch each time.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">ATS optimisation:</strong> Structuring applications to pass applicant tracking systems before a human ever sees them.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Application timing strategy:</strong> Knowing when to apply, how early, and how to stand out in high-volume processes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Quality over quantity coaching:</strong> Shifting mindset from mass applying to targeted, high-confidence submissions.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a higher response rate and fewer wasted hours in the application process.</p>
        </>
      ),
    },
    {
      icon: BarChart3,
      title: "Daily & Weekly Job Tracker Tools",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            A job search without structure quickly loses momentum. Provide candidates with practical tracking systems that keep the pipeline visible, organised, and moving.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Application pipeline tracker:</strong> A simple system to monitor every role — applied, in progress, interviewed, offered, or closed.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Daily action routines:</strong> Structured daily habits covering research, applications, networking, and follow-up.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Weekly review cadence:</strong> A check-in framework to assess progress, adjust priorities, and celebrate wins.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Energy and motivation management:</strong> Structuring the search to sustain effort over weeks and months without burnout.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a structured, sustainable search that consistently moves forward.</p>
        </>
      ),
    },
    {
      icon: Users,
      title: "Company Targeting & Referral Hacks",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
             The best roles are rarely found on job boards. Access to the hidden job market comes through strategic targeting and smart use of professional networks.          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Dream company lists:</strong> Building and prioritising a curated target list of 20–30 companies aligned to goals.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Warm referral strategy:</strong> Identifying and activating second-degree connections inside target companies.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">LinkedIn outreach scripts:</strong> Crafting concise, personalised messages that get responses from hiring managers and employees.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Informational interview techniques:</strong> Turning casual conversations into opportunities — before a role is even posted.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is access to opportunities that never reach a job board.</p>
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
    { icon: <Compass className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Purposeful search focus", desc: "A clearly defined target removes wasted effort and channels energy into roles that genuinely fit." },
    { icon: <Map className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Expanded opportunity set", desc: "Industry and role mapping surfaces opportunities candidates would never have found searching alone." },
    { icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Higher application conversion", desc: "Targeted, tailored applications consistently outperform high-volume spray-and-pray approaches." },
    { icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Sustained search momentum", desc: "Structured tracking tools keep energy and progress consistent across a multi-week search." },
    { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-green" />, title: "Hidden market access", desc: "Referral and targeting strategies open doors to roles that never appear on public job boards." },
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
          { label: "ASER", path: "/what-we-do/services/aser" },
          { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
          { label: "TCB", path: "/what-we-do/services/tcb" },
          { label: "PACE", path: "/what-we-do/services/pace" },
        ]}
      />
      <PACESubNavbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">PACE</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-green font-semibold">Job Search Strategy & Targeting</span>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={jobsearch} alt="Job Search Strategy & Targeting" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Job Search Strategy & Targeting
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Align your skills with the roles that matter most to you. Our structured job search frameworks turn scattered effort into a focused, high-conversion strategy — so candidates spend less time searching and more time succeeding.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stat section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Most job seekers apply to dozens of roles and hear back from very few. The problem isn't their profile — it's their approach. A purposeful strategy built around career goal alignment, smart targeting, and systematic tracking transforms a frustrating search into a manageable, momentum-driven process. When candidates know exactly which roles to pursue, how to reach the right people, and how to track progress effectively, the entire search becomes faster and far less draining.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-green uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">70%</div>
              <p className="text-mid text-muted-white leading-relaxed">
                of jobs are never publicly advertised — filled through networks, referrals, and direct outreach before they ever reach a job board.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How strategy and structure turn an exhausting search into a{" "}
            <span className="text-cap-green">targeted, winning campaign</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={jobcampaign} alt="Job Search Strategy" className="w-full h-[450px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-green mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From scattered applications to a focused search engine</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                A job search without strategy is just wishful clicking. Our approach replaces volume with precision — defining the right roles, mapping the right industries, activating the right connections, and tracking every step of the pipeline. Candidates who follow a structured job search strategy don't just find jobs faster; they find better-fit roles with stronger offers, because they're showing up where it counts and saying exactly the right things.
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
            How We Support Your Search
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
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">Start searching smarter, not harder</h2>
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

export default JobSearchStrategy;