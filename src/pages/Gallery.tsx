
import ThemedLayout from "@/components/layout/ThemedLayout";
import { useTheme } from "@/context/ThemeContext";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const { theme } = useTheme();
  const headingClass = theme === 'bride' ? 'bride-heading' : 'groom-heading';

  // Different images for bride and groom themes
  const images = theme === 'bride' 
    ? [
        { id: 1, url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", alt: "Flowers" },
        { id: 2, url: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151", alt: "Desert" },
        { id: 3, url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", alt: "Flowers" },
        { id: 4, url: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151", alt: "Desert" },
        { id: 5, url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", alt: "Flowers" },
        { id: 6, url: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151", alt: "Desert" },
      ]
    : [
        { id: 1, url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", alt: "Night Sky" },
        { id: 2, url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", alt: "Modern Interior" },
        { id: 3, url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", alt: "Night Sky" },
        { id: 4, url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", alt: "Modern Interior" },
        { id: 5, url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", alt: "Night Sky" },
        { id: 6, url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", alt: "Modern Interior" },
      ];

  return (
    <ThemedLayout>
      <div className="text-center mb-12">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${headingClass} animate-fade-in`}>
          Our Gallery
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 animate-slide-up">
          {theme === 'bride'
            ? "A collection of our most cherished memories, captured in warm tones and timeless moments."
            : "A showcase of our journey together, framed in sleek and modern aesthetics."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {images.map((image, index) => (
          <Card 
            key={image.id} 
            className={`overflow-hidden theme-transition ${
              theme === 'bride' 
                ? 'border-bride-border hover:shadow-md' 
                : 'bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30'
            }`}
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
    </ThemedLayout>
  );
};

export default Gallery;
