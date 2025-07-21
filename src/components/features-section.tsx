import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Calculator, LineChart, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Learning",
    description: "From beginner basics to advanced strategies, learn everything about Australian investing.",
    badge: "Popular",
    color: "text-aussie-blue"
  },
  {
    icon: Calculator,
    title: "Investment Calculators",
    description: "Powerful tools to calculate returns, compound interest, and portfolio allocation.",
    badge: "Essential",
    color: "text-aussie-green"
  },
  {
    icon: LineChart,
    title: "Market Analysis",
    description: "Real-time ASX data, market insights, and expert analysis to guide your decisions.",
    badge: "Live Data",
    color: "text-warm-orange"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Bank-grade security with full regulatory compliance and insurance protection.",
    badge: "Protected",
    color: "text-aussie-gold"
  },
  {
    icon: Zap,
    title: "Quick Start",
    description: "Get started in minutes with our streamlined onboarding and intuitive interface.",
    badge: "Fast",
    color: "text-purple-400"
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow Australian investors and learn from their experiences.",
    badge: "Social",
    color: "text-pink-400"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Choose Aussie Investor
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to 
            <span className="bg-gradient-hero bg-clip-text text-transparent ml-3">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our comprehensive platform gives you all the tools, knowledge, and support 
            you need to become a confident Australian investor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-background/50 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-aussie-gold transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};