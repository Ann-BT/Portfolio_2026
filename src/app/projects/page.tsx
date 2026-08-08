// src/app/projects/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { projects, Project } from "@/data/projects";
import Footer from "@/components/Footer";
import styles from "./Projects.module.css";

const categories = [
  { id: "all", label: "All Work" },
  { id: "security", label: "Cybersecurity" },
  { id: "webdev", label: "Web Development" }
];

const categoryLabels: Record<string, string> = {
  security: "CYBERSECURITY",
  webdev: "WEB DEVELOPMENT",
  tools: "TOOLS & AUTOMATION",
  other: "OTHER"
};

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    return project.category === selectedFilter;
  });

  return (
    <>
      <section className={styles.projectsPage}>
        <div className="swiss-container">
          
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>Engineering Archive</h1>
            <p className={styles.subtitle}>
              A registry of my cybersecurity tools, penetration testing labs, incident write-ups, and web development projects.
            </p>
          </div>

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`${styles.filterBtn} ${
                  selectedFilter === cat.id ? styles.activeFilter : ""
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid list of project cards */}
          <motion.div layout className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: Project, idx: number) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={styles.card}
                  onClick={() => router.push(`/projects/${project.slug}`)}
                >
                  {/* Card Top */}
                  <div className={styles.cardTop}>
                    <span className={styles.categoryTag}>
                      {(categoryLabels[project.category] || project.category.toUpperCase())} //
                    </span>
                    <div className={styles.iconLinks}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconLink}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="GitHub link"
                        >
                          <FaGithub />
                        </a>
                      )}
                      <span className={styles.iconLink}>
                        <FiArrowUpRight />
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDesc}>{project.description}</p>
                  </div>

                  {/* Card Footer */}
                  <div className={styles.cardFooter}>
                    <div className={styles.tagsRow}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={styles.readMore}>
                      <span>Case details</span>
                      <FiArrowRight />
                    </span>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}
