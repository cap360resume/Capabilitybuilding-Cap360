import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import careersBg from "@/assets/careers-bg.jpg";

const CareersSection = () => {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={careersBg}
            alt="Careers at CAP360"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
        <motion.div
          className="bg-cap-navy p-12 lg:p-20 flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-xs font-bold tracking-widest text-cap-orange mb-4">
            CAREERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Build a career that's as exciting as the world we're shaping
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Grow personally and professionally in a global company that helps
            you unlock your full potential.
          </p>
          <motion.a
            href="/careers"
            className="cta-link text-lg"
            whileHover={{ x: 5 }}
          >
            Join us
            <ChevronRight className="w-6 h-6 text-cap-orange" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
