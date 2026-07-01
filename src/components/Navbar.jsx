import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#process" },
  { label: "Company", href: "#stats" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.82)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--line)"
          : "1px solid transparent",
        transition: "background .3s, border-color .3s",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <img
            src="/logo.png"
            alt="Orbitcomm"
            style={{ height: 120, width: 100, objectFit: "contain" }}
          />
        </a>

        <nav
          className="desktop-nav"
          style={{ display: "flex", gap: 34, alignItems: "center" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "var(--slate)",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--teal-deep)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--slate)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="desktop-cta">
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: "11px 22px", fontSize: 14 }}
          >
            Get in touch
          </a>
        </div>

        <button
          className="mobile-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          style={{ display: "none", color: "var(--ink)" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              overflow: "hidden",
              background: "#fff",
              borderTop: "1px solid var(--line)",
            }}
          >
            <div
              className="container"
              style={{
                padding: "18px 24px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "12px 0",
                    fontSize: 17,
                    fontWeight: 500,
                    color: "var(--ink)",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary"
                style={{ marginTop: 16, justifyContent: "center" }}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}
