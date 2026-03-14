import { motion } from "framer-motion";
import { Briefcase, Cpu, Users } from "lucide-react";

const strengths = [
  {
    icon: Briefcase,
    title: "Business Development",
    items: [
      "Ecosystem partnership design & execution",
      "Technical integration pathways",
      "Protocol-to-protocol BD",
      "Market positioning & narrative",
      "IRL deal-making & events",
    ],
  },
  {
    icon: Cpu,
    title: "Product & Protocol Fluency",
    items: [
      "0→1 protocol architecture & launch",
      "CDP, money market & RWA mechanics",
      "GTM strategy for DeFi primitives",
      "Tokenomics & incentive design",
      "Collateral risk frameworks",
      "Wallet architecture & AA",
      "Cross-chain interoperability",
    ],
  },
  {
    icon: Users,
    title: "Community & Growth",
    items: [
      "Community-to-capital pipeline design",
      "Incentive & participation systems",
      "Onboarding flow architecture",
      "Protocol narrative & communication",
      "Branding & market positioning",
      "Web2→Web3 conversion systems",
    ],
  },
];

export const Strengths = () => (
  <section className="relative py-24 px-4 sm:px-8" id="strengths">
    <div className="mx-auto max-w-5xl">
      <motion.h2
        className="mb-12 font-display text-3xl font-bold text-gradient-lavender sm:text-4xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Core Strengths
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-3">
        {strengths.map((s, i) => (
          <motion.div
            key={s.title}
            className="rounded-xl border border-border bg-card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <s.icon className="mb-4 text-primary" size={28} />
            <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">→ {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
