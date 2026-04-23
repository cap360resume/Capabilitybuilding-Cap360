import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg"; // ← add your new image here
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

const insights = [
  {
    category: "HR Strategy",
    title: "M&A and the People Problem: How HR Due Diligence Determines Deal Success",
    image: card2,
  },
  {
    category: "Workforce Trends",
    title: "The Upskilling Imperative: Why L&D Is Now a Retention Tool",
    image: card1, // ← was null, now has image
  },
  {
    category: "Workforce Trends",
    title: "The Upskilling Imperative: Why L&D Is Now a Retention Tool",
    image: card3,
  },
  {
    category: "Leadership",
    title: "Building Leadership Pipelines That Don't Break Under Pressure",
    image: card4,
  },
];

const InsightsSection = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section id="services" className="section-dark py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="insight-card group min-h-[420px] flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="insight-card-overlay" />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <span className="text-xs font-bold tracking-widest text-cap-orange mb-3">
                  {insight.category}
                </span>
                <h3 className="text-lg font-bold leading-snug text-foreground group-hover:text-cap-blue transition-colors duration-300">
                  {insight.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;