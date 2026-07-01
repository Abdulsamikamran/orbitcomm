import { motion } from "framer-motion";
import { Layers, Lock, Gauge, PlugZap } from "lucide-react";
import { Reveal } from "./Reveal";

const feats = [
  {
    icon: Layers,
    title: "Unified, not stitched",
    desc: "Voice, messaging, contact centre and IT share one backbone — no juggling vendors or reconciling invoices.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    desc: "Encryption, access controls and continuous monitoring baked into every service we deliver.",
  },
  {
    icon: Gauge,
    title: "Built to scale",
    desc: "Add seats, numbers or channels on demand. The platform grows the moment you do.",
  },
  {
    icon: PlugZap,
    title: "Integrates with your stack",
    desc: "Open APIs and connectors slot Orbitcomm into the CRMs and tools your teams already use.",
  },
];

export default function Platform() {
  return (
    <section
      id="platform"
      className="section-pad"
      style={{
        background: "var(--wash)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container plat-grid">
        <Reveal className="plat-left">
          <span className="eyebrow">The Orbitcomm platform</span>
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,2.8rem)",
              margin: "18px 0 18px",
            }}
          >
            The connective tissue
            <br />
            between all your channels.
          </h2>
          <p
            style={{
              fontSize: "1.06rem",
              color: "var(--slate)",
              marginBottom: 28,
            }}
          >
            Most businesses buy communication tools one at a time and pay for
            the gaps between them. Orbitcomm closes those gaps — a single,
            secure layer that keeps every conversation and system talking to
            each other.
          </p>
          <a href="#contact" className="btn btn-primary">
            Talk to our team
          </a>
        </Reveal>

        <div className="plat-right">
          {feats.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="plat-card"
              >
                <div className="plat-icon">
                  <Icon size={20} color="var(--teal-deep)" strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.94rem", color: "var(--slate)" }}>
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .plat-grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 60px; align-items: center; }
        .plat-right { display: grid; grid-template-columns: repeat(2,1fr); gap: 18px; }
        .plat-card { background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); padding: 26px 24px; box-shadow: var(--shadow-sm); }
        .plat-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--tealtint); display: grid; place-items: center; margin-bottom: 16px; }
        @media (max-width: 900px){ .plat-grid { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 520px){ .plat-right { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
