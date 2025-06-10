
import GroomLayout from "@/components/layout/GroomLayout";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Image as GalleryIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CalendarInviteButton from "@/components/CalendarInviteButton";

const GroomSaveTheDate = () => {
  const navigate = useNavigate();
  
  // Wedding details for the calendar invite
  const weddingDate = new Date("2025-07-13T11:00:00");
  const weddingEndDate = new Date("2025-07-13T14:30:00");
  const weddingLocation = "Kbees Durbar Convention Center";
  const weddingTitle = "Fazna & Nisham's Wedding Reception";
  const weddingDescription = "Join us for our wedding reception lunch celebration on July 13, 2025 at Kbees Durbar Convention Center.";
  
  return (
    <GroomLayout>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white animate-fade-in">
          Save The Date
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl animate-slide-up text-white">
          Join us for our wedding reception lunch celebration on July 13, 2025 at Kbees Durbar Convention Center.
        </p>
        
        <div className="video-container w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden mb-12 border border-groom-border">
          <div className="aspect-w-16 aspect-h-9 bg-slate-800 flex items-center justify-center">
            <div className="text-white text-center p-6">
              <Heart className="h-16 w-16 mx-auto mb-4" />
              <p className="text-xl">Marriage Reception</p>
              <p className="text-sm mt-2 opacity-75">Celebrating our union</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8 rounded-lg animate-fade-in bg-groom-accent/20 border border-groom-border">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="text-center">
              <p className="h-12 w-12 mx-auto mb-4 text-white flex items-center justify-center text-2xl font-bold">13</p>
              <h2 className="text-2xl mb-2 text-white">July 13, 2025</h2>
              <p className="text-white">Sunday, 11:00 AM - 2:30 PM</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-white" />
              <h2 className="text-2xl mb-2 text-white">Kbees Durbar Convention Center</h2>
              <p className="text-white">Reception Lunch</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <CalendarInviteButton
              title={weddingTitle}
              description={weddingDescription}
              location={weddingLocation}
              startDate={weddingDate}
              endDate={weddingEndDate}
              className="bg-groom-accent hover:bg-opacity-80 text-white"
            />
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 animate-slide-up">
          <Button
            onClick={() => navigate('/groom/gallery')}
            className="bg-groom-accent hover:bg-opacity-80 text-white"
            size="lg"
          >
            <GalleryIcon className="mr-2 h-5 w-5" /> View Our Gallery
          </Button>
          <Button
            onClick={() => navigate('/groom/venue')}
            className="bg-groom-accent hover:bg-opacity-80 text-white"
            size="lg"
          >
            <MapPin className="mr-2 h-5 w-5" /> Reception Details
          </Button>
        </div>
      </div>
    </GroomLayout>
  );
};

export default GroomSaveTheDate;
