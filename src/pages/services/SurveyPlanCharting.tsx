import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, MapPinned } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SurveyPlanCharting = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    propertyAddress: "",
    lga: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    surveyorName: "",
    surveyorLicense: "",
    planType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Your survey plan charting application has been submitted successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <section className="hero-gradient py-12 md:py-16">
          <div className="container">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/20">
                <MapPinned className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                  Survey Plan Charting
                </h1>
                <p className="text-primary-foreground/80 mt-1">
                  Submit survey plans for official charting and registration
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Property Information */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="font-semibold text-foreground mb-4">Property Information</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Property Address</Label>
                    <Textarea
                      placeholder="Enter the complete property address"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Local Government Area</Label>
                      <Select
                        value={formData.lga}
                        onValueChange={(value) => setFormData({ ...formData, lga: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select LGA" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="osogbo">Osogbo</SelectItem>
                          <SelectItem value="ilesa-east">Ilesa East</SelectItem>
                          <SelectItem value="ilesa-west">Ilesa West</SelectItem>
                          <SelectItem value="ife-central">Ife Central</SelectItem>
                          <SelectItem value="ede-north">Ede North</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Plan Type</Label>
                      <Select
                        value={formData.planType}
                        onValueChange={(value) => setFormData({ ...formData, planType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="survey">Survey Plan</SelectItem>
                          <SelectItem value="subdivision">Subdivision Plan</SelectItem>
                          <SelectItem value="composite">Composite Plan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="font-semibold text-foreground mb-4">Property Owner Information</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Property owner's full name"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <Input
                        type="tel"
                        placeholder="+234 XXX XXX XXXX"
                        value={formData.ownerPhone}
                        onChange={(e) => setFormData({ ...formData, ownerPhone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input
                        type="email"
                        placeholder="owner@example.com"
                        value={formData.ownerEmail}
                        onChange={(e) => setFormData({ ...formData, ownerEmail: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Surveyor Information */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="font-semibold text-foreground mb-4">Surveyor Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Surveyor Name</Label>
                    <Input
                      placeholder="Registered surveyor's name"
                      value={formData.surveyorName}
                      onChange={(e) => setFormData({ ...formData, surveyorName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>License Number</Label>
                    <Input
                      placeholder="e.g., OSG/SRN/2024/XXX"
                      value={formData.surveyorLicense}
                      onChange={(e) => setFormData({ ...formData, surveyorLicense: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="font-semibold text-foreground mb-4">Supporting Documents</h2>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                  <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                  <p className="font-medium text-foreground mb-1">Upload Documents</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Survey plan (PDF/DWG), proof of ownership, site photos
                  </p>
                  <Button variant="outline">Select Files</Button>
                </div>
              </div>

              {/* Fee Summary */}
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <h2 className="font-semibold text-foreground mb-4">Fee Summary</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Charting Fee</span>
                    <span className="text-foreground">₦35,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Fee</span>
                    <span className="text-foreground">₦10,000</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">₦45,000</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" size="lg">
                  Submit Application
                </Button>
                <Button type="button" variant="outline" size="lg">
                  Save as Draft
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SurveyPlanCharting;
