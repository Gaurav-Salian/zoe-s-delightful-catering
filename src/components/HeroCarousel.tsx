import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    headline: "Delicious Food, Perfect Events",
    subtext: "Premium catering services for weddings, parties, and special occasions.",
  },
  {
    image: hero2,
    headline: "A Feast for Every Celebration",
    subtext: "From intimate gatherings to grand receptions, we create culinary experiences.",
  },
  {
    image: hero3,
    headline: "Live Kitchen Excellence",
    subtext: "Watch our chefs craft exquisite dishes right before your eyes.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
              {slides[current].headline}
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {slides[current].subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                View Menu
              </Link>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 border border-primary-foreground/50 text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-8 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
