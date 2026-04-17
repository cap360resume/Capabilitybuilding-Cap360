import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              CAPABILITY BUILDING
              <br />
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="text-cap-blue"> </span>
                <span className="text-cap-orange">ECO</span>
                <span className="text-cap-blue">SYSTEM</span>
              </motion.span>
            </motion.h1>
          </div>

          <div>
            <motion.div
              className="accent-bar mb-6"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            />
            <motion.h2
              className="text-xl md:text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Shaping tomorrow, today
            </motion.h2>
            <motion.p
              className="hero-subtitle mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              In a world of constant change, transformation is a continuous
              strategy. That's why we work with organizations to rewrite the
              rules of growth, innovation and resilience.
            </motion.p>
            <motion.a
              href="/what-we-do"
              className="cta-link text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              whileHover={{ x: 5 }}
            >
              See what we do
              < ChevronRight className="w-6 h-6 text-cap-orange" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
