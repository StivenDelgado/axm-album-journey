import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("¡Gracias! Te notificaremos del lanzamiento de AXM");
      setEmail("");
    }
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-foreground">
            NO TE PIERDAS AXM
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-sans">
            Suscríbete y sé el primero en escuchar el álbum completo
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground font-sans"
            />
            <Button 
              type="submit"
              className="bg-primary hover:bg-secondary text-foreground font-display px-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(166,20,32,0.6)]"
            >
              SUSCRIBIR
            </Button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-secondary text-foreground font-display text-lg px-12 py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(166,20,32,0.6)]"
            >
              PRE-SAVE EN SPOTIFY
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
