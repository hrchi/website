import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/hooshino-logo-orig-3-notext_1755721052257.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
      isScrolled ? 'bg-black/90' : 'bg-black/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Hooshino Innovations Logo" 
              className="h-12 w-auto"
              data-testid="img-logo"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold tracking-wider text-cyan-custom/90" data-testid="text-company-name">
                HOOSHINO INNOVATIONS
              </h1>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-cyan-custom transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-custom transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('specialties')}
              className="text-gray-300 hover:text-cyan-custom transition-colors"
              data-testid="nav-specialties"
            >
              Specialties
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-custom transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-cyan-custom transition-colors text-left px-4"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-cyan-custom transition-colors text-left px-4"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('specialties')}
                className="text-gray-300 hover:text-cyan-custom transition-colors text-left px-4"
                data-testid="mobile-nav-specialties"
              >
                Specialties
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-cyan-custom transition-colors text-left px-4"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
