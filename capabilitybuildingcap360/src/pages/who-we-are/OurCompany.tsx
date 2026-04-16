import { useState } from "react";
import { ChevronRight, Plus, Minus, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/who-we-are-hero.jpg";
import { Target, Users, Globe, Lightbulb, TrendingUp } from "lucide-react";

const accordionItems = [
  {
    title: "End-to-End Capability Ecosystem",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">CAP360 is one of the few partners that covers the full talent lifecycle — from acquisition to career acceleration — under a single integrated ecosystem.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />HireTek for smart, quality talent acquisition beyond the résumé</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />ASER for data-driven, objective assessment of talent at every level</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />HRCAMS, TCB & PACE for consulting, upskilling, and career growth</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Strategic HR Transformation",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Through HRCAMS, we go beyond advisory — we embed ourselves as strategic HR partners to drive meaningful, measurable transformation within enterprise organizations.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Managed HR services tailored to the complexity of large organizations</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />People strategy aligned directly with business objectives</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Long-term partnerships built on trust, outcomes, and accountability</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Enterprise-Grade Learning & Development",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Our TCB and PACE pillars are purpose-built to upskill workforces and accelerate careers — equipping enterprises with the human capital they need to lead in a rapidly evolving world.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Capability building programs designed for scale and measurable impact</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Professional alignment solutions for leadership and high-potential talent</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Career acceleration frameworks that retain and grow top performers</li>
        </ul>
      </div>
    ),
  },
];

const sliderCards = [
  { icon: Target, title: "5 Integrated Service Pillars", description: "HireTek, ASER, HRCAMS, TCB & PACE — a complete capability building ecosystem under one roof." },
  { icon: Users, title: "Founded in 2018", description: "Over half a decade of focused expertise in building future-ready workforces for enterprises." },
  { icon: Globe, title: "Enterprise-Focused", description: "Dedicated to serving large and complex organizations with tailored, high-impact solutions." },
  { icon: Lightbulb, title: "Data-Driven Approach", description: "From ASER's objective evaluations to HireTek's smart acquisition — decisions backed by insight." },
  { icon: TrendingUp, title: "Proven Outcomes", description: "Future-ready workforce. Better leadership. High-performing organizations — delivered consistently." },
];

const OurCompany = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const navigate = useNavigate();
  const { ref: contextRef, isInView: contextVisible } = useScrollAnimation();
  const { ref: visionRef, isInView: visionVisible } = useScrollAnimation();
  const { ref: accordionRef, isInView: accordionVisible } = useScrollAnimation();
  const { ref: sliderRef, isInView: sliderVisible } = useScrollAnimation();

  const maxSlider = sliderCards.length - 3;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border/30">
          <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center gap-2 text-xs text-muted-foreground">
            <button onClick={() => navigate("/who-we-are")} className="hover:text-foreground transition-colors">Who We Are</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Our Company</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={heroImg} alt="Our Company" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">Our Company</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  CAP360 is a full-spectrum Capability Building Ecosystem — bringing together quality hiring, talent assessment, HR consulting, workforce upskilling, and career acceleration under one integrated platform. We partner with enterprises to build workforces that are future-ready, leadership-strong, and built to perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section ref={contextRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${contextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Founded in 2018 with a simple yet powerful mission — to help professionals at every career stage achieve their full potential — CAP360 has grown into a trusted capability partner for enterprises. Our integrated approach spans talent acquisition, assessment science, HR advisory, learning & development, and professional career enhancement, enabling organizations to transform their human capital from the ground up.
              </p>
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <div className="text-5xl font-bold text-cap-orange mb-3">360°</div>
                <p className="text-muted-foreground">A complete view of capability building — from the moment talent is hired to the point where leaders are made. CAP360 covers every stage of the professional journey for the enterprises we serve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section ref={visionRef} className={`py-16 lg:py-24 transition-all duration-700 ${visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Our Vision & Strategy</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={heroImg} alt="Vision" className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We envision a world where every organization thrives through the strength of its people. Our strategy is to be the most trusted end-to-end capability partner for enterprises — delivering integrated solutions that align talent with business goals, build future-ready leadership, and create high-performing organizations. We believe that people strategy is business strategy, and we exist to bridge that gap with precision, expertise, and purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Accordion */}
        <section ref={accordionRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${accordionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">What Sets Us Apart</h2>
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

        {/* Slider */}
        <section ref={sliderRef} className={`py-16 lg:py-24 transition-all duration-700 ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">By the Numbers</h2>
              <div className="flex gap-2">
                <button onClick={() => setSliderIndex(Math.max(0, sliderIndex - 1))} disabled={sliderIndex === 0} className="p-2 rounded-full border border-border hover:bg-secondary disabled:opacity-30 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                <button onClick={() => setSliderIndex(Math.min(maxSlider, sliderIndex + 1))} disabled={sliderIndex >= maxSlider} className="p-2 rounded-full border border-border hover:bg-secondary disabled:opacity-30 transition-colors"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${sliderIndex * 33.33}%)` }}>
                {sliderCards.map((card, i) => (
                  <div key={i} className="min-w-[calc(33.33%-16px)] bg-card border border-border/50 rounded-xl p-8">
                    <card.icon className="w-10 h-10 text-cap-orange mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-cap-navy">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build Capability with CAP360?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Discover how our integrated ecosystem of hiring, assessment, consulting, and learning solutions can transform your organization's human capital.</p>
            <button onClick={() => navigate("/contact")} className="px-8 py-4 bg-cap-orange hover:bg-cap-orange/90 text-white font-semibold rounded-lg transition-colors">Get in Touch</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurCompany;