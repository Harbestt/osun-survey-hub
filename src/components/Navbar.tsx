import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, FileText, Users, Building, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Surveyors Portal", href: "/surveyors" },
  { name: "GIS Viewer", href: "/gis" },
  { name: "Archive", href: "/archive" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md group-hover:shadow-glow transition-shadow duration-300">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-lg font-semibold text-foreground leading-tight">OSGO</p>
            <p className="text-xs text-muted-foreground">Office of the Surveyor General</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/validate" className="hidden md:block">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Verify Document
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="default" size="sm">
              Sign In
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-slide-up">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/validate" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full mt-2">
                <FileText className="h-4 w-4 mr-2" />
                Verify Document
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
