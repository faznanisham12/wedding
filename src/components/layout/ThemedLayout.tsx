
import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Image as GalleryIcon, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ThemedLayoutProps {
  children: React.ReactNode;
}

const ThemedLayout: React.FC<ThemedLayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (theme === null && window.location.pathname !== "/") {
      navigate("/");
    }
  }, [theme, navigate]);

  if (theme === null) {
    return children;
  }

  const themeClass = theme === 'bride' ? 'bride-theme bride-bg-gradient' : 'groom-theme groom-bg-gradient';
  const headingClass = theme === 'bride' ? 'bride-heading' : 'groom-heading';
  const buttonClass = theme === 'bride' 
    ? 'bg-bride-border hover:bg-bride-accent text-bride-heading' 
    : 'bg-groom-accent hover:bg-opacity-80 text-groom-heading';

  return (
    <div className={`min-h-screen ${themeClass}`}>
      <header className={`py-4 ${theme === 'bride' ? 'border-b border-bride-border' : 'border-b border-groom-border'}`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className={`text-xl md:text-2xl ${headingClass}`}>
            Fazna & Nisham
          </h1>
          <nav className="flex gap-2 md:gap-4">
            <Button 
              variant="ghost" 
              className={buttonClass}
              onClick={() => navigate("/save-the-date")}
              size={isMobile ? "sm" : "default"}
            >
              <Home size={isMobile ? 18 : 20} />
            </Button>
            <Button 
              variant="ghost" 
              className={buttonClass}
              onClick={() => navigate("/gallery")}
              size={isMobile ? "sm" : "default"}
            >
              <GalleryIcon size={isMobile ? 18 : 20} />
            </Button>
            <Button 
              variant="ghost" 
              className={buttonClass}
              onClick={() => navigate("/venue")}
              size={isMobile ? "sm" : "default"}
            >
              <MapPin size={isMobile ? 18 : 20} />
            </Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-6 md:py-12 px-4">
        {children}
      </main>
    </div>
  );
};

export default ThemedLayout;
