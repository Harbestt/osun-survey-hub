import { useState } from "react";
import { MapPin, Download, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "@/components/StatusBadge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const coordinateRequests = [
  { 
    id: "CR/2024/0089", 
    location: "Beacon 45, GRA Layout", 
    type: "Beacon Point",
    status: "completed" as const, 
    date: "Dec 8, 2024",
    coordinates: "N 7°47'23.4\" E 4°33'12.8\""
  },
  { 
    id: "CR/2024/0082", 
    location: "Control Point CP-23", 
    type: "Control Point",
    status: "processing" as const, 
    date: "Dec 5, 2024",
    coordinates: null
  },
  { 
    id: "CR/2024/0075", 
    location: "Boundary Pillar BP-12", 
    type: "Boundary Pillar",
    status: "pending" as const, 
    date: "Dec 1, 2024",
    coordinates: null
  },
];

const Coordinates = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    pointType: "",
    location: "",
    purpose: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "Your coordinate request has been submitted.",
    });
    setShowForm(false);
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Coordinates
          </h1>
          <p className="text-muted-foreground">
            Request and download coordinate data for survey points.
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Button>
      </div>

      {/* Request Form */}
      {showForm && (
        <div className="mb-8 p-6 rounded-xl bg-card border border-border animate-scale-in">
          <h2 className="font-semibold text-foreground mb-4">Request Coordinates</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Point Type</Label>
                <Select
                  value={formData.pointType}
                  onValueChange={(value) => setFormData({ ...formData, pointType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beacon">Beacon Point</SelectItem>
                    <SelectItem value="control">Control Point</SelectItem>
                    <SelectItem value="boundary">Boundary Pillar</SelectItem>
                    <SelectItem value="reference">Reference Point</SelectItem>
                  </SelectContent>
                </Select>
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
                    <SelectItem value="survey">Survey Work</SelectItem>
                    <SelectItem value="verification">Verification</SelectItem>
                    <SelectItem value="mapping">Mapping</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Location Description</Label>
              <Input
                placeholder="e.g., Beacon 45 near Government House"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Additional Notes</Label>
              <Textarea
                placeholder="Any additional details..."
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit">Submit Request</Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search requests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Requests List */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="font-semibold text-foreground">Your Requests</h2>
        </div>
        <div className="divide-y divide-border">
          {coordinateRequests.map((request) => (
            <div key={request.id} className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{request.id}</p>
                    <p className="text-sm text-muted-foreground">{request.location}</p>
                  </div>
                </div>
                <StatusBadge status={request.status} />
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <div className="text-sm">
                  <span className="text-muted-foreground">Type: </span>
                  <span className="text-foreground">{request.type}</span>
                  {request.coordinates && (
                    <>
                      <span className="text-muted-foreground ml-4">Coords: </span>
                      <span className="text-foreground font-mono">{request.coordinates}</span>
                    </>
                  )}
                </div>
                {request.status === "completed" && (
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
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

export default Coordinates;
