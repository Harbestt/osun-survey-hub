import { 
  FileText, 
  Upload, 
  Hash, 
  CreditCard, 
  Clock, 
  CheckCircle,
  AlertCircle,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";

const stats = [
  { label: "Pending Plans", value: "12", icon: Clock, color: "text-amber-500" },
  { label: "Approved Plans", value: "47", icon: CheckCircle, color: "text-emerald-500" },
  { label: "Job Numbers", value: "23", icon: Hash, color: "text-blue-500" },
  { label: "Total Earnings", value: "₦2.4M", icon: TrendingUp, color: "text-teal" },
];

const recentSubmissions = [
  { id: "OSG/2024/00123", property: "Plot 45, GRA Osogbo", status: "processing" as const, date: "Dec 10, 2024" },
  { id: "OSG/2024/00118", property: "Block B, Layout Estate", status: "approved" as const, date: "Dec 8, 2024" },
  { id: "OSG/2024/00115", property: "Survey 78, Ilesa Road", status: "pending" as const, date: "Dec 5, 2024" },
  { id: "OSG/2024/00110", property: "Plot 12, Ife-Ibadan Rd", status: "completed" as const, date: "Dec 1, 2024" },
];

const quickActions = [
  { label: "Upload New Plan", href: "/surveyors/upload-plan", icon: Upload },
  { label: "Request Job Number", href: "/surveyors/job-number", icon: Hash },
  { label: "Request Coordinates", href: "/surveyors/coordinates", icon: FileText },
  { label: "Make Payment", href: "/surveyors/payments", icon: CreditCard },
];

const SurveyorsDashboard = () => {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Welcome back, Surv. Adebayo
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your submissions and activities.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Submissions */}
        <div className="lg:col-span-2 rounded-xl bg-card border border-border">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold text-foreground">Recent Submissions</h2>
            <Link to="/surveyors/upload-plan">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="divide-y divide-border">
            {recentSubmissions.map((submission) => (
              <div key={submission.id} className="p-5 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{submission.id}</p>
                  <p className="text-sm text-muted-foreground">{submission.property}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground hidden sm:block">{submission.date}</span>
                  <StatusBadge status={submission.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl bg-card border border-border">
          <div className="p-5 border-b border-border">
            <h2 className="font-semibold text-foreground">Quick Actions</h2>
          </div>
          <div className="p-4 space-y-2">
            {quickActions.map((action) => (
              <Link key={action.label} to={action.href}>
                <Button variant="ghost" className="w-full justify-start h-12">
                  <action.icon className="h-5 w-5 mr-3 text-primary" />
                  {action.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="mt-6 p-5 rounded-xl bg-amber-50 border border-amber-200">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
          <div>
            <p className="font-medium text-amber-800">License Renewal Reminder</p>
            <p className="text-sm text-amber-700 mt-1">
              Your surveyor license expires on January 31, 2025. Please renew to continue submitting plans.
            </p>
            <Link to="/surveyors/license" className="text-sm font-medium text-amber-800 hover:underline mt-2 inline-block">
              Renew Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyorsDashboard;
