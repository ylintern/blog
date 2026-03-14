import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useSound } from "@/components/SoundContext";

const projects = [
  {
    name: "Orki Finance",
    desc: "0→1 CDP-based stablecoin protocol on Swellchain. $1.5M TVL in 48h. Full product, BD, and GTM ownership at Subvisual Venture Studio.",
    tags: ["DeFi", "Stablecoins", "CDP"],
    links: [{ label: "Website", url: "https://orki.finance" }],
  },
  {
    name: "VIBO",
    desc: "AI-powered notebook for thinking, writing, and connected knowledge. Personal productivity tool built as a side project.",
    tags: ["AI", "Productivity"],
    links: [
      { label: "App", url: "https://webviboai.crisstiano.workers.dev/" },
      { label: "Canvas", url: "https://zettel-canvas-mind.crisstiano.workers.dev/" },
    ],
  },
  {
    name: "Dippi → Functor Network",
    desc: "Strategic advisory through a fundamental pivot — from Token Bound Accounts to private key infrastructure. Research across MPC, mix-nets, and FHE.",
    tags: ["Infra", "Wallets", "Research"],
    links: [{ label: "Website", url: "https://dippi.xyz" }],
  },
  {
    name: "Either Box",
    desc: "Social prediction platform with Yield Lounge as the final UI destination. Built end-to-end from concept to deployed prototype.",
    tags: ["Social", "Prediction"],
    links: [
      { label: "Landing", url: "https://landingeitherbox.crisstiano.workers.dev/" },
      { label: "App", url: "https://either-box.netlify.app/" },
    ],
  },
  {
    name: "OpenxSwap",
    desc: "DEX on Optimism with tokenomics and flywheel designed on Velodrome. Treasury currently exceeds market cap.",
    tags: ["DEX", "Optimism"],
    links: [],
  },
  {
    name: "Harmony Protocol",
    desc: "DeFi ecosystem growth — DeFiKingdoms expansion, integrations with 1inch and Li.Fi, grants coordination, and Web2→Web3 onboarding systems.",
    tags: ["L1", "Ecosystem", "BD"],
    links: [],
  },
];

export const Projects = () => {
  const { whoosh } = useSound();

  return (
    <section className="relative py-24 px-4 sm:px-8" id="projects">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-16 font-display text-3xl font-bold text-gradient-lavender sm:text-4xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Projects & MVPs
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onMouseEnter={whoosh}
            >
              <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
                    {t}
                  </span>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary transition-colors hover:text-foreground"
                    >
                      <ExternalLink size={12} />
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
