import HeroPulseHost from "@/components/HeroPulseHost";
import AdaptsSection from "@/components/AdaptsSection";
import ProblemSection from "@/components/ProblemSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroPulseHost />
      <div className="hairline" />
      <AdaptsSection />
      <div className="hairline" />
      <ProblemSection />
      <div className="hairline" />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
