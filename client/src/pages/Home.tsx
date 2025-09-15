import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTAGroup from "@/components/CTAGroup";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const highlights = [
    {
      icon: Zap,
      title: "Ship in 30 Minutes",
      description: "From idea to production deployment",
      metric: "< 30 min"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC-2, HIPAA, GDPR compliant",
      metric: "99.9% uptime"
    },
    {
      icon: Users,
      title: "Trusted by 500+",
      description: "Companies worldwide",
      metric: "50k+ developers"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Average cost reduction",
      metric: "70% savings"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Ship Production Apps from Plain English"
        description="FlowOps turns sentences into Git repos, Docker images and Terraform plans in < 30 min. White-label SaaS with SOC-2, GDPR, HIPAA."
        keywords="natural language to code, terraform automation, white-label SaaS, SOC-2, HIPAA, GDPR, AI development platform"
        path="/"
      />
      
      <HeroSection />
      
      {/* Key Highlights */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{highlight.metric}</div>
                    <div className="font-semibold">{highlight.title}</div>
                    <div className="text-sm text-muted-foreground">{highlight.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Feature Teasers */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Built for Every Complexity Level
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple C1 prototypes to enterprise C5 applications, FlowOps scales with your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">C1-C2</Badge>
                  <h3 className="font-semibold">Rapid Prototyping</h3>
                </div>
                <p className="text-muted-foreground">Perfect for MVPs, landing pages, and quick validations</p>
                <Link href="/features" className="inline-block text-primary hover:underline text-sm">
                  Explore features →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">C3-C4</Badge>
                  <h3 className="font-semibold">Business Applications</h3>
                </div>
                <p className="text-muted-foreground">Production-ready apps with enterprise integrations</p>
                <Link href="/security" className="inline-block text-primary hover:underline text-sm">
                  Security details →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">C5</Badge>
                  <h3 className="font-semibold">Enterprise Grade</h3>
                </div>
                <p className="text-muted-foreground">Mission-critical systems with advanced AI capabilities</p>
                <Link href="/customers" className="inline-block text-primary hover:underline text-sm">
                  Customer stories →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 via-chart-1/5 to-chart-2/10">
        <div className="container mx-auto text-center space-y-8 max-w-3xl">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Build Your Next App?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Join thousands of developers who ship production apps faster with FlowOps
          </p>
          <CTAGroup
            primaryText="Start Building Free"
            secondaryText="Book a Demo"
            variant="centered"
            size="lg"
          />
          <p className="text-sm text-muted-foreground">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </Layout>
  );
}