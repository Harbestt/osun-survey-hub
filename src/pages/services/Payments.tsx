import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Receipt, Download, CheckCircle, History } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const paymentHistory = [
  { id: "PAY/2024/5678", service: "Survey Plan Charting", amount: "₦45,000", date: "Dec 10, 2024", status: "completed" },
  { id: "PAY/2024/5432", service: "Document Verification", amount: "₦15,000", date: "Dec 5, 2024", status: "completed" },
  { id: "PAY/2024/5210", service: "Coordinate Request", amount: "₦10,000", date: "Nov 28, 2024", status: "completed" },
];

const Payments = () => {
  const { toast } = useToast();
  const [referenceNumber, setReferenceNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Redirecting to Payment",
      description: "You will be redirected to the payment gateway.",
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
                <CreditCard className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                  Payments & Receipts
                </h1>
                <p className="text-primary-foreground/80 mt-1">
                  Make payments and download official receipts
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="font-semibold text-foreground mb-6">Make a Payment</h2>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Application Reference Number</Label>
                      <Input
                        placeholder="e.g., OSG/2024/00123"
                        value={referenceNumber}
                        onChange={(e) => setReferenceNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Debit/Credit Card</SelectItem>
                          <SelectItem value="transfer">Bank Transfer</SelectItem>
                          <SelectItem value="ussd">USSD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Proceed to Payment
                    </Button>
                  </form>
                </div>

                {/* Payment History */}
                <div className="mt-8 rounded-xl bg-card border border-border overflow-hidden">
                  <div className="p-5 border-b border-border flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" />
                    <h2 className="font-semibold text-foreground">Payment History</h2>
                  </div>
                  <div className="divide-y divide-border">
                    {paymentHistory.map((payment) => (
                      <div key={payment.id} className="p-5 flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">{payment.service}</p>
                          <p className="text-sm text-muted-foreground">{payment.id} • {payment.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-foreground">{payment.amount}</span>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
                  <CheckCircle className="h-8 w-8 text-emerald-600 mb-3" />
                  <h3 className="font-semibold text-emerald-800 mb-2">Secure Payments</h3>
                  <p className="text-sm text-emerald-700">
                    All payments are processed securely through our verified payment gateway.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Service Fees</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Survey Plan Charting</span>
                      <span className="text-foreground">₦45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Document Verification</span>
                      <span className="text-foreground">₦15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coordinate Request</span>
                      <span className="text-foreground">₦10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Job Number</span>
                      <span className="text-foreground">₦10,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Payments;
