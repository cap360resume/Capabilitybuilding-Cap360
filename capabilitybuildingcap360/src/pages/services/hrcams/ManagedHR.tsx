import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { ArrowRight, Settings, UserCheck, FileText, Headphones, Shield, BarChart3, ClipboardList } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import HRoperations from "@/assets/HR-operations.jpg";
import ManagedHRServices from "@/assets/Managed-HR-Services.jpg";

const ManagedHR = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Settings,
      title: "End-to-End Employee Lifecycle Management",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Every employee touchpoint matters — from onboarding to exit. We manage the complete lifecycle to ensure consistency, compliance, and a smooth employee experience.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Onboarding:</strong> Offer letters, documentation, induction, and early-stage integration support.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Probation management:</strong> Structured reviews and confirmation processes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Role changes:</strong> Managing transfers and internal movements with proper documentation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Exit management:</strong> Resignations, notice periods, exit interviews, and full & final settlement.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a seamless and well-governed employee lifecycle.</p>
        </>
      ),
    },
    {
      icon: ClipboardList,
      title: "PMS Administration",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Running a performance cycle requires significant coordination. We manage the entire PMS process to ensure timely execution and consistency across the organisation.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Goal tracking:</strong> Distribution and completion monitoring.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Review cycles:</strong> Mid-year and year-end coordination.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Calibration:</strong> Facilitating fair and consistent ratings.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Documentation:</strong> Ratings and outcome records.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a smooth, structured, and efficient PMS cycle.</p>
        </>
      ),
    },
    {
      icon: FileText,
      title: "Flexible Engagement Models",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Our Managed HR Services are designed to adapt to your growth stage and internal HR capability, offering flexible engagement models.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Advisory Only:</strong> Framework design and guidance for teams with in-house HR.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Advisory + Implementation:</strong> Design with structured rollout support.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Retainer Model:</strong> Ongoing strategic HR advisory and governance reviews.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-yellow mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">HR Outsourcing:</strong> End-to-end HR operations management.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">A hybrid model is also available, allowing you to scale support as your organisation grows.</p>
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
    { icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "End-to-end employee lifecycle management", desc: "Manage the complete employee journey—from onboarding to exit—with structured processes, documentation, and consistent employee experience." },
    { icon: <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Seamless PMS administration", desc: "Ensure smooth execution of performance cycles through goal tracking, review coordination, calibration support, and outcome documentation." },
    { icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Proactive compliance & policy management", desc: "Monitor statutory compliance, manage policy updates, and ensure adherence to labour laws through structured, ongoing governance." },
    { icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Governance reporting & insights", desc: "Provide leadership with structured HR dashboards covering headcount, attrition, compliance status, and workforce trends." },
    { icon: <Headphones className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cap-yellow" />, title: "Flexible & scalable HR support", desc: "Access tailored HR engagement models—from advisory to fully managed outsourcing—designed to scale with your business needs." },
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
        <span className="text-xs text-cap-yellow font-semibold">Managed HR Services</span>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={ManagedHRServices} alt="Managed HR Services" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Managed HR Services (Outsourced HR)
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Focus on your core business while we handle your entire HR operations — from payroll to compliance to employee experience — with enterprise-grade reliability.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stat section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              Managed HR Services provide a comprehensive solution for organisations looking to outsource their HR operations. By leveraging our expertise and technology, we help you streamline processes, ensure compliance, and enhance the overall employee experience — allowing you to focus on what matters most: your core business.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-yellow uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">68%</div>
              <p className="text-mid text-muted-white leading-relaxed">
                of growing organisations operate without structured HR systems, leading to inconsistent processes, compliance risks, and poor employee experience.
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
            <span className="text-cap-yellow">HR operations</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={HRoperations} alt="Vision" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-yellow mb-6" />
              <h3 className="text-[22px] font-bold mb-4">Move from informal HR to structured people management</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                As organisations grow, managing HR informally creates inconsistencies, compliance risks, and inefficiencies. By implementing managed HR services, businesses can establish structured processes, ensure compliance, and improve employee experience—without the cost of building a full in-house HR function.
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
            Transform your HR operations
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

export default ManagedHR;