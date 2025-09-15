import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Download, Lock, Globe, FileCheck, Award } from "lucide-react";

export default function SecurityCompliance() {
  const badges = [
    { name: "SOC-2 Type II", icon: Shield, color: "bg-chart-1" },
    { name: "HIPAA", icon: Lock, color: "bg-chart-2" },
    { name: "GDPR", icon: Globe, color: "bg-chart-3" },
    { name: "CIS Benchmark", icon: FileCheck, color: "bg-chart-4" },
    { name: "TLS 1.3", icon: Lock, color: "bg-chart-5" },
    { name: "AES-256", icon: Shield, color: "bg-chart-1" }
  ];

  const handleDownloadSBOM = () => {
    // TODO: remove mock functionality
    console.log('Downloading SBOM...');
    const sbomData = {
      name: "flowops-sbom",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
      components: [
        { name: "react", version: "18.2.0", vulnerabilities: 0 },
        { name: "express", version: "4.18.2", vulnerabilities: 0 }
      ]
    };
    
    const blob = new Blob([JSON.stringify(sbomData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'flowops-sbom.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 px-6" id="security">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-security-title">
            Security & Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-security-subtitle">
            Every artifact is scanned, signed, and attested before deploy
          </p>
        </div>

        <Card className="hover-elevate transition-all duration-300">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center" data-testid="text-security-features-title">
                    <Award className="mr-3 h-6 w-6 text-chart-2" />
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-security-description">
                    Built with security-first principles. All components are continuously scanned, 
                    dependencies are tracked, and compliance is maintained automatically.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold" data-testid="text-security-standards">Security Standards</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {badges.map((badge, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="justify-start py-2 px-3"
                        data-testid={`badge-security-${index}`}
                      >
                        <div className={`w-2 h-2 ${badge.color} rounded-full mr-2`}></div>
                        {badge.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  onClick={handleDownloadSBOM}
                  className="w-full sm:w-auto"
                  data-testid="button-download-sbom"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download latest SBOM
                </Button>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h4 className="font-semibold flex items-center" data-testid="text-vulnerability-scanning">
                    <Shield className="mr-2 h-5 w-5 text-chart-2" />
                    Vulnerability Scanning
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between" data-testid="stat-dependencies-scanned">
                      <span className="text-muted-foreground">Dependencies Scanned</span>
                      <span className="font-mono text-chart-2">2,847</span>
                    </div>
                    <div className="flex justify-between" data-testid="stat-vulnerabilities-found">
                      <span className="text-muted-foreground">Vulnerabilities Found</span>
                      <span className="font-mono text-chart-2">0</span>
                    </div>
                    <div className="flex justify-between" data-testid="stat-last-scan">
                      <span className="text-muted-foreground">Last Scan</span>
                      <span className="font-mono text-chart-2">2 mins ago</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h4 className="font-semibold flex items-center" data-testid="text-compliance-status">
                    <FileCheck className="mr-2 h-5 w-5 text-chart-1" />
                    Compliance Status
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between" data-testid="stat-soc2-status">
                      <span className="text-muted-foreground">SOC-2 Type II</span>
                      <span className="font-mono text-chart-2">✓ Active</span>
                    </div>
                    <div className="flex justify-between" data-testid="stat-hipaa-status">
                      <span className="text-muted-foreground">HIPAA</span>
                      <span className="font-mono text-chart-2">✓ Compliant</span>
                    </div>
                    <div className="flex justify-between" data-testid="stat-gdpr-status">
                      <span className="text-muted-foreground">GDPR</span>
                      <span className="font-mono text-chart-2">✓ Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}