// src/app/research/page.tsx
"use client";

import Footer from "@/components/Footer";
import styles from "./Research.module.css";
import { Terminal } from "lucide-react";

export default function ResearchPage() {
  return (
    <>
      <section className={styles.researchPage}>
        <div className="swiss-container">
          
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.title}>Research & Writings</h1>
            <p className={styles.subtitle}>
              My academic interests, upcoming publications, and security review notes as I prepare for graduate studies and academia.
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
                NO ACTIVE PUBLICATIONS //
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: "420px", margin: "0 auto", lineHeight: 1.5 }}>
                Research papers and security writeups will appear here as academic works and graduate projects progress. Check back soon.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
