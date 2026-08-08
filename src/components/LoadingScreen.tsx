// src/components/LoadingScreen.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "WELCOME TO MY PORTFOLIO ...";

  useEffect(() => {
    // Check if user already saw the loader in this session
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded === "true") {
      setLoading(false);
      return;
    }

    // Typewriter effect
    let currentText = "";
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setText(currentText);
        index++;
      } else {
        clearInterval(interval);
        // Hold for 800ms after completion, then exit
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("hasLoaded", "true");
        }, 800);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "#000000",
            zIndex: 99998,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}
        >
          {/* Scanline Overlay */}
          <div className="scanline" />

          {/* Morphing Shield/Cybersecurity Lock Symbol */}
          <div style={{ marginBottom: "2rem", position: "relative", width: "80px", height: "80px" }}>
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#ffffff" }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Shield Outline */}
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              {/* Inner Keyhole/Lock shape */}
              <circle cx="12" cy="11" r="2" />
              <path d="M12 13v3" />
            </motion.svg>
          </div>

          {/* Monospace Loading Text */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              color: "#ffffff",
              textAlign: "center",
              minHeight: "1.5rem"
            }}
          >
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ display: "inline-block", marginLeft: "2px", width: "8px", height: "14px", backgroundColor: "#ffffff" }}
            >
              _
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
