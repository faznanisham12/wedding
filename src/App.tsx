
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BrideSaveTheDate from "./pages/bride/SaveTheDate";
import BrideGallery from "./pages/bride/Gallery";
import BrideVenue from "./pages/bride/Venue";
import GroomSaveTheDate from "./pages/groom/SaveTheDate";
import GroomGallery from "./pages/groom/Gallery";
import GroomVenue from "./pages/groom/Venue";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bride/save-the-date" element={<BrideSaveTheDate />} />
            <Route path="/bride/gallery" element={<BrideGallery />} />
            <Route path="/bride/venue" element={<BrideVenue />} />
            <Route path="/groom/save-the-date" element={<GroomSaveTheDate />} />
            <Route path="/groom/gallery" element={<GroomGallery />} />
            <Route path="/groom/venue" element={<GroomVenue />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
