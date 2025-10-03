import { MessageCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/263787857577?text=Hello, I\'m interested in your interior design services.', '_blank');
    console.log('Footer WhatsApp clicked');
  };

  const handleCall = () => {
    window.open('tel:+263787857577', '_self');
    console.log('Footer call clicked');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4" data-testid="footer-logo">
              Croco Interiors
            </h3>
            <p className="text-background/80 mb-4" data-testid="footer-description">
              Crafting premium European-style interiors, luxury kitchens, office furniture, home bars, and custom storage solutions 
              with exceptional craftsmanship and timeless design.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsApp}
                className="bg-primary p-2 rounded-full hover:bg-primary/90 transition-colors"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </button>
              <button 
                onClick={handleCall}
                className="bg-background/20 p-2 rounded-full hover:bg-background/30 transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="w-5 h-5" />
              </button>
              <a 
                href="mailto:info@crocokitchens.com"
                className="bg-background/20 p-2 rounded-full hover:bg-background/30 transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-title">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-kitchens">Custom Kitchens</a></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-bars">Luxury Bars</a></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-cellars">Wine Cellars</a></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-cupboards">Built-in Cupboards</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-consultation">Design Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center" data-testid="footer-contact-phone">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <span className="text-background/80">+263787857577</span>
              </div>
              <div className="flex items-center" data-testid="footer-contact-email">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span className="text-background/80">info@crocointeriors.com</span>
              </div>
              <div className="flex items-center" data-testid="footer-contact-whatsapp">
                <MessageCircle className="w-4 h-4 mr-3 text-primary" />
                <span className="text-background/80">WhatsApp Available</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Business Hours</h5>
              <p className="text-background/80 text-sm" data-testid="footer-hours">
                Mon-Fri: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60" data-testid="footer-copyright">
            © {currentYear} Croco Interiors. All rights reserved. | Premium Interior Design & Installation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;