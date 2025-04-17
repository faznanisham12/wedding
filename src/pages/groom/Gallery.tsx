
import GroomLayout from "@/components/layout/GroomLayout";
import { Card, CardContent } from "@/components/ui/card";

const GroomGallery = () => {
  // Images specific to groom's theme
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", alt: "Night Skyline" },
    { id: 2, url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8", alt: "Modern Architecture" },
    { id: 3, url: "https://images.unsplash.com/photo-1551033406-611cf9a28f67", alt: "Urban Landscape" },
    { id: 4, url: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af", alt: "Contemporary Interior" },
    { id: 5, url: "https://images.unsplash.com/photo-1566073771259-6a8506099945", alt: "City Lights" },
    { id: 6, url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0", alt: "Modern Dining" },
  ];

  return (
    <GroomLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 groom-heading animate-fade-in">
          Our Urban Story
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 animate-slide-up">
          A showcase of our journey together, framed in sleek and modern aesthetics against the backdrop of city life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {images.map((image, index) => (
          <Card 
            key={image.id} 
            className="overflow-hidden theme-transition bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30"
          >
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </GroomLayout>
  );
};

export default GroomGallery;
