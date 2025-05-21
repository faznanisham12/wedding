
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [hoveredSide, setHoveredSide] = useState<'bride' | 'groom' | null>(null);
  const [expandedSide, setExpandedSide] = useState<'bride' | 'groom' | null>(null);
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);
  const isMobile = useIsMobile();

  const handleSelectSide = (side: 'bride' | 'groom') => {
    setAnimating(true);
    setTimeout(() => {
      setTheme(side);
      navigate(`/${side}/save-the-date`);
    }, 500);
  };

  const handleTap = (side: 'bride' | 'groom') => {
    if (isMobile) {
      if (expandedSide === side) {
        // Do nothing if already expanded - allow button tap
        return;
      } else {
        // Expand this side
        setExpandedSide(side);
      }
    }
  };

  useEffect(() => {
    // Reset theme when landing on this page
    setTheme(null);
    // Reset expanded side when component mounts
    setExpandedSide(null);
  }, [setTheme]);

  // Define classes based on isMobile
  const containerClass = isMobile 
    ? "flex flex-col min-h-screen overflow-hidden" 
    : "flex flex-row min-h-screen overflow-hidden";

  // Function to determine classes for each side
  const getSideClasses = (side: 'bride' | 'groom') => {
    if (isMobile) {
      // Mobile styles
      if (expandedSide === null) {
        // Initial state - both sides showing equally
        return `side-slider-container w-full h-1/2 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 ease-in-out`;
      } else if (expandedSide === side) {
        // This side is expanded - fixed the height to take full screen
        return `side-slider-container w-full h-full flex flex-col justify-center items-center text-center p-8 transition-all duration-500 ease-in-out z-10 fixed top-0 left-0 right-0 bottom-0`;
      } else {
        // This side is minimized (other side is expanded)
        return `side-slider-container w-full h-0 flex flex-col justify-center items-center text-center p-0 transition-all duration-500 ease-in-out opacity-0 overflow-hidden`;
      }
    } else {
      // Desktop styles - keep existing behavior
      return `side-slider-container w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 ease-in-out ${
        hoveredSide === 'groom' && side === 'bride' ? 'md:w-1/4' : 
        hoveredSide === 'bride' && side === 'groom' ? 'md:w-1/4' : 
        hoveredSide === side ? 'md:w-3/4' : ''
      } ${animating && hoveredSide === side ? 'scale-105 z-10' : ''}`;
    }
  };

  return (
    <div className={containerClass}>
      {/* Bride Side */}
      <div
        className={getSideClasses('bride')}
        onMouseEnter={() => !isMobile && setHoveredSide('bride')}
        onMouseLeave={() => !isMobile && setHoveredSide(null)}
        onClick={() => handleTap('bride')}
        style={{
          background: "linear-gradient(to bottom, #FDF8F5, #FDE1D3)"
        }}
      >
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-bride-heading animate-fade-in">
            Fazna's Side
          </h2>
          <p className="text-bride-text mb-8 animate-slide-up">
            Experience our wedding through the bride's perspective, with a warm, rustic and antique aesthetic.
          </p>
          {/* Only show button if on desktop or if this side is expanded on mobile */}
          {(!isMobile || expandedSide === 'bride') && (
            <Button
              onClick={() => handleSelectSide('bride')}
              className="bg-bride-border hover:bg-bride-accent text-bride-heading px-8 py-6 rounded animate-fade-in"
              size="lg"
            >
              Choose Bride's Side
            </Button>
          )}
        </div>
      </div>
      
      {/* Groom Side */}
      <div
        className={getSideClasses('groom')}
        onMouseEnter={() => !isMobile && setHoveredSide('groom')}
        onMouseLeave={() => !isMobile && setHoveredSide(null)}
        onClick={() => handleTap('groom')}
        style={{
          background: "linear-gradient(to bottom, #121212, #1A1A1A)"
        }}
      >
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans mb-6 text-groom-heading animate-fade-in">
            Nisham's Side
          </h2>
          <p className="text-groom-text mb-8 animate-slide-up">
            View our wedding through the groom's lens, with a sleek, modern and sophisticated dark aesthetic.
          </p>
          {/* Only show button if on desktop or if this side is expanded on mobile */}
          {(!isMobile || expandedSide === 'groom') && (
            <Button
              onClick={() => handleSelectSide('groom')}
              className="bg-groom-accent hover:bg-opacity-80 text-groom-heading px-8 py-6 rounded animate-fade-in"
              size="lg"
            >
              Choose Groom's Side
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
