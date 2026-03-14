import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { parseGIF, decompressFrames } from "gifuct-js";
import { useSound } from "@/components/SoundContext";
import { useTheme } from "@/components/ThemeContext";

const GIF_URL = "/pfp/gif_to_light.gif";
const FRAME_DELAY = 55; // ~18fps smooth playback

interface ParsedFrame {
  imageData: ImageData;
}

export const ProfilePicture = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ParsedFrame[]>([]);
  const animatingRef = useRef(false);
  const currentFrameRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const { whoosh } = useSound();
  const { theme, toggleTheme } = useTheme();

  // Parse GIF frames on mount
  useEffect(() => {
    let cancelled = false;

    async function loadFrames() {
      try {
        const resp = await fetch(GIF_URL);
        const buff = await resp.arrayBuffer();
        const gif = parseGIF(buff);
        const rawFrames = decompressFrames(gif, true);

        if (cancelled || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const firstFrame = rawFrames[0];
        canvas.width = firstFrame.dims.width;
        canvas.height = firstFrame.dims.height;

        // Create a temporary canvas to composite frames
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext("2d")!;

        const parsedFrames: ParsedFrame[] = [];

        for (const frame of rawFrames) {
          const frameImageData = new ImageData(
            new Uint8ClampedArray(frame.patch),
            frame.dims.width,
            frame.dims.height
          );

          // Handle disposal
          if (frame.disposalType === 2) {
            tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
          }

          // Draw frame patch at correct position
          const patchCanvas = document.createElement("canvas");
          patchCanvas.width = frame.dims.width;
          patchCanvas.height = frame.dims.height;
          const patchCtx = patchCanvas.getContext("2d")!;
          patchCtx.putImageData(frameImageData, 0, 0);

          tempCtx.drawImage(patchCanvas, frame.dims.left, frame.dims.top);

          // Capture composited frame
          const composited = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
          parsedFrames.push({ imageData: composited });
        }

        framesRef.current = parsedFrames;

        // Draw first frame (light mode = frame 0)
        const ctx = canvas.getContext("2d")!;
        ctx.putImageData(parsedFrames[0].imageData, 0, 0);
        currentFrameRef.current = 0;
        setLoaded(true);
      } catch (e) {
        console.error("Failed to parse GIF:", e);
      }
    }

    loadFrames();
    return () => { cancelled = true; };
  }, []);

  const playFrames = useCallback((from: number, to: number, onDone: () => void) => {
    const frames = framesRef.current;
    const canvas = canvasRef.current;
    if (!canvas || frames.length === 0) return;
    const ctx = canvas.getContext("2d")!;
    const direction = to > from ? 1 : -1;
    let current = from;

    const step = () => {
      current += direction;
      if ((direction === 1 && current > to) || (direction === -1 && current < to)) {
        currentFrameRef.current = to;
        onDone();
        return;
      }
      ctx.putImageData(frames[current].imageData, 0, 0);
      currentFrameRef.current = current;
      setTimeout(step, FRAME_DELAY);
    };

    step();
  }, []);

  const handleToggle = useCallback(() => {
    if (animatingRef.current || !loaded) return;
    animatingRef.current = true;
    whoosh();

    const frames = framesRef.current;
    const lastFrame = frames.length - 1;

    if (theme === "light") {
      // Light → Dark: play forward (frame 0 → frame last)
      playFrames(0, lastFrame, () => {
        toggleTheme();
        animatingRef.current = false;
      });
    } else {
      // Dark → Light: play backward (frame last → frame 0)
      playFrames(lastFrame, 0, () => {
        toggleTheme();
        animatingRef.current = false;
      });
    }
  }, [theme, loaded, whoosh, toggleTheme, playFrames]);

  return (
    <motion.div
      className="pfp-frame group relative cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
    >
      {/* Pulsing ring hint */}
      <div className="absolute inset-0 -m-2 rounded-full animate-[pulse-ring_2.5s_ease-in-out_infinite] border-2 border-primary/40" />

      <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-border transition-all duration-300 group-hover:border-primary group-hover:glow-lavender sm:h-52 sm:w-52">
        <canvas
          ref={canvasRef}
          className="h-full w-full select-none object-cover pointer-events-none"
          style={{ borderRadius: "50%" }}
        />
      </div>

      {/* Sun/Moon icon hint */}
      <motion.div
        className="absolute -bottom-1 -right-1 rounded-full bg-card border border-border p-1.5 text-primary shadow-lg"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {theme === "light" ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        )}
      </motion.div>
    </motion.div>
  );
};
