import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              KREMA
            </h3>
            <p className="text-muted-foreground font-sans">
              AXM - El nuevo álbum que redefine la experiencia sonora
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              ENLACES
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Sobre el Álbum
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Tour
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Merch
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              SÍGUENOS
            </h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground font-sans">
          <p>© 2025 Krema. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
