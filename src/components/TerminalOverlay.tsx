// src/components/TerminalOverlay.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/data/config";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import styles from "./TerminalOverlay.module.css";

interface HistoryItem {
  command: string;
  output: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalOverlay({ isOpen, onClose }: Props) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom on history change
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = "";

    switch (trimmed) {
      case "exit":
        onClose();
        return;

      case "help":
        response = `Available commands:
  whoami        Display user identity details.
  ls            List files in current directory.
  cat <file>    Display content of a file.
  clear         Clear the terminal screen.
  exit          Close this terminal window.
  sudo          Request root access credentials.
  help          Display this menu.`;
        break;

      case "whoami":
        response = `User: Bùi Trường An (Merlin)
Major: Cyber Security
Affiliation: University of Science and Technology of Hanoi (USTH)
Aspirations: Master's Degree Candidate & Future Professor
Objective: SOC Analyst / Defensive security engineering.`;
        break;

      case "ls":
        response = `skills.txt      projects.json      contact.json`;
        break;

      case "clear":
        setHistory([]);
        return;

      case "sudo":
      case "sudo su":
        response = `Permission denied. Incident has been reported to the root administrator. Nice try 😏`;
        break;

      default:
        if (trimmed.startsWith("cat ")) {
          const filename = trimmed.substring(4).trim();
          if (filename === "skills.txt") {
            response = skills
              .map((s) => `[${s.name}]\n  Note: ${s.note}\n  Tools: ${s.tools.join(", ")}`)
              .join("\n\n");
          } else if (filename === "projects.json") {
            response = JSON.stringify(
              projects.map((p) => ({ title: p.title, tags: p.tags, date: p.date })),
              null,
              2
            );
          } else if (filename === "contact.json") {
            response = JSON.stringify(
              {
                email: config.email,
                socials: config.socials
              },
              null,
              2
            );
          } else {
            response = `cat: ${filename}: No such file or directory.`;
          }
        } else if (trimmed === "") {
          response = "";
        } else {
          response = `command not found: ${cmd}. Type 'help' for options.`;
        }
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay}>
          {/* Backdrop Click Close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={styles.backdrop}
          />

          {/* Sliding Window */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={styles.window}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Header controls bar */}
            <div className={styles.windowHeader}>
              <div className={styles.windowButtons}>
                <span 
                  className={`${styles.dot} ${styles.closeDot}`} 
                  onClick={onClose}
                  title="Close Terminal"
                />
                <span className={`${styles.dot} ${styles.minimizeDot}`} />
                <span className={`${styles.dot} ${styles.zoomDot}`} />
              </div>
              <div className={styles.windowTitle}>merlin@mage: ~</div>
              <div className={styles.exitLabel}>type 'exit' to close</div>
            </div>

            {/* Display screen */}
            <div ref={bodyRef} className={styles.windowBody}>
              <div className={styles.introText}>
                <div>PEICHANGANN SYSTEM TERMINAL [Version 2.0.4]</div>
                <div>Authorized access only. Type 'help' for instructions.</div>
              </div>

              {/* History stream */}
              {history.map((item, idx) => (
                <div key={idx} className={styles.historyLine}>
                  <div>
                    <span className={styles.prompt}>merlin@mage:~$</span>
                    <span className={styles.commandText}>{item.command}</span>
                  </div>
                  {item.output && <pre className={styles.output}>{item.output}</pre>}
                </div>
              ))}

              {/* Input prompt line */}
              <div className={styles.inputRow}>
                <span className={styles.prompt}>merlin@mage:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={styles.inputField}
                  maxLength={60}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  aria-label="Terminal input prompt"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
