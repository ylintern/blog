import { motion } from "framer-motion";

const tools = [
  "Notion", "Excalidraw", "GitHub", "Vercel", "Google Workspace",
  "Typefully", "AI tools", "AI-assisted research",
];

export const Tools = () => (
  <section className="relative py-16 px-4 sm:px-8" id="tools">
    <div className="mx-auto max-w-4xl">
      <motion.h2
        className="mb-8 font-display text-2xl font-bold text-gradient-lavender sm:text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Tools & Stack
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-card px-4 py-2 font-body text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);
