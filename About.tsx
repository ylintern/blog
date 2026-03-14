import { motion } from "framer-motion";

const interests = ["Privacy", "Sovereignty", "DeFi", "Product Design", "On-Chain Finance", "Ecosystem Growth"];

export const About = () => (
  <section className="relative py-24 px-4 sm:px-8" id="about">
    <div className="mx-auto max-w-4xl">
      <motion.h2
        className="mb-8 font-display text-3xl font-bold text-gradient-lavender sm:text-4xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Executive Profile
      </motion.h2>

      <motion.div
        className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p>
          For nearly a decade I have worked at the intersection of product, business, go-to-market strategy and ecosystem development — helping protocols from early architectural concepts to live systems with liquidity, integrations, and real adoption. I scale financial infrastructures by translating complex protocol mechanics into strategic partnerships and go-to-market strategies.
        </p>
        <p>
          What I bring is business development experience with the ability to close high-stakes integrations, shape market narratives and build community pipelines — all backed by hands-on engagement and product management experience.
        </p>
      </motion.div>

      {/* Interest tags */}
      <motion.div
        className="mt-10 flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {interests.map((tag, i) => (
          <motion.span
            key={tag}
            className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-display text-sm text-primary"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);
