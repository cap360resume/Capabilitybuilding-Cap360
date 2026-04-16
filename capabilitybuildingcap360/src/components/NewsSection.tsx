import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    name: "ASER",
    tag: "Assessment",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    description:
      "Assessment-driven insights to evaluate talent capabilities and unlock growth potential.",
    color: "capRed",
    href: "/what-we-do/services/aser",
  },
  {
    name: "HRCAMS",
    tag: "HR Systems",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    description:
      "End-to-end HR lifecycle management system designed for scalability and efficiency.",
    color: "yellow",
    href: "/what-we-do/services/hrcams",
  },
  {
    name: "TCB",
    tag: "Capability",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "Talent capability building programs to empower individuals and future-ready teams.",
    color: "blue",
    href: "/what-we-do/services/tcb",
  },
  {
    name: "PACE",
    tag: "Performance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "Performance acceleration framework focused on measurable outcomes and business impact.",
    color: "green",
    href: "/services/pace",
  },
  {
    name: "Hiretek",
    tag: "Hiring",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    description:
      "Specialized hiring solutions to help organizations attract, assess, and onboard top talent efficiently.",
    color: "purple",
    href: "https://hiretek.in/",
    wide: true,
  },
];

const colorMap = {
  orange: {
    border: "hover:border-orange-500/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(251,146,60,0.14)]",
    glow: "from-orange-500/[0.12]",
    tag: "text-orange-400 bg-orange-400/10",
    badge: "bg-orange-400/10 text-orange-400",
    explore: "text-orange-400",
    icon: "text-orange-400",
  },
  yellow: {
    border: "hover:border-yellow-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(250,204,21,0.12)]",
    glow: "from-yellow-400/[0.10]",
    tag: "text-yellow-400 bg-yellow-400/10",
    badge: "bg-yellow-400/10 text-yellow-400",
    explore: "text-yellow-400",
    icon: "text-yellow-400",
  },
  blue: {
    border: "hover:border-blue-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(96,165,250,0.14)]",
    glow: "from-blue-400/[0.12]",
    tag: "text-blue-400 bg-blue-400/10",
    badge: "bg-blue-400/10 text-blue-400",
    explore: "text-blue-400",
    icon: "text-blue-400",
  },
  green: {
    border: "hover:border-emerald-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(52,211,153,0.14)]",
    glow: "from-emerald-400/[0.12]",
    tag: "text-emerald-400 bg-emerald-400/10",
    badge: "bg-emerald-400/10 text-emerald-400",
    explore: "text-emerald-400",
    icon: "text-emerald-400",
  },
  purple: {
    border: "hover:border-violet-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(167,139,250,0.14)]",
    glow: "from-violet-400/[0.12]",
    tag: "text-violet-400 bg-violet-400/10",
    badge: "bg-violet-400/10 text-violet-400",
    explore: "text-violet-400",
    icon: "text-violet-400",
  },

  capRed: {
    border: "hover:border-[hsl(15,79%,54%)]/50",
    shadow: "hover:shadow-[0_20px_60px_hsla(15,79%,54%,0.14)]",
    glow: "from-[hsl(15,79%,54%)]/[0.12]",
    tag: "text-[hsl(15,79%,54%)] bg-[hsl(15,79%,54%)]/10",
    badge: "bg-[hsl(15,79%,54%)]/10 text-[hsl(15,79%,54%)]",
    explore: "text-[hsl(15,79%,54%)]",
    icon: "text-[hsl(15,79%,54%)]",
  },
};

// const ChevronRight = () => (
//   <svg
//     width="16"
//     height="16"
//     fill="none"
//     viewBox="0 0 16 16"
//     className="transform group-hover:translate-x-1 transition-transform duration-200"
//   >
//     <path
//       d="M3 8h10M9 4l4 4-4 4"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

const ServicesSection = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-[#0b0c12]">
      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div
        className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,255,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-28 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(80,120,255,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cap-orange))] shadow-[0_0_8px_hsl(var(--cap-orange))] animate-pulse" />
            <span className="text-[15px] font-semibold tracking-[0.18em] uppercase text-[hsl(var(--cap-orange))]">
              What We Offer
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Our Core <span className="text-white">Services</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-base font-light leading-relaxed ">
            Purpose-built solutions across hiring, capability building, and
            performance transformation.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const c = colorMap[service.color];
            return (
              <motion.a
                key={index}
                href={service.href}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group relative p-7 rounded-2xl bg-white/[0.035] backdrop-blur-xl border border-white/[0.09] transition-all duration-300 cursor-pointer overflow-hidden no-underline ${c.border} ${c.shadow} ${service.wide ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                {/* Radial glow bloom */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon badge */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${c.badge}`}
                  >
                    <span className={c.icon}>{service.icon}</span>
                  </div>

                  {/* Tag */}
                  <span
                    className={`inline-block text-[15px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full mb-3 ${c.tag}`}
                  >
                    {service.tag}
                  </span>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-md text-white leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Explore link */}
                  <div
                    className={`flex items-center gap-1.5 text-sm font-medium ${c.explore}`}
                  >
                    Explore
                    {/* <ChevronRight /> */}
                  </div>
                </div>

                {/* Corner deco */}
                <svg
                  className={`absolute bottom-3 right-3 w-5 h-5 opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${c.explore}`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 22L22 2M22 2H10M22 2V14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.a>
            );
          })}
        </div>

        {/* ── CTA ── */}
        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-violet-400/35 bg-violet-400/[0.06] text-violet-400 text-sm font-semibold tracking-wide hover:border-violet-400 hover:shadow-[0_0_30px_rgba(167,139,250,0.22)] hover:gap-4 transition-all duration-300"
          >
            View All Services
            <ArrowIcon />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
