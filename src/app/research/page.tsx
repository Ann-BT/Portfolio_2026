// src/app/research/page.tsx
"use client";

import { motion } from "framer-motion";
import { interestAreas, papers, researchNotes } from "@/data/research";
import Footer from "@/components/Footer";
import styles from "./Research.module.css";

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

          {/* 1. Research Interests */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleDot} />
            <span>Research Interests</span>
          </h2>
          <div className={styles.interestsGrid}>
            {interestAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={styles.interestCard}
              >
                <h3 className={styles.interestTitle}>{area.title}</h3>
                <p className={styles.interestDesc}>{area.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 2. Papers & Publications */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleDot} />
            <span>Papers & Publications</span>
          </h2>
          <div className={styles.papersList}>
            {papers.map((paper, idx) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={styles.paperCard}
              >
                <div className={styles.paperHeader}>
                  <div className={styles.paperMeta}>
                    <span>{paper.year}</span>
                    <span className={styles.statusBadge}>
                      {paper.status.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className={styles.paperTitle}>{paper.title}</h3>
                  {paper.venue && (
                    <span style={{ fontSize: "0.85rem", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                      VENUE // {paper.venue.toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className={styles.paperMeta} style={{ marginBottom: "0.5rem" }}>Abstract //</h4>
                  <p className={styles.paperAbstract}>{paper.abstract}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. Research Notes */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleDot} />
            <span>Research Notes & Reviews</span>
          </h2>
          <div className={styles.notesGrid}>
            {researchNotes.map((note, idx) => (
              <motion.div
                key={note.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={styles.noteCard}
              >
                <div>
                  <h3 className={styles.noteTitle}>{note.title}</h3>
                  <p className={styles.noteSummary}>{note.summary}</p>
                </div>
                <div className={styles.noteFooter}>
                  <span className={styles.noteDate}>{note.date}</span>
                  <div className={styles.noteTags}>
                    {note.tags.map((tag) => (
                      <span key={tag} className={styles.noteTag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
