import { ClipboardCheck, CheckCircle, AlertCircle, XCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const complianceItems = [
  {
    category: "Documentation",
    items: [
      { name: "Valid Surveyor License", status: "compliant", due: null },
      { name: "Professional Indemnity Insurance", status: "compliant", due: "Dec 31, 2025" },
      { name: "Tax Clearance Certificate", status: "attention", due: "Dec 31, 2024" },
    ]
  },
  {
    category: "Professional Development",
    items: [
      { name: "Annual CPD Points (12 required)", status: "compliant", value: "15/12 points" },
      { name: "Attend SURCON Conference", status: "pending", due: "March 2025" },
    ]
  },
  {
    category: "Submissions",
    items: [
      { name: "Annual Returns Filed", status: "compliant", due: null },
      { name: "Outstanding Plan Corrections", status: "attention", value: "2 pending" },
      { name: "Client Complaints", status: "compliant", value: "0 open cases" },
    ]
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "compliant":
      return <CheckCircle className="h-5 w-5 text-emerald-500" />;
    case "attention":
      return <AlertCircle className="h-5 w-5 text-amber-500" />;
    case "pending":
      return <Calendar className="h-5 w-5 text-blue-500" />;
    default:
      return <XCircle className="h-5 w-5 text-red-500" />;
  }
};

const getStatusBadge = (status: string) => {
  const styles = {
    compliant: "bg-emerald-100 text-emerald-700 border-emerald-200",
    attention: "bg-amber-100 text-amber-700 border-amber-200",
    pending: "bg-blue-100 text-blue-700 border-blue-200",
    violation: "bg-red-100 text-red-700 border-red-200",
  };
  const labels = {
    compliant: "Compliant",
    attention: "Needs Attention",
    pending: "Upcoming",
    violation: "Violation",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
};

const Compliance = () => {
  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Compliance
        </h1>
        <p className="text-muted-foreground">
          Monitor your compliance status and required submissions.
        </p>
      </div>

      {/* Overview */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            <span className="font-semibold text-emerald-800">Compliant</span>
          </div>
          <p className="text-2xl font-bold text-emerald-700">6</p>
          <p className="text-sm text-emerald-600">Items in good standing</p>
        </div>
        <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <span className="font-semibold text-amber-800">Attention</span>
          </div>
          <p className="text-2xl font-bold text-amber-700">2</p>
          <p className="text-sm text-amber-600">Items need attention</p>
        </div>
        <div className="p-5 rounded-xl bg-blue-50 border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-blue-800">Upcoming</span>
          </div>
          <p className="text-2xl font-bold text-blue-700">1</p>
          <p className="text-sm text-blue-600">Upcoming requirements</p>
        </div>
      </div>

      {/* Compliance Categories */}
      <div className="space-y-6">
        {complianceItems.map((category) => (
          <div key={category.category} className="rounded-xl bg-card border border-border overflow-hidden">
            <div className="p-5 border-b border-border bg-muted/30">
              <h2 className="font-semibold text-foreground flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                {category.category}
              </h2>
            </div>
            <div className="divide-y divide-border">
              {category.items.map((item) => (
                <div key={item.name} className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(item.status)}
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      {item.due && (
                        <p className="text-sm text-muted-foreground">Due: {item.due}</p>
                      )}
                      {item.value && (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(item.status)}
                    {item.status === "attention" && (
                      <Button size="sm" variant="outline">
                        Resolve
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compliance;
