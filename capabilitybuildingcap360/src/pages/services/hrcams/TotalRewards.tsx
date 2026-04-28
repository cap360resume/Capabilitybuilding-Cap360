import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { ArrowRight, PieChart, DollarSign, Heart, TrendingUp, Award, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/service-hero-hrcams.jpg";
import TotalRewardsArchitecture from "@/assets/TotalRewardsArchitecture.jpg";
import Rewardstrategies from "@/assets/rewardstrategies.jpg";

const TotalRewards = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Target,
      title: "Compensation Structure & Grade Design",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            At the foundation of any Total Rewards strategy is a well-designed
            compensation structure. We design CTC (Cost to Company)
            architectures that define how pay is structured across levels,
            functions, and roles — with clarity on fixed versus variable
            components, statutory deductions, and benefits.
          </p>
          <p className="text-muted-white leading-relaxed mb-4">
            Our approach ensures fairness, competitiveness, and governance
            across the organisation while aligning compensation with business
            strategy and performance outcomes.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Grade and band design:</strong> Creating a levelled structure (e.g., L1–L8 or Band A–F) that brings consistency to titling, pay ranges, and progression paths across functions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Internal parity modelling:</strong> Identifying and correcting pay inequities before they become attrition risks or compliance issues.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Pay mix optimisation:</strong> Structuring the right balance of fixed pay, performance-linked variable, and long-term incentives based on role criticality, industry benchmarks, and organisational philosophy.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Compensation governance frameworks:</strong> Defining approval authorities, revision cycles, and documentation standards so decisions remain consistent, transparent, and auditable.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is a structured, equitable, and scalable compensation system that supports talent attraction, retention, and performance-driven growth.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Short-Term Incentive (STI) Models",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            A Short-Term Incentive (STI) is the annual or quarterly variable pay
            component tied to individual, team, and organisational performance.
            When designed well, STI programmes become powerful drivers of
            productivity and goal alignment. When poorly structured, they can
            lead to entitlement, confusion, or gaming of metrics.
          </p>
          <p className="text-muted-white leading-relaxed mb-4">
            We design STI frameworks that align incentives with measurable
            business outcomes while maintaining fairness, transparency, and
            motivational impact across roles.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Performance-linked variable models:</strong> Defining clear payout formulae tied to individual KPI achievement and business performance thresholds.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Target-setting methodology:</strong> Structuring goals that are ambitious yet achievable — avoiding the "all or nothing" effect and sustaining motivation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Sales incentive architecture:</strong> Designing incentive structures for sales roles, including accelerators, decelerators, and territory fairness mechanisms.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Profit-linked incentive models:</strong> Enabling organisations to share value creation with employees in a structured and sustainable way.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is a high-impact incentive system that reinforces performance, drives accountability, and directly links rewards to business success.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Long-Term Incentive (LTI) Models — ESOPs, Phantom Stock & SAR Advisory",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Long-Term Incentives (LTIs) are among the most powerful tools for
            retaining senior talent, aligning leadership with shareholder value,
            and fostering a sense of shared ownership. For scaling
            organisations, LTIs often determine whether leadership stays
            committed through the growth journey or exits at the first
            opportunity.
          </p>
          <p className="text-muted-white leading-relaxed mb-4">
            We provide advisory on designing LTI frameworks that balance
            retention, motivation, and capital structure considerations while
            aligning with long-term business outcomes.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">ESOP design:</strong> Structuring Employee Stock Option Plans including eligibility criteria, grant sizing, vesting schedules (typically 3–4 year cliff and graded), exercise pricing, and exit event provisions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Phantom stock & Stock Appreciation Rights (SARs):</strong> For private companies not ready for ESOPs, these models provide economic upside without diluting the cap table.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Vesting design & governance:</strong> Aligning vesting timelines, acceleration clauses, and governance frameworks with PE/VC investment structures and potential IPO pathways.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The result is a robust long-term incentive strategy that strengthens leadership retention, aligns interests with enterprise value creation, and supports sustainable organisational growth.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Rewards & Recognition (R&R) Frameworks",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Monetary compensation helps retain employees, but recognition is
            what truly motivates them. A well-designed Rewards & Recognition
            (R&R) programme acknowledges behaviours and contributions that
            formal appraisals often miss — in real time, not just at year-end.
          </p>
          <p className="text-muted-white leading-relaxed mb-4">
            We design R&R frameworks that reinforce organisational values, drive
            desired behaviours, and create a culture of appreciation that is
            both consistent and scalable.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Spot awards & peer recognition programmes:</strong> Enabling timely appreciation of contributions through structured and inclusive recognition mechanisms.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Behaviour-linked recognition:</strong> Aligning recognition programmes with organisational values to reinforce the behaviours that matter most.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Budget discipline models:</strong> Designing cost-effective frameworks that ensure scalability without compromising impact.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Manager toolkits:</strong> Equipping managers with practical tools and guidelines to deliver meaningful and consistent recognition.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The outcome is a culture where recognition becomes a daily practice, strengthening engagement, reinforcing performance, and building a high-trust work environment.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Benefits & Wellbeing Structuring",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Benefits are an increasingly critical part of the Total Rewards
            story — especially as Gen Z and millennial employees evaluate
            healthcare, flexibility, and wellbeing support alongside base
            compensation.
          </p>
          <p className="text-muted-white leading-relaxed mb-4">
            We help organisations design benefits frameworks that are relevant,
            flexible, and aligned with evolving workforce expectations while
            maintaining cost efficiency and scalability.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Group health & term insurance structuring:</strong> Advisory on designing comprehensive coverage plans that balance employee needs with organisational cost considerations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Flexible benefits architecture:</strong> Creating modular benefits programmes tailored to different employee segments and life stages.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Leadership wellbeing frameworks:</strong> Designing wellbeing and executive benefit structures that support senior leadership performance and sustainability.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Leave & flexibility policy design:</strong> Aligning leave, remote work, and flexibility policies with talent strategy and organisational culture.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">
            The result is a future-ready benefits ecosystem that enhances employee experience, strengthens employer brand, and supports long-term talent retention.
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
    { icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Market-competitive compensation", desc: "Pay structures benchmarked against industry standards to attract and retain the right talent." },
    { icon: <PieChart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Performance-linked pay", desc: "Variable pay programmes that directly connect rewards to individual and business performance." },
    { icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Holistic benefits design", desc: "Comprehensive benefits architecture covering health, financial wellness, and lifestyle needs." },
    { icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Pay equity & transparency", desc: "Ensure fair and equitable compensation across all demographics with full audit trails." },
    { icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Total rewards communication", desc: "Help employees understand and value their complete compensation and benefits package." },
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
      <HRCAMSSubNavbar />

      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">HRCAMS</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-yellow font-semibold">Total Rewards</span>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={TotalRewardsArchitecture} alt="Total Rewards" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Total Rewards Architecture
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Design compensation and benefits strategies that attract, retain, and motivate your workforce while maintaining fiscal discipline.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Total rewards goes beyond salary. It encompasses everything an employee values from the employment relationship — compensation, benefits, career development, work-life balance, and recognition. A well-designed total rewards strategy becomes your strongest talent magnet and retention tool.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-yellow uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">82%</div>
              <p className="text-mid text-muted-white leading-relaxed">
                of employees consider total compensation — not just salary — when evaluating job offers and deciding whether to stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How vision, strategy and implementation are transforming{" "}
            <span className="text-cap-yellow">reward strategies</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={Rewardstrategies} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-yellow mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From cost centre to strategic investment</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                Leading organisations are reimagining compensation as a strategic lever — not just a cost line. By aligning rewards with business outcomes, talent markets, and employee values, they're achieving 30% better retention and 25% improvement in offer acceptance rates.
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
                <div key={item.title} className="border-b border-border/30 relative">
                  {isOpen && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cap-yellow"
                      layoutId="accordionBar"
                    />
                  )}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                    className="flex justify-between items-center w-full text-left cursor-pointer py-5 pl-4"
                  >
                    <span className="text-[25px] font-semibold">{item.title}</span>
                    <span className="text-2xl text-cap-yellow font-light w-8 text-center">
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

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">
            Design rewards that retain your best people
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

export default TotalRewards;