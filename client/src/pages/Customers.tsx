import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, TrendingUp, Clock } from "lucide-react";

export default function Customers() {
  const customerStats = [
    {
      icon: Building,
      value: "500+",
      label: "Enterprise Customers",
      description: "Trusted by companies from startups to Fortune 500"
    },
    {
      icon: Users,
      value: "50k+",
      label: "Active Developers",
      description: "Growing community of developers worldwide"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Customer Satisfaction",
      description: "Based on quarterly customer surveys"
    },
    {
      icon: Clock,
      value: "< 30min",
      label: "Average Setup Time",
      description: "From signup to first deployment"
    }
  ];

  const industries = [
    { name: "FinTech", count: "120+ companies", color: "bg-chart-1" },
    { name: "Healthcare", count: "85+ companies", color: "bg-chart-2" },
    { name: "E-commerce", count: "200+ companies", color: "bg-chart-3" },
    { name: "SaaS", count: "150+ companies", color: "bg-chart-4" },
    { name: "Education", count: "90+ companies", color: "bg-chart-5" },
    { name: "Manufacturing", count: "75+ companies", color: "bg-chart-1" }
  ];

  const useCases = [
    {
      title: "Rapid Prototyping",
      description: "Teams use FlowOps to quickly validate ideas and build MVPs",
      companies: "250+ teams",
      timeReduction: "80% faster"
    },
    {
      title: "Enterprise Applications",
      description: "Large organizations deploy mission-critical applications",
      companies: "100+ enterprises",
      timeReduction: "60% cost reduction"
    },
    {
      title: "Microservices Architecture",
      description: "DevOps teams build and maintain complex service ecosystems",
      companies: "180+ teams",
      timeReduction: "75% less maintenance"
    },
    {
      title: "AI/ML Workflows",
      description: "Data science teams integrate ML models into production apps",
      companies: "120+ teams", 
      timeReduction: "90% faster deployment"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Customer Success Stories & Case Studies"
        description="See how 500+ companies use FlowOps to accelerate development. Real customer testimonials and success stories across industries."
        keywords="customer success, case studies, testimonials, enterprise customers, developer community"
        path="/customers"
      />
      
      <PageHeader
        title="Trusted by Innovation Leaders Worldwide"
        subtitle="Join 500+ companies and 50,000+ developers who build faster, more reliable applications with FlowOps."
        backgroundClass="bg-gradient-to-br from-chart-5/10 via-primary/5 to-chart-3/10"
      />

      {/* Customer Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerStats.map((stat, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="font-semibold">{stat.label}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Industries Served */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              FlowOps adapts to industry-specific requirements and compliance standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className={`w-4 h-4 ${industry.color} rounded-full`}></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.count}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Popular Use Cases
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how teams are using FlowOps to solve real business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{useCase.title}</h3>
                    <Badge variant="secondary">{useCase.timeReduction}</Badge>
                  </div>
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {useCase.companies}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Start building with FlowOps today and join thousands of developers who ship faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/demo" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover-elevate transition-all duration-200"
            >
              Get Started Free
            </a>
            <a 
              href="mailto:sales@flowops.ai" 
              className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover-elevate transition-all duration-200"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}