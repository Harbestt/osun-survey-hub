import { useState } from "react";
import { Search, Filter, FileText, Download, Eye, Calendar, MapPin, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const archiveDocuments = [
  { id: "OSG/2024/00456", title: "Survey Plan - Plot 45 GRA", type: "Survey Plan", date: "Dec 10, 2024", lga: "Osogbo", surveyor: "Surv. Adebayo O." },
  { id: "OSG/2024/00389", title: "Layout Plan - Estate Development", type: "Layout Plan", date: "Dec 5, 2024", lga: "Ife Central", surveyor: "Surv. Balogun K." },
  { id: "OSG/2024/00345", title: "Subdivision Plan - Block A", type: "Subdivision", date: "Nov 28, 2024", lga: "Ilesa East", surveyor: "Surv. Ogunleye T." },
  { id: "OSG/2024/00298", title: "Composite Plan - Industrial Zone", type: "Composite", date: "Nov 20, 2024", lga: "Ede North", surveyor: "Surv. Adebisi M." },
  { id: "OSG/2024/00267", title: "Survey Plan - Residential Plot", type: "Survey Plan", date: "Nov 15, 2024", lga: "Osogbo", surveyor: "Surv. Adebayo O." },
  { id: "OSG/2024/00234", title: "Boundary Plan - Adjacent Plots", type: "Boundary", date: "Nov 10, 2024", lga: "Ife East", surveyor: "Surv. Oladele A." },
];

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [lga, setLga] = useState("");
  const [selectedDocument, setSelectedDocument] = useState<typeof archiveDocuments[0] | null>(null);

  const filteredDocuments = archiveDocuments.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !documentType || doc.type === documentType;
    const matchesLga = !lga || doc.lga === lga;
    return matchesSearch && matchesType && matchesLga;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient py-16 md:py-20">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Digital Archive
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Search and access digitized survey records from the SRK archive.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container">
            {/* Search & Filters */}
            <div className="mb-8 p-6 rounded-xl bg-card border border-border">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by document ID or title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={documentType} onValueChange={setDocumentType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Document Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Survey Plan">Survey Plan</SelectItem>
                    <SelectItem value="Layout Plan">Layout Plan</SelectItem>
                    <SelectItem value="Subdivision">Subdivision</SelectItem>
                    <SelectItem value="Composite">Composite</SelectItem>
                    <SelectItem value="Boundary">Boundary</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={lga} onValueChange={setLga}>
                  <SelectTrigger>
                    <SelectValue placeholder="LGA" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Osogbo">Osogbo</SelectItem>
                    <SelectItem value="Ife Central">Ife Central</SelectItem>
                    <SelectItem value="Ilesa East">Ilesa East</SelectItem>
                    <SelectItem value="Ede North">Ede North</SelectItem>
                    <SelectItem value="Ife East">Ife East</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {(documentType || lga || searchQuery) && (
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Filters:</span>
                  {documentType && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {documentType}
                    </span>
                  )}
                  {lga && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {lga}
                    </span>
                  )}
                  <Button variant="ghost" size="sm" onClick={() => { setDocumentType(""); setLga(""); setSearchQuery(""); }}>
                    Clear All
                  </Button>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="rounded-xl bg-card border border-border overflow-hidden">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-foreground">
                  {filteredDocuments.length} Documents Found
                </h2>
              </div>
              <div className="divide-y divide-border">
                {filteredDocuments.map((doc) => (
                  <div key={doc.id} className="p-4 md:p-5 hover:bg-muted/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                          <FileText className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-foreground text-sm md:text-base truncate">{doc.title}</h3>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1">{doc.id}</p>
                          <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {doc.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {doc.lga}
                            </span>
                            <span className="flex items-center gap-1 hidden sm:flex">
                              <User className="h-3 w-3" />
                              {doc.surveyor}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-2 pl-13 sm:pl-0">
                        <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                          {doc.type}
                        </span>
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedDocument(doc)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Document Preview Dialog */}
      <Dialog open={!!selectedDocument} onOpenChange={() => setSelectedDocument(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedDocument?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Document Preview</p>
              <p className="text-sm text-muted-foreground mt-1">Watermarked copy for viewing only</p>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setSelectedDocument(null)}>Close</Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Download (Watermarked)
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Archive;
