import ThemedLayout from "@/components/layout/ThemedLayout";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, MapPin, Image as GalleryIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SaveTheDate = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  const isBreakpoint = (theme === 'bride' ? 'bride' : 'groom');
  const headingClass = theme === 'bride' ? 'bride-heading' : 'groom-heading';
  const buttonClass = theme === 'bride' 
    ? 'bg-bride-border hover:bg-bride-accent text-bride-heading' 
    : 'bg-groom-accent hover:bg-opacity-80 text-groom-heading';

  return (
    <ThemedLayout>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${headingClass} animate-fade-in`}>Save The Date</h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl animate-slide-up">
          We are getting married on September 15, 2025. We would love for you to join us on our special day.
        </p>
        
        <div className={`video-container w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden mb-12 ${
          theme === 'bride' ? 'border-4 border-bride-border shadow-md' : 'border border-groom-border'
        }`}>
          <div className="aspect-w-16 aspect-h-9 bg-slate-800 flex items-center justify-center">
            {/* Video placeholder - would be replaced with actual video component */}
            <div className="text-white text-center p-6">
              <Heart className="h-16 w-16 mx-auto mb-4" />
              <p className="text-xl">Our Save The Date Video</p>
              <p className="text-sm mt-2 opacity-75">Video will appear here</p>
            </div>
          </div>
        </div>

        <div className={`w-full md:w-2/3 p-8 rounded-lg animate-fade-in ${
          theme === 'bride' 
            ? 'bg-white/50 border border-bride-border' 
            : 'bg-groom-accent/20 border border-groom-border'
        }`}>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="text-center">
              <Calendar className={`h-12 w-12 mx-auto mb-4 ${theme === 'bride' ? 'text-bride-heading' : 'text-groom-heading'}`} />
              <h2 className={`text-2xl mb-2 ${headingClass}`}>September 15, 2025</h2>
              <p>Monday, 3:00 PM</p>
            </div>
            
            <div className="text-center">
              <MapPin className={`h-12 w-12 mx-auto mb-4 ${theme === 'bride' ? 'text-bride-heading' : 'text-groom-heading'}`} />
              <h2 className={`text-2xl mb-2 ${headingClass}`}>Grand Ballroom</h2>
              <p>123 Wedding Avenue, City</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 animate-slide-up">
          <Button
            onClick={() => navigate('/gallery')}
            className={buttonClass}
            size="lg"
          >
            <GalleryIcon className="mr-2 h-5 w-5" /> View Our Gallery
          </Button>
          <Button
            onClick={() => navigate('/venue')}
            className={buttonClass}
            size="lg"
          >
            <MapPin className="mr-2 h-5 w-5" /> View Venue Details
          </Button>
        </div>
      </div>
    </ThemedLayout>
  );
};

export default SaveTheDate;
