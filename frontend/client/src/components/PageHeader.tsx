import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  backgroundClass?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  onCtaClick, 
  backgroundClass = "bg-gradient-to-br from-primary/5 to-chart-1/5" 
}: PageHeaderProps) {
  return (
    <section className={`py-16 px-6 ${backgroundClass}`}>
      <div className="container mx-auto text-center space-y-6 max-w-4xl">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight" data-testid="page-header-title">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="page-header-subtitle">
          {subtitle}
        </p>
        {ctaText && (
          <div className="pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={onCtaClick}
              data-testid="page-header-cta"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}