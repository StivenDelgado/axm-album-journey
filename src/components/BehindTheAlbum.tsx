import { motion } from "framer-motion";
import behind1 from "@/assets/behind-1.jpg";
import behind2 from "@/assets/behind-2.jpg";
import behind3 from "@/assets/behind-3.jpg";

const BehindTheAlbum = () => {
  const images = [
    { src: behind1, alt: "Proceso de producción" },
    { src: behind2, alt: "Inspiración urbana" },
    { src: behind3, alt: "Visión artística" },
  ];

  return (
    <section className="relative py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
            BEHIND THE ALBUM
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            AXM nace de las calles, de la noche, de la búsqueda incansable por un sonido que capture 
            la esencia del momento. Cada track es una ventana a una narrativa cinematográfica donde 
            el beats y las melodías se funden con historias urbanas. Un viaje sonoro que trasciende 
            fronteras y conecta con lo más profundo de la experiencia humana.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    boxShadow: 'inset 0 0 60px rgba(166, 20, 32, 0.4)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheAlbum;
