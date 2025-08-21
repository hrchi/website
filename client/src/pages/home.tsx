import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import SpecialtiesSection from "../components/specialties-section";
import TechnologySection from "../components/technology-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-inter antialiased">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
