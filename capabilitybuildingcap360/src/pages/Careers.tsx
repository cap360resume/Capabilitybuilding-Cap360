import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StatsBanner from "@/components/StatsBanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/careers-hero.jpg";

const jobCategories = [
  { name: "Talent Acquisition (HireTek)", description: "Recruitment consultants, sourcing specialists, and hiring strategists." },
  { name: "Assessment (ASER)", description: "Psychometricians, assessment designers, and evaluation specialists." },
  { name: "HR Consulting (HRCAMS)", description: "HR advisors, org design consultants, and people strategy leads." },
  { name: "Learning & Capability Building (TCB)", description: "L&D specialists, facilitators, and instructional designers." },
  { name: "Career Coaching (PACE)", description: "Career coaches, mentors, and professional development advisors." },
  // { name: "Corporate & Operations", description: "Finance, marketing, technology, and business operations roles." },
];

const benefits = [
  {
    title: "Continuous Learning",
    description: "Access to structured learning programs, certifications, and capability-building frameworks - the same ones we build for our clients.",
  },
  {
    title: "Meaningful Work",
    description: "Every role at CAP360 directly impacts how enterprises hire, develop, and grow their people. Your work shapes real careers.",
  },
  {
    title: "Growth from Within",
    description: "We believe in building careers, not just filling roles. Most of our senior team has grown through the organization.",
  },
  {
    title: "Collaborative Culture",
    description: "Work alongside HR veterans, assessment scientists, coaches, and strategists - all united by a passion for people development.",
  },
];

const stats = [
  { value: "2018", label: "Founded with purpose" },
  { value: "5", label: "Integrated service pillars" },
  { value: "360°", label: "Capability ecosystem" },
  { value: "100%", label: "Talent Engagement" },
];

const values = [
  {
    title: "People-First Mindset",
    description: "We foster a culture of trust, collaboration, and continuous learning, where ideas are encouraged and contributions are recognized.",
  },
  {
    title: "Expertise Over Experience",
    description: "We prioritize individuals who bring clarity of thought, problem-solving ability, and a strong understanding of their domain. Titles and tenure matter less to us than curiosity, capability, and the drive to continuously learn and evolve.",
  },
  {
    title: "Outcomes & Activity",
    description: "Sustainable outcomes are built on thoughtful action. That’s why we create a culture where planning, execution, and results go hand in hand - ensuring that every contribution moves the needle.Because at the end of the day, it’s not just about what we do - it’s about the difference it makes.",
  },
];

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { ref: jobsRef, isInView: jobsInView } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation(0.1);
  const { ref: valuesRef, isInView: valuesInView } = useScrollAnimation(0.1);
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation(0.1);

  const filteredCategories = jobCategories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          label="Careers at CAP360"
          title="Build careers. Including yours."
          subtitle="Join a team that helps enterprises build future-ready workforces - and is deeply committed to doing the same for its own people."
          image={heroImg}
          ctaText="Explore opportunities"
          ctaAction={() => navigate("#jobs")}
        />
        <StatsBanner stats={stats} />

        {/* Why CAP360 */}
        <section ref={valuesRef} className="section-navy py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.span
              className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block"
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why CAP360
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A place where people strategy is lived, not just advised.
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-14"
              initial={{ opacity: 0, y: 15 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At CAP360, we spend every day helping enterprises hire better, develop stronger leaders, and build future-ready workforces. We hold ourselves to the same standard - creating an environment where talent grows, expertise is valued, and careers are genuinely built.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className="bg-card border border-border/30 p-8 hover:border-cap-blue/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 25 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-8 h-1 bg-cap-orange mb-5" />
                  <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="section-dark py-24" ref={jobsRef} id="jobs">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.span
              className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block"
              initial={{ opacity: 0 }}
              animate={jobsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Open Opportunities
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Find your place in the ecosystem
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base mb-10 max-w-xl"
              initial={{ opacity: 0 }}
              animate={jobsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              We're growing across all five of our service pillars. Explore areas where you can make an impact.
            </motion.p>

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
                  placeholder="Search by role or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary/50 border border-border pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors"
                />
              </div>
              <button className="bg-cap-orange text-background px-6 py-3 text-sm font-semibold hover:bg-cap-orange/90 transition-colors">
                Search
              </button>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={searchQuery}
                className="space-y-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((cat, i) => (
                    <motion.button
                      key={cat.name}
                      onClick={() => navigate("/contact")}
                      className="group w-full flex items-center justify-between py-6 border-b border-border/30 hover:bg-secondary/20 px-4 -mx-4 transition-colors text-left"
                      initial={{ opacity: 0, x: -20 }}
                      animate={jobsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.08 * i }}
                      whileHover={{ x: 8 }}
                    >
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-cap-blue transition-colors">{cat.name}</h3>
                        <span className="text-sm text-muted-foreground">{cat.description}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-cap-orange opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 ml-4" />
                    </motion.button>
                  ))
                ) : (
                  <motion.div
                    className="py-12 text-center text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    No roles matched your search. <button onClick={() => navigate("/contact")} className="text-cap-orange underline underline-offset-2">Send us your profile</button> and we'll be in touch.
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* No open listings nudge */}
            <motion.div
              className="mt-12 border border-border/30 bg-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-1 block">Don't see your role?</span>
                <p className="text-sm text-muted-foreground">We're always looking for great people. Share your profile and we'll reach out when something fits.</p>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="cta-link text-sm whitespace-nowrap"
              >
                Submit your profile
                <ChevronRight className="w-4 h-4 text-cap-orange" />
              </button>
            </motion.div>
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
              What it means to work here
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
                  <div className="w-8 h-1 bg-cap-orange mb-5" />
                  <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-20 bg-cap-navy border-t border-border/20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-3 block">Ready to join us?</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's build something meaningful together.</h2>
                <p className="text-muted-foreground text-base max-w-xl">Reach out to our team and tell us what you're looking for. We'd love to hear from you.</p>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="shrink-0 px-8 py-4 bg-cap-orange hover:bg-cap-orange/90 text-white font-semibold transition-colors flex items-center gap-2"
              >
                Get in touch
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;