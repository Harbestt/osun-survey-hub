import { 
  MapPinned, 
  Shield, 
  Compass, 
  Navigation, 
  LocateFixed, 
  LayoutGrid,
  Upload,
  FileUp,
  CreditCard,
  Search
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";

const allServices = [
  {
    title: "Survey Plan Charting",
    description: "Submit survey plans for official charting, verification, and registration with the Office of the Surveyor General.",
    icon: MapPinned,
    href: "/services/survey-plan-charting",
  },
  {
    title: "Survey Plan Verification",
    description: "Verify the authenticity and validity of survey documents, certificates, and registered plans.",
    icon: Shield,
    href: "/services/survey-plan-verification",
  },
  {
    title: "Beacon & Control Point",
    description: "Request information and coordinates for geodetic control points and survey beacons across Osun State.",
    icon: Compass,
    href: "/services/beacon-control-point",
  },
  {
    title: "Boundary Coordination",
    description: "Resolve boundary disputes and coordinate with adjacent property owners for accurate demarcation.",
    icon: Navigation,
    href: "/services/boundary-coordination",
  },
  {
    title: "Request for Coordinates",
    description: "Obtain official coordinates for properties, landmarks, and survey reference points.",
    icon: LocateFixed,
    href: "/services/request-coordinates",
  },
  {
    title: "Layout Map Request",
    description: "Request layout maps for development areas, showing plot divisions and land use designations.",
    icon: LayoutGrid,
    href: "/services/layout-map",
  },
  {
    title: "Upload Digital Survey Plan",
    description: "Submit digital survey plans in CAD or PDF format for processing and official registration.",
    icon: Upload,
    href: "/services/upload-digital-plan",
  },
  {
    title: "Upload Scanned Documents",
    description: "Upload scanned copies of supporting documents for your survey applications.",
    icon: FileUp,
    href: "/services/upload-scanned-docs",
  },
  {
    title: "Payments & Receipts",
    description: "Make payments for survey services and download official receipts and invoices.",
    icon: CreditCard,
    href: "/services/payments",
  },
  {
    title: "Track Application",
    description: "Monitor the progress of your submitted applications in real-time with status updates.",
    icon: Search,
    href: "/services/track",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient py-16 md:py-20">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Our Services
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Access a comprehensive range of land survey and geospatial services 
                through our digital portal. Select a service below to get started.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
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
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-xl bg-card border border-border">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Need Help?
                </h3>
                <p className="text-muted-foreground">
                  Can't find what you're looking for? Contact our support team for assistance.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="tel:+2348031234567" className="text-primary font-medium hover:underline">
                  Call Us
                </a>
                <span className="text-border">|</span>
                <a href="mailto:support@osgo.osun.gov.ng" className="text-primary font-medium hover:underline">
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
