import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="espresso-bg text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Terms & Conditions */}
          <div>
            <h3 className="font-display text-xl font-semibold text-primary mb-4">
              Terms & Conditions
            </h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80 font-body">
              <li>• Rates are charged per head</li>
              <li>• Table cash should be given in advance</li>
              <li>• Extra charges apply for round tables and hot drink service</li>
              <li>• Live kitchen and salad counter will be charged extra</li>
              <li>• Transportation charges vary with distance</li>
              <li>• 50% to 70% payment must be made in advance</li>
              <li>• Balance payment should be completed immediately after the function</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold text-primary mb-4">
              Contact Info
            </h3>
            <div className="space-y-4 font-body text-sm text-secondary-foreground/80">
              <a
                href="mailto:vivianpereira121@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary shrink-0" />
                vivianpereira121@gmail.com
              </a>
              <a
                href="tel:+919845384080"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary shrink-0" />
                +91 9845384080
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>
                  Kampanbettu Udupi Taluk, Udyavara<br />
                  Dakshina Kannada 574118<br />
                  Karnataka, India
                </span>
              </div>
            </div>
          </div>

          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-2">
              Zoe Pereira
            </h3>
            <p className="font-display text-lg text-secondary-foreground/60 mb-4">Caterers</p>
            <p className="font-body text-sm text-secondary-foreground/60 leading-relaxed">
              Premium catering services for weddings, parties, corporate events, and special occasions. Making every event unforgettable with exceptional food and service.
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-secondary-foreground/50">
            Copyright © 2017 Zoe Pereira Caterers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
