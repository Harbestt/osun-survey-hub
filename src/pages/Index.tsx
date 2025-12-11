import { 
  FileText, 
  MapPinned, 
  Shield, 
  Upload, 
  CreditCard, 
  Search,
  Map,
  Users,
  Building,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Survey Plan Charting",
    description: "Submit and process survey plans for official charting and registration.",
    icon: MapPinned,
    href: "/services/survey-plan-charting",
  },
  {
    title: "Document Verification",
    description: "Verify the authenticity of survey documents and certificates.",
    icon: Shield,
    href: "/services/survey-plan-verification",
  },
  {
    title: "Beacon & Control Points",
    description: "Request coordinates for beacons and geodetic control points.",
    icon: MapPinned,
    href: "/services/beacon-control-point",
  },
  {
    title: "Upload Digital Plans",
    description: "Submit digital survey plans in CAD or PDF format for processing.",
    icon: Upload,
    href: "/services/upload-digital-plan",
  },
  {
    title: "Track Application",
    description: "Monitor the status of your submitted applications in real-time.",
    icon: Search,
    href: "/services/track",
  },
  {
    title: "Payments & Receipts",
    description: "Make payments and download receipts for survey services.",
    icon: CreditCard,
    href: "/services/payments",
  },
];

const announcements = [
  {
    title: "New Online Portal Launched",
    excerpt: "The Office of the Surveyor General is pleased to announce the launch of our new digital portal for enhanced service delivery.",
    date: "Dec 10, 2024",
    href: "/announcements/1",
    isNew: true,
  },
  {
    title: "License Renewal Deadline Extended",
    excerpt: "Registered surveyors are reminded that the license renewal deadline has been extended to January 31, 2025.",
    date: "Dec 5, 2024",
    href: "/announcements/2",
    isNew: true,
  },
  {
    title: "GIS Data Update Completed",
    excerpt: "The latest cadastral data update for all 30 LGAs has been completed and is now available on the GIS viewer.",
    date: "Nov 28, 2024",
    href: "/announcements/3",
  },
];

const features = [
  {
    icon: FileText,
    title: "Digital Documentation",
    description: "Access and manage survey documents entirely online",
  },
  {
    icon: Map,
    title: "GIS Web Viewer",
    description: "Interactive maps with cadastral and boundary data",
  },
  {
    icon: Users,
    title: "Surveyors Portal",
    description: "Dedicated portal for registered surveyors",
  },
  {
    icon: Building,
    title: "Government Integration",
    description: "Seamless connection with state agencies",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access a comprehensive range of land survey and geospatial services 
                through our digital platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                  variant={index === 0 ? "featured" : "default"}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View All Services
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                  Why Choose Us
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Modern Solutions for Land Administration
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our digital portal brings efficiency and transparency to land survey 
                  services in Osun State. From document verification to GIS mapping, 
                  access all services from anywhere.
                </p>

                <div className="space-y-4">
                  {[
                    "24/7 Online Access to Services",
                    "Real-time Application Tracking",
                    "Secure Document Verification",
                    "Interactive GIS Map Viewer",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="/gis">
                    <Button variant="teal" size="lg">
                      <Map className="h-4 w-4 mr-2" />
                      Explore GIS Viewer
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="p-6 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                  Latest Updates
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  Announcements
                </h2>
              </div>
              <Link to="/announcements">
                <Button variant="ghost">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {announcements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.title}
                  title={announcement.title}
                  excerpt={announcement.excerpt}
                  date={announcement.date}
                  href={announcement.href}
                  isNew={announcement.isNew}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 hero-gradient">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Create an account to access all services, track your applications, 
              and manage your survey documentation online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button variant="hero" size="xl">
                  Create Account
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
