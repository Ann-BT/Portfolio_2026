// src/components/AboutSection.tsx
"use client";

import { useState } from "react";
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
        <h3 className={styles.skillsSubtitle}>Security & Engineering Skills</h3>

        {/* 2x2 Skills Flip Cards Grid */}
        <div className={styles.skillsGrid}>
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
