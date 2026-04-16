import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

interface ContentCard {
  title: string;
  description: string;
  link?: string;
  image?: string;
  path?: string;
}

interface ContentGridProps {
  sectionLabel: string;
  heading: string;
  cards: ContentCard[];
  columns?: 2 | 3 | 4;
  variant?: "dark" | "navy";
}

const colsClass = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" };

const ContentGrid = ({ sectionLabel, heading, cards, columns = 3, variant = "dark" }: ContentGridProps) => {
  const { ref, isInView } = useScrollAnimation(0.1);
  const navigate = useNavigate();

  return (
    <section className={variant === "navy" ? "section-navy py-24" : "section-dark py-24"} ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.span
          className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {sectionLabel}
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {heading}
        </motion.h2>
        <div className={`grid gap-8 ${colsClass[columns]}`}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`group bg-card border border-border/30 overflow-hidden hover:border-cap-blue/40 transition-all duration-300 ${card.path ? "cursor-pointer" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{ y: -4 }}
              onClick={() => card.path && navigate(card.path)}
            >
              {card.image && (
                <div className="overflow-hidden h-48">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cap-blue transition-colors">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{card.description}</p>
                {card.link && (
                  <span className="cta-link text-sm">
                    {card.link}
                    <ArrowRight className="w-4 h-4 text-cap-orange" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
