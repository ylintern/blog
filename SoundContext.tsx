import React, { createContext, useContext } from "react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

type SoundCtx = ReturnType<typeof useSoundEffects>;

const SoundContext = createContext<SoundCtx | null>(null);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sound = useSoundEffects();
  return <SoundContext.Provider value={sound}>{children}</SoundContext.Provider>;
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be within SoundProvider");
  return ctx;
};
