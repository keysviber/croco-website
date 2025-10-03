import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import kitchenImage from '@assets/generated_images/Modern_luxury_kitchen_hero_e80a87e5.png';
import barImage from '@assets/generated_images/Custom_home_bar_design_d421d521.png';
import cellarImage from '@assets/generated_images/Luxury_wine_cellar_storage_1f1c0d46.png';
import cupboardImage from '@assets/generated_images/Built-in_cupboards_storage_0904f4db.png';
import officeImage from '@assets/generated_images/Office_furniture_complete_setup_bf06b14a.png';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Custom European Kitchens',
      description: 'Bespoke kitchen designs with contemporary Italian influences, premium materials, and functional elegance.',
      image: kitchenImage,
      features: ['Premium Materials', 'Custom Design', 'European Style']
    },
    {
      id: 2,
      title: 'Office Furniture',
      description: 'Professional office setups with executive desks, conference tables, and complete workspace solutions.',
      image: officeImage,
      features: ['Executive Furniture', 'Complete Setup', 'Professional Design']
    },
    {
      id: 3,
      title: 'Luxury Home Bars',
      description: 'Sophisticated entertainment spaces with premium wood cabinetry, brass accents, and elegant storage.',
      image: barImage,
      features: ['Wine Storage', 'Premium Finishes', 'Entertainment Ready']
    },
    {
      id: 4,
      title: 'Wine Cellars',
      description: 'Temperature-controlled luxury wine storage solutions with wooden racks and ambient lighting.',
      image: cellarImage,
      features: ['Climate Control', 'Custom Racking', 'Luxury Storage']
    },
    {
      id: 5,
      title: 'Built-in Cupboards',
      description: 'Custom storage solutions with clean lines, premium finishes, and organized functionality.',
      image: cupboardImage,
      features: ['Custom Storage', 'Clean Design', 'Space Optimization']
    }
  ];

  const handleServiceInquiry = (serviceName: string) => {
    window.open(`https://wa.me/263787857577?text=Hi, I'm interested in your ${serviceName} services. Could you provide more information?`, '_blank');
    console.log(`Service inquiry: ${serviceName}`);
  };

  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="services-title">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-subtitle">
            From concept to completion, we deliver exceptional craftsmanship and timeless design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group hover-elevate overflow-hidden"
              data-testid={`service-card-${service.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`service-image-${service.id}`}
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`service-title-${service.id}`}>
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      data-testid={`service-feature-${service.id}-${index}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button 
                  onClick={() => handleServiceInquiry(service.title)}
                  className="w-full bg-primary hover:bg-primary/90"
                  data-testid={`button-service-inquiry-${service.id}`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;