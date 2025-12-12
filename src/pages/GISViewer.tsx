import { useState } from "react";
import { Layers, Search, ZoomIn, ZoomOut, Locate, Ruler, Download, Info, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const layers = [
  { id: "satellite", name: "Satellite Imagery", active: true },
  { id: "streets", name: "Street Map", active: false },
  { id: "parcels", name: "Land Parcels", active: true },
  { id: "boundaries", name: "LGA Boundaries", active: true },
  { id: "beacons", name: "Survey Beacons", active: false },
  { id: "controls", name: "Control Points", active: false },
];

const GISViewer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLayers, setActiveLayers] = useState(layers.map(l => l.active));
  const [showLayers, setShowLayers] = useState(true);
  const [coordinates, setCoordinates] = useState({ lat: "7.7827", lng: "4.5418" });

  const toggleLayer = (index: number) => {
    const newLayers = [...activeLayers];
    newLayers[index] = !newLayers[index];
    setActiveLayers(newLayers);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow relative">
        {/* Map Container */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-primary/10">
          {/* Placeholder Map Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
            </svg>
          </div>
          
          {/* Map Placeholder Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8 bg-card/90 backdrop-blur rounded-2xl border border-border max-w-md">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Layers className="h-10 w-10 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                GIS Web Map Viewer
              </h2>
              <p className="text-muted-foreground mb-4">
                Interactive map viewer for cadastral data, survey beacons, and land parcels 
                across Osun State.
              </p>
              <p className="text-sm text-muted-foreground">
                Full map integration requires MapBox or Leaflet configuration. 
                Contact administrator for GIS data access.
              </p>
            </div>
          </div>

          {/* Sample Map Points */}
          <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-secondary rounded-full border-2 border-secondary-foreground animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full border-2 border-accent-foreground" />
          <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-primary rounded-full border-2 border-primary-foreground" />
        </div>

        {/* Search Bar */}
        <div className="absolute top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-96 z-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search location, parcel ID, or coordinates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/95 backdrop-blur border-border shadow-lg"
            />
          </div>
        </div>

        {/* Layer Panel */}
        {showLayers && (
          <div className="absolute top-16 md:top-20 left-4 right-4 md:right-auto md:w-64 bg-card/95 backdrop-blur rounded-xl border border-border shadow-lg z-10 animate-scale-in">
            <div className="p-3 md:p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-foreground text-sm md:text-base flex items-center gap-2">
                <Layers className="h-4 w-4" />
                Map Layers
              </h3>
              <button onClick={() => setShowLayers(false)} className="md:hidden text-muted-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-3 md:p-4 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
              {layers.map((layer, index) => (
                <div key={layer.id} className="flex items-center gap-2 md:gap-3">
                  <Checkbox
                    id={layer.id}
                    checked={activeLayers[index]}
                    onCheckedChange={() => toggleLayer(index)}
                  />
                  <Label htmlFor={layer.id} className="text-xs md:text-sm cursor-pointer">
                    {layer.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map Controls */}
        <div className="absolute top-20 right-4 flex flex-col gap-2 z-10">
          <Button variant="secondary" size="icon" className="bg-card/95 backdrop-blur shadow-lg">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-card/95 backdrop-blur shadow-lg">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-card/95 backdrop-blur shadow-lg">
            <Locate className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-card/95 backdrop-blur shadow-lg">
            <Ruler className="h-4 w-4" />
          </Button>
          <Button 
            variant={showLayers ? "default" : "secondary"} 
            size="icon" 
            className={showLayers ? "" : "bg-card/95 backdrop-blur shadow-lg"}
            onClick={() => setShowLayers(!showLayers)}
          >
            <Layers className="h-4 w-4" />
          </Button>
        </div>

        {/* Coordinate Display */}
        <div className="absolute bottom-20 md:bottom-4 left-4 px-3 py-2 bg-card/95 backdrop-blur rounded-lg border border-border shadow-lg z-10">
          <p className="text-xs text-muted-foreground">Cursor Position</p>
          <p className="text-xs md:text-sm font-mono text-foreground">
            {coordinates.lat}°N, {coordinates.lng}°E
          </p>
        </div>

        {/* Legend - Hidden on mobile, visible on larger screens */}
        <div className="absolute bottom-20 md:bottom-4 right-4 p-3 md:p-4 bg-card/95 backdrop-blur rounded-lg border border-border shadow-lg z-10 hidden sm:block">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">Legend</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-xs text-foreground">Survey Beacons</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-xs text-foreground">Control Points</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs text-foreground">Land Parcels</span>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="absolute bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 flex gap-2 z-10">
          <Button variant="secondary" size="sm" className="flex-1 md:flex-none bg-card/95 backdrop-blur shadow-lg text-xs md:text-sm">
            <Download className="h-4 w-4 mr-1 md:mr-2" />
            Export
          </Button>
          <Button variant="secondary" size="sm" className="flex-1 md:flex-none bg-card/95 backdrop-blur shadow-lg text-xs md:text-sm">
            <Info className="h-4 w-4 mr-1 md:mr-2" />
            Print
          </Button>
        </div>
      </main>
    </div>
  );
};

export default GISViewer;
