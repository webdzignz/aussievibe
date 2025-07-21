import { Navigation } from "@/components/ui/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, PieChart, Target, DollarSign, BarChart3 } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "Compound Interest Calculator",
    description: "Calculate how your investments will grow over time with compound interest",
    features: ["Investment growth projections", "Monthly contribution tracking", "Tax impact analysis"],
    color: "text-aussie-blue"
  },
  {
    icon: PieChart,
    title: "Portfolio Allocation Tool",
    description: "Optimize your portfolio allocation across different asset classes",
    features: ["Risk assessment", "Diversification analysis", "Rebalancing suggestions"],
    color: "text-aussie-green"
  },
  {
    icon: Target,
    title: "Goal Planning Calculator",
    description: "Plan and track your financial goals with precision",
    features: ["Retirement planning", "Home deposit calculator", "Education fund planner"],
    color: "text-warm-orange"
  },
  {
    icon: TrendingUp,
    title: "Investment Performance Tracker",
    description: "Monitor and analyze your investment performance",
    features: ["Real-time portfolio tracking", "Performance analytics", "Benchmark comparison"],
    color: "text-aussie-gold"
  },
  {
    icon: DollarSign,
    title: "Tax Optimization Tool",
    description: "Maximize your after-tax returns with smart tax strategies",
    features: ["Capital gains tax calculator", "Franking credits optimizer", "Tax loss harvesting"],
    color: "text-purple-400"
  },
  {
    icon: BarChart3,
    title: "Market Analysis Dashboard",
    description: "Stay informed with real-time market data and analysis",
    features: ["ASX live data", "Sector performance", "Economic indicators"],
    color: "text-pink-400"
  }
];

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Investment Tools
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Tools for
              <span className="bg-gradient-hero bg-clip-text text-transparent ml-3">
                Smart Investing
              </span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Professional-grade calculators and analysis tools to help you make informed investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
                <CardHeader className="pb-4">
                  <div className={`p-3 rounded-xl bg-background/50 ${tool.color} w-fit mb-4`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-aussie-gold transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 bg-aussie-gold rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all">
                    Use Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Help Using Our Tools?
              </h2>
              <p className="text-xl text-foreground/80 mb-8">
                Our expert team is here to help you make the most of our investment tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-hero text-primary-foreground">
                  Book a Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Watch Tutorials
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Tools;