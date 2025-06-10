
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
  const weddingLocation = "KTDC Gateway Kumarakom, Kumarakom, Kerala";
  const weddingTitle = "Fazna & Nisham's Wedding";
  const weddingDescription = "We are delighted to invite you to our Nikkah ceremony and dinner celebration at KTDC Gateway Kumarakom.";
  
  return (
    <BrideLayout>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bride-heading animate-fade-in">
          Save The Date
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl animate-slide-up">
          We are delighted to invite you to our Nikkah ceremony and dinner celebration on July 11, 2025. Join us for this blessed occasion at the beautiful KTDC Gateway Kumarakom.
        </p>
        
        <div className="video-container w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden mb-12 border-4 border-bride-border shadow-md">
          <div className="aspect-w-16 aspect-h-9 bg-slate-200 flex items-center justify-center">
            <div className="text-bride-text text-center p-6">
              <Heart className="h-16 w-16 mx-auto mb-4 text-bride-heading" />
              <p className="text-xl">Holy Matrimony</p>
              <p className="text-sm mt-2 opacity-75">A glimpse into our blessed journey</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8 rounded-lg animate-fade-in bg-white/50 border border-bride-border">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="text-center">
              <p className="h-12 w-12 mx-auto mb-4 text-bride-heading flex items-center justify-center text-2xl font-bold">11</p>
              <h2 className="text-2xl mb-2 bride-heading">July 11, 2025</h2>
              <p>Friday, 5:30 PM onwards</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-bride-heading" />
              <h2 className="text-2xl mb-2 bride-heading">KTDC Gateway Kumarakom</h2>
              <p>Kumarakom, Kerala</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <CalendarInviteButton
              title={weddingTitle}
              description={weddingDescription}
              location={weddingLocation}
              startDate={weddingDate}
              endDate={weddingEndDate}
              className="bg-bride-border hover:bg-bride-accent text-bride-heading"
            />
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 animate-slide-up">
          <Button
            onClick={() => navigate('/bride/gallery')}
            className="bg-bride-border hover:bg-bride-accent text-bride-heading"
            size="lg"
          >
            <GalleryIcon className="mr-2 h-5 w-5" /> View Our Gallery
          </Button>
          <Button
            onClick={() => navigate('/bride/venue')}
            className="bg-bride-border hover:bg-bride-accent text-bride-heading"
            size="lg"
          >
            <MapPin className="mr-2 h-5 w-5" /> Where, When & How
          </Button>
        </div>
      </div>
    </BrideLayout>
  );
};

export default BrideSaveTheDate;
