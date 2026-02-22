import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'space-cafe';

  return (
    <footer className="bg-cosmic-dark text-cosmic-cream py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Newsletter Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Stay Connected & Enjoy Cosmic Coffee!
            </h2>
            <p className="text-lg text-cosmic-cream/80 mb-8">
              Subscribe for updates, seasonal drinks, and special treats.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-cosmic-cream/10 border-cosmic-cream/30 text-cosmic-cream placeholder:text-cosmic-cream/50 focus:border-cosmic-gold"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-cosmic-gold hover:bg-cosmic-gold-dark text-cosmic-dark font-semibold rounded-full shadow-cosmic transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe Now
                </Button>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className="border-t border-cosmic-cream/20 my-8" />

          {/* Attribution */}
          <div className="text-center space-y-4">
            <p className="text-cosmic-cream/70">
              © {new Date().getFullYear()} Space Cafe Coffee Shop. All rights reserved.
            </p>
            <p className="text-cosmic-cream/70 flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-cosmic-gold fill-cosmic-gold" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmic-gold hover:text-cosmic-gold-dark underline transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
