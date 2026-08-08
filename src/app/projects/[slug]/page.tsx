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

function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIdx = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) parts.push(text.slice(lastIdx, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      parts.push(<code key={key++} className={styles.inlineCode}>{token.slice(1, -1)}</code>);
    }
    lastIdx = match.index + token.length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
}

function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.trim().split("\n");
  const nodes: React.ReactNode[] = [];
  let i = 0;
  let keyIdx = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      nodes.push(<h3 key={keyIdx++} className={styles.h3}>{parseInline(line.slice(4))}</h3>);
      i++; continue;
    }

    if (line.startsWith("#### ")) {
      nodes.push(<h4 key={keyIdx++} className={styles.h4}>{parseInline(line.slice(5))}</h4>);
      i++; continue;
    }

    if (line.trim() === "~~~") {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== "~~~") {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      nodes.push(
        <pre key={keyIdx++} className={styles.codeBlock}>
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    if (line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter((l) => !/^\s*\|[-:\s|]+\|\s*$/.test(l));
      const parsed = rows.map((r) =>
        r.split("|").slice(1, -1).map((cell) => cell.trim())
      );
      nodes.push(
        <div key={keyIdx++} className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>{parsed[0]?.map((cell, ci) => <th key={ci}>{parseInline(cell)}</th>)}</tr>
            </thead>
            <tbody>
              {parsed.slice(1).map((row, ri) => (
                <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{parseInline(cell)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (line.trim().startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].replace(/^\s*-\s+/, ""));
        i++;
      }
      nodes.push(
        <ul key={keyIdx++} className={styles.list}>
          {items.map((item, ii) => <li key={ii}>{parseInline(item)}</li>)}
        </ul>
      );
      continue;
    }

    if (line.trim() === "") { i++; continue; }

    nodes.push(<p key={keyIdx++} className={styles.paragraph}>{parseInline(line)}</p>);
    i++;
  }

  return nodes;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className={styles.casePage}>
        <div className="swiss-container">

          <Link href="/projects" className={styles.backBtn}>
            <FiArrowLeft />
            <span>Back to projects</span>
          </Link>

          <header className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.metaGrid}>
              <div>
                <div className={styles.metaLabel}>Category //</div>
                <div className={styles.metaVal}>{project.category.toUpperCase()}</div>
              </div>
              <div>
                <div className={styles.metaLabel}>Date //</div>
                <div className={styles.metaVal}>{project.date}</div>
              </div>
              <div>
                <div className={styles.metaLabel}>Stack //</div>
                <div className={styles.tagsRow}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.linksBtns}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                    <FiGithub /><span>Source Code</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.demoBtn}>
                    <FiExternalLink /><span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </header>

          <article className={styles.body}>
            {renderMarkdown(project.content)}
          </article>

        </div>
      </section>
      <Footer />
    </>
  );
}
