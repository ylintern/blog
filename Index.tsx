import { SoundProvider } from "@/components/SoundContext";
import { ThemeProvider } from "@/components/ThemeContext";
import { MuteToggle } from "@/components/MuteToggle";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Communities } from "@/components/sections/Communities";
import { Strengths } from "@/components/sections/Strengths";
import { Tools } from "@/components/sections/Tools";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <ThemeProvider>
    <SoundProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Communities />
        <Strengths />
        <Tools />
        <Footer />
        <MuteToggle />
      </main>
    </SoundProvider>
    </ThemeProvider>
  );
};

export default Index;
