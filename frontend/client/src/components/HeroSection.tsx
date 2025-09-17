import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CTAGroup from "./CTAGroup";
import { Link } from "wouter";
import heroBackgroundUrl from '@assets/generated_images/Hero_background_tech_visualization_f5807a6c.png';

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const terminalSteps = [
    "$ flowops create \"E-commerce app with payment\"",
    "🧠 Planning architecture...",
    "📦 Generating React + Node.js + Stripe...",
    "🚀 Building Docker image...",
    "☁️  Deploying to AWS...",
    "✅ App ready: https://your-app.flowops.app"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % terminalSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleLiveDemo = () => {
    // TODO: remove mock functionality
    console.log('Starting live demo...');
  };

  const handleBookTour = () => {
    // TODO: remove mock functionality  
    console.log('Opening tour booking...');
  };

  return (
    <section className="pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-1/5 to-chart-2/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-title">
                Ship Production Apps from{" "}
                <span className="text-primary">Plain English</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-subtitle">
                FlowOps turns sentences into Git repos, Docker images and Terraform plans in &lt; 30 min
              </p>
            </div>

            <CTAGroup
              primaryText="Live Demo"
              primaryAction={handleLiveDemo}
              secondaryText="Book White-Label Tour"
              secondaryAction={handleBookTour}
              size="lg"
            />

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                <span>SOC-2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                <span>HIPAA Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Animated Terminal */}
          <div className="relative">
            <div 
              className="absolute inset-0 opacity-30 rounded-xl blur-sm"
              style={{ 
                backgroundImage: `url(${heroBackgroundUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            {/* Dark wash overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60 rounded-xl"></div>
            <div className="relative bg-card/95 backdrop-blur-md rounded-xl border border-border/50 p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-chart-3 rounded-full"></div>
                <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                <span className="text-sm text-muted-foreground ml-2">Terminal</span>
              </div>
              <div className="font-mono text-sm space-y-2" data-testid="terminal-demo">
                {terminalSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index <= currentStep ? 'opacity-100' : 'opacity-30'
                    } ${index === currentStep ? 'text-primary' : 'text-foreground'}`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}