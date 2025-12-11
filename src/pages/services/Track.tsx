import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, CheckCircle, Clock, FileText, User, Calendar, MessageCircle, Download, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/StatusBadge";

const mockApplication = {
  id: "OSG/2024/00123",
  type: "Survey Plan Charting",
  property: "Plot 45, Government Layout, Osogbo",
  owner: "Mr. Oluwaseun Afolabi",
  surveyor: "Surv. Adebayo Olumide",
  submittedDate: "December 5, 2024",
  status: "processing" as const,
  timeline: [
    { step: "Application Submitted", date: "Dec 5, 2024 09:32 AM", status: "completed", officer: "System" },
    { step: "Payment Confirmed", date: "Dec 5, 2024 10:15 AM", status: "completed", officer: "Treasury" },
    { step: "Document Review", date: "Dec 6, 2024 02:45 PM", status: "completed", officer: "Mrs. Adeyemi B.", notes: "All documents verified" },
    { step: "GIS Charting", date: "Dec 8, 2024 11:30 AM", status: "current", officer: "GIS Unit", notes: "Coordinates validated, charting in progress" },
    { step: "Quality Assurance", date: null, status: "pending", officer: null },
    { step: "Final Approval", date: null, status: "pending", officer: null },
    { step: "Certificate Issued", date: null, status: "pending", officer: null },
  ],
};

const ApplicationTracking = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState(id || "");
  const [application, setApplication] = useState(id ? mockApplication : null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.toUpperCase().includes("OSG")) {
      setApplication({ ...mockApplication, id: searchQuery.toUpperCase() });
    } else {
      setApplication(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient py-12 md:py-16">
          <div className="container">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Track Application
            </h1>
            <p className="text-primary-foreground/80 max-w-xl">
              Enter your application reference number to track the status of your submission.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container max-w-3xl">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex gap-3">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter application number (e.g., OSG/2024/00123)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button type="submit">Track</Button>
              </div>
            </form>

            {/* Application Details */}
            {application ? (
              <div className="space-y-6 animate-fade-in">
                {/* Summary Card */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Application Number</p>
                      <p className="text-xl font-bold text-foreground">{application.id}</p>
                    </div>
                    <StatusBadge status={application.status} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Service Type</p>
                      <p className="font-medium text-foreground">{application.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Property</p>
                      <p className="font-medium text-foreground">{application.property}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Owner</p>
                      <p className="font-medium text-foreground">{application.owner}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Surveyor</p>
                      <p className="font-medium text-foreground">{application.surveyor}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="font-semibold text-foreground mb-6">Application Timeline</h2>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                    <div className="space-y-6">
                      {application.timeline.map((item, index) => (
                        <div key={index} className="relative pl-10">
                          <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            item.status === "completed" ? "bg-emerald-100" :
                            item.status === "current" ? "bg-blue-100 ring-4 ring-blue-100/50" :
                            "bg-muted"
                          }`}>
                            {item.status === "completed" ? (
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
                            ) : item.status === "current" ? (
                              <Clock className="h-4 w-4 text-blue-600 animate-pulse" />
                            ) : (
                              <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                            )}
                          </div>
                          <div>
                            <p className={`font-medium ${
                              item.status === "pending" ? "text-muted-foreground" : "text-foreground"
                            }`}>
                              {item.step}
                            </p>
                            {item.date && (
                              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                <Calendar className="h-3 w-3" />
                                {item.date}
                                {item.officer && (
                                  <>
                                    <span className="text-border">•</span>
                                    <User className="h-3 w-3" />
                                    {item.officer}
                                  </>
                                )}
                              </p>
                            )}
                            {item.notes && (
                              <p className="text-sm text-muted-foreground mt-1 italic">
                                "{item.notes}"
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    View Documents
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Receipt
                  </Button>
                </div>
              </div>
            ) : searchQuery && !application ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Application Not Found</h3>
                <p className="text-muted-foreground">
                  No application found with the reference number "{searchQuery}".
                  Please check the number and try again.
                </p>
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationTracking;
