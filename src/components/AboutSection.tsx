// src/components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { config } from "@/data/config";
import styles from "./AboutSection.module.css";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "03", label: "Certifications" },
  { value: "40+", label: "CTF Challenges" },
  { value: "3rd Yr", label: "USTH Student" }
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>About Me</span>
        </h2>

        <div className={styles.grid}>
          {/* Left: Detailed Story */}
          <div className={styles.story}>
            <p>
              I am a third-year Cyber Security student at the <strong>University of Science and Technology of Hanoi (USTH)</strong>. 
              My academic and professional journey is focused on defensive security operations, threat modeling, and network triage.
            </p>
            <p>
              I specialize in Blue Team operations, with hands-on practice analyzing system logs, triaging web application exploits, and writing incident reports. 
              My primary research project is <strong>SIDERIS</strong>, a custom, production-style sidecar WAF that performs real-time traffic analysis and active mitigation blocking.
            </p>
            <p>
              Outside of academics, I study French and Chinese, write cybersecurity write-ups, and enjoy gaming. 
              My aspiration is to pursue a Master's degree in Cybersecurity and eventually transition into an academic teaching and research role as a university professor.
            </p>
          </div>

          {/* Right: Stats & Language Proficiency */}
          <div>
            {/* Stats grid */}
            <div className={styles.statsGrid}>
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className={styles.statBox}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div className={styles.statNum}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Language Box */}
            <motion.div 
              className={styles.languagesBox}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className={styles.languagesTitle}>Decrypted Languages:</div>
              <div className={styles.langsList}>
                {config.languages.map((lang) => (
                  <span key={lang.name} className={lang.name === "Chinese" ? `${styles.langBadge} clickable` : styles.langBadge}>
                    {lang.name} : {lang.level}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
