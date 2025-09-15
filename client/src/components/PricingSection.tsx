import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Building } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/mo",
      description: "Perfect for individuals and small projects",
      icon: Sparkles,
      popular: false,
      features: [
        "1k chats per month",
        "5 active projects",
        "Email support",
        "Basic templates",
        "Community access",
        "7-day free trial"
      ],
      cta: "Start Free",
      testId: "starter"
    },
    {
      name: "Growth",
      price: "$499",
      period: "/mo",
      description: "Ideal for growing teams and businesses",
      icon: Crown,
      popular: true,
      features: [
        "10k chats per month",
        "25 active projects",
        "Slack alerts",
        "Premium templates",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Team collaboration"
      ],
      cta: "Book Demo",
      testId: "growth"
    },
    {
      name: "Enterprise",
      price: "$2k+",
      period: "/mo",
      description: "For large organizations with custom needs",
      icon: Building,
      popular: false,
      features: [
        "Unlimited chats",
        "Unlimited projects",
        "SLA + on-prem deployment",
        "Custom templates",
        "Dedicated success manager",
        "Advanced security",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Contact Sales",
      testId: "enterprise"
    }
  ];

  const handlePlanSelect = (planName: string) => {
    // TODO: remove mock functionality
    console.log(`Selected plan: ${planName}`);
    if (planName === "Starter") {
      console.log("Redirecting to free trial...");
    } else if (planName === "Growth") {
      console.log("Opening demo booking...");
    } else {
      console.log("Opening contact sales form...");
    }
  };

  return (
    <section className="py-16 px-6 bg-muted/30" id="pricing">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover-elevate transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
              data-testid={`card-plan-${plan.testId}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <plan.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl" data-testid={`text-plan-${plan.testId}-name`}>
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground" data-testid={`text-plan-${plan.testId}-description`}>
                    {plan.description}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold" data-testid={`text-plan-${plan.testId}-price`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1" data-testid={`text-plan-${plan.testId}-period`}>
                      {plan.period}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm" data-testid={`feature-${plan.testId}-${featureIndex}`}>
                      <Check className="h-4 w-4 text-chart-2 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handlePlanSelect(plan.name)}
                  data-testid={`button-plan-${plan.testId}`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p data-testid="text-pricing-note">
            All plans include 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}