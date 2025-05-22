
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
  // Add animation state to track content transition separately
  const [contentVisible, setContentVisible] = useState(true);

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
        // First hide existing content
        setContentVisible(false);
        
        // Then expand this side after a short delay
        setTimeout(() => {
          setExpandedSide(side);
          // Show new content after side has started expanding
          setTimeout(() => {
            setContentVisible(true);
          }, 100);
        }, 50);
      }
    }
  };

  useEffect(() => {
    // Reset theme when landing on this page
    setTheme(null);
    // Reset expanded side when component mounts
    setExpandedSide(null);
    // Initialize content as visible
    setContentVisible(true);
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
        return `side-slider-container w-full h-1/2 flex flex-col justify-center items-center text-center p-8 transition-all duration-700 ease-in-out`;
      } else if (expandedSide === side) {
        const animationClass = side === 'bride' ? 'bride-expand-animation' : 'groom-expand-animation';
        // This side is expanded - with origin-aware smooth animation
        return `side-slider-container w-full flex flex-col justify-center items-center text-center p-8 z-10 fixed top-0 left-0 right-0 bottom-0 ${animationClass}`;
      } else {
        // This side is minimized (other side is expanded)
        return `side-slider-container w-full h-0 flex flex-col justify-center items-center text-center p-0 transition-all duration-700 ease-in-out opacity-0 overflow-hidden animate-fade-out`;
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
          backgroundImage: "linear-gradient(to bottom, rgba(245, 245, 220, 0.9), rgba(203, 183, 153, 0.9)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-md mx-auto animate-content-slide">
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
              variant="outline"
              className="bg-transparent hover:bg-bride-accent/10 border-2 border-bride-border text-bride-heading px-8 py-6 rounded animate-fade-in"
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
          backgroundImage: "linear-gradient(to bottom, rgba(27, 27, 27, 0.85), rgba(10, 18, 42, 0.9)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-md mx-auto animate-content-slide">
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
              variant="outline"
              className="bg-transparent hover:bg-groom-accent/20 border-2 border-groom-accent text-groom-heading px-8 py-6 rounded animate-fade-in"
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
