
import BrideLayout from "@/components/layout/BrideLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Calendar, Car } from "lucide-react";

const BrideVenue = () => {
  return (
    <BrideLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bride-heading animate-fade-in">
          Nikkah details
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 animate-slide-up">
          Join us for our blessed Nikkah ceremony and dinner celebration at the beautiful KTDC Gateway Kumarakom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map */}
        <Card className="bg-white/50 border-bride-border hover:shadow-md theme-transition animate-fade-in">
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center bride-heading">
              <MapPin className="mr-2" /> Location
            </h2>
            <div className="h-64 bg-slate-200 mb-4 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.743821040292!2d76.39041357469479!3d9.677311490412258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087ef69f1d45c7%3A0x5842d94fa04e8216!2sKTDC%20Kumarakom%20Gateway!5e1!3m2!1sen!2sin!4v1749577538110!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <h3 className="text-xl mb-2 bride-heading">KTDC Gateway Kumarakom</h3>
            <p>Kumarakom, Kerala</p>
            <p className="text-sm mt-2">
              <a 
                href="https://maps.app.goo.gl/BxLJHWQvFR6mPUcD7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-bride-heading hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="bg-white/50 border-bride-border hover:shadow-md theme-transition animate-fade-in" style={{ animationDelay: "100ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center bride-heading">
              <Calendar className="mr-2" /> Schedule
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl bride-heading">5:30 PM - Nikkah Ceremony</h3>
                  <p>Join us for the sacred matrimony ceremony</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl bride-heading">6:30 PM - 9:30 PM - Dinner</h3>
                  <p>Celebration dinner and festivities</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation */}
        <Card className="bg-white/50 border-bride-border hover:shadow-md theme-transition animate-fade-in md:col-span-2" style={{ animationDelay: "200ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center bride-heading">
              <Car className="mr-2" /> Transportation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl bride-heading">Transport Arrangement</h3>
                <p>Transport may be arranged from Pandalam</p>
                <p className="text-sm mt-1 opacity-75">Please contact us for details</p>
              </div>
              <div>
                <h3 className="text-xl bride-heading">Parking</h3>
                <p>Ample parking space available at the venue</p>
                <p className="text-sm mt-1 opacity-75">Complimentary parking for all guests</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BrideLayout>
  );
};

export default BrideVenue;
