import { Mail, Send, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-custom/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="text-contact-title">
          Ready to Build <span className="gradient-text">Ethical AI</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed" data-testid="text-contact-description">
          Let's discuss how our intelligent systems can transform your complex challenges into clear, ethical decisions.
        </p>
        
        <div className="bg-gradient-card border border-gray-700 rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <Mail className="text-cyan-custom w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4" data-testid="text-contact-subtitle">Get In Touch</h3>
            <p className="text-gray-400 mb-6" data-testid="text-contact-cta">
              Ready to explore how ethical AI can drive your next breakthrough?
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:info@hooshino.ca" 
              className="bg-gradient-accent text-black px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              data-testid="link-email"
            >
              <Send className="w-5 h-5" />
              <span>info@hooshino.ca</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/hooshino-innovations/about" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-custom border border-cyan-custom px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-custom hover:text-black transition-all duration-300 flex items-center space-x-2"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
