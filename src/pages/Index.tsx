
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [hoveredSide, setHoveredSide] = useState<'bride' | 'groom' | null>(null);
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const handleSelectSide = (side: 'bride' | 'groom') => {
    setAnimating(true);
    setTimeout(() => {
      setTheme(side);
      navigate('/save-the-date');
    }, 500);
  };

  useEffect(() => {
    // Reset theme when landing on this page
    setTheme(null);
  }, [setTheme]);

  const brideClasses = `side-slider-container w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 ease-in-out ${
    hoveredSide === 'groom' ? 'md:w-1/3 opacity-70' : ''
  } ${animating && hoveredSide === 'bride' ? 'scale-105 z-10' : ''}`;

  const groomClasses = `side-slider-container w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 ease-in-out ${
    hoveredSide === 'bride' ? 'md:w-1/3 opacity-70' : ''
  } ${animating && hoveredSide === 'groom' ? 'scale-105 z-10' : ''}`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Bride Side */}
      <div
        className={brideClasses}
        onMouseEnter={() => setHoveredSide('bride')}
        onMouseLeave={() => setHoveredSide(null)}
        style={{
          background: "linear-gradient(to bottom, #FDF8F5, #FDE1D3)"
        }}
      >
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-bride-heading animate-fade-in">
            Anna's Side
          </h2>
          <p className="text-bride-text mb-8 animate-slide-up">
            Experience our wedding through the bride's perspective, with a warm, rustic and antique aesthetic.
          </p>
          <Button
            onClick={() => handleSelectSide('bride')}
            className="bg-bride-border hover:bg-bride-accent text-bride-heading px-8 py-6 rounded animate-fade-in"
            size="lg"
          >
            Choose Bride's Side
          </Button>
        </div>
      </div>
      
      {/* Groom Side */}
      <div
        className={groomClasses}
        onMouseEnter={() => setHoveredSide('groom')}
        onMouseLeave={() => setHoveredSide(null)}
        style={{
          background: "linear-gradient(to bottom, #121212, #1A1A1A)"
        }}
      >
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans mb-6 text-groom-heading animate-fade-in">
            John's Side
          </h2>
          <p className="text-groom-text mb-8 animate-slide-up">
            View our wedding through the groom's lens, with a sleek, modern and sophisticated dark aesthetic.
          </p>
          <Button
            onClick={() => handleSelectSide('groom')}
            className="bg-groom-accent hover:bg-opacity-80 text-groom-heading px-8 py-6 rounded animate-fade-in"
            size="lg"
          >
            Choose Groom's Side
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
