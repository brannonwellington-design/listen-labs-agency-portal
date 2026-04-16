import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
