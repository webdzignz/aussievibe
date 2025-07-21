import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-aussie-investment.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-card/80 backdrop-blur-sm border border-border/50">
            <Star className="h-4 w-4 mr-2 text-aussie-gold" />
            Australia's #1 Investment Learning Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              The Investment
            </span>
            <br />
            <span className="text-foreground">
              Vibe Shift is Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Aussies who are transforming their financial future. 
            Learn, invest, and grow with confidence in the Australian market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all text-lg px-8 py-6 group"
            >
              Start My Investment Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-foreground/20 bg-card/80 backdrop-blur-sm text-lg px-8 py-6"
            >
              Watch How It Works
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-aussie-blue" />
              </div>
              <div className="text-2xl font-bold text-aussie-gold mb-1">50K+</div>
              <div className="text-sm text-foreground/80">Active Investors</div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-aussie-green" />
              </div>
              <div className="text-2xl font-bold text-aussie-gold mb-1">$2.8B+</div>
              <div className="text-sm text-foreground/80">Invested Through Platform</div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="flex items-center justify-center mb-3">
                <Star className="h-8 w-8 text-warm-orange" />
              </div>
              <div className="text-2xl font-bold text-aussie-gold mb-1">4.9/5</div>
              <div className="text-sm text-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-aussie-gold/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-aussie-green/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};