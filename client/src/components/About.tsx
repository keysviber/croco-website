import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, Wrench } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Wrench, label: 'Projects Completed', value: '1000+' },
  ];

  const features = [
    'European Design Standards',
    'Premium Material Selection',
    'Expert Craftsmanship',
    'Complete Project Management',
    'Warranty & Support',
    'Custom Solutions'
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6" data-testid="about-title">
              Crafting Excellence Since 2020
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6" data-testid="about-description">
              At Croco Interiors, we specialize in creating bespoke European-style interiors, luxury kitchens, 
              office furniture, home bars, and custom storage solutions. Our architectural approach combines sophisticated design with 
              exceptional functionality, delivering spaces that inspire and endure.
            </p>

            <p className="text-muted-foreground mb-8" data-testid="about-philosophy">
              Founded by experienced designers, we bring together contemporary Italian influences with 
              local craftsmanship, ensuring every project meets the highest standards of quality and style. 
              From premium materials to precision installation, we handle every detail with care.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center" data-testid={`about-feature-${index}`}>
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-elevate" data-testid={`about-stat-${index}`}>
                <CardContent className="flex items-center p-6">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-primary-foreground hover-elevate" data-testid="about-cta-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Space?</h3>
                <p className="text-primary-foreground/90">
                  Let's discuss your dream interior project today
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;