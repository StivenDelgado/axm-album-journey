import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface MiniPlayerProps {
  currentTrack: string | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const MiniPlayer = ({ currentTrack, isPlaying, onTogglePlay }: MiniPlayerProps) => {
  return (
    <AnimatePresence>
      {currentTrack && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onTogglePlay}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl group-hover:bg-primary/60 transition-all duration-300" />
            
            {/* Main button */}
            <div className="relative flex items-center gap-3 bg-card/95 backdrop-blur-lg border-2 border-primary rounded-full px-6 py-4 shadow-[0_0_30px_rgba(166,20,32,0.4)] hover:shadow-[0_0_40px_rgba(166,20,32,0.6)] transition-all duration-300">
              {/* Play/Pause icon */}
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-foreground" />
                ) : (
                  <Play className="w-4 h-4 text-foreground ml-0.5" />
                )}
              </div>
              
              {/* Track name */}
              <div className="font-display font-bold text-foreground text-sm tracking-wide">
                {currentTrack}
              </div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MiniPlayer;
