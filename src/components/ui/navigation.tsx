import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Menu, X, TrendingUp } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-hero rounded-lg shadow-glow group-hover:scale-105 transition-transform">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Aussie Investor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/learn" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Learn
            </Link>
            <Link 
              to="/tools" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Tools
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all">
              Start My Investment Journey
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/learn" 
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Learn
              </Link>
              <Link 
                to="/tools" 
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tools
              </Link>
              <Link 
                to="/about" 
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                  <Button size="sm" className="bg-gradient-hero text-primary-foreground">
                    Start My Investment Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};