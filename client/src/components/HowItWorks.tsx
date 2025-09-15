import { Card, CardContent } from "@/components/ui/card";
import { Type, Cog, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Type,
      title: "Type",
      description: "Natural-language spec in web form",
      details: "Describe your app in plain English. Our AI understands complex requirements and technical specifications."
    },
    {
      icon: Cog,
      title: "Generate",
      description: "LLM planner → DAG → code-gen agents → lock-files",
      details: "Advanced AI agents create optimized code, database schemas, and deployment configurations automatically."
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "terraform apply → VPC, RDS, EKS, CDN, WAF, TLS 1.3",
      details: "Production-ready infrastructure deployed with enterprise security, monitoring, and scaling built-in."
    }
  ];

  return (
    <section className="py-16 px-6" id="features">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-it-works-subtitle">
            From idea to production in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover-elevate transition-all duration-300" data-testid={`card-step-${index + 1}`}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold" data-testid={`text-step-${index + 1}-title`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary font-mono" data-testid={`text-step-${index + 1}-description`}>
                    {step.description}
                  </p>
                  <p className="text-muted-foreground" data-testid={`text-step-${index + 1}-details`}>
                    {step.details}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}