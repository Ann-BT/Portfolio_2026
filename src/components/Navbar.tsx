// src/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";
import { config } from "@/data/config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Interests", href: "/interests" },
  { label: "Contact", href: "/#contact" }
];

interface NavbarProps {
  onTerminalToggle: () => void;
}

export default function Navbar({ onTerminalToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  // Shrink navbar size on scroll
  const navHeight = useTransform(scrollYProgress, [0, 0.05], ["80px", "54px"]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && typeof window !== "undefined" && window.location.hash === href.replace("/", "");
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      style={{ height: navHeight }}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className={styles.progressBar} 
        style={{ scaleX: scrollYProgress }} 
      />

      <div className={styles.container} style={{ height: "100%" }}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img 
            src="/logo.png" 
            alt="Avatar" 
            className={styles.logoImg}
          />
          <span>{config.nickname.toUpperCase()}</span>
          <span className={styles.logoDot} />
        </Link>

        {/* Desktop Links */}
        <ul className={styles.linksList}>
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.label} className={styles.linkItem}>
                <Link
                  href={link.href}
                  className={`${styles.linkAnchor} ${active ? styles.activeLink : ""}`}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.div
                    layoutId="navbar-underline"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Section / Terminal Launcher Overlay */}
        <div className={styles.rightSection}>
          <button onClick={onTerminalToggle} className={styles.terminalBtn}>
            [/terminal]
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <div
            className={styles.menuBar}
            style={{
              transform: isOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <div
            className={styles.menuBar}
            style={{
              opacity: isOpen ? 0 : 1,
              margin: "4px 0"
            }}
          />
          <div
            className={styles.menuBar}
            style={{
              transform: isOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className={styles.mobileOverlay}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <li key={link.label} className={styles.mobileLinkItem}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </li>
              ))}
              <li className={styles.mobileLinkItem} style={{ marginTop: "1rem" }}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onTerminalToggle();
                  }}
                  className={styles.terminalBtn}
                  style={{ display: "inline-block" }}
                >
                  [/terminal]
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
