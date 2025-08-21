import { Check } from "lucide-react";
import dashboardImage from "@assets/generated_images/AI_dashboard_analytics_3bccc8f4.png";

const features = [
  {
    title: "Explainable Decisions",
    description: "Every AI recommendation comes with clear reasoning and confidence levels."
  },
  {
    title: "Cultural Sensitivity",
    description: "Multilingual capabilities that respect cultural nuances and local contexts."
  },
  {
    title: "Continuous Learning",
    description: "Systems that improve over time while maintaining ethical guardrails."
  }
];

export default function TechnologySection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 circuit-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={dashboardImage} 
                alt="AI Analytics Dashboard" 
                className="w-full h-96 object-cover"
                data-testid="img-dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-custom/10 to-violet-custom/10 rounded-2xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="text-technology-title">
              Intelligence That <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" data-testid="text-technology-description">
              Our AI systems don't just process data—they understand context, respect ethics, 
              and provide insights that drive meaningful outcomes for organizations and communities.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`feature-${index}`}>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Check className="text-black w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-400" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
