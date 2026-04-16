import { useState } from "react";
import { ChevronRight, Plus, Minus, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/who-we-are-hero.jpg";
import { Heart, Shield, Users, Sparkles, HandHeart } from "lucide-react";

const accordionItems = [
  {
    title: "Client Value Creation",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">We exist to create measurable value for our clients — across every engagement, every interaction.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Delivering outcomes that matter, not just outputs</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Bringing the best of our global expertise to every project</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Building long-term partnerships based on trust and results</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Integrity & Transparency",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Honesty and ethical conduct form the bedrock of everything we do.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Upholding the highest standards of corporate governance</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Transparent communication with all stakeholders</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Zero tolerance for unethical practices</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Respect for the Individual",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">We celebrate diversity and believe every individual brings unique value.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Fostering an inclusive workplace where all voices are heard</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Investing in continuous learning and professional growth</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Supporting work-life balance and employee wellbeing</li>
        </ul>
      </div>
    ),
  },
];

const sliderCards = [
  { icon: Heart, title: "Stewardship", description: "We take care of what matters — our people, our clients, our communities, and our planet." },
  { icon: Shield, title: "Best People", description: "We attract and develop the best talent, providing them with opportunities to grow and excel." },
  { icon: Users, title: "One Global Network", description: "We collaborate across borders and cultures to deliver seamless, integrated solutions." },
  { icon: Sparkles, title: "Innovation", description: "We embrace change and continuously seek better ways to serve our clients and communities." },
  { icon: HandHeart, title: "Corporate Citizenship", description: "We give back through pro-bono work, sustainability initiatives, and community engagement." },
];

const OurValues = () => {
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
        <div className="bg-secondary/30 border-b border-border/30">
          <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center gap-2 text-xs text-muted-foreground">
            <button onClick={() => navigate("/who-we-are")} className="hover:text-foreground transition-colors">Who We Are</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Our Values</span>
          </div>
        </div>

        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={heroImg} alt="Our Values" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">Our Values</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our core values define who we are and guide every decision we make. They shape our culture, drive our behaviour, and inspire us to create 360° value for clients, people, and communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={contextRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${contextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Values are not just words on a wall — they are lived experiences. At CAP360, our values are embedded in every client engagement, every internal initiative, and every community programme we support.
              </p>
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <div className="text-5xl font-bold text-cap-orange mb-3">100%</div>
                <p className="text-muted-foreground">of our employees complete annual ethics and values training, ensuring our principles are consistently upheld across every level of the organization.</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={visionRef} className={`py-16 lg:py-24 transition-all duration-700 ${visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Living Our Values</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={heroImg} alt="Values in action" className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our values come alive through action. From mentoring future leaders to championing sustainability, we demonstrate our commitment daily — creating an environment where integrity, innovation, and inclusion thrive together.
              </p>
            </div>
          </div>
        </section>

        <section ref={accordionRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${accordionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">Our Core Principles</h2>
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

        <section ref={sliderRef} className={`py-16 lg:py-24 transition-all duration-700 ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">What We Stand For</h2>
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

        <section className="py-16 lg:py-24 bg-cap-navy">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Values That Drive Results</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Our values are not just aspirational — they are the foundation of every client relationship and every outcome we deliver.</p>
            <button onClick={() => navigate("/contact")} className="px-8 py-4 bg-cap-orange hover:bg-cap-orange/90 text-white font-semibold rounded-lg transition-colors">Connect With Us</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurValues;
