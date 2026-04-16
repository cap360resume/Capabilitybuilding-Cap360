import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Stat {
  value: string;
  label: string;
}

const StatsBanner = ({ stats }: { stats: Stat[] }) => {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section className="bg-cap-navy py-20 border-y border-border/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-${stats.length} gap-10`}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-4xl md:text-5xl font-black text-cap-orange block mb-2">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
