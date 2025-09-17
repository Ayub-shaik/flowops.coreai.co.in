import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import TechStackShowcase from "@/components/TechStackShowcase";
import CTAGroup from "@/components/CTAGroup";
import { Link } from "wouter";

export default function Features() {
  const handleGetStarted = () => {
    console.log('Navigate to demo');
  };

  const handleViewPricing = () => {
    console.log('Navigate to pricing');
  };

  return (
    <Layout>
      <SEO 
        title="Features & Technology Stack"
        description="Explore FlowOps' powerful features from C1 simple apps to C5 enterprise solutions. Built with cutting-edge AI and industry-leading tools."
        keywords="AI development platform, LangChain, embedded AI, enterprise features, complexity levels"
        path="/features"
      />
      
      <PageHeader
        title="Powerful Features Across All Complexity Levels"
        subtitle="From simple C1 web pages to enterprise-grade C5 applications, FlowOps adapts to your project needs with state-of-the-art technology and intelligent automation."
        backgroundClass="bg-gradient-to-br from-chart-1/10 via-primary/5 to-chart-2/10"
      />

      <HowItWorks />
      <TechStackShowcase />

      {/* Enhanced CTA Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center space-y-8 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Build Your Next Application?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the power of AI-driven development with our comprehensive platform.
          </p>
          <CTAGroup
            primaryText="Start Building Now"
            primaryAction={handleGetStarted}
            secondaryText="View Pricing"
            secondaryAction={handleViewPricing}
            variant="centered"
            size="lg"
          />
        </div>
      </section>
    </Layout>
  );
}