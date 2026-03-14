import { motion } from "framer-motion";
import { Download, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { useSound } from "@/components/SoundContext";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/cristiano-boas/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:cristiano.vb@icloud.com", label: "Email" },
  { icon: Send, href: "https://t.me/xBi0_0", label: "Telegram" },
  { icon: Twitter, href: "https://x.com/bioxbt", label: "X" },
];

export const Footer = () => {
  const { whoosh } = useSound();

  return (
    <footer className="relative border-t border-border py-20 px-4 sm:px-8" id="contact">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="mb-4 font-display text-3xl font-bold text-gradient-lavender sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <p className="mb-10 text-muted-foreground">
          Open to ecosystem partnerships, protocol collaborations, and strategic advisory roles.
        </p>

        <div className="mb-8 flex justify-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-border bg-card p-4 text-foreground transition-all hover:border-primary hover:text-primary"
              whileHover={{ scale: 1.1 }}
              onMouseEnter={whoosh}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/CristianoVilasBoas_CV_2026.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-display text-sm font-medium text-primary transition-all hover:bg-primary/20 glow-lavender-sm"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={whoosh}
        >
          <Download size={16} />
          Download CV
        </motion.a>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cristiano Vilas Boas. Built with intention.
        </p>
      </div>
    </footer>
  );
};
