import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContentGrid from "@/components/ContentGrid";
import StatsBanner from "@/components/StatsBanner";
import AwardsSection from "@/components/AwardsSection";
import heroImg from "@/assets/who-we-are-hero.jpg";

const aboutCards = [
  {
    title: "Our Leadership",
    description:
      "Meet the executives steering CAP360 toward the future of global consulting and technology.",
    link: "Meet the team",
  },
  {
    title: "Our Values",
    description:
      "We believe in creating 360° value — for clients, people, shareholders, partners and communities.",
    link: "Learn more",
  },
  {
    title: "Inclusion & Diversity",
    description:
      "Building a culture of equality where every individual can thrive and contribute their best work.",
    link: "Learn more",
  },
];

const citizenshipCards = [
  {
    title: "Environmental Sustainability",
    description:
      "Committed to achieving net-zero emissions by 2030 across our entire value chain.",
  },
  {
    title: "Skills to Succeed",
    description:
      "Equipping 5 million people with skills for employment and entrepreneurship opportunities.",
  },
  {
    title: "Tech for Good",
    description:
      "Leveraging technology to address humanity's most pressing social challenges.",
  },
  {
    title: "Responsible Business",
    description:
      "Maintaining the highest standards of ethics, governance and transparency.",
  },
];

const globalStats = [
  { value: "49", label: "Countries with offices" },
  { value: "200+", label: "Cities worldwide" },
  { value: "750K+", label: "People employed" },
  { value: "#1", label: "Fortune's Most Admired" },
];

const WhoWeAre = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <PageHero
        label="Who We Are"
        title="A global leader delivering tangible outcomes"
        subtitle="With deep industry and business process expertise, broad global resources, and a proven track record, we collaborate with clients to help them become high-performance businesses."
        image={heroImg}
        ctaText="Explore our company"
      />
      <StatsBanner stats={globalStats} />
      <ContentGrid
        sectionLabel="About"
        heading="What makes CAP360 different"
        cards={aboutCards}
        columns={3}
      />
      <AwardsSection />
      <ContentGrid
        sectionLabel="Corporate Citizenship"
        heading="Creating value beyond business"
        cards={citizenshipCards}
        columns={4}
        variant="navy"
      />
    </main>
    <Footer />
  </div>
);

export default WhoWeAre;
