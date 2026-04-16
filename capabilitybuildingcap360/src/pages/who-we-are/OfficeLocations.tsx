import { useState } from "react";
import { ChevronRight, Plus, Minus, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/who-we-are-hero.jpg";
import { MapPin, Building2, Globe, Plane, Users } from "lucide-react";

const accordionItems = [
  {
    title: "Africa & Middle East",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Our growing presence across Africa and the Middle East supports regional transformation agendas.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Johannesburg — Regional headquarters for Sub-Saharan Africa</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Dubai — Middle East and North Africa hub</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Lagos, Nairobi, Cairo — Key growth markets</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Asia Pacific",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">A strong footprint across Asia Pacific, delivering innovation at scale.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Singapore — APAC headquarters and innovation centre</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Mumbai, Bangalore — Major delivery centres</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />Sydney, Tokyo, Shanghai — Key client hubs</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Europe & Americas",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Established presence across mature markets with deep industry partnerships.</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />London, Paris, Frankfurt — European leadership centres</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />New York — Global headquarters</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cap-orange mt-2 shrink-0" />São Paulo, Toronto — Americas growth hubs</li>
        </ul>
      </div>
    ),
  },
];

const sliderCards = [
  { icon: MapPin, title: "200+ Cities", description: "We maintain offices and delivery centres in over 200 cities across the globe." },
  { icon: Building2, title: "49+ Countries", description: "Our physical presence spans 49+ countries, enabling us to serve clients locally." },
  { icon: Globe, title: "6 Continents", description: "We operate on every continent except Antarctica, ensuring global coverage." },
  { icon: Plane, title: "24/7 Delivery", description: "Follow-the-sun model enables round-the-clock project delivery and support." },
  { icon: Users, title: "Local Expertise", description: "Each office is staffed with professionals who understand local markets and regulations." },
];

const OfficeLocations = () => {
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
            <span className="text-foreground font-medium">Office Locations</span>
          </div>
        </div>

        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={heroImg} alt="Office Locations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">Office Locations</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With offices in 200+ cities across 49+ countries, CAP360 delivers global expertise with local insight. Our strategic locations ensure we're always close to our clients — wherever they operate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={contextRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${contextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our global network is strategically positioned to serve clients across industries and geographies. Each location combines international best practices with deep local market understanding, enabling seamless cross-border collaboration.
              </p>
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <div className="text-5xl font-bold text-cap-orange mb-3">49+</div>
                <p className="text-muted-foreground">countries with CAP360 offices, providing on-the-ground expertise and cultural understanding in every major market worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={visionRef} className={`py-16 lg:py-24 transition-all duration-700 ${visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Our Global Footprint</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={heroImg} alt="Global footprint" className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                From innovation hubs in Silicon Valley to delivery centres in Bangalore, our offices form a connected ecosystem that leverages time zones, talent pools, and regional expertise to deliver round-the-clock excellence.
              </p>
            </div>
          </div>
        </section>

        <section ref={accordionRef} className={`py-16 lg:py-24 bg-secondary/20 transition-all duration-700 ${accordionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">Regional Presence</h2>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Global at a Glance</h2>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Find Us Near You</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">With a global network spanning 200+ cities, we're always close by. Get in touch with your nearest CAP360 office today.</p>
            <button onClick={() => navigate("/contact")} className="px-8 py-4 bg-cap-orange hover:bg-cap-orange/90 text-white font-semibold rounded-lg transition-colors">Contact Us</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeLocations;
