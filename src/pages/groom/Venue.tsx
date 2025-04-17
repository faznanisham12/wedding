
import GroomLayout from "@/components/layout/GroomLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Calendar, Car, Hotel, Utensils } from "lucide-react";

const GroomVenue = () => {
  return (
    <GroomLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 groom-heading animate-fade-in">
          Our Urban Venue
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 animate-slide-up">
          We've chosen an architectural masterpiece in the heart of downtown for our contemporary celebration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map */}
        <Card className="bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30 theme-transition animate-fade-in">
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center groom-heading">
              <MapPin className="mr-2" /> Location
            </h2>
            <div className="h-64 bg-slate-800 mb-4 rounded">
              {/* Map placeholder */}
              <div className="h-full flex items-center justify-center text-white">
                <p>Skyline Loft Map</p>
              </div>
            </div>
            <h3 className="text-xl mb-2 groom-heading">Skyline Loft</h3>
            <p>456 Metropolitan Avenue</p>
            <p>Downtown, City 67890</p>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30 theme-transition animate-fade-in" style={{ animationDelay: "100ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center groom-heading">
              <Calendar className="mr-2" /> Schedule
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl groom-heading">7:00 PM - Rooftop Ceremony</h3>
                  <p>Exchange of vows with city skyline backdrop</p>
                </div>
              </div>
              <div className="flex items-start">
                <Utensils className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl groom-heading">8:30 PM - Loft Reception</h3>
                  <p>Fine dining and entertainment</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accommodations */}
        <Card className="bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30 theme-transition animate-fade-in" style={{ animationDelay: "200ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center groom-heading">
              <Hotel className="mr-2" /> Accommodations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl groom-heading">Metropolitan Hotel</h3>
                <p>Connected to the venue</p>
                <p className="text-sm mt-1 opacity-75">Luxury suites with skyline views</p>
              </div>
              <div>
                <h3 className="text-xl groom-heading">Boutique Suites</h3>
                <p>Two blocks from the venue</p>
                <p className="text-sm mt-1 opacity-75">Modern design and amenities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation */}
        <Card className="bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30 theme-transition animate-fade-in" style={{ animationDelay: "300ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center groom-heading">
              <Car className="mr-2" /> Transportation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl groom-heading">Private Cars</h3>
                <p>Luxury transportation service for all guests</p>
              </div>
              <div>
                <h3 className="text-xl groom-heading">Valet Parking</h3>
                <p>Complimentary valet service at the venue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GroomLayout>
  );
};

export default GroomVenue;
