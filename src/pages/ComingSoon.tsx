import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import albumCover from "@/assets/zafiro-cover.jpg";

const ComingSoon = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background with parallax-like effect */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                    style={{ backgroundImage: `url(${albumCover})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-foreground">
                        COMING SOON
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-sans mb-12 max-w-2xl mx-auto">
                        Estamos preparando algo especial. Muy pronto podrás acceder a esta sección.
                    </p>

                    <Link to="/">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-primary text-foreground hover:bg-primary/10 font-display text-lg px-8 py-6 transition-all duration-300 group"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                            VOLVER AL INICIO
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ComingSoon;
