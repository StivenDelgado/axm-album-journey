import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border snap-start">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              KREMA
            </h3>
            <p className="text-muted-foreground font-sans">
              ZAFIRO - El nuevo EP de @KREMA
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              ENLACES
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Sobre el Álbum
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Tour
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Merch
                </Link>
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
                href="https://www.instagram.com/kremaxm"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/channel/UCDrRsSx4zZVqMFppwZR0aug"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://open.spotify.com/artist/4k07OUNOsurHyNNFaxSM3c?si=2BaW7lTuRwelSOpbW6B4hw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground font-sans">
          <p>© 2025 Kenda, Krema. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
