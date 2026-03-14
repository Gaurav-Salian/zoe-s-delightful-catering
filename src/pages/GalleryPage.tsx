import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const images = [
  { src: hero1, alt: "Wedding Reception Setup", category: "Events" },
  { src: gallery1, alt: "Wedding Cake", category: "Desserts" },
  { src: gallery2, alt: "Buffet Arrangement", category: "Catering" },
  { src: hero2, alt: "Indian Cuisine Spread", category: "Food" },
  { src: gallery3, alt: "Appetizers", category: "Starters" },
  { src: gallery4, alt: "Outdoor Wedding", category: "Events" },
  { src: gallery5, alt: "Dessert Display", category: "Desserts" },
  { src: hero3, alt: "Live Kitchen", category: "Live Cooking" },
  { src: gallery6, alt: "DJ Setup", category: "Entertainment" },
  { src: gallery7, alt: "Live Cooking Station", category: "Live Cooking" },
  { src: gallery8, alt: "Beverages", category: "Drinks" },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <PageHero title="Gallery" subtitle="A glimpse into our culinary world" />
      <section className="section-padding cream-bg">
        <div className="container mx-auto">
          <SectionHeader title="Our" highlight="Portfolio" subtitle="Moments captured from our events" />

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedImage(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-body text-sm font-medium text-secondary-foreground">{img.alt}</p>
                    <p className="font-body text-xs text-primary">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;
