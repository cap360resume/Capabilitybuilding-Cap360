import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const awards = [
  {
    tab: "Business Transformation",
    title: "From Strategy to Scalable Impact",
    description:
      "Identifying high-impact levers—whether it’s scaling new revenue streams, improving productivity, or redesigning operating models for agility. Through a combination of advisory, managed services, and capability building, we ensure transformation initiatives translate into measurable outcomes."
      
  },
  {
    tab: "People Strategy",
    title: "Building Organizations that Perform & Endure",
    description:
      "Frameworks specially designed to enhance individual outcomes while maintaining the serenity of culture. We focus on building performance-driven processes through robust assessment frameworks, outcome-oriented PMS, and leadership capability development. Our approach spans the entire employee lifecycle—bringing structure, clarity, and consistency to how organizations attract, develop, and retain talent."  
    },
 {
  tab: "Sectors We Serve",
  title: "Deep Expertise. Contextual Solutions.",
  description:
    "We partner with organizations across diverse industries to design talent strategies and capability frameworks that align with their unique business context, challenges, and growth ambitions.",
  items: [
    {
      title: "Global Capability Centers (GCC)",
      description:
        "Build, scale, and optimize GCCs with the right talent architecture, operating models, and governance frameworks.",
    },
    {
      title: "Manufacturing",
      description:
        "Enhance shopfloor productivity, strengthen workforce capability, and drive operational excellence at scale.",
    },
    {
      title: "Engineering",
      description:
        "Enable engineering-led businesses with specialized talent strategies and project-aligned workforce solutions.",
    },
    {
      title: "AI & Technology",
      description:
        "Build future-ready organizations by aligning talent, capability, and structure with rapid technological evolution.",
    },
  ],
}
];

const AwardsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-dark py-24" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Focus Areas 
        </motion.h2>

        {/* Tab buttons */}
        <motion.div
          className="flex gap-1 mb-10 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {awards.map((award, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 border-b-2 ${
                activeTab === index
                  ? "border-cap-orange text-foreground bg-secondary/40"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/20"
              }`}
            >
              {award.tab}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
           <div>
  <div className="accent-bar mb-6" />

  <h3 className="text-2xl lg:text-3xl font-bold mb-5">
    {awards[activeTab].title}
  </h3>

  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
    {awards[activeTab].description}
  </p>

  {/* ✅ Sectors List */}
  <div className="grid gap-6 md:grid-cols-2">
    {awards[activeTab].items?.map((item, index) => (
      <div key={index} className="group">
        <h4 className="text-lg font-semibold mb-2 group-hover:text-cap-orange transition">
          {item.title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-cap-orange/30 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-cap-blue/30 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-black text-cap-orange">#{activeTab + 1}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AwardsSection;
