import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InsightsSection from "@/components/InsightsSection";
import QuoteSection from "@/components/QuoteSection";
import AwardsSection from "@/components/AwardsSection";
import CareersSection from "@/components/CareersSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <InsightsSection />
        <QuoteSection />
        <AwardsSection />
        <CareersSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
