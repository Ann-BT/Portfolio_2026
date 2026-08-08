// src/app/projects/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";
import styles from "./CaseStudy.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // A very lightweight parser to map custom markdown definitions in content to clean tags
  const renderMarkdown = (text: string) => {
    const blocks = text.trim().split("\n\n");
    return blocks.map((block, idx) => {
      if (block.startsWith("### ")) {
        return <h3 key={idx}>{block.replace("### ", "")}</h3>;
      }
      if (block.startsWith("#### ")) {
        return <h4 key={idx}>{block.replace("#### ", "")}</h4>;
      }
      if (block.trim().startsWith("- ")) {
        const items = block
          .split("\n")
          .map((line) => line.replace(/^\s*-\s+/, "").trim());
        return (
          <ul key={idx}>
            {items.map((item, itemIdx) => (
              <li key={itemIdx}>
                {item.split("**").map((part, pIdx) =>
                  pIdx % 2 === 1 ? <strong key={pIdx}>{part}</strong> : part
                )}
              </li>
            ))}
          </ul>
        );
      }
      // Renders standard paragraph with bold text parsing
      const parts = block.split("**");
      return (
        <p key={idx}>
          {parts.map((part, pIdx) =>
            pIdx % 2 === 1 ? <strong key={pIdx}>{part}</strong> : part
          )}
        </p>
      );
    });
  };

  return (
    <>
      <section className={styles.casePage}>
        <div className="swiss-container">
          
          {/* Back button */}
          <Link href="/projects" className={styles.backBtn}>
            <FiArrowLeft />
            <span>Back to archive</span>
          </Link>

          {/* Header section */}
          <header className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.metaGrid}>
              <div>
                <div className={styles.metaLabel}>Domain //</div>
                <div className={styles.metaVal}>{project.category.toUpperCase()}</div>
              </div>
              <div>
                <div className={styles.metaLabel}>Date //</div>
                <div className={styles.metaVal}>{project.date}</div>
              </div>
              <div>
                <div className={styles.metaLabel}>Core Tech //</div>
                <div className={styles.tagsRow}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className={styles.metaLabel}>Repository //</div>
                <div className={styles.metaVal}>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubBtn}
                    >
                      <span>Code</span>
                      <FiGithub />
                    </a>
                  ) : (
                    <span style={{ color: "var(--muted)" }}>Private</span>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Render Case Study Body */}
          <article className={styles.body}>
            {renderMarkdown(project.content)}
          </article>

        </div>
      </section>

      <Footer />
    </>
  );
}
