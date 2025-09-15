import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import ROICalculator from "@/components/ROICalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react";

export default function ROI() {
  const roiInsights = [
    {
      icon: DollarSign,
      title: "Average Cost Savings",
      value: "70%",
      description: "Reduction in development and operational costs"
    },
    {
      icon: Clock,
      title: "Time to Market",
      value: "3x Faster",
      description: "Deploy applications in minutes, not months"
    },
    {
      icon: Users,
      title: "Team Productivity",
      value: "5x Increase",
      description: "Focus on innovation instead of infrastructure"
    },
    {
      icon: TrendingUp,
      title: "ROI Achievement",
      value: "< 45 Days",
      description: "Typical payback period for Growth plan customers"
    }
  ];

  const customerCases = [
    {
      company: "TechCorp",
      industry: "SaaS",
      savings: "$180k",
      timeframe: "Annual",
      description: "Reduced infrastructure costs and accelerated time-to-market"
    },
    {
      company: "DataFlow",
      industry: "FinTech",
      savings: "$250k",
      timeframe: "Annual", 
      description: "Eliminated manual deployment processes and improved reliability"
    },
    {
      company: "HealthTech",
      industry: "Healthcare",
      savings: "$120k",
      timeframe: "Annual",
      description: "Streamlined compliance and reduced development overhead"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="ROI Calculator & Cost Savings"
        description="Calculate your potential ROI with FlowOps. See real customer savings and understand how AI-powered development can reduce costs by up to 70%."
        keywords="ROI calculator, cost savings, development efficiency, automation ROI"
        path="/roi"
      />
      
      <PageHeader
        title="Calculate Your Return on Investment"
        subtitle="Understand the financial impact of adopting FlowOps. Our customers typically see 70% cost reduction and 3x faster deployments."
        backgroundClass="bg-gradient-to-br from-chart-4/10 via-primary/5 to-chart-2/10"
      />

      <ROICalculator />

      {/* ROI Insights */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real metrics from our customers show consistent value across different company sizes and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {roiInsights.map((insight, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <insight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{insight.value}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="font-semibold">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Customer Success Cases */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center mb-8">Customer Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {customerCases.map((case_, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{case_.company}</h4>
                        <p className="text-sm text-muted-foreground">{case_.industry}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-chart-2">{case_.savings}</div>
                        <div className="text-xs text-muted-foreground">{case_.timeframe}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{case_.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Your Path to ROI
            </h2>
            <p className="text-xl text-muted-foreground">
              See how quickly you can start realizing value with FlowOps
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-chart-1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-chart-1">1</span>
                </div>
                <h3 className="font-semibold mb-2">Day 1-7: Setup</h3>
                <p className="text-sm text-muted-foreground">Account setup, team onboarding, first project deployment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-chart-2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-chart-2">2</span>
                </div>
                <h3 className="font-semibold mb-2">Week 2-4: Adoption</h3>
                <p className="text-sm text-muted-foreground">Team training, workflow integration, productivity gains</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-chart-3/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-chart-3">3</span>
                </div>
                <h3 className="font-semibold mb-2">Month 2+: ROI</h3>
                <p className="text-sm text-muted-foreground">Full cost savings realized, measurable productivity impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}