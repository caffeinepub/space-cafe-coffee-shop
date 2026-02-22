import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.png"
          alt="Space Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/80 via-cosmic-dark/60 to-cosmic-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Headline with Sparkles */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-8 h-8 text-cosmic-gold animate-pulse" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cosmic-cream">
              Space Cafe Coffee Shop
            </h1>
            <Sparkles className="w-8 h-8 text-cosmic-gold animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-cosmic-purple-light font-medium">
            Your Cosmic Coffee Escape
          </p>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cosmic-cream/90 max-w-2xl mx-auto leading-relaxed">
            Cozy vibes, handcrafted coffee, and delicious treats that make every visit unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-cosmic-gold hover:bg-cosmic-gold-dark text-cosmic-dark font-semibold px-8 py-6 text-lg rounded-full shadow-cosmic transition-all duration-300 hover:scale-105"
            >
              Visit Us Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cosmic-cream text-cosmic-cream hover:bg-cosmic-cream hover:text-cosmic-dark font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Order Online
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="oklch(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
