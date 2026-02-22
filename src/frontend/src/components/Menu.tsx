import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Cake } from 'lucide-react';

const coffeeItems = [
  { name: 'Americano', description: 'Classic & smooth' },
  { name: 'Flat White', description: 'Nutty and creamy' },
  { name: 'Iced Latte', description: 'Refreshing & flavorful' },
  { name: 'Matcha Latte', description: 'Unique and vibrant' },
  { name: 'Cappuccino with Almond Milk', description: 'Deliciously dairy-free' },
];

const dessertItems = [
  { name: 'Chocolate Cake', description: 'Customer favorite' },
  { name: 'Zafaran Cake', description: 'Delightful & fragrant' },
  { name: 'Oreo Truffles', description: 'Must-try indulgence' },
  { name: 'Turkey Sandwich', description: 'Perfect savory bite' },
];

export default function Menu() {
  return (
    <section className="py-20 bg-cosmic-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cosmic-brown mb-4">
              Menu Highlights
            </h2>
            <div className="w-24 h-1 bg-cosmic-gold mx-auto rounded-full" />
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Coffee & Drinks */}
            <Card className="border-2 border-cosmic-brown/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-cosmic-brown/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-cosmic-gold/20 rounded-full flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-cosmic-gold" />
                  </div>
                  <CardTitle className="text-2xl font-display text-cosmic-brown">Coffee & Drinks</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {coffeeItems.map((item, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="font-semibold text-lg text-cosmic-brown">{item.name}</span>
                      <span className="text-muted-foreground italic">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Desserts & Snacks */}
            <Card className="border-2 border-cosmic-brown/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-cosmic-brown/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-cosmic-gold/20 rounded-full flex items-center justify-center">
                    <Cake className="w-6 h-6 text-cosmic-gold" />
                  </div>
                  <CardTitle className="text-2xl font-display text-cosmic-brown">Desserts & Snacks</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {dessertItems.map((item, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="font-semibold text-lg text-cosmic-brown">{item.name}</span>
                      <span className="text-muted-foreground italic">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Special Note */}
          <div className="bg-cosmic-purple text-cosmic-cream rounded-2xl p-6 text-center shadow-cosmic">
            <p className="text-lg font-medium">
              ✨ Ask about our seasonal and healthy options! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
