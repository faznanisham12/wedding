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
  const weddingDescription =
    "Join us for our Nikkah ceremony and wedding dinner on July 11, 2025 at KTDC Gateway Kumarakom.";

  return (
    <BrideLayout>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl tracking-tighter  font-medium mb-6 text-bride-heading animate-fade-in">
          Save The Date
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl tracking-tight animate-slide-up text-bride-heading/70 font-normal">
          Join us for our Nikkah ceremony and wedding dinner on July 11, 2025 at
          KTDC Gateway Kumarakom.
        </p>

        <div className="video-container w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden mb-12 border border-bride-border">
          <div className="aspect-w-16 aspect-h-9 bg-slate-200 flex items-center justify-center relative">
            <img
              src="https://res.cloudinary.com/de3hzna7a/image/upload/v1749561678/beige_euz8gd.png"
              alt="Wedding celebration"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <Heart className="h-16 w-16 mb-4" />
              <p className="text-xl font-bold">Holy Matrimony</p>
              <p className="text-sm mt-2 opacity-75 font-normal">Celebrating our union</p>
            </div> */}
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8 md:p-10 rounded-2xl animate-fade-in bg-gradient-to-br from-bride-accent/10 to-bride-accent/30 border border-bride-border/30 ">
          <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-16">
            {/* Date Section */}
            <div className="text-center group hover:scale-105 transition-transform duration-300 ease-out">
              <div className="relative mb-6">
                <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-bride-accent/20 to-bride-accent/5 rounded-2xl flex items-center justify-center text-2xl font-semibold text-bride-heading border border-bride-border/20 shadow-lg backdrop-blur-sm">
                  11
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-bride-accent rounded-full opacity-80 animate-pulse"></div>
              </div>
              <h2 className="text-xl md:text-xl mb-2 text-bride-heading font-semibold tracking-wide">
                July 11, 2025
              </h2>
              <p className="text-bride-text font-normal text-sm">
                Friday, 5:30 PM onwards
              </p>
            </div>

            {/* Elegant Divider */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-bride-border/30 to-transparent"></div>
            <div className="md:hidden h-px w-32 bg-gradient-to-r from-transparent via-bride-border/30 to-transparent"></div>

            {/* Location Section */}
            <div className="text-center group hover:scale-105 transition-transform duration-300 ease-out">
              <div className="relative mb-6">
                <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-bride-accent/20 to-bride-accent/5 rounded-2xl flex items-center justify-center border border-bride-border/20 shadow-lg backdrop-blur-sm">
                  <MapPin className="h-8 w-8 text-bride-heading" />
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-bride-accent rounded-full opacity-80 animate-pulse"></div>
              </div>
              <h2 className="text-xl md:text-xl mb-2 text-bride-heading font-semibold tracking-wide leading-tight">
                KTDC Gateway
                <br />
                Kumarakom
              </h2>
              <p className="text-bride-text font-normal text-sm">
                Nikkah & Dinner
              </p>
            </div>
          </div>

          {/* Calendar Invite Button */}
          <div className="mt-8 flex justify-center">
            <CalendarInviteButton
              title={weddingTitle}
              description={weddingDescription}
              location={weddingLocation}
              startDate={weddingDate}
              endDate={weddingEndDate}
              className="bg-bride-accent hover:bg-opacity-80 text-bride-text transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-6 animate-slide-up">
          <Button
            onClick={() => navigate("/bride/gallery")}
            className="bg-bride-accent hover:bg-opacity-80 text-bride-text"
            size="lg"
          >
            {/* <GalleryIcon className="mr-2 h-5 w-5" /> View Our Gallery
          </Button>
          <Button
            onClick={() => navigate('/bride/venue')}
            className="bg-bride-accent hover:bg-opacity-80 text-bride-text"
            size="lg"
          > */}
            <MapPin className="mr-2 h-5 w-5" /> Event Details
          </Button>
        </div>
      </div>
    </BrideLayout>
  );
};

export default BrideSaveTheDate;
