// src/components/SkillsSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Terminal, Radio, Code, BookOpen } from "lucide-react";
import { skills, SkillCategory } from "@/data/skills";
import styles from "./SkillsSection.module.css";

const iconMap = {
  Shield: Shield,
  Terminal: Terminal,
  Radio: Radio,
  Code: Code,
  BookOpen: BookOpen
};

export default function SkillsSection() {
  const [activeFlippedCard, setActiveFlippedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    // Enable click-to-flip for mobile compatibility
    if (activeFlippedCard === id) {
      setActiveFlippedCard(null);
    } else {
      setActiveFlippedCard(id);
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>Security & Engineering Skills</span>
        </h2>

        {/* 3D Flip Card Grid */}
        <div className={styles.grid}>
          {skills.map((skill: SkillCategory, idx: number) => {
            const IconComponent = iconMap[skill.iconName] || Shield;
            const isFlippedMobile = activeFlippedCard === skill.id;

            return (
              <motion.div
                key={skill.id}
                className={styles.card}
                onClick={() => toggleCard(skill.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <div 
                  className={`${styles.cardInner} ${isFlippedMobile ? styles.flipped : ""}`}
                >
                  {/* Front Side */}
                  <div className={styles.faceFront}>
                    <div className={styles.iconWrapper}>
                      <IconComponent size={44} strokeWidth={1.2} />
                    </div>
                    <h3 className={styles.title}>{skill.name}</h3>
                    <span className={styles.badge}>
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
