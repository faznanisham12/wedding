
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemedLayout from "@/components/layout/ThemedLayout";
import { useTheme } from "@/context/ThemeContext";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // If no theme is selected, show a simple 404
  if (theme === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <Button 
            onClick={() => navigate("/")}
            className="bg-gray-800 hover:bg-gray-700 text-white"
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <ThemedLayout>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className={`text-6xl font-bold mb-4 ${theme === 'bride' ? 'bride-heading' : 'groom-heading'}`}>404</h1>
        <p className="text-xl mb-8">Oops! We couldn't find that page.</p>
        <Button 
          onClick={() => navigate("/save-the-date")}
          className={theme === 'bride' 
            ? 'bg-bride-border hover:bg-bride-accent text-bride-heading' 
            : 'bg-groom-accent hover:bg-opacity-80 text-groom-heading'
          }
        >
          Return to Save the Date
        </Button>
      </div>
    </ThemedLayout>
  );
};

export default NotFound;
