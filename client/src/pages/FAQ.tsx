import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import FAQAccordion from "@/components/FAQAccordion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Book, Phone, Mail } from "lucide-react";

export default function FAQ() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      availability: "24/7 for Enterprise"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      action: "Browse Docs",
      availability: "Always available"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct line to our technical experts",
      action: "Schedule Call",
      availability: "Business hours"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed assistance via email",
      action: "Send Email",
      availability: "24-48 hour response"
    }
  ];

  const quickAnswers = [
    {
      question: "How quickly can I get started?",
      answer: "Most users are up and running within 30 minutes of signup."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! 14-day free trial with full access to all features."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. No contracts or cancellation fees."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, with SOC-2, HIPAA, and GDPR compliance built-in."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Frequently Asked Questions & Support"
        description="Find answers to common questions about FlowOps. Get help with pricing, security, integrations, and technical support."
        keywords="FAQ, support, help, documentation, technical support, customer service"
        path="/faq"
      />
      
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions, or get in touch with our support team for personalized help."
        backgroundClass="bg-gradient-to-br from-chart-3/10 via-primary/5 to-chart-5/10"
      />

      {/* Quick Answers */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Quick Answers
            </h2>
            <p className="text-lg text-muted-foreground">
              The most common questions our customers ask
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {quickAnswers.map((qa, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-primary">{qa.question}</h3>
                  <p className="text-muted-foreground">{qa.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />

      {/* Support Options */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Need More Help?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our support team is here to help you succeed with multiple ways to get assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    <div className="text-xs text-muted-foreground">{option.availability}</div>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary/10 text-primary rounded-lg hover-elevate transition-all duration-200">
                    {option.action}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-2xl text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team is always ready to help. Reach out through your preferred channel.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="font-semibold">General Inquiries</h3>
                <p className="text-sm text-muted-foreground">Questions about features, pricing, or getting started</p>
                <a 
                  href="mailto:hello@flowops.ai" 
                  className="inline-block text-primary hover:underline"
                >
                  hello@flowops.ai
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="font-semibold">Technical Support</h3>
                <p className="text-sm text-muted-foreground">Bug reports, technical issues, or integration help</p>
                <a 
                  href="mailto:support@flowops.ai" 
                  className="inline-block text-primary hover:underline"
                >
                  support@flowops.ai
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}