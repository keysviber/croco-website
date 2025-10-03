import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import heroImage from '@assets/generated_images/Modern_luxury_kitchen_hero_e80a87e5.png';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/263787857577?text=Hello, I\'m interested in your premium interior design services.', '_blank');
    console.log('WhatsApp hero clicked');
  };

  const handleCall = () => {
    window.open('tel:+263787857577', '_self');
    console.log('Call clicked');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6" data-testid="hero-title">
          Crafting Premium
          <span className="block text-primary-foreground">European Interiors</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200" data-testid="hero-subtitle">
          Transform your space with our bespoke interior designs, luxury kitchens, office furniture, and custom solutions. 
          Where European elegance meets exceptional craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            data-testid="button-hero-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </Button>
          
          <Button 
            onClick={handleCall}
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            data-testid="button-hero-call"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;