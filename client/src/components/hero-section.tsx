import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen cinematic-bg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            <span className="gradient-text">New Intelligence</span><br />
            for Ethical Decisions
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            We build ethical, explainable AI systems that turn complex data into trustworthy decisions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:info@hooshino.ca" 
            className="bg-gradient-accent text-black px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all duration-300 hover:scale-105"
            data-testid="button-contact-us"
          >
            Contact Us
          </a>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-cyan-custom border border-cyan-custom px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-custom hover:text-black transition-all duration-300"
            data-testid="button-learn-more"
          >
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-custom w-8 h-8" />
      </div>
    </section>
  );
}
