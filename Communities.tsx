import { motion } from "framer-motion";

const communities = [
  { name: "Harmony Portugal", desc: "Built the Portuguese Harmony community from zero. Drove local adoption, organized events, and converted off-chain audiences to protocol participants." },
  { name: "Chillibangs", desc: "Early-stage growth and community engagement, contributing to ecosystem development and onboarding strategies." },
  { name: "Nubees", desc: "0-to-1 community building focused on Web3 education and participant onboarding systems." },
  { name: "Triceralabs", desc: "Ecosystem contributor supporting growth initiatives and community infrastructure." },
];

export const Communities = () => (
  <section className="relative py-24 px-4 sm:px-8" id="communities">
    <div className="mx-auto max-w-4xl">
      <motion.h2
        className="mb-12 font-display text-3xl font-bold text-gradient-lavender sm:text-4xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Communities
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {communities.map((c, i) => (
          <motion.div
            key={c.name}
            className="rounded-xl border border-border bg-card p-6 transition-all hover:border-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground">{c.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
