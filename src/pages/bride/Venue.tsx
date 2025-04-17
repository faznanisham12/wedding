
import BrideLayout from "@/components/layout/BrideLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Calendar, Car, Hotel, Utensils } from "lucide-react";

const BrideVenue = () => {
  return (
    <BrideLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bride-heading animate-fade-in">
          Our Rustic Venue
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 animate-slide-up">
          Join us for a magical celebration at our carefully selected countryside venue surrounded by nature.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map */}
        <Card className="bg-white/50 border-bride-border hover:shadow-md theme-transition animate-fade-in">
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center bride-heading">
              <MapPin className="mr-2" /> Location
            </h2>
            <div className="h-64 bg-slate-200 mb-4 rounded">
              {/* Map placeholder */}
              <div className="h-full flex items-center justify-center">
                <p>Wildflower Farm Map</p>
              </div>
            </div>
            <h3 className="text-xl mb-2 bride-heading">Wildflower Farm</h3>
            <p>123 Countryside Lane</p>
            <p>Rustic County, State 12345</p>
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
                  <h3 className="text-xl bride-heading">2:00 PM - Garden Ceremony</h3>
                  <p>Join us under the floral arch for our vow exchange</p>
                </div>
              </div>
              <div className="flex items-start">
                <Utensils className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl bride-heading">4:00 PM - Barn Reception</h3>
                  <p>Farm-to-table dinner and rustic celebration</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accommodations */}
        <Card className="bg-white/50 border-bride-border hover:shadow-md theme-transition animate-fade-in" style={{ animationDelay: "200ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center bride-heading">
              <Hotel className="mr-2" /> Accommodations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl bride-heading">Countryside Inn</h3>
                <p>Just 5 minutes from the venue</p>
                <p className="text-sm mt-1 opacity-75">Charming cottages with garden views</p>
              </div>
              <div>
                <h3 className="text-xl bride-heading">Rustic Cabins</h3>
                <p>On the farm property</p>
                <p className="text-sm mt-1 opacity-75">Limited availability - book early</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation */}
        <Card className="bg-white/50 border-bride-border hover:shadow-md theme-transition animate-fade-in" style={{ animationDelay: "300ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center bride-heading">
              <Car className="mr-2" /> Transportation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl bride-heading">Horse & Carriage</h3>
                <p>Available for bridal party from the Countryside Inn</p>
              </div>
              <div>
                <h3 className="text-xl bride-heading">Parking</h3>
                <p>Ample field parking available at the venue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BrideLayout>
  );
};

export default BrideVenue;
