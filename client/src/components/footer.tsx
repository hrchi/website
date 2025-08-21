import logoImage from "@assets/hooshino-logo-orig-3-notext_1755721052257.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-gray-800 py-12 relative">
      <div className="absolute inset-0 circuit-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="Hooshino Innovations Logo" 
                className="h-10 w-auto"
                data-testid="footer-img-logo"
              />
              <h3 className="text-lg font-semibold tracking-wider text-cyan-custom/90" data-testid="footer-company-name">
                HOOSHINO INNOVATIONS
              </h3>
            </div>
            <p className="text-gray-400 text-sm" data-testid="footer-tagline">
              New Intelligence for Ethical Decisions
            </p>
          </div>
          
          <div className="md:text-center">
            <nav className="flex flex-wrap gap-6 text-sm">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-cyan-custom transition-colors"
                data-testid="footer-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-cyan-custom transition-colors"
                data-testid="footer-nav-contact"
              >
                Contact
              </button>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-custom transition-colors"
                data-testid="footer-nav-privacy"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
          
          <div className="md:text-right">
            <p className="text-gray-400 text-sm" data-testid="footer-copyright">
              © 2025 Hooshino Innovations Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
