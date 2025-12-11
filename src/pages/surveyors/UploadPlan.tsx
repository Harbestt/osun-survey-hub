import { useState } from "react";
import { Upload, FileText, CheckCircle, AlertCircle, X } from "lucide-react";
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

const UploadPlan = () => {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    planType: "",
    propertyAddress: "",
    ownerName: "",
    lga: "",
    description: "",
  });

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Plan Submitted",
      description: "Your survey plan has been submitted for review.",
    });
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Upload Survey Plan
        </h1>
        <p className="text-muted-foreground">
          Submit digital survey plans in CAD or PDF format for processing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Upload */}
        <div className="space-y-3">
          <Label>Survey Plan Files</Label>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
          >
            <input
              type="file"
              multiple
              accept=".pdf,.dwg,.dxf"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <p className="font-medium text-foreground mb-1">
                Drop files here or click to upload
              </p>
              <p className="text-sm text-muted-foreground">
                Supports PDF, DWG, DXF files up to 50MB
              </p>
            </label>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Plan Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="planType">Plan Type</Label>
            <Select
              value={formData.planType}
              onValueChange={(value) => setFormData({ ...formData, planType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select plan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="survey">Survey Plan</SelectItem>
                <SelectItem value="subdivision">Subdivision Plan</SelectItem>
                <SelectItem value="layout">Layout Plan</SelectItem>
                <SelectItem value="composite">Composite Plan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lga">Local Government Area</Label>
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
                <SelectItem value="ife-east">Ife East</SelectItem>
                <SelectItem value="ede-north">Ede North</SelectItem>
                <SelectItem value="ede-south">Ede South</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="propertyAddress">Property Address</Label>
          <Input
            id="propertyAddress"
            placeholder="Enter the full property address"
            value={formData.propertyAddress}
            onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ownerName">Property Owner Name</Label>
          <Input
            id="ownerName"
            placeholder="Enter the property owner's full name"
            value={formData.ownerName}
            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Additional Notes</Label>
          <Textarea
            id="description"
            placeholder="Any additional information about the survey..."
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        {/* Guidelines */}
        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-500" />
            Submission Guidelines
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Ensure all coordinates are in the approved datum (WGS 84)</li>
            <li>• Include beacon numbers and descriptions</li>
            <li>• PDF files should be signed and sealed</li>
            <li>• Processing time is typically 5-7 working days</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Button type="submit" size="lg">
            <CheckCircle className="h-4 w-4 mr-2" />
            Submit Plan
          </Button>
          <Button type="button" variant="outline" size="lg">
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadPlan;
