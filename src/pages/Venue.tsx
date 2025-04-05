
import ThemedLayout from "@/components/layout/ThemedLayout";
import { useTheme } from "@/context/ThemeContext";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Calendar, Car, Hotel, Utensils } from "lucide-react";

const Venue = () => {
  const { theme } = useTheme();
  const headingClass = theme === 'bride' ? 'bride-heading' : 'groom-heading';
  const cardClass = theme === 'bride' 
    ? 'bg-white/50 border-bride-border hover:shadow-md' 
    : 'bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30';

  return (
    <ThemedLayout>
      <div className="text-center mb-12">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${headingClass} animate-fade-in`}>
          Venue Details
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 animate-slide-up">
          {theme === 'bride'
            ? "Join us for a magical celebration at our carefully selected rustic venue."
            : "We've chosen an elegant contemporary venue for our special day."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map */}
        <Card className={`${cardClass} theme-transition animate-fade-in`}>
          <CardContent className="p-6">
            <h2 className={`text-2xl mb-4 flex items-center ${headingClass}`}>
              <MapPin className="mr-2" /> Location
            </h2>
            <div className="h-64 bg-slate-300 mb-4 rounded">
              {/* Map would go here - placeholder */}
              <div className="h-full flex items-center justify-center">
                <p>Interactive Map</p>
              </div>
            </div>
            <h3 className={`text-xl mb-2 ${headingClass}`}>Grand Ballroom</h3>
            <p>123 Wedding Avenue</p>
            <p>City, State 12345</p>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className={`${cardClass} theme-transition animate-fade-in`} style={{ animationDelay: "100ms" }}>
          <CardContent className="p-6">
            <h2 className={`text-2xl mb-4 flex items-center ${headingClass}`}>
              <Calendar className="mr-2" /> Schedule
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className={`text-xl ${headingClass}`}>3:00 PM - Ceremony</h3>
                  <p>Join us as we exchange vows</p>
                </div>
              </div>
              <div className="flex items-start">
                <Utensils className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className={`text-xl ${headingClass}`}>5:00 PM - Reception</h3>
                  <p>Dinner, dancing and celebration</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accommodations */}
        <Card className={`${cardClass} theme-transition animate-fade-in`} style={{ animationDelay: "200ms" }}>
          <CardContent className="p-6">
            <h2 className={`text-2xl mb-4 flex items-center ${headingClass}`}>
              <Hotel className="mr-2" /> Accommodations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-xl ${headingClass}`}>Luxury Hotel</h3>
                <p>Just 5 minutes from the venue</p>
                <p className="text-sm mt-1 opacity-75">Special rate for wedding guests</p>
              </div>
              <div>
                <h3 className={`text-xl ${headingClass}`}>Comfort Inn</h3>
                <p>15 minutes from the venue</p>
                <p className="text-sm mt-1 opacity-75">Budget-friendly option</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation */}
        <Card className={`${cardClass} theme-transition animate-fade-in`} style={{ animationDelay: "300ms" }}>
          <CardContent className="p-6">
            <h2 className={`text-2xl mb-4 flex items-center ${headingClass}`}>
              <Car className="mr-2" /> Transportation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-xl ${headingClass}`}>Shuttle Service</h3>
                <p>Available from the recommended hotels</p>
              </div>
              <div>
                <h3 className={`text-xl ${headingClass}`}>Parking</h3>
                <p>Complimentary valet parking at the venue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemedLayout>
  );
};

export default Venue;
