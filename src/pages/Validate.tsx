import { useState } from "react";
import { Search, QrCode, CheckCircle, XCircle, FileText, Calendar, MapPin, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ValidationResult {
  isValid: boolean;
  documentNumber: string;
  documentType: string;
  issueDate: string;
  propertyLocation: string;
  surveyorName: string;
  ownerName: string;
}

const Validate = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock result
    if (searchQuery.toUpperCase().startsWith("OSG")) {
      setResult({
        isValid: true,
        documentNumber: searchQuery.toUpperCase(),
        documentType: "Survey Plan Certificate",
        issueDate: "15 November, 2024",
        propertyLocation: "Plot 45, Government Layout, Osogbo",
        surveyorName: "Surv. Adebayo Olumide",
        ownerName: "Mr. Oluwaseun Afolabi",
      });
    } else {
      setResult({
        isValid: false,
        documentNumber: searchQuery,
        documentType: "-",
        issueDate: "-",
        propertyLocation: "-",
        surveyorName: "-",
        ownerName: "-",
      });
    }
    
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient py-16 md:py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Document Verification
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Verify the authenticity of survey documents, certificates, and 
                registered plans issued by the Office of the Surveyor General.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-2xl">
            <form onSubmit={handleValidate} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="documentNumber">Document Reference Number</Label>
                <div className="flex gap-3">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="documentNumber"
                      placeholder="Enter document number (e.g., OSG/2024/12345)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isSearching}>
                    {isSearching ? "Verifying..." : "Verify"}
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Or</span>
                <Button type="button" variant="outline" size="sm" disabled>
                  <QrCode className="h-4 w-4 mr-2" />
                  Scan QR Code
                </Button>
                <span className="text-xs">(Coming soon)</span>
              </div>
            </form>

            {/* Result */}
            {result && (
              <div className="mt-8 animate-fade-in">
                <div className={`p-6 rounded-xl border ${
                  result.isValid 
                    ? "bg-emerald-50 border-emerald-200" 
                    : "bg-red-50 border-red-200"
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    {result.isValid ? (
                      <>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                          <CheckCircle className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-emerald-800">Document Verified</h3>
                          <p className="text-sm text-emerald-600">This document is authentic and valid.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                          <XCircle className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-red-800">Verification Failed</h3>
                          <p className="text-sm text-red-600">This document could not be verified in our records.</p>
                        </div>
                      </>
                    )}
                  </div>

                  {result.isValid && (
                    <div className="grid gap-4 mt-6 pt-6 border-t border-emerald-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <FileText className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <div>
                            <p className="text-xs text-emerald-600">Document Number</p>
                            <p className="font-medium text-emerald-800">{result.documentNumber}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <div>
                            <p className="text-xs text-emerald-600">Issue Date</p>
                            <p className="font-medium text-emerald-800">{result.issueDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-emerald-600 mt-0.5" />
                        <div>
                          <p className="text-xs text-emerald-600">Property Location</p>
                          <p className="font-medium text-emerald-800">{result.propertyLocation}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <User className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <div>
                            <p className="text-xs text-emerald-600">Owner</p>
                            <p className="font-medium text-emerald-800">{result.ownerName}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <User className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <div>
                            <p className="text-xs text-emerald-600">Surveyor</p>
                            <p className="font-medium text-emerald-800">{result.surveyorName}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border">
              <h4 className="font-semibold text-foreground mb-2">How to find your document number</h4>
              <p className="text-sm text-muted-foreground mb-4">
                The document reference number can be found on the front page of your 
                survey certificate or plan. It typically starts with "OSG/" followed 
                by the year and a unique serial number.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Example format:</strong> OSG/2024/12345
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Validate;
