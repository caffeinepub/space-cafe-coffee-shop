import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const galleryImages = [
  { src: '/assets/generated/latte-art.dim_800x600.png', alt: 'Latte Art' },
  { src: '/assets/generated/matcha-latte.dim_800x600.png', alt: 'Matcha Latte' },
  { src: '/assets/generated/chocolate-cake.dim_800x600.png', alt: 'Chocolate Cake' },
  { src: '/assets/generated/zafaran-cake.dim_800x600.png', alt: 'Zafaran Cake' },
  { src: '/assets/generated/oreo-truffles.dim_800x600.png', alt: 'Oreo Truffles' },
  { src: '/assets/generated/turkey-sandwich.dim_800x600.png', alt: 'Turkey Sandwich' },
  { src: '/assets/generated/cozy-seating.dim_800x600.png', alt: 'Cozy Seating' },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cosmic-brown mb-4">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-cosmic-gold mx-auto rounded-full mb-6" />
            <p className="text-xl text-cosmic-purple italic font-medium">
              Cozy corners, delightful flavors.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/80 via-cosmic-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-cosmic-cream font-semibold text-lg">{image.alt}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Bottom Caption */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground italic">
              Where every sip and bite feels special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
