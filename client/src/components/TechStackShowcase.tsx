import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Globe, Database, Brain, Lock } from "lucide-react";

export default function TechStackShowcase() {
  const [activeComplexity, setActiveComplexity] = useState("C1");

  const complexityLevels = {
    C1: {
      title: "Simple Apps",
      description: "Web pages, data visualization, crawling apps",
      tools: [
        { name: "React 18 + Vite", reason: "3-line embed, tree-shake, a11y", proof: "WCAG 2.1 report", icon: Globe },
        { name: "Node.js + Express", reason: "Fast development, real-time updates", proof: "10k concurrent tested", icon: Zap },
        { name: "Tailwind CSS", reason: "Rapid styling, responsive design", proof: "Design system ready", icon: Globe }
      ]
    },
    C2: {
      title: "Interactive Apps", 
      description: "Form builders, dashboards, basic automation",
      tools: [
        { name: "React + Socket.io", reason: "Real-time chat, webhook fan-out", proof: "10k concurrent tested", icon: Zap },
        { name: "PostgreSQL", reason: "ACID compliance, complex queries", proof: "High availability tested", icon: Database },
        { name: "Redis", reason: "Session management, caching", proof: "Sub-ms response time", icon: Zap }
      ]
    },
    C3: {
      title: "Business Apps",
      description: "CRM, inventory, workflow automation",
      tools: [
        { name: "LangChain + DAG", reason: "Deterministic task graph, retry, budget cap", proof: "SOC-2 evidence included", icon: Brain },
        { name: "Python + FastAPI", reason: "Model-agnostic, memory, CRM hooks", proof: "HIPAA encryption at rest", icon: Brain },
        { name: "Terraform + Helm", reason: "Cloud-agnostic, drift detect, rollback", proof: "CIS benchmark scored", icon: Globe }
      ]
    },
    C4: {
      title: "Enterprise Apps",
      description: "Multi-tenant SaaS, advanced integrations", 
      tools: [
        { name: "Kubernetes + EKS", reason: "Auto-scaling, high availability", proof: "99.9% uptime SLA", icon: Shield },
        { name: "Embedded Gemma 3", reason: "On-premise AI inference", proof: "GDPR compliant", icon: Brain },
        { name: "Snyk + Trivy + OPA", reason: "CVE-free SBOM, policy-as-code", proof: "PDF auditor pack", icon: Lock }
      ]
    },
    C5: {
      title: "Production-Grade",
      description: "Robust, enterprise-ready applications",
      tools: [
        { name: "MoE Architecture", reason: "Multiple expert models, optimal routing", proof: "Enterprise deployment", icon: Brain },
        { name: "Elysia RAG", reason: "Advanced retrieval augmentation", proof: "Production validated", icon: Brain },
        { name: "MCP Servers", reason: "Model control protocols, orchestration", proof: "Enterprise certified", icon: Shield }
      ]
    }
  };

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-tech-stack-title">
            Tech Stack Deep-Dive
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-tech-stack-subtitle">
            From simple C1 web pages to enterprise C5 applications - we support the full complexity spectrum
          </p>
        </div>

        <Tabs value={activeComplexity} onValueChange={setActiveComplexity} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8" data-testid="tabs-complexity">
            {Object.entries(complexityLevels).map(([key, level]) => (
              <TabsTrigger key={key} value={key} className="text-sm" data-testid={`tab-${key}`}>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(complexityLevels).map(([key, level]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h3 className="text-2xl font-bold" data-testid={`text-${key}-title`}>
                  {level.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-${key}-description`}>
                  {level.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {level.tools.map((tool, index) => (
                  <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-tool-${key}-${index}`}>
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center mr-3">
                        <tool.icon className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-lg" data-testid={`text-tool-${key}-${index}-name`}>
                        {tool.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground" data-testid={`text-tool-${key}-${index}-reason`}>
                        {tool.reason}
                      </p>
                      <Badge variant="secondary" className="text-xs" data-testid={`badge-tool-${key}-${index}-proof`}>
                        {tool.proof}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}