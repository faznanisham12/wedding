
import BrideLayout from "@/components/layout/BrideLayout";
import { Card, CardContent } from "@/components/ui/card";

const BrideGallery = () => {
  // Images specific to bride's theme
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", alt: "Wildflowers" },
    { id: 2, url: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151", alt: "Natural landscape" },
    { id: 3, url: "https://images.unsplash.com/photo-1510566337590-2fc1f9ffd002", alt: "Rustic venue" },
    { id: 4, url: "https://images.unsplash.com/photo-1529636798458-92182e662485", alt: "Vintage decor" },
    { id: 5, url: "https://images.unsplash.com/photo-1477239439998-839196943351", alt: "Garden setting" },
    { id: 6, url: "https://images.unsplash.com/photo-1507836091782-0b1e8d1f1cfd", alt: "Rustic table setting" },
  ];

  return (
    <BrideLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bride-heading animate-fade-in">
          Our Rustic Romance
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 animate-slide-up">
          A collection of our most cherished memories, captured in warm tones and timeless moments against natural backdrops.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {images.map((image, index) => (
          <Card 
            key={image.id} 
            className="overflow-hidden theme-transition border-bride-border hover:shadow-md"
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
    </BrideLayout>
  );
};

export default BrideGallery;
