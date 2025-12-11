import { FileText, Download, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";

const letters = [
  { 
    id: "LTR/2024/0045", 
    title: "Survey Approval Letter", 
    property: "Plot 45, GRA Layout",
    status: "completed" as const, 
    date: "Dec 10, 2024",
  },
  { 
    id: "LTR/2024/0038", 
    title: "Charting Certificate", 
    property: "Survey 78, Ilesa Road",
    status: "completed" as const, 
    date: "Dec 5, 2024",
  },
  { 
    id: "LTR/2024/0032", 
    title: "Coordination Letter", 
    property: "Block A, Estate Development",
    status: "processing" as const, 
    date: "Nov 28, 2024",
  },
  { 
    id: "LTR/2024/0028", 
    title: "Boundary Confirmation", 
    property: "Plot 12, Ife-Ibadan Road",
    status: "pending" as const, 
    date: "Nov 20, 2024",
  },
];

const Letters = () => {
  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Official Letters
        </h1>
        <p className="text-muted-foreground">
          View and download official correspondence related to your survey submissions.
        </p>
      </div>

      {/* Letters List */}
      <div className="space-y-4">
        {letters.map((letter) => (
          <div key={letter.id} className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{letter.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{letter.property}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {letter.date}
                    </span>
                    <span className="text-xs text-muted-foreground">{letter.id}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={letter.status} />
              </div>
            </div>
            {letter.status === "completed" && (
              <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button variant="default" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="mt-8 p-5 rounded-xl bg-muted/50 border border-border">
        <h4 className="font-medium text-foreground mb-2">About Official Letters</h4>
        <p className="text-sm text-muted-foreground">
          Official letters and certificates are generated automatically upon approval of your submissions. 
          Letters are digitally signed and can be verified using the QR code on each document.
        </p>
      </div>
    </div>
  );
};

export default Letters;
