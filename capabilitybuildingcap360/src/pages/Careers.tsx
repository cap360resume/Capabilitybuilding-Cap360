import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StatsBanner from "@/components/StatsBanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/careers-hero.jpg";

const jobCategories = [
  { name: "Strategy & Consulting", count: 2400 },
  { name: "Technology", count: 5100 },
  { name: "Operations", count: 1800 },
  { name: "Industry X", count: 920 },
  { name: "Song (Creative)", count: 1300 },
  { name: "Corporate Functions", count: 640 },
];

const benefits = [
  { title: "Learning & Development", description: "Over $1B invested annually in training programs, certifications and continuous upskilling." },
  { title: "Flexible Work", description: "Hybrid model that empowers you to work where it makes the most sense for you and your team." },
  { title: "Health & Wellbeing", description: "Comprehensive healthcare, mental health support and wellness programs for you and your family." },
  { title: "Parental Leave", description: "Generous paid parental leave and support for caregivers returning to work." },
];

const stats = [
  { value: "95%", label: "Employee satisfaction" },
  { value: "$1B+", label: "Annual training investment" },
  { value: "40+", label: "Employee networks" },
  { value: "70%", label: "Internal promotions" },
];

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { ref: jobsRef, isInView: jobsInView } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          label="Careers"
          title="Create the future you imagine"
          subtitle="At CAP360, you'll grow in a culture of innovation, learning, and belonging — building skills that last a lifetime."
          image={heroImg}
          ctaText="Search open roles"
          ctaHref="#jobs"
        />
        <StatsBanner stats={stats} />

        {/* Job Search Section */}
        <section className="section-dark py-24" ref={jobsRef} id="jobs">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.span
              className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block"
              initial={{ opacity: 0 }}
              animate={jobsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Open Positions
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Find your perfect role
            </motion.h2>
            <motion.div
              className="flex gap-3 max-w-xl mb-12"
              initial={{ opacity: 0, y: 15 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by role, keyword, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary/50 border border-border pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors"
                />
              </div>
              <button className="bg-cap-orange text-background px-6 py-3 text-sm font-semibold hover:bg-cap-orange/90 transition-colors">
                Search
              </button>
            </motion.div>
            <div className="space-y-0">
              {jobCategories.map((cat, i) => (
                <motion.a
                  key={cat.name}
                  href="#"
                  className="group flex items-center justify-between py-6 border-b border-border/30 hover:bg-secondary/20 px-4 -mx-4 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={jobsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  whileHover={{ x: 8 }}
                >
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-cap-blue transition-colors">{cat.name}</h3>
                    <span className="text-sm text-muted-foreground">{cat.count.toLocaleString()} open positions</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cap-orange opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-navy py-24" ref={benefitsRef}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.span
              className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block"
              initial={{ opacity: 0 }}
              animate={benefitsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Life at CAP360
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Benefits that support you — at every stage
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="bg-card border border-border/30 p-8 hover:border-cap-blue/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 25 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
