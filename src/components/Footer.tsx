import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">OSGO</p>
                <p className="text-xs text-primary-foreground/70">Osun State, Nigeria</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              The Office of the Surveyor General of Osun State is committed to providing 
              efficient land survey and geospatial services to citizens, professionals, 
              and government agencies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Services", href: "/services" },
                { name: "Track Application", href: "/services/track" },
                { name: "Verify Document", href: "/validate" },
                { name: "GIS Map Viewer", href: "/gis" },
                { name: "Digital Archive", href: "/archive" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  State Secretariat, Abere,<br />
                  Osogbo, Osun State
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <p className="text-sm text-primary-foreground/80">+234 803 XXX XXXX</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <p className="text-sm text-primary-foreground/80">info@osgo.osun.gov.ng</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-1 shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  Mon - Fri: 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* For Surveyors */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">For Surveyors</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Surveyors Portal", href: "/surveyors" },
                { name: "License Renewal", href: "/surveyors/license" },
                { name: "Upload Plans", href: "/surveyors/upload-plan" },
                { name: "Request Coordinates", href: "/surveyors/coordinates" },
                { name: "Compliance", href: "/surveyors/compliance" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Office of the Surveyor General, Osun State. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
