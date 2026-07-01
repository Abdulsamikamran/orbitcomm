import { motion } from "framer-motion";
import { Server, Phone, Users, Headphones, MessageSquare, Globe, ArrowUpRight } from "lucide-react";
import { Reveal, stagger, item } from "./Reveal";

const services = [
  {
    icon: Server, title: "Managed IT Services",
    desc: "Proactive monitoring, patching, backups and helpdesk. We run the infrastructure so your team runs the business.",
    points: ["24/7 monitoring & alerting", "Endpoint & network security", "Cloud & on-prem management"],
  },
  {
    icon: Phone, title: "VoIP",
    desc: "Crystal-clear business calling over the internet — lower cost, richer features, and numbers that follow your people anywhere.",
    points: ["HD voice & call routing", "Number porting", "Softphone & desk phone"],
  },
  {
    icon: Users, title: "UCaaS",
    desc: "Voice, video, chat and presence in one unified platform, so conversations move across channels without missing a beat.",
    points: ["Voice, video & messaging", "Team presence", "Anywhere collaboration"],
  },
  {
    icon: Headphones, title: "CCaaS",
    desc: "A cloud contact centre that routes every customer to the right agent — with the queues, IVR and analytics to prove it.",
    points: ["Smart routing & IVR", "Omnichannel queues", "Live & historical analytics"],
  },
  {
    icon: MessageSquare, title: "SMS",
    desc: "Reliable business messaging for alerts, OTPs, reminders and campaigns — delivered at scale through a single API.",
    points: ["Bulk & transactional SMS", "Two-way conversations", "Delivery reporting"],
  },
  {
    icon: Globe, title: "B2B & B2C Platform",
    desc: "Purpose-built platforms that connect you to partners and customers — commerce, onboarding and support in one place.",
    points: ["Partner & customer portals", "Integrations & APIs", "Scalable architecture"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container">
        <Reveal>
          <div style={{ maxWidth: 640, marginBottom: 54 }}>
            <span className="eyebrow">What we do</span>
            <h2 style={{ fontSize: "clamp(2rem,4vw,2.9rem)", margin: "18px 0 16px" }}>
              One partner for the whole communication stack.
            </h2>
            <p style={{ fontSize: "1.08rem", color: "var(--slate)" }}>
              Six capabilities that plug into each other. Adopt one, or let them
              work as a single connected system.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="svc-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article key={s.title} variants={item} className="svc-card">
                <div className="svc-icon"><Icon size={22} color="#fff" strokeWidth={2} /></div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <h3 style={{ fontSize: "1.28rem", marginBottom: 10 }}>{s.title}</h3>
                  <ArrowUpRight size={18} color="var(--muted)" className="svc-arrow" />
                </div>
                <p style={{ fontSize: "0.97rem", color: "var(--slate)", marginBottom: 18 }}>{s.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.points.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: "0.9rem", color: "var(--slate)" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .svc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .svc-card {
          background: #fff; border: 1px solid var(--line); border-radius: var(--r-md);
          padding: 30px 28px; box-shadow: var(--shadow-sm);
          transition: transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s, border-color .3s;
          position: relative; overflow: hidden;
        }
        .svc-card::before {
          content:""; position:absolute; inset:0 auto auto 0; height:3px; width:100%;
          background: var(--grad); transform: scaleX(0); transform-origin: left;
          transition: transform .35s ease;
        }
        .svc-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: transparent; }
        .svc-card:hover::before { transform: scaleX(1); }
        .svc-card:hover .svc-arrow { color: var(--teal-deep); transform: translate(2px,-2px); }
        .svc-arrow { transition: color .25s, transform .25s; }
        .svc-icon {
          width: 48px; height: 48px; border-radius: 13px; background: var(--grad);
          display: grid; place-items: center; margin-bottom: 20px;
          box-shadow: 0 8px 18px rgba(37,99,235,.22);
        }
        @media (max-width: 900px){ .svc-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px){ .svc-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
