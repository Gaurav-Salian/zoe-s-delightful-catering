import { motion } from "framer-motion";
import { UtensilsCrossed, ChefHat, Wine, CalendarDays, Mic2, Music, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  { icon: UtensilsCrossed, title: "Menu Card", description: "Customized multi-cuisine menus tailored to your event and preferences." },
  { icon: ChefHat, title: "Live Kitchen", description: "Interactive cooking stations where guests enjoy freshly prepared dishes." },
  { icon: Wine, title: "Drinks & Beverages", description: "Curated beverage service from refreshing mocktails to traditional drinks." },
  { icon: CalendarDays, title: "Catering Services", description: "Complete catering solutions for events of any size and style." },
  { icon: CalendarDays, title: "Event Management", description: "End-to-end event planning and coordination for flawless execution." },
  { icon: Mic2, title: "MC Services", description: "Professional emcees to host and energize your celebrations." },
  { icon: Music, title: "DJ", description: "Expert DJs with premium sound to keep your guests entertained all night." },
  { icon: Lightbulb, title: "Lights & Sound", description: "Professional lighting and sound systems to set the perfect ambiance." },
];

const ServicesGrid = () => {
  return (
    <section className="section-padding cream-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Everything you need for a memorable event, all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card border border-border p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] cursor-default"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
