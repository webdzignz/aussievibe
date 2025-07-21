import { Navigation } from "@/components/ui/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Shield, Heart, TrendingUp, Globe } from "lucide-react";

const stats = [
  { label: "Active Investors", value: "50,000+", icon: Users },
  { label: "Total Invested", value: "$2.8B+", icon: TrendingUp },
  { label: "Years of Experience", value: "15+", icon: Award },
  { label: "Customer Satisfaction", value: "4.9/5", icon: Heart }
];

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your financial data and investments are protected with bank-grade security and full regulatory compliance."
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is centered around helping our customers achieve their financial goals."
  },
  {
    icon: Globe,
    title: "Australian Focus",
    description: "We specialize in the Australian market, providing insights tailored to local investors and regulations."
  },
  {
    icon: TrendingUp,
    title: "Performance Driven",
    description: "We're committed to helping you achieve superior long-term investment performance through education and tools."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              About Aussie Investor
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Australians to
              <span className="bg-gradient-hero bg-clip-text text-transparent ml-3">
                Build Wealth
              </span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              We're on a mission to democratize investing in Australia by providing world-class education, 
              tools, and support to everyday investors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-aussie-gold" />
                  <div className="text-2xl md:text-3xl font-bold text-aussie-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/80">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-12">
              We believe that every Australian deserves access to high-quality investment education and tools. 
              Our platform breaks down complex financial concepts into digestible, actionable insights that 
              empower you to make informed investment decisions and build long-term wealth.
            </p>
            
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-medium text-foreground/90 italic">
                  "Investment success isn't about timing the market or picking the perfect stock. 
                  It's about time in the market, consistent education, and making informed decisions."
                </blockquote>
                <footer className="mt-6 text-foreground/70">
                  — Sarah Chen, Founder & CEO
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we serve our community of investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-background/50 text-aussie-gold">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-aussie-gold transition-colors">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    {value.description}
                  </p>
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
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-foreground/80 mb-8">
                Join thousands of Australians who are already building their financial future with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;