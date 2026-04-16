import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { ArrowRight, LayoutGrid, Users, GitBranch, TrendingUp, Search } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import Workforce from "@/assets/workforce.jpg";
import orgDesign from "@/assets/org effectiveness.jpg";

const OrgDesign = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: LayoutGrid,
      title: "Organisation Structure Design",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Design organisational structures that enable agility, clear accountability, and efficient decision-making.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Structure Models:</strong> Functional, matrix, flat, divisional, and hybrid structures based on strategy.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Span of Control:</strong> Optimise reporting lines and managerial spans for efficiency.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Role Clarity:</strong> RACI matrices, job architecture, and decision rights frameworks.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a streamlined structure aligned to your strategic priorities.</p>
        </>
      ),
    },
    {
      icon: Users,
      title: "Workforce Planning & Optimisation",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Right-size your workforce with data-driven planning that balances capacity, capability, and cost.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Demand Forecasting:</strong> Predictive models for headcount planning based on business projections.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Skills Gap Analysis:</strong> Current vs. future capability mapping for upskilling strategies.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Cost Optimisation:</strong> Workforce cost modelling and make-vs-buy talent decisions.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is an optimally sized workforce ready for tomorrow's challenges.</p>
        </>
      ),
    },
    {
      icon: GitBranch,
      title: "Change Management & Transformation",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Navigate organisational transformations with structured change management that brings people along the journey.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Change Strategy:</strong> Stakeholder mapping, impact assessment, and communication planning.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Transition Support:</strong> Role transitions, restructuring communication, and employee FAQs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Culture Integration:</strong> M&A cultural due diligence and post-merger people integration.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is successful transformation with minimal disruption and maximum adoption.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <LayoutGrid className="w-8 h-8 text-cap-yellow" />, title: "Agile organisation structures", desc: "Design structures that enable fast decision-making, clear accountability, and strategic alignment." },
    { icon: <Users className="w-8 h-8 text-cap-yellow" />, title: "Optimised workforce sizing", desc: "Right-size teams based on workload analysis, productivity benchmarks, and growth projections." },
    { icon: <GitBranch className="w-8 h-8 text-cap-yellow" />, title: "Smooth transformations", desc: "Navigate restructuring, M&A integrations, and operating model changes with minimal disruption." },
    { icon: <TrendingUp className="w-8 h-8 text-cap-yellow" />, title: "Future-ready capabilities", desc: "Map current skills against future needs and build targeted capability development roadmaps." },
    { icon: <Search className="w-8 h-8 text-cap-yellow" />, title: "Data-driven decisions", desc: "Use workforce analytics to inform org design choices with evidence, not assumptions." },
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
    if (w > 0) {
      setOffset(w * cloneOffset);
      setCarouselReady(true);
    }
  }, [getCardWidth, cloneOffset]);

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
      <SubNavbar title="Services" titlePath="/what-we-do" items={[
        { label: "ASER", path: "/what-we-do/services/aser" },
        { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
        { label: "TCB", path: "/what-we-do/services/tcb" },
        { label: "PACE", path: "/what-we-do/services/pace" },
      ]} />
      <HRCAMSSubNavbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">HRCAMS</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-yellow font-semibold">Org Design</span>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={Workforce} alt="Org Design" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Org Design & Workforce Planning
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Build the right structure, with the right people, in the right roles — to execute your strategy with precision and agility.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stat section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Organisation design is the invisible infrastructure that determines how well your strategy gets executed. When structure follows strategy, everything works — decisions happen faster, talent flows to where it's needed, and teams collaborate effortlessly.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-yellow uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">59%</div>
              <p className="text-mid text-muted-white leading-relaxed">
                of restructuring efforts fail to achieve their objectives due to poor change management and misaligned org design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How vision, strategy and implementation are transforming{" "}
            <span className="text-cap-yellow">org effectiveness</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={orgDesign} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-yellow mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From hierarchical silos to networked teams</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                The most effective organisations are moving away from rigid hierarchies toward fluid, networked structures that enable cross-functional collaboration, rapid innovation, and distributed decision-making.
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
                  <h3 className="text-[24px] font-bold mt-4 mb-2">{card.title}</h3>
                  <p className="text-[18px] text-muted-white leading-relaxed">{card.desc}</p>
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

      {/* CTA */}
      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-white">
            Redesign your organisation for the future
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

export default OrgDesign;