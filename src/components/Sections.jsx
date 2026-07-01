import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

export function Stats() {
  const rows = [
    { k: "One", v: "contract for every service" },
    { k: "Zero", v: "downtime migrations" },
    { k: "Global", v: "numbers & routing" },
  ];
  return (
    <section
      id="stats"
      className="section-pad"
      style={{ background: "var(--wash)", borderTop: "1px solid var(--line)" }}
    >
      <div
        className="container stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 24,
          textAlign: "center",
        }}
      >
        {rows.map((r, i) => (
          <Reveal key={r.v} delay={i * 0.1}>
            <div>
              <div
                className="gradient-text"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
                  letterSpacing: "-.03em",
                }}
              >
                {r.k}
              </div>
              <div style={{ color: "var(--slate)", marginTop: 6 }}>{r.v}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <style>{`@media (max-width:640px){ .stats-grid { grid-template-columns: 1fr !important; gap: 30px !important; } }`}</style>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="cta-band"
        >
          <div className="cta-glow" aria-hidden />
          <div style={{ position: "relative", zIndex: 2 }}>
            <span className="eyebrow" style={{ color: "#bfe8f2" }}>
              Let's connect
            </span>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(2rem,4vw,2.9rem)",
                margin: "16px 0 16px",
                maxWidth: 620,
              }}
            >
              Ready to run your business on one connected network?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.82)",
                fontSize: "1.08rem",
                maxWidth: 540,
                marginBottom: 30,
              }}
            >
              Tell us what you're using today and we'll show you what
              consolidating with Orbitcomm looks like — no obligation.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="mailto:hello@Orbitcomm.example"
                className="btn"
                style={{ background: "#fff", color: "var(--blue-deep)" }}
              >
                Book a consultation <ArrowRight size={17} />
              </a>
              <a
                href="tel:+10000000000"
                className="btn"
                style={{
                  background: "rgba(255,255,255,.12)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,.25)",
                }}
              >
                Call us
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-band {
          position: relative; overflow: hidden;
          background: linear-gradient(120deg, #0e7490 0%, #1d4ed8 100%);
          border-radius: var(--r-lg); padding: 64px 56px;
          box-shadow: 0 30px 70px rgba(29,78,216,.28);
        }
        .cta-glow {
          position: absolute; top: -40%; right: -10%; width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(56,189,248,.5), transparent 62%);
          filter: blur(20px); z-index: 1;
        }
        @media (max-width: 600px){ .cta-band { padding: 44px 30px; } }
      `}</style>
    </section>
  );
}

export function Footer() {
  const cols = [
    {
      h: "Services",
      items: [
        "Managed IT",
        "VoIP",
        "UCaaS",
        "CCaaS",
        "SMS",
        "B2B/B2C Platform",
      ],
    },
    { h: "Company", items: ["About", "Platform", "How it works", "Careers"] },
    { h: "Resources", items: ["Support", "Status", "Privacy", "Terms"] },
  ];
  return (
    <footer
      style={{ background: "var(--ink)", color: "#c6d0dd", paddingTop: 64 }}
    >
      <div className="container">
        <div className="foot-grid">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <img
                src="/logo.png"
                alt="Orbitcomm"
                style={{ height: 120, width: 140, objectFit: "contain" }}
              />
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#93a2b5",
                maxWidth: 260,
                marginBottom: 18,
              }}
            >
              Managed IT and cloud communications, unified under one dependable
              partner.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 14,
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <Mail size={15} color="var(--teal)" /> hello@Orbitcomm.example
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <Phone size={15} color="var(--teal)" /> +1 (000) 000-0000
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <MapPin size={15} color="var(--teal)" /> Your City, Country
              </span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4
                style={{
                  color: "#fff",
                  fontSize: 14,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {c.h}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14.5,
                        color: "#a9b6c6",
                        transition: "color .2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) => (e.target.style.color = "#a9b6c6")}
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.1)",
            marginTop: 48,
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 13.5,
            color: "#7c8aa0",
          }}
        >
          <span>
            © {new Date().getFullYear()} Orbitcomm. All rights reserved.
          </span>
          <span>Built for reliability, security and scale.</span>
        </div>
      </div>
      <style>{`
        .foot-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 40px; }
        @media (max-width: 820px){ .foot-grid { grid-template-columns: 1fr 1fr; gap: 34px; } }
        @media (max-width: 480px){ .foot-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}
