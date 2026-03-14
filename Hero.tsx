import { motion } from "framer-motion";
import { Download, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { useSound } from "@/components/SoundContext";
import { ProfilePicture } from "@/components/ProfilePicture";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/cristiano-boas/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:cristiano.vb@icloud.com", label: "Email" },
  { icon: Send, href: "https://t.me/xBi0_0", label: "Telegram" },
  { icon: Twitter, href: "https://x.com/bioxbt", label: "X" },
];

export const Hero = () => {
  const { whoosh } = useSound();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Background particles */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/10"
          style={{
            width: 100 + i * 80,
            height: 100 + i * 80,
            top: `${20 + i * 10}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Profile Picture */}
      <div className="z-10 mb-6">
        <ProfilePicture />
      </div>

      {/* Glitch name */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="relative font-display text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          <span className="text-gradient-lavender">Cristiano</span>
          <br />
          <span className="text-foreground">Vilas Boas</span>
          {/* Glitch layers */}
          <span
            className="absolute inset-0 font-display text-5xl font-bold tracking-tight text-primary/30 sm:text-7xl lg:text-8xl"
            style={{ animation: "glitch-1 4s infinite linear" }}
            aria-hidden="true"
          >
            Cristiano
            <br />
            Vilas Boas
          </span>
          <span
            className="absolute inset-0 font-display text-5xl font-bold tracking-tight text-secondary/20 sm:text-7xl lg:text-8xl"
            style={{ animation: "glitch-2 4s infinite linear 0.5s" }}
            aria-hidden="true"
          >
            Cristiano
            <br />
            Vilas Boas
          </span>
        </h1>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="z-10 mt-6 max-w-xl text-center font-body text-base text-muted-foreground sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Business & Product Strategy · On-Chain Finance · Ecosystem Growth
      </motion.p>

      {/* FABs */}
      <motion.div
        className="z-10 mt-10 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {socialLinks.map(({ icon: Icon, href, label }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="rounded-full border border-border bg-card p-3 text-foreground transition-all hover:border-primary hover:text-primary"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.15 }}
            onMouseEnter={whoosh}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </motion.div>

      {/* Download CV */}
      <motion.a
        href="/CristianoVilasBoas_CV_2026.pdf"
        download
        className="z-10 mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-display text-sm font-medium text-primary transition-all hover:bg-primary/20 animate-pulse-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onMouseEnter={whoosh}
      >
        <Download size={16} />
        Download CV
      </motion.a>

    </section>
  );
};
