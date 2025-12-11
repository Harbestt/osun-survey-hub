import { useState } from "react";
import { Hash, Plus, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusBadge } from "@/components/StatusBadge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const existingJobNumbers = [
  { number: "OSG/JN/2024/0045", property: "Plot 12, GRA Layout", lga: "Osogbo", status: "approved" as const, date: "Dec 5, 2024" },
  { number: "OSG/JN/2024/0038", property: "Survey 78, Ilesa Rd", lga: "Ilesa East", status: "completed" as const, date: "Nov 28, 2024" },
  { number: "OSG/JN/2024/0032", property: "Block A, Estate", lga: "Ife Central", status: "processing" as const, date: "Nov 20, 2024" },
];

const JobNumber = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    propertyAddress: "",
    lga: "",
    purpose: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "Your job number request has been submitted for processing.",
    });
    setShowForm(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!", description: "Job number copied to clipboard." });
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Job Numbers
          </h1>
          <p className="text-muted-foreground">
            Request and manage job numbers for your survey projects.
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Request New
        </Button>
      </div>

      {/* Request Form */}
      {showForm && (
        <div className="mb-8 p-6 rounded-xl bg-card border border-border animate-scale-in">
          <h2 className="font-semibold text-foreground mb-4">New Job Number Request</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Property Address</Label>
                <Input
                  placeholder="Enter property address"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  required
                />
              </div>
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
                    <SelectItem value="ife-central">Ife Central</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Purpose</Label>
              <Select
                value={formData.purpose}
                onValueChange={(value) => setFormData({ ...formData, purpose: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-survey">New Survey</SelectItem>
                  <SelectItem value="re-survey">Re-Survey</SelectItem>
                  <SelectItem value="subdivision">Subdivision</SelectItem>
                  <SelectItem value="amalgamation">Amalgamation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3">
              <Button type="submit">Submit Request</Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      {/* Job Numbers List */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="font-semibold text-foreground">Your Job Numbers</h2>
        </div>
        <div className="divide-y divide-border">
          {existingJobNumbers.map((job) => (
            <div key={job.number} className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Hash className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{job.number}</p>
                  <p className="text-sm text-muted-foreground">{job.property} • {job.lga}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden sm:block">{job.date}</span>
                <StatusBadge status={job.status} />
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(job.number)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobNumber;
