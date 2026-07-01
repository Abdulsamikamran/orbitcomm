import { Reveal } from "./Reveal";

const stats = [
  { k: "99.99%", v: "Voice network uptime" },
  { k: "24/7", v: "Monitored support desk" },
  { k: "6", v: "Services, one contract" },
  { k: "<15m", v: "Avg. critical response" },
];

export default function TrustBar() {
  return (
    <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--wash)" }}>
      <div className="container" style={{ padding: "34px 24px" }}>
        <Reveal>
          <div className="trust-grid">
            {stats.map((s) => (
              <div key={s.v} style={{ textAlign: "center" }}>
                <div className="gradient-text" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.1rem)", letterSpacing: "-0.03em" }}>{s.k}</div>
                <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 4 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        .trust-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        @media (max-width: 640px){ .trust-grid { grid-template-columns: repeat(2,1fr); gap: 28px 16px; } }
      `}</style>
    </section>
  );
}
