import { useCallback, useRef, useState } from "react";

const audioCtxRef = { current: null as AudioContext | null };

function getAudioContext() {
  if (!audioCtxRef.current) {
    audioCtxRef.current = new AudioContext();
  }
  return audioCtxRef.current;
}

function playTone(frequency: number, duration: number, type: OscillatorType = "sine", volume = 0.08) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {}
}

export function useSoundEffects() {
  const [muted, setMuted] = useState(false);

  const whoosh = useCallback(() => {
    if (muted) return;
    playTone(800, 0.15, "sine", 0.06);
    setTimeout(() => playTone(1200, 0.1, "sine", 0.04), 50);
  }, [muted]);

  const click = useCallback(() => {
    if (muted) return;
    playTone(600, 0.08, "square", 0.04);
  }, [muted]);

  const reveal = useCallback(() => {
    if (muted) return;
    playTone(400, 0.2, "sine", 0.05);
    setTimeout(() => playTone(600, 0.15, "sine", 0.04), 100);
  }, [muted]);

  return { whoosh, click, reveal, muted, setMuted };
}
