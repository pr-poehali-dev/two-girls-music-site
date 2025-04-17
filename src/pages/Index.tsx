
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import ConcertSection from "@/components/ConcertSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <HeroSection />
        <MusicSection />
        <ConcertSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
