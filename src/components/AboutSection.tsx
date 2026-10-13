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
              B.Sc. Cyber Security from <strong>USTH</strong> — graduated Very Good, Top 3 in first year, 3-year scholarship. Security is not a detour; it&apos;s where I always wanted to end up.
            </p>
            <p>
              I came up through <strong>full-stack engineering</strong> (Node.js, React, TypeScript, Docker). That background is now an offensive asset — I read code the way developers write it, which means I find the logic flaws they miss.
            </p>
            <p>
              Real-world work: performed a security review on a <strong>production document-processing app</strong> (IDOR, XXE, SSRF, Zip Slip, Pickle RCE, Prompt Injection) and reported fixes the devs could actually act on. Built <strong>SIDERIS</strong> — a reverse-proxy behavioral WAF sidecar with Redis-backed atomic enforcement, validated against OWASP Juice Shop attack scenarios. Led <strong>PhishShield</strong>, an ML-powered anti-phishing browser extension.
            </p>
            <p>
              Always studying something: malware analysis on REMnux, digital forensics (CHFI curriculum), CVE reproduction in lab VMs, offensive labs on VulnHub. The goal isn&apos;t certifications — it&apos;s depth. Long term: <strong>Master&apos;s in Cybersecurity</strong> and a <strong>university teaching role</strong> to give back what I was given.
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
                <span>Career &amp; Research Vision</span>
              </div>
              <ul className={styles.visionList}>
                <li>
                  <strong>Immediate Target:</strong> Penetration Tester / Product Security Engineer
                </li>
                <li>
                  <strong>Focus Areas:</strong> Web &amp; API Security, Source Code Audit, Threat Modeling
                </li>
                <li>
                  <strong>Currently Studying:</strong> Malware Analysis, Digital Forensics, Offensive Labs
                </li>
                <li>
                  <strong>Long-term:</strong> Master&apos;s in Cybersecurity &amp; University Lecturer
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
