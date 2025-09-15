import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface CTAGroupProps {
  primaryText: string;
  primaryAction?: () => void;
  secondaryText?: string;
  secondaryAction?: () => void;
  variant?: "default" | "centered" | "stacked";
  size?: "sm" | "default" | "lg";
}

export default function CTAGroup({ 
  primaryText, 
  primaryAction, 
  secondaryText, 
  secondaryAction,
  variant = "default",
  size = "default"
}: CTAGroupProps) {
  const buttonSize = size === "lg" ? "lg" : size === "sm" ? "sm" : "default";
  const isStacked = variant === "stacked";
  const isCentered = variant === "centered";

  return (
    <div className={`
      flex gap-4 
      ${isStacked ? "flex-col items-stretch" : "flex-col sm:flex-row"} 
      ${isCentered ? "justify-center items-center" : ""}
      ${isStacked ? "max-w-sm mx-auto" : ""}
    `}>
      <Button 
        size={buttonSize} 
        className={`${size === "lg" ? "text-lg px-8" : ""} ${isStacked ? "w-full" : ""}`}
        onClick={primaryAction}
        data-testid="cta-primary"
      >
        <Play className="mr-2 h-4 w-4" />
        {primaryText}
      </Button>
      
      {secondaryText && (
        <Button 
          variant="outline" 
          size={buttonSize}
          className={`${size === "lg" ? "text-lg px-8" : ""} ${isStacked ? "w-full" : ""}`}
          onClick={secondaryAction}
          data-testid="cta-secondary"
        >
          {secondaryText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}