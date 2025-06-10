
import BrideLayout from "@/components/layout/BrideLayout";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Image as GalleryIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CalendarInviteButton from "@/components/CalendarInviteButton";

const BrideSaveTheDate = () => {
  const navigate = useNavigate();
  
  // Wedding details for the calendar invite
  const weddingDate = new Date("2025-07-11T17:30:00");
  const weddingEndDate = new Date("2025-07-11T21:30:00");
  const weddingLocation = "KTDC Gateway Kumarakom";
  const weddingTitle = "Fazna & Nisham's Wedding";
  const weddingDescription = "Join us for our Nikkah ceremony and wedding dinner on July 11, 2025 at KTDC Gateway Kumarakom.";
  
  return (
    <BrideLayout>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-bride-heading font-bold animate-fade-in">
          Save The Date
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl animate-slide-up text-bride-text font-normal">
          Join us for our Nikkah ceremony and wedding dinner on July 11, 2025 at KTDC Gateway Kumarakom.
        </p>
        
        <div className="video-container w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden mb-12 border border-bride-border">
          <div className="aspect-w-16 aspect-h-9 bg-slate-200 flex items-center justify-center relative">
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&h=450"
              alt="Wedding celebration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <Heart className="h-16 w-16 mb-4" />
              <p className="text-xl font-bold">Holy Matrimony</p>
              <p className="text-sm mt-2 opacity-75 font-normal">Celebrating our union</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8 rounded-lg animate-fade-in bg-bride-accent/20 border border-bride-border">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="text-center">
              <p className="h-12 w-12 mx-auto mb-4 text-bride-heading flex items-center justify-center text-2xl font-bold">11</p>
              <h2 className="text-2xl mb-2 text-bride-heading font-bold">July 11, 2025</h2>
              <p className="text-bride-text font-normal">Friday, 5:30 PM onwards</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-bride-heading" />
              <h2 className="text-2xl mb-2 text-bride-heading font-bold">KTDC Gateway Kumarakom</h2>
              <p className="text-bride-text font-normal">Nikkah & Dinner</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <CalendarInviteButton
              title={weddingTitle}
              description={weddingDescription}
              location={weddingLocation}
              startDate={weddingDate}
              endDate={weddingEndDate}
              className="bg-bride-accent hover:bg-opacity-80 text-bride-text"
            />
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 animate-slide-up">
          <Button
            onClick={() => navigate('/bride/gallery')}
            className="bg-bride-accent hover:bg-opacity-80 text-bride-text"
            size="lg"
          >
            <GalleryIcon className="mr-2 h-5 w-5" /> View Our Gallery
          </Button>
          <Button
            onClick={() => navigate('/bride/venue')}
            className="bg-bride-accent hover:bg-opacity-80 text-bride-text"
            size="lg"
          >
            <MapPin className="mr-2 h-5 w-5" /> Event Details
          </Button>
        </div>
      </div>
    </BrideLayout>
  );
};

export default BrideSaveTheDate;
