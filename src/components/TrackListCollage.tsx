import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import albumCover from "@/assets/zafiro-cover.jpg";

interface Track {
    title: string;
    duration: string;
}

interface TrackListCollageProps {
    tracks: Track[];
    currentTrackIndex: number | null;
    isPlaying: boolean;
    onTogglePlay: (index: number) => void;
}

const TrackListCollage = ({ tracks, currentTrackIndex, isPlaying, onTogglePlay }: TrackListCollageProps) => {
    return (
        <section className="min-h-screen bg-background py-20 px-4 relative overflow-hidden snap-start flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-5xl md:text-7xl font-bold text-center mb-16 text-foreground"
                >
                    TRACKLIST
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[200px]">
                    {tracks.map((track, index) => {
                        // Custom grid layout for 7 items
                        // 1. Big item
                        // 2, 3. Medium items
                        // 4, 5, 6, 7. Small items

                        let gridClass = "lg:col-span-3"; // Default small

                        if (index === 0) gridClass = "lg:col-span-6 lg:row-span-2"; // Big item (Bottega Veneta)
                        else if (index === 1 || index === 2) gridClass = "lg:col-span-6"; // Medium items
                        else gridClass = "lg:col-span-3"; // Small items

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`
                  group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300
                  flex flex-col items-center justify-center p-6 text-center cursor-pointer
                  ${gridClass}
                  ${currentTrackIndex === index ? 'border-primary/50' : ''}
                `}
                                onClick={() => onTogglePlay(index)}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                                    style={{ backgroundImage: `url(${albumCover})` }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

                                <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                                    <h3 className={`font-display font-bold mb-2 text-white drop-shadow-lg ${index === 0 ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
                                        {track.title}
                                    </h3>
                                    <p className="font-sans text-gray-200 text-sm tracking-widest drop-shadow-md">
                                        {track.duration}
                                    </p>
                                </div>

                                {/* Hover/Active State Overlay */}
                                <div className={`
                  absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300
                  ${currentTrackIndex === index && isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `}>
                                    {currentTrackIndex === index && isPlaying ? (
                                        <Pause className="w-12 h-12 text-primary drop-shadow-lg" />
                                    ) : (
                                        <Play className="w-12 h-12 text-white drop-shadow-lg" />
                                    )}
                                </div>

                                {/* Active Indicator */}
                                {currentTrackIndex === index && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50 z-20">
                                        {isPlaying && (
                                            <motion.div
                                                className="h-full bg-primary"
                                                layoutId="progress"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 30, ease: "linear" }} // Placeholder duration
                                            />
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrackListCollage;
