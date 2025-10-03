import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`Form field ${name} updated`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        console.error('Form submission error:', result);
        toast({
          title: "Submission Failed",
          description: result.details || result.message || "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Network error:', error);
      toast({
        title: "Connection Error",
        description: "Unable to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/263787857577?text=Hello, I\'d like to discuss an interior design project.', '_blank');
    console.log('WhatsApp contact clicked');
  };

  const handleCall = () => {
    window.open('tel:+263787857577', '_self');
    console.log('Call contact clicked');
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
            Ready to transform your space? Let's discuss your dream interior project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle data-testid="contact-form-title">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-9 px-3 rounded-md border border-input bg-background text-foreground"
                        data-testid="select-service"
                      >
                        <option value="">Select a service</option>
                        <option value="kitchen">Custom Kitchen</option>
                        <option value="office">Office Furniture</option>
                        <option value="bar">Home Bar</option>
                        <option value="cellar">Wine Cellar</option>
                        <option value="cupboards">Built-in Cupboards</option>
                        <option value="consultation">Design Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your project..."
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90" 
                    data-testid="button-submit-form"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Quick Contact */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-primary-foreground" data-testid="quick-contact-title">
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleWhatsApp}
                  variant="secondary"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  data-testid="button-contact-whatsapp"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp: +263787857577
                </Button>
                <Button 
                  onClick={handleCall}
                  variant="secondary"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  data-testid="button-contact-call"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +263787857577
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle data-testid="contact-details-title">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3" data-testid="contact-phone">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+263787857577</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3" data-testid="contact-email">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@crocointeriors.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3" data-testid="contact-location">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Zimbabwe</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3" data-testid="contact-hours">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;