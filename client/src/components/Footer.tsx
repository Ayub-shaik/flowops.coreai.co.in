import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const footerSections = {
    product: [
      { name: "Docs", href: "#docs" },
      { name: "Changelog", href: "#changelog" },
      { name: "Roadmap", href: "#roadmap" },
      { name: "API Reference", href: "#api" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" }
    ],
    legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "GDPR", href: "#gdpr" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/flowops" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/flowops" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/flowops" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@flowops" }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold">F</span>
              </div>
              <span className="text-xl font-bold">FlowOps</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-description">
              Ship production apps from plain English. 
              AI-powered development platform for C1 to C5 complexity applications.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid={`button-social-${social.name.toLowerCase()}`}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-product-title">Product</h4>
            <ul className="space-y-2">
              {footerSections.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-product-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-company-title">Company</h4>
            <ul className="space-y-2">
              {footerSections.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-company-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-legal-title">Legal</h4>
            <ul className="space-y-2">
              {footerSections.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-legal-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2025 FlowOps – All rights reserved
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span data-testid="text-footer-status">
              Status: All systems operational
            </span>
            <span data-testid="text-footer-version">
              Version: 2.1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}