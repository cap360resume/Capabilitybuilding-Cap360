import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, MapPin, Clock, Briefcase, X,ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StatsBanner from "@/components/StatsBanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@/assets/careers-hero.jpg";

interface Job {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  type: string;
  description: string | null;
  requirements: string | null;
  posted_at: string;
}

const JOB_FILTERS = ["All", "Strategy & Consulting", "Talent Acquisition", "Technology", "Assesmdent", "Leadership", "Operations"];

const stats = [
  { value: "2018", label: "Founded with purpose" },
  { value: "5", label: "Integrated service pillars" },
  { value: "360°", label: "Capability ecosystem" },
  { value: "100%", label: "Talent Engagement" },
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
    description: "Work alongside HR veterans, assesmdent scientists, coaches, and strategists - all united by a passion for people development.",
  },
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
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const { ref: jobsRef, isInView: jobsInView } = useScrollAnimation(0.05);
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation(0.1);
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation(0.1);
  const { ref: valuesRef, isInView: valuesInView } = useScrollAnimation(0.1);
  const { toast } = useToast();

  // Application form state
  const [appForm, setAppForm] = useState({ name: "", email: "", phone: "", coverLetter: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("is_active", true)
        .order("posted_at", { ascending: false });

      if (!error && data) setJobs(data as Job[]);
      setLoading(false);
    };
    fetchJobs();
  }, []);

  const filtered = (() => {
    let result = activeFilter === "All" ? jobs : jobs.filter((j) => j.category === activeFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((j) => j.title.toLowerCase().includes(q) || j.location.toLowerCase().includes(q) || j.category.toLowerCase().includes(q));
    }
    return result;
  })();

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    setSubmitting(true);
    const { error } = await supabase.from("job_applications").insert({
      job_id: selectedJob.id,
      applicant_name: appForm.name,
      email: appForm.email,
      phone: appForm.phone || null,
      cover_letter: appForm.coverLetter || null,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Error", description: "Failed to submit application. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Application Submitted!", description: "We'll review your application and get back to you soon." });
      setShowApplicationForm(false);
      setSelectedJob(null);
      setAppForm({ name: "", email: "", phone: "", coverLetter: "" });
    }
  };

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
          ctaHref="#jobs"
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
                  <p className="text-muted-foreground text-md leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Open Positions — Latest Thinking style UI */}
        <section className="section-dark py-24" ref={jobsRef} id="jobs">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Open Positions
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Find your perfect role — explore opportunities across consulting, technology, leadership, and more.
            </motion.p>

            {/* Filter chips */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={jobsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {JOB_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 text-md font-medium border transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-cap-orange text-background border-cap-orange"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>

            {/* Search */}
            <motion.div
              className="flex gap-3 max-w-xl mb-12"
              initial={{ opacity: 0, y: 15 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by role, keyword, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary/50 border border-border pl-11 pr-4 py-3 text-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors"
                />
              </div>
            </motion.div>

            {/* Job cards grid */}
            {loading ? (
              <div className="text-center py-16 text-muted-foreground">Loading positions…</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                {jobs.length === 0 ? "No open positions at the moment. Check back soon!" : `No positions found for "${activeFilter === "All" ? searchQuery : activeFilter}".`}
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter + searchQuery}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {filtered.map((job, i) => (
                    <motion.div
                      key={job.id}
                      className="group text-left bg-card border border-border/30 overflow-hidden hover:border-cap-blue/40 transition-all duration-300 cursor-pointer flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                      whileHover={{ y: -4 }}
                      onClick={() => { setSelectedJob(job); setShowApplicationForm(false); }}
                    >
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs font-bold tracking-widest text-cap-blue uppercase mb-3 block">
                          {job.category.toUpperCase()}
                        </span>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-cap-blue transition-colors leading-snug">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                        </div>
                        {job.description && (
                          <p className="text-md text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                            {job.description}
                          </p>
                        )}
                        <span className="cta-link text-md mt-auto">
                          View & Apply
                          <ChevronRight className="w-4 h-4 text-cap-orange" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
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
                  <p className="text-muted-foreground text-md leading-relaxed">{b.description}</p>
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

      {/* Job Detail / Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setSelectedJob(null); setShowApplicationForm(false); }}
          >
            <motion.div
              className="bg-card border border-border/50 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => { setSelectedJob(null); setShowApplicationForm(false); }}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold tracking-widest text-cap-blue uppercase mb-3 block">
                {selectedJob.category}
              </span>
              <h2 className="text-2xl font-bold mb-4">{selectedJob.title}</h2>
              <div className="flex flex-wrap gap-4 text-md text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{selectedJob.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{selectedJob.type}</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Posted {new Date(selectedJob.posted_at).toLocaleDateString()}</span>
              </div>

              {!showApplicationForm ? (
                <>
                  {selectedJob.description && (
                    <div className="mb-6">
                      <h3 className="text-md font-bold uppercase tracking-wider text-cap-orange mb-2">Description</h3>
                      <p className="text-md text-muted-foreground leading-relaxed">{selectedJob.description}</p>
                    </div>
                  )}
                  {selectedJob.requirements && (
                    <div className="mb-8">
                      <h3 className="text-md font-bold uppercase tracking-wider text-cap-orange mb-2">Requirements</h3>
                      <p className="text-md text-muted-foreground leading-relaxed">{selectedJob.requirements}</p>
                    </div>
                  )}
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="bg-cap-orange text-background px-8 py-3 text-md font-semibold hover:bg-cap-orange/90 transition-colors"
                  >
                    Apply Now
                  </button>
                </>
              ) : (
                <form onSubmit={handleApply} className="space-y-5">
                  <h3 className="text-lg font-bold mb-2">Apply for {selectedJob.title}</h3>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Full Name *</label>
                    <input required value={appForm.name} onChange={(e) => setAppForm((p) => ({ ...p, name: e.target.value }))} className="w-full bg-secondary/50 border border-border px-4 py-2.5 text-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Email *</label>
                    <input required type="email" value={appForm.email} onChange={(e) => setAppForm((p) => ({ ...p, email: e.target.value }))} className="w-full bg-secondary/50 border border-border px-4 py-2.5 text-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Phone</label>
                    <input value={appForm.phone} onChange={(e) => setAppForm((p) => ({ ...p, phone: e.target.value }))} className="w-full bg-secondary/50 border border-border px-4 py-2.5 text-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Cover Letter</label>
                    <textarea rows={4} value={appForm.coverLetter} onChange={(e) => setAppForm((p) => ({ ...p, coverLetter: e.target.value }))} className="w-full bg-secondary/50 border border-border px-4 py-2.5 text-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors resize-none" placeholder="Tell us why you're a great fit..." />
                  </div>
                  <div className="flex gap-3">
                    <button type="submit" disabled={submitting} className="bg-cap-orange text-background px-8 py-3 text-md font-semibold hover:bg-cap-orange/90 transition-colors disabled:opacity-50">
                      {submitting ? "Submitting..." : "Submit Application"}
                    </button>
                    <button type="button" onClick={() => setShowApplicationForm(false)} className="border border-border px-6 py-3 text-md text-muted-foreground hover:text-foreground transition-colors">
                      Back
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersPage;
