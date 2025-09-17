import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import maleCTOUrl from '@assets/generated_images/Male_CTO_testimonial_avatar_dd0e5da6.png';
import femaleTechLeaderUrl from '@assets/generated_images/Female_tech_leader_avatar_ae87a589.png';

export default function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Cut support cost 70%, conversion up 35%, pay-back < 45 days. FlowOps transformed our entire development pipeline.",
      author: "Sarah Chen",
      role: "CTO, AcmeCorp",
      company: "AcmeCorp",
      avatar: femaleTechLeaderUrl,
      rating: 5
    },
    {
      quote: "From idea to production in under 30 minutes. The AI-driven approach to app generation is revolutionary.",
      author: "Michael Rodriguez",
      role: "Head of Engineering, TechFlow",
      company: "TechFlow",
      avatar: maleCTOUrl,
      rating: 5
    },
    {
      quote: "Enterprise-grade security with startup agility. FlowOps handles compliance so we can focus on innovation.",
      author: "Emily Johnson",
      role: "VP Engineering, DataPlex",
      company: "DataPlex",
      avatar: femaleTechLeaderUrl,
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-testimonials-title">
            Trusted by Innovation Leaders
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-testimonials-subtitle">
            See what our customers are saying about FlowOps
          </p>
        </div>

        <div className="relative">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-chart-3 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed" data-testid="text-testimonial-quote">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].author}
                    />
                    <AvatarFallback data-testid="avatar-fallback">
                      {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold" data-testid="text-testimonial-author">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid="text-testimonial-role">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}