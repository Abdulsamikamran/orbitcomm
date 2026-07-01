import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import HeroMesh from "./HeroMesh";

const ease = [0.2, 0.8, 0.2, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const line = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        paddingTop: 132,
        paddingBottom: 90,
        overflow: "hidden",
      }}
    >
      {/* soft background field */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(900px 500px at 78% 18%, rgba(37,99,235,.08), transparent 60%)," +
            "radial-gradient(700px 500px at 8% 70%, rgba(8,145,178,.07), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.5,
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at 60% 40%, #000 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 60% 40%, #000 0%, transparent 72%)",
        }}
      />

      <div
        className="container hero-grid"
        style={{ position: "relative", zIndex: 2 }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero-copy"
        >
          <motion.div variants={line}>
            <span className="eyebrow">Managed IT & Cloud Communications</span>
          </motion.div>

          <motion.h1
            variants={line}
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 4rem)",
              marginTop: 20,
              marginBottom: 22,
            }}
          >
            Every channel your business
            <br />
            runs on, <span className="gradient-text">connected as one.</span>
          </motion.h1>

          <motion.p
            variants={line}
            style={{
              fontSize: "clamp(1.02rem, 1.4vw, 1.18rem)",
              color: "var(--slate)",
              maxWidth: 520,
              marginBottom: 34,
            }}
          >
            Orbitcomm unifies voice, messaging, contact centre and managed IT
            under a single partner — so your teams stay reachable, your systems
            stay secure, and your customers never hit a dead line.
          </motion.p>

          <motion.div
            variants={line}
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <a href="#contact" className="btn btn-primary">
              Start a project <ArrowRight size={17} />
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore services
            </a>
          </motion.div>

          <motion.div
            variants={line}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: 30,
              color: "var(--muted)",
              fontSize: 14,
            }}
          >
            <ShieldCheck size={17} color="var(--teal)" />
            Enterprise-grade uptime · Security-first delivery
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
        >
          <HeroMesh />
        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 940px) {
          .hero-grid { grid-template-columns: 1fr; gap: 12px; }
          .hero-visual { order: -1; margin-bottom: 8px; }
          .hero-copy { text-align: left; }
        }
      `}</style>
    </section>
  );
}
