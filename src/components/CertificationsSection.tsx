// src/components/CertificationsSection.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { certifications, Cert } from "@/data/certifications";
import styles from "./CertificationsSection.module.css";

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  // Close lightbox on Escape key press & Sync window size
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCerts = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className={styles.certs}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>Certifications</span>
        </h2>

        {/* Bulletproof Dynamic Inline Grid - Forces 3 Columns on Desktop */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: windowWidth > 992 ? "repeat(3, 1fr)" : windowWidth > 640 ? "repeat(2, 1fr)" : "1fr", 
            gap: "2rem" 
          }}
        >
          {visibleCerts.map((cert) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button for View All */}
        {certifications.length > 6 && (
          <div className={styles.toggleBtnContainer}>
            <button 
              className={styles.viewAllBtn} 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "SHOW LESS //" : "VIEW ALL CERTIFICATIONS //"}
            </button>
          </div>
        )}

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
                    ISSUED BY // {activeCert.issuer.toUpperCase()}
                  </div>
                  <p className={styles.lightboxDesc}>
                    {activeCert.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
