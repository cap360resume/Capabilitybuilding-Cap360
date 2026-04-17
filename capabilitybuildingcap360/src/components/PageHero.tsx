import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
}

const PageHero = ({ label, title, subtitle, image, ctaText, ctaHref = "#" }: PageHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative container mx-auto px-4 lg:px-8 pb-16 pt-40">
        <motion.span
          className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {label}
        </motion.span>
        <motion.h1
          className="hero-title max-w-4xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="hero-subtitle max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>
        {ctaText && (
          <motion.a
            href={ctaHref}
            className="cta-link text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ x: 5 }}
          >
            {ctaText}
            <ChevronRight className="w-6 h-6 text-cap-orange" />
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default PageHero;
