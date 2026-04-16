import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import ceoHeadshot from "@/assets/ceo-headshot.jpg";
import  HeadGsa from "@/assets/Head-gsa.png";

const QuoteSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-navy py-24" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={HeadGsa}
                alt="CEO"
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-sm relative z-10"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-cap-orange rounded-sm" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed text-foreground/90 italic mb-6">
              "Organizations will have a greater technology landscape, but we
              need to completely change the narrative to inspire people to
              paint the future. It is human in the lead, not human in the
              loop."
            </blockquote>
            <p className="text-cap-orange font-semibold text-lg">
              Gurpriit Singh Anand
            </p>
            <p className="text-muted-foreground text-sm">
              CEO, CAP360
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
