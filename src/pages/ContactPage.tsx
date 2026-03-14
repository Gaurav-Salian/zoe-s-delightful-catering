import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", eventDate: "", message: "" });
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Let's plan your perfect event together" />
      <section className="section-padding cream-bg">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader title="Get In" highlight="Touch" subtitle="We'd love to hear from you" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border p-8 space-y-5"
            >
              {[
                { label: "Name", key: "name", type: "text", required: true },
                { label: "Email", key: "email", type: "email", required: true },
                { label: "Phone", key: "phone", type: "tel", required: false },
                { label: "Event Date", key: "eventDate", type: "date", required: false },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required={field.required}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-2.5 bg-background border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-background border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                <Send size={16} />
                Send Message
              </button>
            </motion.form>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">Our Location</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Kampanbettu Udupi Taluk, Udyavara<br />
                      Dakshina Kannada 574118<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">Phone</h4>
                    <a href="tel:+919845384080" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                      +91 9845384080
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">Email</h4>
                    <a href="mailto:vivianpereira121@gmail.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                      vivianpereira121@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5!2d74.75!3d13.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIxJzAwLjAiTiA3NMKwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zoe Pereira Caterers Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
