import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/263787857577?text=Hello! I\'m interested in your interior design services. Could we discuss my project?', '_blank');
    console.log('Floating WhatsApp clicked');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="rounded-full 
                   bg-green-400/20 
                   backdrop-blur-md 
                   border border-green-400/30 
                   text-green-700 
                   dark:text-green-300
                   shadow-lg 
                   hover:shadow-xl 
                   hover:bg-green-400/30
                   hover:border-green-400/50
                   hover:scale-105
                   active:scale-95
                   transition-all 
                   duration-500 
                   ease-out
                   hover:backdrop-blur-lg
                   group
                   relative
                   overflow-hidden"
        data-testid="floating-whatsapp"
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Liquid animation background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-green-500/10 animate-pulse group-hover:animate-none"></div>
        
        <MessageCircle className="w-6 h-6 relative z-10 drop-shadow-sm" />
        <span className="hidden sm:inline ml-2 relative z-10 font-medium drop-shadow-sm">WhatsApp</span>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;