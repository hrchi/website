import { Scale, Languages, Network, AlertTriangle, GitBranch, TrendingUp } from "lucide-react";

const specialties = [
  {
    icon: Scale,
    title: "Ethical AI",
    description: "Developing AI systems with built-in ethical frameworks, ensuring fairness, transparency, and accountability in every decision.",
    color: "text-cyan-custom"
  },
  {
    icon: Languages,
    title: "Multilingual NLP",
    description: "Advanced natural language processing across multiple languages, breaking down communication barriers in global applications.",
    color: "text-violet-custom"
  },
  {
    icon: Network,
    title: "Knowledge Graphs & Ontologies",
    description: "Structured knowledge representation systems that enable AI to understand complex relationships and domain expertise.",
    color: "text-cyan-custom"
  },
  {
    icon: AlertTriangle,
    title: "Risk Intelligence",
    description: "Sophisticated risk assessment and prediction models that help organizations make informed decisions under uncertainty.",
    color: "text-violet-custom"
  },
  {
    icon: GitBranch,
    title: "Open-Source Due Diligence",
    description: "Comprehensive analysis and validation of open-source components, ensuring security and compliance in AI deployments.",
    color: "text-cyan-custom"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Monitoring",
    description: "Continuous monitoring and optimization of AI systems, ensuring peak performance and immediate response to anomalies.",
    color: "text-violet-custom"
  }
];

export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-custom/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-custom/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-accent/5 rounded-full blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-specialties-title">
            Our <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-testid="text-specialties-subtitle">
            Specialized expertise across the most critical domains of modern AI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-card border border-gray-700 rounded-xl p-8 card-hover"
                data-testid={`card-specialty-${index}`}
              >
                <div className="mb-6">
                  <IconComponent className={`${specialty.color} w-10 h-10`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4" data-testid={`text-specialty-title-${index}`}>
                  {specialty.title}
                </h3>
                <p className="text-gray-400 leading-relaxed" data-testid={`text-specialty-description-${index}`}>
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
