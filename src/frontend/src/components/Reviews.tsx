import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    text: 'The chocolate cake was amazing, and the iced latte was so good!',
    author: 'Mohamad C.',
  },
  {
    text: 'Superb coffee and superb hospitality. Cozy & comfortable.',
    author: 'Minhaj S.',
  },
  {
    text: 'Nice place, good vibes, and beautiful atmosphere.',
    author: 'Mim J.',
  },
  {
    text: 'In love with their Oreo truffles and matcha drinks.',
    author: 'Dhari B.',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-cosmic-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cosmic-brown mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-cosmic-gold mx-auto rounded-full" />
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-cosmic-gold/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cosmic-gold text-cosmic-gold" />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-lg text-foreground/90 mb-4 italic">
                    "{review.text}"
                  </p>
                  {/* Author */}
                  <p className="text-cosmic-brown font-semibold">
                    – {review.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-cosmic-purple hover:bg-cosmic-purple-dark text-cosmic-cream font-semibold px-8 py-6 text-lg rounded-full shadow-cosmic transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              See More Reviews on Google
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
