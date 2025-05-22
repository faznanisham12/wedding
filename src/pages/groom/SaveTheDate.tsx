
import GroomLayout from "@/components/layout/GroomLayout";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, MapPin, Image as GalleryIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GroomSaveTheDate = () => {
  const navigate = useNavigate();
  
  return (
    <GroomLayout>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 groom-heading animate-fade-in">
          Save The Date
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl animate-slide-up">
          Join us for an exclusive metropolitan celebration on September 15, 2025 as we unite in a modern ceremony followed by a sophisticated reception.
        </p>
        
        <div className="video-container w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden mb-12 border border-groom-border">
          <div className="aspect-w-16 aspect-h-9 bg-slate-800 flex items-center justify-center">
            <div className="text-white text-center p-6">
              <Heart className="h-16 w-16 mx-auto mb-4" />
              <p className="text-xl">Our Modern Love Story</p>
              <p className="text-sm mt-2 opacity-75">A contemporary journey</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8 rounded-lg animate-fade-in bg-groom-accent/20 border border-groom-border">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-groom-heading" />
              <h2 className="text-2xl mb-2 groom-heading">September 15, 2025</h2>
              <p>Monday, 7:00 PM</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-groom-heading" />
              <h2 className="text-2xl mb-2 groom-heading">Skyline Loft</h2>
              <p>456 Metropolitan Avenue, Downtown</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 animate-slide-up">
          <Button
            onClick={() => navigate('/groom/gallery')}
            className="bg-groom-accent hover:bg-opacity-80 text-groom-heading"
            size="lg"
          >
            <GalleryIcon className="mr-2 h-5 w-5" /> View Our Gallery
          </Button>
          <Button
            onClick={() => navigate('/groom/venue')}
            className="bg-groom-accent hover:bg-opacity-80 text-groom-heading"
            size="lg"
          >
            <MapPin className="mr-2 h-5 w-5" /> View Venue Details
          </Button>
        </div>
      </div>
    </GroomLayout>
  );
};

export default GroomSaveTheDate;
