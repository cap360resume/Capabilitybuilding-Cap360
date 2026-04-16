import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const awards = [
  {
    tab: "Business Transformation",
    title: "A Leader in Transformation",
    description:
      "Our Chair and CEO is recognized among the Most Powerful People in Business. Every day, our people demonstrate why CAP360 is our clients' transformation partner of choice.",
  },
  {
    tab: "People Strategy",
    title: "A Great Place To Work®",
    description:
      "We are proud to have earned a top spot on the Great Place To Work® list of the World's Best Workplaces™. This recognition is based on feedback from our people worldwide.",
  },
  {
    tab: "Sectors",
    title: "A Trusted Industry Leader",
    description:
      "CAP360 is a Leader in multiple industry analyst reports for cloud transformation, AI strategy, and digital consulting services.",
  },
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
              {/* <motion.a
                href="#"
                className="cta-link text-sm"
                whileHover={{ x: 5 }}
              >
                See related awards
                <ChevronRight className="w-6 h-6 text-cap-orange" />
              </motion.a> */}
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
