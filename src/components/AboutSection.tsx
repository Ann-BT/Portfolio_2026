// src/components/AboutSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Terminal, Radio, Code, GraduationCap, Compass, BookOpen } from "lucide-react";
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

        {/* Narrative and Highlights Grid */}
        <div className={styles.grid}>
          <div className={styles.story}>
            <p>
              I hold a Bachelor&apos;s degree in Cyber Security from <strong>USTH</strong> (Classification: Very Good, Top 3 first year, 3-year scholarship).
            </p>
            <p>
              With an <strong>IT Engineering</strong> background in full-stack web and microservices, I transitioned into <strong>Penetration Testing &amp; Product Security</strong>. Knowing how developers build applications allows me to dissect complex business logic from an attacker&apos;s perspective and provide actionable, developer-friendly remediation.
            </p>
            <p>
              My hands-on experience includes security reviews on production applications (finding IDOR, XXE, SSRF, Deserialization, Prompt Injection), engineering <strong>SIDERIS</strong> (a behavioral WAF sidecar), and leading <strong>PhishShield</strong> (an ML-powered anti-phishing extension).
            </p>
            <p>
              Passionate about deep vulnerability research and offensive security labs. In the future, I plan to pursue a <strong>Master&apos;s in Cybersecurity</strong> and aspire to teach as a <strong>university lecturer</strong>.
            </p>
          </div>

          <div className={styles.rightColumn}>
            {/* Academic & Vision Card */}
            <motion.div 
              className={styles.visionBox}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.visionHeader}>
                <GraduationCap size={18} />
                <span>Academic &amp; Research Vision</span>
              </div>
              <ul className={styles.visionList}>
                <li>
                  <strong>Target Role:</strong> Penetration Tester / Product Security Engineer
                </li>
                <li>
                  <strong>Specialization:</strong> Web &amp; API Security, Source Code Audit, Threat Detection
                </li>
                <li>
                  <strong>Academic Track:</strong> USTH Cyber Security (Top 3 First Year, 3-Year Scholarship)
                </li>
                <li>
                  <strong>Future Goal:</strong> Master&apos;s Degree in Cybersecurity &amp; University Lecturer
                </li>
              </ul>
            </motion.div>

            {/* Decrypted Languages Box */}
            <motion.div 
              className={styles.languagesBox}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
        <h3 className={styles.skillsSubtitle}>Security &amp; Engineering Inventory</h3>

        {/* Dynamic Inline Grid - 2 Columns on Desktop */}
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
