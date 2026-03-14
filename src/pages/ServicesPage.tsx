import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const servicesList = [
  {
    title: "Wedding Catering",
    description: "Make your special day truly unforgettable with our exquisite wedding catering services. From lavish multi-course meals to elegant buffet setups, we handle every culinary detail with perfection.",
    image: hero1,
  },
  {
    title: "Corporate Catering",
    description: "Impress your clients and colleagues with our professional corporate catering. We offer everything from working lunches to grand gala dinners, tailored to your business needs.",
    image: hero2,
  },
  {
    title: "Birthday Party Catering",
    description: "Celebrate milestones with delicious food that delights guests of all ages. Custom menus, themed setups, and joyful presentation make every birthday special.",
    image: gallery4,
  },
  {
    title: "Live Food Counters",
    description: "Interactive live cooking stations where our chefs prepare dishes right before your guests. From pasta to dosa, chaat to grills — a theatrical dining experience.",
    image: gallery7,
  },
  {
    title: "Event Management",
    description: "Complete end-to-end event planning and coordination. We manage venue setup, decoration, timeline coordination, and ensure every detail runs flawlessly.",
    image: hero3,
  },
  {
    title: "Entertainment Services",
    description: "MC hosting, professional DJ services, and premium lights & sound equipment to keep your guests entertained throughout the event with the perfect ambiance.",
    image: gallery6,
  },
];

const ServicesPage = () => {
  return (
    <>
      <PageHero title="Our Services" subtitle="Comprehensive solutions for every event" />
      <section className="section-padding cream-bg">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="What We"
            highlight="Offer"
            subtitle="Every detail handled with care and expertise"
          />

          <div className="space-y-16">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-primary mb-4" />
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
