import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import PACESubNavbar from "@/components/PACESubNavbar";
import { ArrowRight, Award, Search, Type, Users, FileText, TrendingUp, MessageSquare, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/service-hero-pace.jpg";

const LinkedInOptimization = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    {
      icon: Award,
      title: "Ranking on Top in LinkedIn Applications",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            When you apply via LinkedIn, recruiters see a ranked list of applicants. We optimise every signal LinkedIn's algorithm uses to push your profile to the top of that stack.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Algorithm signal audit:</strong> Reviewing profile completeness, activity score, and connection strength that influence ranking.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Skills endorsement strategy:</strong> Pinning and prioritising skills that match target job descriptions for better match scoring.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Easy Apply optimisation:</strong> Structuring the profile so one-click applications surface the strongest possible first impression.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Open to Work settings:</strong> Configuring visibility so the right recruiters find you — without alerting your current employer.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a profile that consistently ranks at the top when it counts.</p>
        </>
      ),
    },
    {
      icon: FileText,
      title: "Complete Profile Makeover",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Most LinkedIn profiles read like a static CV. We transform them into compelling, recruiter-ready narratives that communicate value at every scroll.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">About section rewrite:</strong> A punchy, first-person narrative that communicates who you are, what you do, and what you're looking for.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Experience section overhaul:</strong> Achievement-led bullet points with metrics that demonstrate impact, not just responsibility.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Banner and photo guidance:</strong> Professional visual setup that creates the right first impression within seconds.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Featured section strategy:</strong> Showcasing the right work samples, articles, or links that reinforce credibility and expertise.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a profile that stops the scroll and earns the click.</p>
        </>
      ),
    },
    {
      icon: Search,
      title: "Keyword Optimisation",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            LinkedIn's search algorithm is keyword-driven. We identify and embed the exact terms recruiters use so your profile surfaces in the right searches — consistently.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Recruiter search term research:</strong> Identifying the exact phrases talent teams use to find candidates in your field.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Strategic keyword placement:</strong> Weaving high-value terms naturally across the headline, about, experience, and skills sections.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Industry jargon mapping:</strong> Balancing technical terminology with accessible language for both algorithm and human readers.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Competitor profile benchmarking:</strong> Analysing top-ranked profiles in the target field and closing any keyword gaps.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a profile that recruiters find — without you having to apply.</p>
        </>
      ),
    },
    {
      icon: Type,
      title: "Professional Headline Creation",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Your headline is the most viewed line on your profile. We craft headlines that communicate your value proposition, pass keyword searches, and compel recruiters to click through.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Value-led framing:</strong> Moving beyond job titles to communicate what you actually bring — not just what you're called.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Keyword-rich structure:</strong> Building headlines that satisfy both the algorithm and the human reading them.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Multiple headline variants:</strong> Tailored options for active job seekers vs. passive candidates looking to attract inbound interest.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">A/B testing approach:</strong> Tracking profile view changes after headline updates to measure what resonates.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a headline that works as hard as every other line on the page.</p>
        </>
      ),
    },
    {
      icon: TrendingUp,
      title: "Content Strategy Planning",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Posting on LinkedIn isn't just for thought leaders. Strategic content makes you visible, builds credibility, and puts you in front of the right people — before they're even looking to hire.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Content pillar framework:</strong> Defining 3–4 recurring themes that consistently reinforce your professional positioning.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Post format coaching:</strong> Crafting hooks, structure, and CTAs for carousels, text posts, and short-form articles.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Posting cadence planning:</strong> A sustainable schedule — typically 2–3 posts per week — that builds consistency without overwhelm.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Repurposing strategy:</strong> Turning existing work — reports, presentations, experiences — into content without starting from scratch.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a consistent presence that builds authority and attracts inbound opportunity.</p>
        </>
      ),
    },
    {
      icon: Users,
      title: "Network Expansion Tactics",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            A strong LinkedIn network isn't just about connection count — it's about having the right people in your orbit. We build targeted network growth strategies that open real doors.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Target connection profiling:</strong> Identifying the exact roles — recruiters, hiring managers, peers, alumni — worth prioritising.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Personalised connection request scripts:</strong> Messages that get accepted because they lead with value, not asks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Alumni and community leverage:</strong> Tapping into shared networks — university, industry groups, former employers — for warm introductions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Weekly connection goals:</strong> A structured approach to growing the network by 20–30 targeted connections per week.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a growing network of the right people in the right places.</p>
        </>
      ),
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Engagement Framework",
      content: (
        <>
          <p className="text-muted-white leading-relaxed mb-4">
            Visibility on LinkedIn isn't just about what you post — it's about how you show up in other people's feeds. We build an engagement rhythm that keeps you front of mind without being noise.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Commenting strategy:</strong> Writing thoughtful, visible comments on high-traction posts to build presence and credibility.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Creator following tactics:</strong> Strategically engaging with industry voices whose audiences overlap with your target market.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">DM and relationship nurturing:</strong> Following up on connections with genuine, low-pressure messages that build real relationships.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cap-green mt-2 flex-shrink-0" />
              <span className="text-muted-white text-md">
                <strong className="text-white">Daily 15-minute engagement routine:</strong> A structured habit that keeps the algorithm warm and the network active — without consuming the day.
              </span>
            </li>
          </ul>
          <p className="text-muted-white text-md">The outcome is a LinkedIn presence that works around the clock — even when you're not online.</p>
        </>
      ),
    },
  ];

  // ─── Infinite carousel ────────────────────────────────────────────────────
  const cards = [
    { icon: <Award className="w-8 h-8 text-cap-green" />, title: "Top applicant ranking", desc: "An algorithm-optimised profile that consistently surfaces at the top of recruiter searches and application stacks." },
    { icon: <Search className="w-8 h-8 text-cap-green" />, title: "Inbound recruiter interest", desc: "Keyword-rich profiles attract direct recruiter outreach — so opportunities come to you, not just the other way round." },
    { icon: <TrendingUp className="w-8 h-8 text-cap-green" />, title: "Growing professional authority", desc: "A consistent content presence that builds credibility and visibility in your industry over time." },
    { icon: <Users className="w-8 h-8 text-cap-green" />, title: "A network that opens doors", desc: "Targeted connection growth that creates warm paths into companies and roles long before a job is advertised." },
    { icon: <Zap className="w-8 h-8 text-cap-green" />, title: "Measurable profile performance", desc: "Tracking profile views, search appearances, and engagement to see exactly what's working and what to adjust." },
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

  const handleNext = useCallback(() => {
    slideTo(currentIndex + 1);
  }, [currentIndex, slideTo]);

  const handlePrev = useCallback(() => {
    slideTo(currentIndex - 1);
  }, [currentIndex, slideTo]);

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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 py-4 mt-5">
        <span className="text-xs text-muted-white">PACE</span>
        <span className="text-xs text-muted-white mx-2">/</span>
        <span className="text-xs text-cap-green font-semibold">LinkedIn Optimisation</span>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img src={heroImg} alt="LinkedIn Optimisation" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <motion.h1
              className="text-[42px] md:text-[56px] font-black tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              LinkedIn Optimisation
            </motion.h1>
            <motion.p
              className="text-[20px] text-muted-white leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transform your LinkedIn profile into a powerful networking and job-hunting tool. From algorithm-beating keyword placement to a content strategy that builds authority — we turn your profile into an asset that works for you 24/7.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stat section */}
      <section className="py-16 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
            <p className="text-[20px] text-muted-white leading-[1.8]">
              LinkedIn has over one billion members — but most profiles are invisible. A weak headline, generic About section, and absence of strategic keywords means recruiters scroll past without stopping. The candidates who get contacted, shortlisted, and hired aren't always the most qualified — they're the ones with profiles optimised to be found, to impress in seconds, and to signal exactly the right fit for the roles that matter most to them.
            </p>
            <div className="bg-card border border-border/30 p-8">
              <span className="text-[20px] font-bold tracking-widest text-cap-green uppercase block mb-3">DATA</span>
              <div className="text-[56px] font-black leading-none mb-3">87%</div>
              <p className="text-mid text-muted-white leading-relaxed">
                of recruiters use LinkedIn as their primary tool to find and evaluate candidates — making profile optimisation one of the highest-ROI career investments available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 max-w-3xl">
            How a fully optimised LinkedIn presence turns passive browsing into{" "}
            <span className="text-cap-green">active opportunity</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={heroImg} alt="LinkedIn Strategy" className="w-full h-[350px] object-cover" />
            <div>
              <div className="w-12 h-1 bg-cap-green mb-6" />
              <h3 className="text-[22px] font-bold mb-4">From a profile that exists to one that performs</h3>
              <p className="text-[20px] text-muted-white leading-[1.7]">
                There's a fundamental difference between having a LinkedIn profile and having a LinkedIn strategy. Our optimisation process covers every layer — from the algorithm signals that determine your ranking in recruiter searches, to the narrative that convinces a hiring manager to reach out. Combined with a content and engagement framework that keeps you visible in your industry, the result is a profile that generates real career opportunities — not just profile views.
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
            How We Optimise Your LinkedIn Presence
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
            Make your LinkedIn profile work as hard as you do
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

export default LinkedInOptimization;