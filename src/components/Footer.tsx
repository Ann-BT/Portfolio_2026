// src/components/Footer.tsx
"use client";

import Link from "next/link";
import { config } from "@/data/config";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Side: Copyright */}
        <div className={styles.copyright}>
          © {currentYear} {config.name.toUpperCase()} · ALL RIGHTS RESERVED
        </div>

        {/* Right Side: Quick Links */}
        <div className={styles.links}>
          <Link href="/" className={styles.linkItem}>
            HOME
          </Link>
          <Link href="/projects" className={styles.linkItem}>
            PROJECTS
          </Link>
          <Link href="/research" className={styles.linkItem}>
            RESEARCH
          </Link>
          <Link href="/interests" className={styles.linkItem}>
            INTERESTS
          </Link>
        </div>
      </div>
    </footer>
  );
}
