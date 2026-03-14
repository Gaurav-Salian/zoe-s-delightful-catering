import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

const SectionHeader = ({ title, highlight, subtitle }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
      {title}{" "}
      {highlight && <span className="text-primary">{highlight}</span>}
    </h2>
    {subtitle && (
      <p className="font-body text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
    )}
    <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
  </motion.div>
);

export default SectionHeader;
