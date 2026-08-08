// src/app/interests/page.tsx
"use client";

import Footer from "@/components/Footer";
import styles from "./Interests.module.css";
import { Terminal } from "lucide-react";

export default function InterestsPage() {
  return (
    <>
      <section className={styles.interestsPage}>
        <div className="swiss-container">
          
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.title}>Interests</h1>
            <p className={styles.subtitle}>
              Off-duty activities, reading logs, visual gallery collections, and music playlists.
            </p>
          </header>

          {/* Empty State Placeholder */}
          <div 
            style={{
              border: "1px dashed var(--border-dim)",
              padding: "4rem 2rem",
              borderRadius: "6px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "4rem",
              backgroundColor: "rgba(255, 255, 255, 0.01)"
            }}
          >
            <Terminal size={32} style={{ color: "var(--muted)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600, color: "var(--text-bright)" }}>
                INTERESTS VAULT UNDER CONSTRUCTION //
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: "420px", margin: "0 auto", lineHeight: 1.5 }}>
                This section is currently empty while a new design and catalog are being prepared. Check back soon.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
