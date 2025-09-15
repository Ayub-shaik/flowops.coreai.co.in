import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, TrendingUp, Clock } from "lucide-react";

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    supportTickets: 500,
    responseTime: 4,
    agentCost: 25
  });

  const [results, setResults] = useState({
    costSaved: 0,
    leadsGained: 0,
    paybackPeriod: 0
  });

  const calculateROI = () => {
    // TODO: remove mock functionality - implement actual ROI calculation
    const monthlyAgentCost = inputs.supportTickets * inputs.responseTime * inputs.agentCost;
    const automationSavings = monthlyAgentCost * 0.7; // 70% reduction
    const leadsFromAutomation = Math.floor(inputs.supportTickets * 0.35); // 35% more leads
    const payback = 499 / (automationSavings / 30); // Days to payback Growth plan cost
    
    setResults({
      costSaved: Math.round(automationSavings),
      leadsGained: leadsFromAutomation,
      paybackPeriod: Math.round(payback)
    });
  };

  const handleInputChange = (field: string, value: string) => {
    const numValue = parseInt(value) || 0;
    setInputs(prev => ({ ...prev, [field]: numValue }));
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-roi-title">
            ROI Calculator
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-roi-subtitle">
            See how much FlowOps can save your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center" data-testid="text-inputs-title">
                <Calculator className="mr-2 h-5 w-5" />
                Your Current Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="supportTickets" data-testid="label-support-tickets">
                  Support tickets per month
                </Label>
                <Input
                  id="supportTickets"
                  type="number"
                  value={inputs.supportTickets}
                  onChange={(e) => handleInputChange('supportTickets', e.target.value)}
                  placeholder="500"
                  data-testid="input-support-tickets"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="responseTime" data-testid="label-response-time">
                  Average response time (hours)
                </Label>
                <Input
                  id="responseTime"
                  type="number"
                  value={inputs.responseTime}
                  onChange={(e) => handleInputChange('responseTime', e.target.value)}
                  placeholder="4"
                  data-testid="input-response-time"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="agentCost" data-testid="label-agent-cost">
                  Agent cost per hour ($)
                </Label>
                <Input
                  id="agentCost"
                  type="number"
                  value={inputs.agentCost}
                  onChange={(e) => handleInputChange('agentCost', e.target.value)}
                  placeholder="25"
                  data-testid="input-agent-cost"
                />
              </div>

              <Button onClick={calculateROI} className="w-full" data-testid="button-calculate-roi">
                Calculate ROI
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center" data-testid="text-results-title">
                <TrendingUp className="mr-2 h-5 w-5" />
                Your Potential Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Cost saved per month
                  </div>
                  <div className="text-2xl font-bold text-chart-2" data-testid="text-cost-saved">
                    ${results.costSaved.toLocaleString()}
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Additional leads per month
                  </div>
                  <div className="text-2xl font-bold text-chart-1" data-testid="text-leads-gained">
                    {results.leadsGained.toLocaleString()}
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    Payback period (days)
                  </div>
                  <div className="text-2xl font-bold text-chart-3" data-testid="text-payback-period">
                    {results.paybackPeriod}
                  </div>
                </div>
              </div>

              {results.costSaved > 0 && (
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium" data-testid="text-roi-summary">
                    You could save <span className="font-bold">${(results.costSaved * 12).toLocaleString()}</span> annually
                    and gain <span className="font-bold">{(results.leadsGained * 12).toLocaleString()}</span> more leads per year!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}