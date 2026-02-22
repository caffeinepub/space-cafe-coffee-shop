import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Phone, Mail, Navigation, MessageSquare, ParkingCircle } from 'lucide-react';
import { SiFacebook, SiInstagram, SiTiktok } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cosmic-brown mb-4">
              Contact & Location
            </h2>
            <div className="w-24 h-1 bg-cosmic-gold mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-cosmic-brown/20 shadow-lg">
                <CardHeader className="bg-cosmic-brown/5">
                  <CardTitle className="text-2xl font-display text-cosmic-brown">Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cosmic-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-cosmic-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-cosmic-brown mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Salhiya st, block 11, building 11, shop 4<br />
                        Kuwait
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cosmic-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-cosmic-gold" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-semibold text-lg text-cosmic-brown mb-2">Hours</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>7 AM–10 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monday</span>
                          <span>7 AM–10 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tuesday</span>
                          <span>7 AM–10 PM</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex justify-between">
                            <span>Wednesday</span>
                            <span>7 AM–10 PM</span>
                          </div>
                          <span className="text-xs text-cosmic-gold italic">(Kuwait National Day - Hours might differ)</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex justify-between">
                            <span>Thursday</span>
                            <span>7 AM–10 PM</span>
                          </div>
                          <span className="text-xs text-cosmic-gold italic">(Kuwait Liberation Day - Hours might differ)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday</span>
                          <span>10 AM–10 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>10 AM–10 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cosmic-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cosmic-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-cosmic-brown mb-1">Phone</h3>
                      <p className="text-muted-foreground">+965 66339592</p>
                    </div>
                  </div>

                  {/* Parking */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cosmic-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <ParkingCircle className="w-6 h-6 text-cosmic-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-cosmic-brown mb-1">Parking</h3>
                      <p className="text-muted-foreground">Best parking at Baladiya lot across the street.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-2 border-cosmic-brown/20 shadow-lg">
                <CardHeader className="bg-cosmic-brown/5">
                  <CardTitle className="text-2xl font-display text-cosmic-brown">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex gap-4 justify-center">
                    <a
                      href="#"
                      className="w-14 h-14 bg-cosmic-purple hover:bg-cosmic-purple-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                      aria-label="Instagram"
                    >
                      <SiInstagram className="w-6 h-6 text-cosmic-cream" />
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 bg-cosmic-purple hover:bg-cosmic-purple-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                      aria-label="Facebook"
                    >
                      <SiFacebook className="w-6 h-6 text-cosmic-cream" />
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 bg-cosmic-purple hover:bg-cosmic-purple-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                      aria-label="TikTok"
                    >
                      <SiTiktok className="w-6 h-6 text-cosmic-cream" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-cosmic-gold hover:bg-cosmic-gold-dark text-cosmic-dark font-semibold rounded-full shadow-cosmic transition-all duration-300 hover:scale-105"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-cosmic-cream font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message Us
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-cosmic-brown/20 shadow-lg">
              <CardHeader className="bg-cosmic-brown/5">
                <CardTitle className="text-2xl font-display text-cosmic-brown">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-cosmic-brown font-semibold">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-cosmic-brown/30 focus:border-cosmic-gold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cosmic-brown font-semibold">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-cosmic-brown/30 focus:border-cosmic-gold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-cosmic-brown font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what's on your mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-cosmic-brown/30 focus:border-cosmic-gold min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-cosmic-purple hover:bg-cosmic-purple-dark text-cosmic-cream font-semibold rounded-full shadow-cosmic transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
