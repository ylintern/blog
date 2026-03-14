import { motion } from "framer-motion";
import { useSound } from "@/components/SoundContext";

const experiences = [
  {
    period: "2025 / 2026",
    role: "Chief Executive Officer",
    company: "Orki Finance · Subvisual Venture Studio",
    location: "Remote",
    highlights: [
      "Designed and launched a 0→1 CDP-based stablecoin protocol on Swellchain, optimized for staking and restaking economies",
      "Closed ecosystem integrations with infrastructure and protocol stakeholders, structuring partnership terms and co-marketing from scratch",
      "Generated $1.5M TVL within 48 hours of launch — zero LP deals; adoption driven purely by positioning, partner relationships and incentives",
      "Designed collateral model, tokenomics, incentive flows, and liquidation mechanics calibrated to audit-grade economic security standards",
      "Led full protocol narrative, branding, and communication architecture",
    ],
  },
  {
    period: "2023 / 2024",
    role: "Strategic Advisor",
    company: "Dippi / Functor Network",
    location: "Remote",
    highlights: [
      "Advised at a critical architectural inflection point — providing product direction, ecosystem positioning, and strategic clarity through a fundamental pivot",
      "Facilitated discussions with Chainlink, ConsenSys, Brume Wallet, and Chainup, bridging technical capability to ecosystem leverage",
      "Provided architectural advisory on ERC-6551 wallet systems, scalability trade-offs, and user segmentation strategy",
      "Identified structural misalignment between traction metrics and protocol fundamentals; directed pivot toward key-storage infrastructure layer",
      "Directed research across MPC key encryption, mix-net inspired P2P models, and fully homomorphic encryption frameworks",
    ],
  },
  {
    period: "2022 / 2023",
    role: "Community & Incentives Lead",
    company: "Public Pressure",
    location: "Porto, PT",
    highlights: [
      "Designed behavioral infrastructure for a digital music and Web3 participation platform",
      "Built incentive and quest systems engineering retention and active participation loops at scale",
      "Advised Francesca Versace and Sergio Mottola on Web3 community and digital asset positioning",
    ],
  },
  {
    period: "2020 / 2022",
    role: "Portugal Lead → Product Relationships & BD",
    company: "Harmony Protocol",
    location: "Remote",
    highlights: [
      "Entered as grassroots ecosystem builder; progressed into product-facing and BD roles",
      "Acted as integration pathway and grants coordinator between ecosystem projects and protocol engineering",
      "Supported liquidity and ecosystem incentive design, including early NFT-boosted liquidity structures predating wider adoption",
      "Designed Web2→Web3 onboarding flows converting off-chain audiences to protocol participants",
    ],
  },
  {
    period: "2019 / 2021",
    role: "Owner",
    company: "UPSE — Solar & Hydraulic Systems",
    location: "Portugal",
    highlights: [
      "Built a renewable energy company from 0→1 with end-to-end operational, commercial, and technical execution",
      "Full-cycle founder discipline in a capital-intensive physical business",
    ],
  },
  {
    period: "2017 / 2019",
    role: "Operator & Quality Control",
    company: "Hovione",
    location: "Lisbon, PT",
    highlights: [
      "GMP-regulated pharmaceutical manufacturing with rigorous process discipline and 5S methodology",
    ],
  },
  {
    period: "2013 / 2017",
    role: "Fraud Analyst",
    company: "Randstad (EDP)",
    location: "Lisbon, PT",
    highlights: [
      "Data analysis for fraud detection and prevention inside a major utility",
      "Foundational training in analytical rigor and structured risk pattern recognition",
    ],
  },
];

export const Experience = () => {
  const { reveal } = useSound();

  return (
    <section className="relative py-24 px-4 sm:px-8" id="experience">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-16 font-display text-3xl font-bold text-gradient-lavender sm:text-4xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent sm:left-8" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative mb-12 pl-12 sm:pl-20"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onViewportEnter={() => reveal()}
            >
              {/* Dot */}
              <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background sm:left-6.5" />

              <span className="mb-1 block font-body text-xs tracking-wider text-muted-foreground uppercase">
                {exp.period}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                {exp.role}
              </h3>
              <p className="mb-2 font-body text-sm text-primary">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-1">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                    → {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
