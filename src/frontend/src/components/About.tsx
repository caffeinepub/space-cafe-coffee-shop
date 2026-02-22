import { Coffee, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cosmic-brown mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-cosmic-gold mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
              At Space Cafe, we believe coffee is more than a drink – it's an experience. From rich espresso and creamy cappuccinos to unique iced lattes and specialty drinks, our menu is designed to delight every taste.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
              Enjoy our freshly baked chocolate cake, savory sandwiches, and healthy drink options while soaking in a cozy, stylish atmosphere perfect for work, hangouts, or a quiet coffee break.
            </p>

            {/* Promise Statement */}
            <div className="bg-cosmic-purple/10 border-2 border-cosmic-purple/30 rounded-2xl p-8 mt-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-cosmic-gold fill-cosmic-gold" />
                <h3 className="text-2xl font-display font-bold text-cosmic-brown">Our Promise</h3>
                <Heart className="w-6 h-6 text-cosmic-gold fill-cosmic-gold" />
              </div>
              <p className="text-xl text-center font-medium text-cosmic-purple">
                Quality, comfort, and a welcoming vibe for everyone.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-cosmic-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <Coffee className="w-8 h-8 text-cosmic-gold" />
                </div>
                <h4 className="font-semibold text-lg text-cosmic-brown">Handcrafted</h4>
                <p className="text-muted-foreground">Every drink made with care</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-cosmic-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-cosmic-gold" />
                </div>
                <h4 className="font-semibold text-lg text-cosmic-brown">Quality First</h4>
                <p className="text-muted-foreground">Premium ingredients always</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-cosmic-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-cosmic-gold" />
                </div>
                <h4 className="font-semibold text-lg text-cosmic-brown">Community</h4>
                <p className="text-muted-foreground">A space for everyone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
