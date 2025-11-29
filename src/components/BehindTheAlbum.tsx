import { motion } from "framer-motion";
import img1 from "@/assets/IMG_0327.png";
import img2 from "@/assets/IMG_0514.jpg";
import img3 from "@/assets/IMG_0515.jpg";
import img4 from "@/assets/IMG_0516.jpg";
import img5 from "@/assets/IMG_0780.jpg";
import img6 from "@/assets/IMG_0788.jpg";
import img7 from "@/assets/IMG_0808.jpg";
import img8 from "@/assets/IMG_0868.jpg";
import img9 from "@/assets/IMG_0870.jpg";
import video1 from "@/assets/IMG_0449.MOV";
import video2 from "@/assets/IMG_0876.MOV";

const BehindTheAlbum = () => {
  const media = [
    { src: img1, type: "image", alt: "Compartiendo con Tale$", className: "col-span-2 row-span-2" },
    { src: video1, type: "video", alt: "Sesión en vivo", className: "col-span-2 row-span-2" },
    { src: img2, type: "image", alt: "", className: "col-span-1 row-span-1" },
    { src: img3, type: "image", alt: "Producción musical", className: "col-span-1 row-span-2" },
    { src: img4, type: "image", alt: "Portada del EP", className: "col-span-2 row-span-1" },
    { src: img5, type: "image", alt: "Momento creativo", className: "col-span-1 row-span-1" },
    { src: video2, type: "video", alt: "En la piscina", className: "col-span-2 row-span-2" },
    { src: img6, type: "image", alt: "Proceso artístico", className: "col-span-1 row-span-1" },
    { src: img7, type: "image", alt: "", className: "col-span-1 row-span-2" },
    { src: img8, type: "image", alt: "Grabando", className: "col-span-2 row-span-1" },
    { src: img9, type: "image", alt: "Creando ZAFIRO", className: "col-span-1 row-span-1" },
  ];

  return (
    <section className="relative py-32 px-4 bg-background snap-start">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
            DETRÁS DE ZAFIRO
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            ZAFIRO nace de la noche, de sesiones infinitas en el estudio donde el arte cobra vida. Cada track es una gema pulida con dedicación, donde los beats y las melodías se cristalizan en un sonido único. Es un proceso íntimo que captura la esencia de la creación musical: en cada tema hay un fragmento de lo que es Krema, de sus vivencias, de su forma de sentir, y de las calles, luces y recuerdos de Armenia, la ciudad que lo vio crecer. Cada canción es un reflejo de su mundo interior y de la energía de su ciudad, condensados en un solo EP.
          </p>
        </motion.div>

        {/* Collage Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1, zIndex: 10 }}
              className={`relative rounded-lg overflow-hidden group cursor-pointer shadow-elegant ${item.className}`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: 'inset 0 0 60px hsl(var(--primary) / 0.4)',
                }}
              />
              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-foreground font-display text-sm tracking-wider drop-shadow-lg">
                  {item.alt.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8 font-sans"
        >
          Momentos capturados durante la creación de ZAFIRO
        </motion.p>
      </div>
    </section>
  );
};

export default BehindTheAlbum;
