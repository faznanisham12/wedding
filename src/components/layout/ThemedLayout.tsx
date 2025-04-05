
import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Image as GalleryIcon, MapPin } from "lucide-react";

interface ThemedLayoutProps {
  children: React.ReactNode;
}

const ThemedLayout: React.FC<ThemedLayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

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
        <div className="container mx-auto flex justify-between items-center">
          <h1 className={`text-xl md:text-2xl ${headingClass}`}>
            Anna & John
          </h1>
          <nav className="flex gap-4">
            <Button 
              variant="ghost" 
              className={buttonClass}
              onClick={() => navigate("/save-the-date")}
            >
              <Home size={20} />
            </Button>
            <Button 
              variant="ghost" 
              className={buttonClass}
              onClick={() => navigate("/gallery")}
            >
              <GalleryIcon size={20} />
            </Button>
            <Button 
              variant="ghost" 
              className={buttonClass}
              onClick={() => navigate("/venue")}
            >
              <MapPin size={20} />
            </Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8 md:py-12">
        {children}
      </main>
    </div>
  );
};

export default ThemedLayout;
