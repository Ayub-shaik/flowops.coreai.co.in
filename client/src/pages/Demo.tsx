import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    useCase: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: remove mock functionality
    console.log('Demo booking submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours to schedule your demo.');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const demoFeatures = [
    {
      icon: Zap,
      title: "Live App Generation",
      description: "Watch as we create a full application from a simple description in real-time"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "See how teams work together on projects with built-in collaboration tools"
    },
    {
      icon: Calendar,
      title: "Deployment Pipeline",
      description: "Experience the automated deployment process from code to production"
    },
    {
      icon: Clock,
      title: "Performance Metrics",
      description: "Review analytics and monitoring capabilities for production applications"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Book a Live Demo - See FlowOps in Action"
        description="Schedule a personalized demo of FlowOps. See how to build production apps from plain English in under 30 minutes."
        keywords="demo, live demo, product demo, FlowOps demo, schedule demo"
        path="/demo"
      />
      
      <PageHeader
        title="See FlowOps in Action"
        subtitle="Book a personalized demo and watch us build a production-ready application from your idea in under 30 minutes."
        backgroundClass="bg-gradient-to-br from-primary/10 via-chart-4/5 to-chart-1/10"
      />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Booking Form */}
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Demo</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll schedule a personalized demo tailored to your needs.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        data-testid="input-company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select onValueChange={(value) => handleChange('role', value)}>
                        <SelectTrigger data-testid="select-role">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="engineering-manager">Engineering Manager</SelectItem>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="founder">Founder</SelectItem>
                          <SelectItem value="product-manager">Product Manager</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select onValueChange={(value) => handleChange('teamSize', value)}>
                      <SelectTrigger data-testid="select-team-size">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 people</SelectItem>
                        <SelectItem value="6-20">6-20 people</SelectItem>
                        <SelectItem value="21-50">21-50 people</SelectItem>
                        <SelectItem value="51-200">51-200 people</SelectItem>
                        <SelectItem value="200+">200+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="useCase">Primary Use Case</Label>
                    <Select onValueChange={(value) => handleChange('useCase', value)}>
                      <SelectTrigger data-testid="select-use-case">
                        <SelectValue placeholder="What do you want to build?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="mobile-app">Mobile Application</SelectItem>
                        <SelectItem value="api-service">API/Microservice</SelectItem>
                        <SelectItem value="data-pipeline">Data Pipeline</SelectItem>
                        <SelectItem value="ai-ml">AI/ML Application</SelectItem>
                        <SelectItem value="enterprise">Enterprise System</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your project (optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Briefly describe what you're looking to build or any specific requirements..."
                      rows={4}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" data-testid="button-book-demo">
                    Book My Demo
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6">
                    {demoFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Demo Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>30 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Format:</span>
                      <span>Video call (Zoom)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cost:</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Recording:</span>
                      <span>Available on request</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Immediate Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Want to explore FlowOps on your own first? Start your free trial and get immediate access to all features.
                  </p>
                  <Button variant="outline" className="w-full">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Demo FAQ
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our demo process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I see my specific use case?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We'll tailor the demo to show how FlowOps works for your specific requirements and industry.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do I need to prepare anything?</h3>
                <p className="text-sm text-muted-foreground">
                  Just come with your questions! We'll handle all the technical setup and demonstration.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can my team join the demo?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! We encourage team participation. Multiple stakeholders often find the demo valuable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What happens after the demo?</h3>
                <p className="text-sm text-muted-foreground">
                  We'll provide you with resources to get started and answer any follow-up questions you have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}