import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface MiniPlayerProps {
  currentTrack: string | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
}

const MiniPlayer = ({ currentTrack, isPlaying, onTogglePlay, onNext }: MiniPlayerProps) => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <AnimatePresence>
      {currentTrack && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Track info */}
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 border-2 border-primary rounded animate-pulse" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-foreground truncate">
                    {currentTrack}
                  </h3>
                  <p className="text-sm text-muted-foreground">KREMA - AXM</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onTogglePlay}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-foreground" />
                  ) : (
                    <Play className="w-5 h-5 text-foreground ml-0.5" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onNext}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors duration-300"
                >
                  <SkipForward className="w-5 h-5 text-foreground" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors duration-300 hidden sm:flex"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MiniPlayer;
