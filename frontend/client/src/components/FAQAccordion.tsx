import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "Is my data encrypted?",
      answer: "Yes, absolutely. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We follow enterprise-grade security standards including SOC-2 Type II compliance.",
      id: "encryption"
    },
    {
      question: "Can I self-host FlowOps?",
      answer: "Yes, we provide complete Terraform plans for self-hosting on your infrastructure. Available for Growth and Enterprise plans with full deployment automation.",
      id: "self-host"
    },
    {
      question: "Which cloud providers do you support?",
      answer: "FlowOps supports AWS, Azure, and Google Cloud Platform. You can pick one or use our multi-cloud deployment strategies for redundancy.",
      id: "cloud-providers"
    },
    {
      question: "Will I be locked into FlowOps?",
      answer: "No lock-in. FlowOps is built on open standards with MIT license components. You can export your projects, code, and data anytime.",
      id: "lock-in"
    },
    {
      question: "How does the complexity rating (C1-C5) work?",
      answer: "Our complexity rating helps you understand the sophistication level: C1 (simple web pages), C2 (interactive apps), C3 (business apps), C4 (enterprise SaaS), C5 (production-grade with advanced AI).",
      id: "complexity"
    },
    {
      question: "What AI models do you support?",
      answer: "We support all major LLMs including OpenAI GPT, Google Gemini, Anthropic Claude, and open-source models. Our MoE architecture optimally routes to the best model for each task.",
      id: "ai-models"
    },
    {
      question: "How fast can I deploy an application?",
      answer: "Most applications deploy in under 30 minutes from idea to production, including infrastructure provisioning, security setup, and CI/CD pipeline configuration.",
      id: "deployment-speed"
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes! Starter plan includes email support, Growth plan adds Slack integration and priority support, Enterprise plan includes dedicated success manager and SLA.",
      id: "support"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-faq-subtitle">
            Everything you need to know about FlowOps
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={faq.id} 
              className="border rounded-lg px-6 hover-elevate transition-all duration-300"
              data-testid={`accordion-item-${faq.id}`}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6" data-testid={`accordion-trigger-${faq.id}`}>
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed" data-testid={`accordion-content-${faq.id}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@flowops.ai" 
            className="text-primary hover:underline font-medium"
            data-testid="link-contact-support"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}