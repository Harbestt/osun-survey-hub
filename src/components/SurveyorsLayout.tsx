import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Upload, 
  Hash, 
  MapPin, 
  FileText, 
  CreditCard, 
  Award, 
  ClipboardCheck,
  ChevronLeft,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { name: "Dashboard", href: "/surveyors", icon: LayoutDashboard },
  { name: "Upload Plan", href: "/surveyors/upload-plan", icon: Upload },
  { name: "Job Numbers", href: "/surveyors/job-number", icon: Hash },
  { name: "Coordinates", href: "/surveyors/coordinates", icon: MapPin },
  { name: "Letters", href: "/surveyors/letters", icon: FileText },
  { name: "Payments", href: "/surveyors/payments", icon: CreditCard },
  { name: "License", href: "/surveyors/license", icon: Award },
  { name: "Compliance", href: "/surveyors/compliance", icon: ClipboardCheck },
];

export function SurveyorsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between p-4 bg-card border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="h-4 w-4" />
          </div>
          <span className="font-display font-semibold">OSGO</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={cn(
          "fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-card border-r border-border transition-transform lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="hidden lg:flex items-center gap-3 p-6 border-b border-border">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">OSGO</p>
                  <p className="text-xs text-muted-foreground">Surveyors Portal</p>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {sidebarLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Back to Main */}
            <div className="p-4 border-t border-border">
              <Link to="/">
                <Button variant="ghost" className="w-full justify-start">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Main Site
                </Button>
              </Link>
            </div>
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
