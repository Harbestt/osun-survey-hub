import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  variant?: "default" | "featured";
}

export function ServiceCard({ title, description, icon: Icon, href, variant = "default" }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group relative flex flex-col p-6 rounded-xl transition-all duration-300 hover-lift",
        variant === "featured"
          ? "bg-primary text-primary-foreground"
          : "bg-card border border-border hover:border-primary/30"
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110",
          variant === "featured"
            ? "bg-primary-foreground/20"
            : "bg-primary/10 text-primary"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className={cn(
        "font-display text-lg font-semibold mb-2",
        variant === "featured" ? "text-primary-foreground" : "text-foreground"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-sm leading-relaxed flex-grow",
        variant === "featured" ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        {description}
      </p>
      
      <div className={cn(
        "flex items-center gap-2 mt-4 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",
        variant === "featured" ? "text-accent" : "text-primary"
      )}>
        Get Started
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
