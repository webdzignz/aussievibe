import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-aussie-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aussie-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Card className="max-w-4xl mx-auto bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your 
                <span className="bg-gradient-hero bg-clip-text text-transparent ml-3">
                  Financial Future?
                </span>
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
                Join thousands of Australians who have already started their investment journey. 
                Get access to exclusive tools, learning resources, and community support.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
              {[
                "Free access to learning materials",
                "Personal investment calculator",
                "Live market data and analysis",
                "Community support and mentorship"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="h-5 w-5 text-aussie-green flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all text-lg px-12 py-6 group"
              >
                Start My Investment Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-aussie-gold/30 text-lg px-12 py-6 hover:bg-aussie-gold/10"
              >
                Learn More
              </Button>
            </div>

            <p className="text-sm text-foreground/60 mt-6">
              No credit card required • Free to start • Join 50,000+ investors
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};