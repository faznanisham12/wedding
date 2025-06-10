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
  const weddingDescription =
    "Join us for our wedding reception lunch celebration on July 13, 2025 at Kbees Durbar Convention Center.";

  return (
    <GroomLayout>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl tracking-tighter   mb-6 text-white font-medium animate-fade-in">
          Save The Date
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl tracking-tight animate-slide-up text-white/70 font-normal">
          Join us for our wedding reception lunch celebration on July 13, 2025
          at Kbees Durbar Convention Center.
        </p>

        <div className="video-container w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden mb-12 border border-groom-border">
          <div className="aspect-w-16 aspect-h-9 bg-slate-800 flex items-center justify-center relative">
            <img
              src="https://res.cloudinary.com/de3hzna7a/image/upload/v1749562012/midnight_blue_l2yrsa.png"
              alt="Wedding celebration"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <Heart className="h-16 w-16 mb-4" />
              <p className="text-xl font-bold">Marriage Reception</p>
              <p className="text-sm mt-2 opacity-75 font-normal">Celebrating our union</p>
            </div> */}
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8 md:p-10 rounded-2xl animate-fade-in bg-gradient-to-br from-groom-accent/10 to-groom-accent/30 border border-groom-border/30 backdrop-blur-sm shadow-2xl">
  <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-16">
    {/* Date Section */}
    <div className="text-center group hover:scale-105 transition-transform duration-300 ease-out">
      <div className="relative mb-6">
        <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center text-2xl font-semibold text-white border border-white/20 shadow-lg backdrop-blur-sm">
          13
        </div>
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-groom-accent rounded-full opacity-80 animate-pulse"></div>
      </div>
      <h2 className="text-xl md:text-xl mb-2 text-white font-semibold tracking-wide">
        July 13, 2025
      </h2>
      <p className="text-white/90 font-normal text-sm">
        Sunday, 11:00 AM - 2:30 PM
      </p>
    </div>
    
    {/* Elegant Divider */}
    <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
    <div className="md:hidden h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    
    {/* Location Section */}
    <div className="text-center group hover:scale-105 transition-transform duration-300 ease-out">
      <div className="relative mb-6">
        <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center border border-white/20 shadow-lg backdrop-blur-sm">
          <MapPin className="h-8 w-8 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-groom-accent rounded-full opacity-80 animate-pulse"></div>
      </div>
      <h2 className="text-xl md:text-xl mb-2 text-white font-semibold tracking-wide leading-tight">
        Kbees Durbar<br/>Convention Center
      </h2>
      <p className="text-white/90 font-normal text-sm">
        Reception Lunch
      </p>
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
          {/* <Button
            onClick={() => navigate('/groom/gallery')}
            className="bg-groom-accent hover:bg-opacity-80 text-white"
            size="lg"
          >
            <GalleryIcon className="mr-2 h-5 w-5" /> View Our Gallery
          </Button> */}
          <Button
            onClick={() => navigate("/groom/venue")}
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
