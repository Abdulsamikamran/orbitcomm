import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Server,
  Users,
  Headphones,
  Globe,
} from "lucide-react";

/* Node layout on a 460x460 canvas */
const nodes = [
  { id: "core", x: 230, y: 230, r: 46, core: true },
  { id: "voip", x: 230, y: 60, icon: Phone, label: "VoIP" },
  { id: "uc", x: 400, y: 150, icon: Users, label: "UCaaS" },
  { id: "cc", x: 400, y: 320, icon: Headphones, label: "CCaaS" },
  { id: "sms", x: 230, y: 405, icon: MessageSquare, label: "SMS" },
  { id: "it", x: 60, y: 320, icon: Server, label: "IT" },
  { id: "plat", x: 60, y: 150, icon: Globe, label: "B2B/B2C" },
];

const links = ["voip", "uc", "cc", "sms", "it", "plat"];

export default function HeroMesh() {
  const core = nodes[0];
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 500,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: "8% 8%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,.14), rgba(8,145,178,.06) 55%, transparent 72%)",
          filter: "blur(6px)",
          zIndex: 0,
        }}
      />

      <motion.svg
        viewBox="0 0 460 460"
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          zIndex: 1,
          overflow: "visible",
        }}
        initial="hidden"
        animate="show"
      >
        <defs>
          <linearGradient id="link" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0891b2" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
          <radialGradient id="coreFill" cx="50%" cy="40%" r="70%">
            <stop offset="0" stopColor="#38bdf8" />
            <stop offset="55%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#2563eb" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* animated links + traveling packets */}
        {links.map((id, i) => {
          const n = nodes.find((x) => x.id === id);
          return (
            <g key={id}>
              <motion.line
                x1={core.x}
                y1={core.y}
                x2={n.x}
                y2={n.y}
                stroke="url(#link)"
                strokeWidth="1.6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + i * 0.12,
                  ease: "easeOut",
                }}
              />
              <motion.circle
                r="3.2"
                fill="#2563eb"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [core.x, n.x, core.x],
                  cy: [core.y, n.y, core.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3.2,
                  delay: 1.4 + i * 0.35,
                  repeat: Infinity,
                  repeatDelay: 1.6,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* satellite nodes */}
        {nodes
          .filter((n) => !n.core)
          .map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.1,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                <motion.g
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="30"
                    fill="#fff"
                    stroke="#e7ecf2"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="30"
                    fill="url(#link)"
                    opacity="0.06"
                  />
                  <foreignObject
                    x={n.x - 15}
                    y={n.y - 22}
                    width="30"
                    height="30"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Icon size={19} color="#0e7490" strokeWidth={1.9} />
                    </div>
                  </foreignObject>
                  <text
                    x={n.x}
                    y={n.y + 20}
                    textAnchor="middle"
                    fontFamily="Sora, sans-serif"
                    fontSize="8.5"
                    fontWeight="600"
                    fill="#48566a"
                  >
                    {n.label}
                  </text>
                </motion.g>
              </motion.g>
            );
          })}

        {/* pulsing core */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.circle
            cx={core.x}
            cy={core.y}
            r={core.r}
            fill="url(#coreFill)"
            filter="url(#soft)"
            animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.15, 0.35] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: `${core.x}px ${core.y}px` }}
          />
          <circle cx={core.x} cy={core.y} r={core.r} fill="url(#coreFill)" />
          <foreignObject x={core.x - 26} y={core.y - 30} width="52" height="52">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Server size={26} color="#fff" strokeWidth={2} />
            </div>
          </foreignObject>
          <text
            x={core.x}
            y={core.y + 24}
            textAnchor="middle"
            fontFamily="Sora, sans-serif"
            fontSize="10"
            fontWeight="700"
            fill="#fff"
          >
            Orbitcomm
          </text>
        </motion.g>
      </motion.svg>
    </div>
  );
}
