import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-6 animate-fade-in">
            <Shield className="h-4 w-4" />
            Official Government Portal
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Office of the<br />
            <span className="text-gradient">Surveyor General</span><br />
            Osun State
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Your trusted partner for land survey services, geospatial data, 
            and property documentation in Osun State. Access services online, 
            track applications, and verify documents seamlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/services">
              <Button variant="hero" size="xl">
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/validate">
              <Button variant="hero-outline" size="xl">
                <FileSearch className="h-5 w-5" />
                Verify Document
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">50K+</p>
              <p className="text-sm text-primary-foreground/70">Survey Plans Processed</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">1.2K+</p>
              <p className="text-sm text-primary-foreground/70">Registered Surveyors</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">30+</p>
              <p className="text-sm text-primary-foreground/70">LGAs Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block">
        <div className="relative h-full flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float" />
          <MapPin className="absolute h-32 w-32 text-primary-foreground/20" />
        </div>
      </div>
    </section>
  );
}
