import { CreditCard, Download, Receipt, Plus, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";

const payments = [
  { 
    id: "PAY/2024/0892", 
    description: "Survey Plan Charting Fee", 
    amount: "₦45,000",
    status: "completed" as const, 
    date: "Dec 10, 2024",
    reference: "OSG/2024/00123"
  },
  { 
    id: "PAY/2024/0885", 
    description: "Coordinate Request Fee", 
    amount: "₦15,000",
    status: "completed" as const, 
    date: "Dec 5, 2024",
    reference: "CR/2024/0089"
  },
  { 
    id: "PAY/2024/0878", 
    description: "Job Number Application", 
    amount: "₦10,000",
    status: "completed" as const, 
    date: "Nov 28, 2024",
    reference: "OSG/JN/2024/0045"
  },
  { 
    id: "PAY/2024/0870", 
    description: "Annual License Fee", 
    amount: "₦150,000",
    status: "pending" as const, 
    date: "Nov 20, 2024",
    reference: "LIC/2024/0032"
  },
];

const pendingFees = [
  { service: "Survey Plan Verification", amount: "₦25,000", due: "Dec 15, 2024" },
  { service: "License Renewal", amount: "₦150,000", due: "Jan 31, 2025" },
];

const SurveyorsPayments = () => {
  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Payments
        </h1>
        <p className="text-muted-foreground">
          Manage your payments and download receipts.
        </p>
      </div>

      {/* Pending Payments */}
      {pendingFees.length > 0 && (
        <div className="mb-8 p-5 rounded-xl bg-amber-50 border border-amber-200">
          <h3 className="font-semibold text-amber-800 mb-4">Pending Payments</h3>
          <div className="space-y-3">
            {pendingFees.map((fee) => (
              <div key={fee.service} className="flex items-center justify-between p-3 bg-amber-100/50 rounded-lg">
                <div>
                  <p className="font-medium text-amber-900">{fee.service}</p>
                  <p className="text-sm text-amber-700">Due: {fee.due}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-amber-900">{fee.amount}</span>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                    Pay Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Payment Summary */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-muted-foreground">Total Paid (2024)</p>
          <p className="text-2xl font-bold text-foreground mt-1">₦2,450,000</p>
        </div>
        <div className="p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">₦175,000</p>
        </div>
        <div className="p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-muted-foreground">Transactions</p>
          <p className="text-2xl font-bold text-foreground mt-1">42</p>
        </div>
      </div>

      {/* Payment History */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h2 className="font-semibold text-foreground">Payment History</h2>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
        <div className="divide-y divide-border">
          {payments.map((payment) => (
            <div key={payment.id} className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  payment.status === "completed" ? "bg-emerald-100" : "bg-amber-100"
                }`}>
                  {payment.status === "completed" ? (
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <CreditCard className="h-5 w-5 text-amber-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">{payment.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {payment.id} • {payment.reference}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-semibold text-foreground">{payment.amount}</p>
                  <p className="text-sm text-muted-foreground">{payment.date}</p>
                </div>
                {payment.status === "completed" && (
                  <Button variant="ghost" size="icon">
                    <Receipt className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyorsPayments;
