import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import kitchenImage from '@assets/generated_images/Modern_luxury_kitchen_hero_e80a87e5.png';
import barImage from '@assets/generated_images/Custom_home_bar_design_d421d521.png';
import cellarImage from '@assets/generated_images/Luxury_wine_cellar_storage_1f1c0d46.png';
import cupboardImage from '@assets/generated_images/Built-in_cupboards_storage_0904f4db.png';
import officeImage from '@assets/generated_images/Office_furniture_complete_setup_bf06b14a.png';
import panoramicInterior from '@assets/generated_images/Panoramic_luxury_interior_unit_421b5a41.png';
import panoramicBar from '@assets/generated_images/Panoramic_bar_entertainment_unit_012d53b1.png';
import tvStandImage from '@assets/generated_images/Modern_matte_black_TV_stand_8448dfaf.png';
import floatingTvImage from '@assets/generated_images/Floating_matte_black_TV_unit_071fe73c.png';
import ceilingDesignImage from '@assets/generated_images/Modern_ceiling_design_patterns_8a9f44de.png';
import bathroomImage from '@assets/generated_images/Luxury_bathroom_interior_design_eec8a928.png';
import bedroomImage from '@assets/generated_images/Modern_bedroom_interior_design_7623670a.png';
import starryCeilingImage from '@assets/20250725_142028_1758622684025.jpg';
import tvWallUnitImage from '@assets/20250726_181522_1758622684197.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const galleryImages = [
    { id: 1, src: kitchenImage, alt: 'Modern Kitchen Design', category: 'Kitchen' },
    { id: 2, src: officeImage, alt: 'Executive Office Setup', category: 'Office' },
    { id: 3, src: barImage, alt: 'Custom Home Bar', category: 'Bar' },
    { id: 4, src: cellarImage, alt: 'Wine Cellar Storage', category: 'Cellar' },
    { id: 5, src: cupboardImage, alt: 'Built-in Cupboards', category: 'Storage' },
    { id: 6, src: tvStandImage, alt: 'Modern Matte Black TV Stand', category: 'TV Units' },
    { id: 7, src: floatingTvImage, alt: 'Floating Matte Black TV Unit', category: 'TV Units' },
    { id: 8, src: tvWallUnitImage, alt: 'Custom TV Wall Mount Unit', category: 'TV Units' },
    { id: 9, src: starryCeilingImage, alt: 'Starry LED Ceiling Design', category: 'Ceilings' },
    { id: 10, src: ceilingDesignImage, alt: 'Modern Ceiling Patterns', category: 'Ceilings' },
    { id: 11, src: bathroomImage, alt: 'Luxury Bathroom Interior', category: 'Bathroom' },
    { id: 12, src: bedroomImage, alt: 'Modern Bedroom Design', category: 'Bedroom' },
    { id: 13, src: kitchenImage, alt: 'Contemporary Kitchen', category: 'Kitchen' },
    { id: 14, src: officeImage, alt: 'Professional Workspace', category: 'Office' },
    { id: 15, src: barImage, alt: 'Luxury Bar Design', category: 'Bar' },
    { id: 16, src: cupboardImage, alt: 'Custom Storage Solutions', category: 'Storage' },
  ];

  // Paramount pictures - panoramic showcase with slow sliding
  const panoramicImages = [
    { id: 1, src: panoramicInterior, alt: 'Complete Luxury Interior Unit', category: 'Full Interior' },
    { id: 2, src: panoramicBar, alt: 'Complete Bar Entertainment Unit', category: 'Entertainment Unit' },
    { id: 3, src: kitchenImage, alt: 'Complete Kitchen Living Unit', category: 'Kitchen Unit' },
  ];

  // Auto-slide for panoramic showcase
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % panoramicImages.length);
    }, 4000); // Slow slide - 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying, panoramicImages.length]);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    console.log(`Gallery image ${imageId} opened`);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    console.log('Gallery lightbox closed');
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
    console.log(`Navigated to image ${galleryImages[newIndex].id}`);
  };

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage !== null) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    console.log(`Manual slide to ${index}`);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log(`Slideshow ${isPlaying ? 'paused' : 'playing'}`);
  };

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <>
      <section id="gallery" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="gallery-title">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="gallery-subtitle">
              Explore our collection of premium interior designs, luxury kitchens, modern TV units, ceiling designs, office furniture, and custom solutions
            </p>
          </div>

          {/* Paramount Pictures - Panoramic Showcase */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-center mb-8" data-testid="paramount-title">
              Complete Interior Units
            </h3>
            
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {panoramicImages.map((image, index) => (
                  <div key={image.id} className="w-full h-full flex-shrink-0 relative">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      data-testid={`panoramic-image-${index}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-8 left-8">
                        <h4 className="text-2xl font-bold text-white mb-2">{image.alt}</h4>
                        <p className="text-white/80">{image.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={togglePlayPause}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  data-testid="button-play-pause"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {panoramicImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    data-testid={`slide-indicator-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Regular Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden cursor-pointer hover-elevate"
                onClick={() => openLightbox(image.id)}
                data-testid={`gallery-item-${image.id}`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    data-testid={`gallery-image-${image.id}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" 
          data-testid="gallery-lightbox"
          onClick={(e) => {
            // Close when clicking on backdrop
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm rounded-full z-60"
            onClick={closeLightbox}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm rounded-full z-60"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            data-testid="button-prev-image"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm rounded-full z-60"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            data-testid="button-next-image"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh] mx-4 relative">
            <img 
              src={selectedImageData.src} 
              alt={selectedImageData.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              data-testid="lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedImageData.alt}</h3>
              <p className="text-white/70">{selectedImageData.category}</p>
              <p className="text-white/50 text-sm mt-2">{galleryImages.findIndex(img => img.id === selectedImage) + 1} of {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;