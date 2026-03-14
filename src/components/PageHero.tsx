import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section
    className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: `url(${hero1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-secondary/60" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 text-center px-4"
    >
      <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="font-body text-lg text-primary-foreground/80">{subtitle}</p>
      )}
    </motion.div>
  </section>
);

export default PageHero;
