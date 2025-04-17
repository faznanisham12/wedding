
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Home, Image as GalleryIcon, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface GroomLayoutProps {
  children: React.ReactNode;
}

const GroomLayout: React.FC<GroomLayoutProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (theme !== 'groom') {
      setTheme('groom');
    }
  }, [theme, setTheme]);

  return (
    <div className="min-h-screen groom-theme groom-bg-gradient">
      <header className="py-4 border-b border-groom-border">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl md:text-2xl groom-heading">
            John's Wedding
          </h1>
          <nav className="flex gap-2 md:gap-4">
            <Button 
              variant="ghost" 
              className="bg-groom-accent hover:bg-opacity-80 text-groom-heading"
              onClick={() => navigate("/groom/save-the-date")}
              size={isMobile ? "sm" : "default"}
            >
              <Home size={isMobile ? 18 : 20} />
            </Button>
            <Button 
              variant="ghost" 
              className="bg-groom-accent hover:bg-opacity-80 text-groom-heading"
              onClick={() => navigate("/groom/gallery")}
              size={isMobile ? "sm" : "default"}
            >
              <GalleryIcon size={isMobile ? 18 : 20} />
            </Button>
            <Button 
              variant="ghost" 
              className="bg-groom-accent hover:bg-opacity-80 text-groom-heading"
              onClick={() => navigate("/groom/venue")}
              size={isMobile ? "sm" : "default"}
            >
              <MapPin size={isMobile ? 18 : 20} />
            </Button>
            <Button 
              variant="outline" 
              className="text-groom-heading border-groom-border hover:bg-groom-accent"
              onClick={() => navigate("/")}
              size={isMobile ? "sm" : "default"}
            >
              Switch Sides
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

export default GroomLayout;
