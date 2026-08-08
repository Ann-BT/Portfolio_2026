// src/components/ProjectsPreview.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";
import styles from "./ProjectsPreview.module.css";

export default function ProjectsPreview() {
  const router = useRouter();
  
  // Show featured projects
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects-preview" className={styles.projectsPreview}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>Featured Projects</span>
        </h2>

        {/* Project Cards Grid */}
        <div className={styles.grid}>
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              className={styles.card}
              onClick={() => router.push(`/projects/${project.slug}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Card Top */}
              <div className={styles.cardTop}>
                <span className={styles.categoryTag}>
                  {project.category.toUpperCase()} //
                </span>
                <div className={styles.iconLinks}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      onClick={(e) => e.stopPropagation()} // block card click
                      aria-label="GitHub Repository Link"
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
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
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
                <span className={styles.caseStudyLink}>
                  <span>Read case</span>
                  <FiArrowRight />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={styles.ctaWrapper}>
          <Link href="/projects" className={styles.viewAllBtn}>
            <span>View All Engineering Work</span>
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}
