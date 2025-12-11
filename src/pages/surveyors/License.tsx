import { Award, Download, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const License = () => {
  const licenseData = {
    number: "OSG/SRN/2024/0234",
    name: "Surv. Adebayo Olumide",
    issueDate: "February 15, 2024",
    expiryDate: "January 31, 2025",
    status: "active",
    daysRemaining: 52,
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          License Management
        </h1>
        <p className="text-muted-foreground">
          View your license status and manage renewals.
        </p>
      </div>

      {/* License Card */}
      <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-primary to-navy-light text-primary-foreground">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-primary-foreground/70">Licensed Surveyor</p>
              <p className="font-display text-xl font-bold">{licenseData.name}</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium">
            Active
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <p className="text-sm text-primary-foreground/70">License Number</p>
            <p className="font-medium">{licenseData.number}</p>
          </div>
          <div>
            <p className="text-sm text-primary-foreground/70">Issue Date</p>
            <p className="font-medium">{licenseData.issueDate}</p>
          </div>
          <div>
            <p className="text-sm text-primary-foreground/70">Expiry Date</p>
            <p className="font-medium">{licenseData.expiryDate}</p>
          </div>
          <div>
            <p className="text-sm text-primary-foreground/70">Days Remaining</p>
            <p className="font-medium text-accent">{licenseData.daysRemaining} days</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Download className="h-4 w-4 mr-2" />
            Download Certificate
          </Button>
        </div>
      </div>

      {/* Renewal Notice */}
      <div className="mb-8 p-5 rounded-xl bg-amber-50 border border-amber-200">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-800">License Renewal Required</h3>
            <p className="text-sm text-amber-700 mt-1">
              Your license expires on {licenseData.expiryDate}. Please renew before the expiry date 
              to continue practicing as a registered surveyor.
            </p>
            <Button className="mt-4 bg-amber-600 hover:bg-amber-700">
              Start Renewal Process
            </Button>
          </div>
        </div>
      </div>

      {/* Renewal Requirements */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="font-semibold text-foreground">Renewal Requirements</h2>
        </div>
        <div className="p-5 space-y-4">
          {[
            { label: "Annual Practice Fee", status: "pending", amount: "₦150,000" },
            { label: "Professional Development Points", status: "completed", value: "15/12 points" },
            { label: "Active Insurance Policy", status: "completed", value: "Valid until Dec 2025" },
            { label: "No Outstanding Complaints", status: "completed", value: "Clear" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                {item.status === "completed" ? (
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                )}
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
              <span className={item.status === "completed" ? "text-muted-foreground" : "font-semibold text-amber-600"}>
                {item.amount || item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default License;
