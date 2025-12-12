import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

// Public Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Validate from "./pages/Validate";
import Contact from "./pages/Contact";
import Archive from "./pages/Archive";
import GISViewer from "./pages/GISViewer";

// Service Pages
import SurveyPlanCharting from "./pages/services/SurveyPlanCharting";
import Payments from "./pages/services/Payments";
import Track from "./pages/services/Track";

// Surveyors Portal
import { SurveyorsLayout } from "./components/SurveyorsLayout";
import SurveyorsDashboard from "./pages/surveyors/Dashboard";
import UploadPlan from "./pages/surveyors/UploadPlan";
import JobNumber from "./pages/surveyors/JobNumber";
import Coordinates from "./pages/surveyors/Coordinates";
import Letters from "./pages/surveyors/Letters";
import SurveyorsPayments from "./pages/surveyors/Payments";
import License from "./pages/surveyors/License";
import Compliance from "./pages/surveyors/Compliance";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/validate" element={<Validate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/gis" element={<GISViewer />} />

            {/* Service Routes */}
            <Route path="/services/survey-plan-charting" element={<SurveyPlanCharting />} />
            <Route path="/services/survey-plan-verification" element={<SurveyPlanCharting />} />
            <Route path="/services/beacon-control-point" element={<SurveyPlanCharting />} />
            <Route path="/services/boundary-coordination" element={<SurveyPlanCharting />} />
            <Route path="/services/request-coordinates" element={<SurveyPlanCharting />} />
            <Route path="/services/layout-map" element={<SurveyPlanCharting />} />
            <Route path="/services/upload-digital-plan" element={<SurveyPlanCharting />} />
            <Route path="/services/upload-scanned-docs" element={<SurveyPlanCharting />} />
            <Route path="/services/payments" element={<Payments />} />
            <Route path="/services/track" element={<Track />} />
            <Route path="/tracking/:id" element={<Track />} />

            {/* Surveyors Portal */}
            <Route path="/surveyors" element={<SurveyorsLayout />}>
              <Route index element={<SurveyorsDashboard />} />
              <Route path="upload-plan" element={<UploadPlan />} />
              <Route path="job-number" element={<JobNumber />} />
              <Route path="coordinates" element={<Coordinates />} />
              <Route path="letters" element={<Letters />} />
              <Route path="payments" element={<SurveyorsPayments />} />
              <Route path="license" element={<License />} />
              <Route path="compliance" element={<Compliance />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
