
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Home, Image as GalleryIcon, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface BrideLayoutProps {
  children: React.ReactNode;
}

const BrideLayout: React.FC<BrideLayoutProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (theme !== 'bride') {
      setTheme('bride');
    }
  }, [theme, setTheme]);

  return (
    <div className="min-h-screen bride-theme bride-bg-gradient">
      <header className="py-4 border-b border-bride-border">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl md:text-2xl bride-heading">
            Fazna's Wedding
          </h1>
          <nav className="flex gap-2 md:gap-4">
            <Button 
              variant="ghost" 
              className="bg-bride-border hover:bg-bride-accent text-bride-heading"
              onClick={() => navigate("/bride/save-the-date")}
              size={isMobile ? "sm" : "default"}
            >
              <Home size={isMobile ? 18 : 20} />
            </Button>
            {/* <Button 
              variant="ghost" 
              className="bg-bride-border hover:bg-bride-accent text-bride-heading"
              onClick={() => navigate("/bride/gallery")}
              size={isMobile ? "sm" : "default"}
            >
              <GalleryIcon size={isMobile ? 18 : 20} />
            </Button> */}
            <Button 
              variant="ghost" 
              className="bg-bride-border hover:bg-bride-accent text-bride-heading"
              onClick={() => navigate("/bride/venue")}
              size={isMobile ? "sm" : "default"}
            >
              <MapPin size={isMobile ? 18 : 20} />
            </Button>
            <Button 
              variant="outline" 
              className="text-bride-heading border-bride-border hover:bg-bride-accent"
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

export default BrideLayout;
