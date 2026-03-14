import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "./SoundContext";
import { motion } from "framer-motion";

export const MuteToggle = () => {
  const { muted, setMuted } = useSound();
  return (
    <motion.button
      onClick={() => setMuted(!muted)}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
    >
      {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </motion.button>
  );
};
