import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

interface MenuItem {
  name: string;
  description: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Starters",
    items: [
      { name: "Paneer Tikka", description: "Marinated cottage cheese grilled to perfection" },
      { name: "Chicken Lollipop", description: "Crispy fried chicken drumettes with spicy glaze" },
      { name: "Veg Spring Rolls", description: "Crispy rolls filled with seasoned vegetables" },
      { name: "Fish Fry", description: "Mangalorean-style masala fish fry" },
      { name: "Gobi Manchurian", description: "Indo-Chinese crispy cauliflower bites" },
    ],
  },
  {
    title: "Main Course",
    items: [
      { name: "Butter Chicken", description: "Tender chicken in rich tomato cream sauce" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in silky makhani gravy" },
      { name: "Mutton Biryani", description: "Fragrant basmati rice layered with spiced mutton" },
      { name: "Dal Makhani", description: "Slow-cooked black lentils with cream and butter" },
      { name: "Veg Pulao", description: "Aromatic rice with garden fresh vegetables" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Gulab Jamun", description: "Soft milk dumplings in rose-flavored syrup" },
      { name: "Rasmalai", description: "Delicate cottage cheese patties in saffron milk" },
      { name: "Ice Cream Selection", description: "Assorted premium ice cream flavors" },
      { name: "Fruit Custard", description: "Creamy custard with fresh seasonal fruits" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Fresh Lime Soda", description: "Refreshing lime with soda water" },
      { name: "Masala Chai", description: "Traditional spiced Indian tea" },
      { name: "Mango Lassi", description: "Creamy yogurt smoothie with Alphonso mango" },
      { name: "Buttermilk", description: "Cool spiced buttermilk with fresh herbs" },
    ],
  },
];

const MenuPage = () => {
  return (
    <>
      <PageHero title="Our Menu" subtitle="Crafted with passion, served with love" />
      <section className="section-padding cream-bg">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader title="Sample" highlight="Menu" subtitle="Our menus are fully customizable for your event" />

          <div className="space-y-12">
            {menuData.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-primary" />
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-card border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                    >
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        {item.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
