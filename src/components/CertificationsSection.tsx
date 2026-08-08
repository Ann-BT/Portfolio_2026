// src/components/CertificationsSection.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";
import { certifications, Cert } from "@/data/certifications";
import styles from "./CertificationsSection.module.css";

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certifications" className={styles.certs}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>Certifications</span>
        </h2>

        {/* Cert Cards Grid */}
        <div className={styles.grid}>
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              layoutId={`cert-card-${cert.name}`}
              onClick={() => setActiveCert(cert)}
              className={styles.certCard}
            >
              <div className={styles.thumbWrapper}>
                <Image
                  src={`/certs/${cert.thumbnail}`}
                  alt={cert.name}
                  className={styles.thumb}
                  width={320}
                  height={200}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{cert.name}</h3>
                <span className={styles.issuer}>{cert.issuer}</span>
                <span className={styles.date}>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Lightbox Modal Overlay */}
        <AnimatePresence>
          {activeCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className={styles.lightboxOverlay}
            >
              {/* Close Button */}
              <button 
                className={styles.closeBtn} 
                onClick={() => setActiveCert(null)}
                aria-label="Close credentials preview"
              >
                <FiX />
              </button>

              {/* Modal Container */}
              <motion.div
                layoutId={`cert-card-${activeCert.name}`}
                className={styles.lightboxContent}
                onClick={(e) => e.stopPropagation()} // block backdrop click close
              >
                {/* Visual Preview */}
                <div className={styles.lightboxImageWrapper}>
                  <Image
                    src={`/certs/${activeCert.thumbnail}`}
                    alt={activeCert.name}
                    className={styles.lightboxImage}
                    width={540}
                    height={480}
                  />
                </div>

                {/* Details side panel */}
                <div className={styles.lightboxDetails}>
                  <h3 className={styles.lightboxTitle}>{activeCert.name}</h3>
                  <div className={styles.lightboxIssuer}>
                    ISSUED BY // {activeCert.issuer.toUpperCase()} · {activeCert.date}
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text)" }}>
                    This credential verifies hands-on security training, lab exercises, and certification exam credentials completed. 
                    Adding verification helps confirm analytical capabilities for defensive or offensive workflows.
                  </p>
                  
                  {activeCert.verifyUrl && (
                    <a
                      href={activeCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verifyBtn}
                    >
                      <span>Verify Credential</span>
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
