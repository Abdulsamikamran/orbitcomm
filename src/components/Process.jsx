import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Discover", desc: "We map your current setup, costs and pain points across voice, messaging and IT." },
  { n: "02", title: "Design", desc: "A tailored plan that consolidates the right services around how your teams actually work." },
  { n: "03", title: "Deploy", desc: "Seamless migration and number porting with zero-drama cutover and hands-on onboarding." },
  { n: "04", title: "Support", desc: "Continuous monitoring and a 24/7 desk that treats your uptime like our own." },
];

export default function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container">
        <Reveal>
          <div style={{ maxWidth: 600, marginBottom: 56 }}>
            <span className="eyebrow">How it works</span>
            <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", margin: "18px 0 0" }}>
              From tangled vendors to one clean line.
            </h2>
          </div>
        </Reveal>

        <div className="proc-grid">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="proc-step"
            >
              <div className="proc-num">{s.n}</div>
              <div className="proc-dot" />
              <h3 style={{ fontSize: "1.25rem", margin: "18px 0 10px" }}>{s.title}</h3>
              <p style={{ fontSize: "0.96rem", color: "var(--slate)" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .proc-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 26px; position: relative; }
        .proc-step { position: relative; padding-top: 26px; }
        .proc-step::before {
          content:""; position: absolute; top: 6px; left: 0; right: -26px; height: 1px;
          background: linear-gradient(90deg, var(--teal), var(--blue)); opacity: .35;
        }
        .proc-step:last-child::before { right: 0; }
        .proc-num { font-family: var(--font-display); font-weight: 800; font-size: 2.4rem; letter-spacing: -.04em; color: var(--bluetint); line-height: 1; }
        .proc-dot { position: absolute; top: 2px; left: 0; width: 9px; height: 9px; border-radius: 50%; background: var(--grad); box-shadow: 0 0 0 4px rgba(37,99,235,.12); }
        @media (max-width: 860px){ .proc-grid { grid-template-columns: repeat(2,1fr); gap: 34px 26px; } .proc-step::before { display:none; } }
        @media (max-width: 480px){ .proc-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
