import { Shield, Globe } from "lucide-react";
const teamImage = "/office-team.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 circuit-bg"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="text-about-title">
              About <span className="gradient-text">Hooshino Innovations</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" data-testid="text-about-description">
              Hooshino Innovations is a Canadian AI company focused on decision intelligence, 
              multilingual NLP, ontologies, and knowledge graphs. We design transparent, secure, 
              and human-centered AI systems — bridging the gap between research and application.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-card border border-gray-700 rounded-lg p-6 card-hover" data-testid="card-ethical-first">
                <Shield className="text-cyan-custom w-8 h-8 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Ethical First</h3>
                <p className="text-gray-400 text-sm">Transparent and responsible AI development</p>
              </div>
              <div className="bg-gradient-card border border-gray-700 rounded-lg p-6 card-hover" data-testid="card-global-impact">
                <Globe className="text-violet-custom w-8 h-8 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Global Impact</h3>
                <p className="text-gray-400 text-sm">Multilingual solutions for diverse communities</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={teamImage} 
                alt="Hooshino Innovations AI Team" 
                className="w-full h-96 object-cover"
                data-testid="img-team"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-custom/20 to-violet-custom/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
