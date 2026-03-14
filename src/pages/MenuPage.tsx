import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Image imports
import paneerTikkaImg from "@/assets/menu/paneer-tikka.jpg";
import chickenLollipopImg from "@/assets/menu/chicken-lollipop.jpg";
import vegSpringRollsImg from "@/assets/menu/veg-spring-rolls.jpg";
import fishFryImg from "@/assets/menu/fish-fry.jpg";
import gobiManchurianImg from "@/assets/menu/gobi-manchurian.jpg";
import butterChickenImg from "@/assets/menu/butter-chicken.jpg";
import paneerButterMasalaImg from "@/assets/menu/paneer-butter-masala.jpg";
import muttonBiryaniImg from "@/assets/menu/mutton-biryani.jpg";
import dalMakhaniImg from "@/assets/menu/dal-makhani.jpg";
import vegPulaoImg from "@/assets/menu/veg-pulao.jpg";
import gulabJamunImg from "@/assets/menu/gulab-jamun.jpg";
import rasmalaiImg from "@/assets/menu/rasmalai.jpg";
import iceCreamImg from "@/assets/menu/ice-cream.jpg";
import fruitCustardImg from "@/assets/menu/fruit-custard.jpg";
import freshLimeSodaImg from "@/assets/menu/fresh-lime-soda.jpg";
import masalaChaiImg from "@/assets/menu/masala-chai.jpg";
import mangoLassiImg from "@/assets/menu/mango-lassi.jpg";
import buttermilkImg from "@/assets/menu/buttermilk.jpg";
import chickenBiryaniImg from "@/assets/menu/chicken-biryani.jpg";
import porkVindalooImg from "@/assets/menu/pork-vindaloo.jpg";
import eggCurryImg from "@/assets/menu/egg-curry.jpg";
import chicken65Img from "@/assets/menu/chicken-65.jpg";
import porkSorpotelImg from "@/assets/menu/pork-sorpotel.jpg";
import eggBhurjiImg from "@/assets/menu/egg-bhurji.jpg";

type Category = "Starters" | "Main Course" | "Desserts" | "Drinks";
type Diet = "veg" | "non-veg";
type Protein = "chicken" | "mutton" | "pork" | "egg" | "fish" | null;

interface MenuItem {
  name: string;
  description: string;
  category: Category;
  diet: Diet;
  protein: Protein;
  spicy: boolean;
  popular: boolean;
  image: string;
}

const menuItems: MenuItem[] = [
  // Starters
  { name: "Paneer Tikka", description: "Marinated cottage cheese grilled to perfection with spices", category: "Starters", diet: "veg", protein: null, spicy: true, popular: true, image: paneerTikkaImg },
  { name: "Chicken Lollipop", description: "Crispy fried chicken drumettes with spicy glaze", category: "Starters", diet: "non-veg", protein: "chicken", spicy: true, popular: true, image: chickenLollipopImg },
  { name: "Veg Spring Rolls", description: "Crispy rolls filled with seasoned vegetables", category: "Starters", diet: "veg", protein: null, spicy: false, popular: false, image: vegSpringRollsImg },
  { name: "Fish Fry", description: "Mangalorean-style masala fish fry", category: "Starters", diet: "non-veg", protein: "fish", spicy: true, popular: true, image: fishFryImg },
  { name: "Gobi Manchurian", description: "Indo-Chinese crispy cauliflower bites", category: "Starters", diet: "veg", protein: null, spicy: true, popular: false, image: gobiManchurianImg },
  { name: "Chicken 65", description: "Spicy deep-fried chicken with curry leaves and chili", category: "Starters", diet: "non-veg", protein: "chicken", spicy: true, popular: true, image: chicken65Img },
  { name: "Egg Bhurji", description: "Spiced scrambled eggs with onions and tomatoes", category: "Starters", diet: "non-veg", protein: "egg", spicy: false, popular: false, image: eggBhurjiImg },
  { name: "Pork Sorpotel", description: "Goan-style spicy pork starter", category: "Starters", diet: "non-veg", protein: "pork", spicy: true, popular: false, image: porkSorpotelImg },
  // Main Course
  { name: "Butter Chicken", description: "Tender chicken in rich tomato cream sauce", category: "Main Course", diet: "non-veg", protein: "chicken", spicy: false, popular: true, image: butterChickenImg },
  { name: "Paneer Butter Masala", description: "Cottage cheese in silky makhani gravy", category: "Main Course", diet: "veg", protein: null, spicy: false, popular: true, image: paneerButterMasalaImg },
  { name: "Mutton Biryani", description: "Fragrant basmati rice layered with spiced mutton", category: "Main Course", diet: "non-veg", protein: "mutton", spicy: true, popular: true, image: muttonBiryaniImg },
  { name: "Dal Makhani", description: "Slow-cooked black lentils with cream and butter", category: "Main Course", diet: "veg", protein: null, spicy: false, popular: false, image: dalMakhaniImg },
  { name: "Veg Pulao", description: "Aromatic rice with garden fresh vegetables", category: "Main Course", diet: "veg", protein: null, spicy: false, popular: false, image: vegPulaoImg },
  { name: "Chicken Biryani", description: "Fragrant saffron rice with tender chicken pieces", category: "Main Course", diet: "non-veg", protein: "chicken", spicy: true, popular: true, image: chickenBiryaniImg },
  { name: "Pork Vindaloo", description: "Goan-style spicy red pork curry", category: "Main Course", diet: "non-veg", protein: "pork", spicy: true, popular: false, image: porkVindalooImg },
  { name: "Egg Curry", description: "Boiled eggs in rich golden gravy", category: "Main Course", diet: "non-veg", protein: "egg", spicy: false, popular: false, image: eggCurryImg },
  // Desserts
  { name: "Gulab Jamun", description: "Soft milk dumplings in rose-flavored syrup", category: "Desserts", diet: "veg", protein: null, spicy: false, popular: true, image: gulabJamunImg },
  { name: "Rasmalai", description: "Delicate cottage cheese patties in saffron milk", category: "Desserts", diet: "veg", protein: null, spicy: false, popular: true, image: rasmalaiImg },
  { name: "Ice Cream Selection", description: "Assorted premium ice cream flavors", category: "Desserts", diet: "veg", protein: null, spicy: false, popular: false, image: iceCreamImg },
  { name: "Fruit Custard", description: "Creamy custard with fresh seasonal fruits", category: "Desserts", diet: "veg", protein: null, spicy: false, popular: false, image: fruitCustardImg },
  // Drinks
  { name: "Fresh Lime Soda", description: "Refreshing lime with soda water", category: "Drinks", diet: "veg", protein: null, spicy: false, popular: false, image: freshLimeSodaImg },
  { name: "Masala Chai", description: "Traditional spiced Indian tea", category: "Drinks", diet: "veg", protein: null, spicy: false, popular: true, image: masalaChaiImg },
  { name: "Mango Lassi", description: "Creamy yogurt smoothie with Alphonso mango", category: "Drinks", diet: "veg", protein: null, spicy: false, popular: true, image: mangoLassiImg },
  { name: "Buttermilk", description: "Cool spiced buttermilk with fresh herbs", category: "Drinks", diet: "veg", protein: null, spicy: false, popular: false, image: buttermilkImg },
];

const categories: Category[] = ["Starters", "Main Course", "Desserts", "Drinks"];
const categoryEmojis: Record<Category, string> = { "Starters": "🍽️", "Main Course": "🥘", "Desserts": "🍰", "Drinks": "🥤" };
const proteinFilters = ["chicken", "mutton", "pork", "egg", "fish"] as const;

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Starters");
  const [dietFilter, setDietFilter] = useState<Diet | null>(null);
  const [proteinFilter, setProteinFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [previewImage, setPreviewImage] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (item.category !== activeCategory) return false;
      if (dietFilter && item.diet !== dietFilter) return false;
      if (proteinFilter && item.protein !== proteinFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!item.name.toLowerCase().includes(q) && !item.description.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [activeCategory, dietFilter, proteinFilter, searchQuery]);

  const clearFilters = () => {
    setDietFilter(null);
    setProteinFilter(null);
    setSearchQuery("");
  };

  const hasActiveFilters = dietFilter || proteinFilter || searchQuery;

  return (
    <>
      <PageHero title="Our Menu" subtitle="Crafted with passion, served with love" />

      <section className="section-padding cream-bg">
        <div className="container mx-auto max-w-6xl">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search dishes... (e.g. Chicken, Biryani, Paneer)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-12 rounded-full border-border bg-card font-body text-base shadow-sm focus-visible:ring-primary"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-2 mb-6 scrollbar-hide snap-x snap-mandatory">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); clearFilters(); }}
                className={`flex-shrink-0 snap-start flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                    : "bg-card text-foreground border-border hover:border-primary/50 hover:shadow-sm"
                }`}
              >
                <span className="text-lg">{categoryEmojis[cat]}</span>
                {cat}
              </button>
            ))}
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mr-1">Diet:</span>
            <button
              onClick={() => setDietFilter(dietFilter === "veg" ? null : "veg")}
              className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-all border ${
                dietFilter === "veg"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-card text-foreground border-border hover:border-green-400"
              }`}
            >
              🟢 Veg
            </button>
            <button
              onClick={() => setDietFilter(dietFilter === "non-veg" ? null : "non-veg")}
              className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-all border ${
                dietFilter === "non-veg"
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-card text-foreground border-border hover:border-red-400"
              }`}
            >
              🔴 Non-Veg
            </button>

            <span className="font-body text-xs uppercase tracking-wider text-muted-foreground ml-3 mr-1">Protein:</span>
            {proteinFilters.map((p) => (
              <button
                key={p}
                onClick={() => setProteinFilter(proteinFilter === p ? null : p)}
                className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-all border capitalize ${
                  proteinFilter === p
                    ? "bg-secondary text-secondary-foreground border-secondary"
                    : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                {p}
              </button>
            ))}

            {hasActiveFilters && (
              <button onClick={clearFilters} className="px-4 py-1.5 rounded-full text-sm font-body font-medium text-accent border border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all ml-2">
                Clear All
              </button>
            )}
          </div>

          {/* Results count */}
          <p className="font-body text-sm text-muted-foreground mb-6">
            Showing {filteredItems.length} {filteredItems.length === 1 ? "dish" : "dishes"}
            {hasActiveFilters && " (filtered)"}
          </p>

          {/* Food Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  onClick={() => setPreviewImage(item)}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Tags overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-body font-semibold backdrop-blur-sm ${
                        item.diet === "veg"
                          ? "bg-green-600/90 text-white"
                          : "bg-red-600/90 text-white"
                      }`}>
                        {item.diet === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
                      </span>
                      {item.spicy && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-body font-semibold bg-orange-500/90 text-white backdrop-blur-sm">
                          🔥 Spicy
                        </span>
                      )}
                      {item.popular && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-body font-semibold bg-primary/90 text-primary-foreground backdrop-blur-sm">
                          ⭐ Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-xs font-body text-muted-foreground bg-muted px-2 py-0.5 rounded-full flex-shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="font-display text-2xl text-muted-foreground mb-2">No dishes found</p>
              <p className="font-body text-sm text-muted-foreground mb-4">Try adjusting your filters or search term</p>
              <button onClick={clearFilters} className="font-body text-sm text-primary hover:underline">
                Clear all filters
              </button>
            </motion.div>
          )}

          {/* Customization Note */}
          <div className="mt-16 text-center">
            <p className="font-body text-muted-foreground italic">
              Our menus are fully customizable for your event. Contact us for a personalized menu.
            </p>
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl border-border">
          {previewImage && (
            <div>
              <img
                src={previewImage.image}
                alt={previewImage.name}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-body font-semibold ${
                    previewImage.diet === "veg" ? "bg-green-600 text-white" : "bg-red-600 text-white"
                  }`}>
                    {previewImage.diet === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
                  </span>
                  {previewImage.spicy && <span className="px-2 py-0.5 rounded-full text-xs font-body font-semibold bg-orange-500 text-white">🔥 Spicy</span>}
                  {previewImage.popular && <span className="px-2 py-0.5 rounded-full text-xs font-body font-semibold bg-primary text-primary-foreground">⭐ Popular</span>}
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">{previewImage.name}</h2>
                <p className="font-body text-muted-foreground mt-2">{previewImage.description}</p>
                <p className="font-body text-xs text-muted-foreground mt-3 bg-muted inline-block px-3 py-1 rounded-full">{previewImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MenuPage;
