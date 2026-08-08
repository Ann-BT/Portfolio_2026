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

// Compute synchronous hash for compatibility across HTTP and HTTPS contexts
const secureObfuscate = (str: string): string => {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c64e6d;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ char, 2654435761);
    h2 = Math.imul(h2 ^ char, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h2 = Math.imul(h2 ^ (h2 >>> 15), 3266489909);
  const part1 = (h1 >>> 0).toString(16).padStart(8, "0");
  const part2 = (h2 >>> 0).toString(16).padStart(8, "0");
  return part1 + part2 + part1.split("").reverse().join("") + part2.split("").reverse().join("");
};

export default function TerminalOverlay({ isOpen, onClose }: Props) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [terminalMode, setTerminalMode] = useState<"command" | "login_username" | "login_password">("command");
  const [tempUsername, setTempUsername] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened or mode changed
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, terminalMode]);

  // Scroll to bottom on history change
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = async (cmd: string) => {
    const trimmed = cmd.trim();
    let response = "";

    // 1. Username input mode
    if (terminalMode === "login_username") {
      setTempUsername(trimmed);
      setHistory((prev) => [...prev, { command: `Username: ${cmd}`, output: "" }]);
      setTerminalMode("login_password");
      setInput("");
      return;
    }

    // 2. Password input mode
    if (terminalMode === "login_password") {
      // Obfuscated password hash validation for "Vannhucu12"
      const correctHash = "a9ab342e78ab2c27e243ba9a72c2ba87";
      const inputHash = secureObfuscate(trimmed);

      if (tempUsername === "Merlin" && inputHash === correctHash) {
        localStorage.setItem("merlin_admin_logged_in", "true");
        window.dispatchEvent(new Event("admin-login-changed"));
        response = "AUTHENTICATION SUCCESSFUL // Welcome Merlin. Admin privileges granted.";
      } else {
        response = "AUTHENTICATION FAILED // Invalid username or password.";
      }

      setHistory((prev) => [...prev, { command: "Password: ••••••••", output: response }]);
      setTerminalMode("command");
      setTempUsername("");
      setInput("");
      return;
    }

    // 3. Standard command mode
    const lowerCmd = trimmed.toLowerCase();

    switch (lowerCmd) {
      case "exit":
        onClose();
        return;

      case "login":
        setTerminalMode("login_username");
        setHistory((prev) => [...prev, { command: cmd, output: "System login protocol initialized..." }]);
        setInput("");
        return;

      case "logout":
        localStorage.removeItem("merlin_admin_logged_in");
        window.dispatchEvent(new Event("admin-login-changed"));
        response = "Admin session terminated. Privileges revoked.";
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        if (trimmed === "") {
          response = "";
        } else {
          response = `command not found: ${cmd}`;
        }
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  const getPromptLabel = () => {
    if (terminalMode === "login_username") return "Username:";
    if (terminalMode === "login_password") return "Password:";
    return "merlin@mage:~$";
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
                <div>Authorized access only.</div>
              </div>

              {/* History stream */}
              {history.map((item, idx) => (
                <div key={idx} className={styles.historyLine}>
                  <div>
                    <span className={styles.prompt}>
                      {item.command.startsWith("Username:") || item.command.startsWith("Password:") 
                        ? "" 
                        : "merlin@mage:~$ "}
                    </span>
                    <span className={styles.commandText}>{item.command}</span>
                  </div>
                  {item.output && <pre className={styles.output}>{item.output}</pre>}
                </div>
              ))}

              {/* Input prompt line */}
              <div className={styles.inputRow}>
                <span className={styles.prompt}>{getPromptLabel()}</span>
                <input
                  ref={inputRef}
                  type={terminalMode === "login_password" ? "password" : "text"}
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
