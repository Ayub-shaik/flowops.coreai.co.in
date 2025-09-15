import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import SecurityCompliance from "@/components/SecurityCompliance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck, Eye, Key, Database } from "lucide-react";

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data encrypted with AES-256 at rest and TLS 1.3 in transit",
      features: ["Zero-knowledge architecture", "Hardware security modules", "Regular key rotation"]
    },
    {
      icon: Lock,
      title: "Access Controls",
      description: "Role-based permissions and multi-factor authentication",
      features: ["SSO integration", "API key management", "Audit logging"]
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Built-in compliance frameworks for enterprise requirements",
      features: ["SOC-2 Type II", "HIPAA compliance", "GDPR ready"]
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "Real-time security monitoring and threat detection",
      features: ["24/7 monitoring", "Automated alerts", "Incident response"]
    },
    {
      icon: Key,
      title: "Secret Management",
      description: "Secure storage and rotation of API keys and credentials",
      features: ["Vault integration", "Auto-rotation", "Environment isolation"]
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Comprehensive data backup and disaster recovery",
      features: ["Daily backups", "Point-in-time recovery", "Geographic redundancy"]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Enterprise Security & Compliance"
        description="FlowOps provides enterprise-grade security with SOC-2, HIPAA, and GDPR compliance. Zero-trust architecture with end-to-end encryption."
        keywords="enterprise security, SOC-2, HIPAA, GDPR, compliance, encryption, cybersecurity"
        path="/security"
      />
      
      <PageHeader
        title="Enterprise-Grade Security & Compliance"
        subtitle="Built with security-first principles. Every component is continuously scanned, dependencies tracked, and compliance maintained automatically."
        backgroundClass="bg-gradient-to-br from-chart-2/10 via-primary/5 to-chart-4/10"
      />

      <SecurityCompliance />

      {/* Detailed Security Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every layer of our platform is designed with security in mind, from development to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="mr-2 mb-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center space-y-6 max-w-2xl">
          <Shield className="h-16 w-16 text-primary mx-auto" />
          <h2 className="text-3xl lg:text-4xl font-bold">
            Questions About Security?
          </h2>
          <p className="text-lg text-muted-foreground">
            Our security team is here to help with any questions about our security practices, compliance, or custom security requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:security@flowops.ai" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover-elevate transition-all duration-200"
            >
              Contact Security Team
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover-elevate transition-all duration-200"
            >
              Schedule Security Review
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}