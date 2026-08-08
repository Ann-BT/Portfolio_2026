// src/components/AboutSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Terminal, Radio, Code } from "lucide-react";
import { config } from "@/data/config";
import { skills, SkillCategory } from "@/data/skills";
import styles from "./AboutSection.module.css";

const iconMap = {
  Shield: Shield,
  Terminal: Terminal,
  Radio: Radio,
  Code: Code
};

export default function AboutSection() {
  const [activeFlippedCard, setActiveFlippedCard] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = (id: string) => {
    if (activeFlippedCard === id) {
      setActiveFlippedCard(null);
    } else {
      setActiveFlippedCard(id);
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>About Me</span>
        </h2>

        {/* Narrative and Languages Grid */}
        <div className={styles.grid}>
          <div className={styles.story}>
            <p>
              I hold a Bachelor&apos;s degree in Cyber Security from the <strong>University of Science and Technology of Hanoi (USTH)</strong> with a graduation <strong>Classification of Very Good</strong>. 
              My expertise spans defensive security operations, threat modeling, log analysis, and full-stack web engineering.
            </p>
            <p>
              I am actively seeking professional opportunities in <strong>Blue Team Cybersecurity</strong> (SOC Analyst, Incident Response, Defensive Security), <strong>Web Development</strong> (Frontend / Full-stack), or roles across the broader Cyber &amp; IT domain. 
              My hands-on experience includes engineering <strong>SIDERIS</strong> (a self-hosted behavioral WAF proxy), developing <strong>PhishShield</strong> (an ML-powered anti-phishing extension), and performing malware triage and web security audits.
            </p>
            <p>
              Outside of cybersecurity and development, I study French and Chinese, author security write-ups, and enjoy gaming. 
              In the future, I aim to pursue a Master&apos;s degree in Cybersecurity and transition into academic research and teaching.
            </p>
          </div>

          <div className={styles.rightColumn}>
            {/* Decrypted Languages Box */}
            <motion.div 
              className={styles.languagesBox}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.languagesTitle}>Decrypted Languages //</div>
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

        {/* Horizontal Divider */}
        <hr className={styles.divider} />

        {/* Skills Subtitle */}
        <h3 className={styles.skillsSubtitle}>My Inventory</h3>

        {/* Bulletproof Dynamic Inline Grid - Forces 2 Columns on Desktop */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: windowWidth > 580 ? "1fr 1fr" : "1fr", 
            gap: "2rem",
            maxWidth: "960px",
            margin: "0 auto"
          }}
        >
          {skills.map((skill: SkillCategory, idx: number) => {
            const IconComponent = iconMap[skill.iconName] || Shield;
            const isFlippedMobile = activeFlippedCard === skill.id;

            return (
              <motion.div
                key={skill.id}
                className={styles.card}
                onClick={() => toggleCard(skill.id)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <div className={`${styles.cardInner} ${isFlippedMobile ? styles.flipped : ""}`}>
                  {/* Front Side */}
                  <div className={styles.faceFront}>
                    <div className={styles.iconWrapper}>
                      <IconComponent size={34} strokeWidth={1.2} />
                    </div>
                    <h4 className={styles.cardTitle}>{skill.name}</h4>
                    <span className={styles.badgeCount}>
                      {skill.tools.length} MODULES
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className={styles.faceBack}>
                    <div>
                      <div className={styles.backHeader}>
                        {skill.id.toUpperCase()} // TOOLS
                      </div>
                      <ul className={styles.toolsList}>
                        {skill.tools.map((tool) => (
                          <li key={tool} className={styles.toolTag}>
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.note}>{skill.note}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
