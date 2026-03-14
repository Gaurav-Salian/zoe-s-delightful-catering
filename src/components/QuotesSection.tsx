import { motion } from "framer-motion";
import hero2 from "@/assets/hero-2.jpg";

const quotes = [
  "Good food is the foundation of genuine happiness.",
  "Where there is good food, there is great celebration.",
  "Food tastes better when shared.",
  "Every event deserves unforgettable flavors.",
];

const QuotesSection = () => {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${hero2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-secondary/70" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quotes.map((quote, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-xl md:text-2xl italic text-secondary-foreground/90 leading-relaxed">
                "{quote}"
              </p>
              <div className="w-12 h-0.5 bg-primary mt-4 mx-auto md:mx-0" />
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
