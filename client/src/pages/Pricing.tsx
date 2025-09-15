import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import PricingSection from "@/components/PricingSection";
import CTAGroup from "@/components/CTAGroup";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, DollarSign, Users, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const handleTryFree = () => {
    console.log('Start free trial');
  };

  const handleCalculateROI = () => {
    console.log('Navigate to ROI calculator');
  };

  const pricingBenefits = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Pay only for what you use."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in collaboration tools for teams of all sizes."
    },
    {
      icon: Clock,
      title: "14-Day Free Trial",
      description: "Try all features risk-free. No credit card required."
    },
    {
      icon: Calculator,
      title: "ROI Calculator",
      description: "See your potential savings with our interactive calculator."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Pricing Plans & Packages"
        description="Choose the FlowOps plan that fits your needs. Start free, scale as you grow. Transparent pricing with enterprise options available."
        keywords="pricing, plans, enterprise, startup, growth, free trial, cost"
        path="/pricing"
      />
      
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your needs. Scale as you grow with no hidden fees or lock-in contracts."
        backgroundClass="bg-gradient-to-br from-chart-3/10 via-primary/5 to-chart-1/10"
      />

      <PricingSection />

      {/* Pricing Benefits */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose FlowOps?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just pricing - we provide value at every level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Teaser */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Calculate Your ROI
              </h2>
              <p className="text-lg text-muted-foreground">
                See exactly how much FlowOps can save your business. Our interactive ROI calculator 
                shows potential cost savings, productivity gains, and payback period.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-chart-2">70%</div>
                  <div className="text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-chart-1">3x</div>
                  <div className="text-muted-foreground">Faster Deployment</div>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-chart-3">&lt; 45</div>
                  <div className="text-muted-foreground">Days Payback</div>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-chart-4">99.9%</div>
                  <div className="text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
              <Link href="/roi">
                <CTAGroup
                  primaryText="Calculate Your ROI"
                  primaryAction={handleCalculateROI}
                  variant="default"
                  size="lg"
                />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-card rounded-xl p-8 shadow-lg border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Savings</span>
                    <span className="text-2xl font-bold text-chart-2">$12,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Annual ROI</span>
                    <span className="text-2xl font-bold text-chart-1">340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Payback Period</span>
                    <span className="text-2xl font-bold text-chart-3">42 days</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-xs text-muted-foreground text-center">
                      Based on average enterprise customer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Contact */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground">
            For enterprise customers with unique requirements, we offer custom pricing and deployment options.
          </p>
          <CTAGroup
            primaryText="Contact Sales"
            secondaryText="Schedule Demo"
            variant="centered"
            size="lg"
          />
        </div>
      </section>
    </Layout>
  );
}