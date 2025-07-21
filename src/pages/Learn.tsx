import { Navigation } from "@/components/ui/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, Clock, Star, ArrowRight } from "lucide-react";

const learningModules = [
  {
    title: "Investment Basics",
    description: "Learn the fundamentals of investing in the Australian market",
    duration: "2 hours",
    lessons: 8,
    level: "Beginner",
    rating: 4.9
  },
  {
    title: "ASX Fundamentals",
    description: "Understanding the Australian Securities Exchange",
    duration: "3 hours", 
    lessons: 12,
    level: "Beginner",
    rating: 4.8
  },
  {
    title: "Portfolio Diversification",
    description: "Build a balanced investment portfolio",
    duration: "2.5 hours",
    lessons: 10,
    level: "Intermediate",
    rating: 4.9
  },
  {
    title: "ETFs and Index Funds",
    description: "Passive investing strategies for long-term growth",
    duration: "1.5 hours",
    lessons: 6,
    level: "Intermediate", 
    rating: 4.7
  },
  {
    title: "Options Trading",
    description: "Advanced trading strategies and risk management",
    duration: "4 hours",
    lessons: 16,
    level: "Advanced",
    rating: 4.6
  },
  {
    title: "Tax Strategies",
    description: "Optimize your investments for Australian tax laws",
    duration: "2 hours",
    lessons: 8,
    level: "Intermediate",
    rating: 4.8
  }
];

const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Learning Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Australian 
              <span className="bg-gradient-hero bg-clip-text text-transparent ml-3">
                Investing
              </span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Comprehensive courses designed by experts to help you become a confident investor in the Australian market.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningModules.map((module, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {module.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-aussie-gold fill-current" />
                      <span className="text-sm font-medium">{module.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-aussie-gold transition-colors">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {module.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {module.lessons} lessons
                    </div>
                  </div>

                  <Button className="w-full group bg-gradient-hero text-primary-foreground">
                    <Play className="h-4 w-4 mr-2" />
                    Start Learning
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;