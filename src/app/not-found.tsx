// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 160px)",
          backgroundColor: "#000000",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          padding: "2rem",
          textAlign: "center"
        }}
      >
        {/* Animated Glitch Code */}
        <motion.h1
          animate={{
            skewX: [0, -5, 5, 0, -2, 2, 0],
            x: [0, -1, 1, 0, -2, 2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: "mirror"
          }}
          style={{
            fontSize: "6rem",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            margin: 0,
            lineHeight: 1
          }}
        >
          404
        </motion.h1>

        {/* Message */}
        <div style={{ marginTop: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>
            ACCESS DENIED // FILE NOT FOUND
          </div>
          <p style={{ color: "var(--text)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            The requested security asset does not exist in the active directory.
          </p>
        </div>

        {/* Action button */}
        <Link
          href="/"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--text-bright)",
            color: "#000000",
            padding: "0.75rem 2rem",
            fontSize: "0.85rem",
            fontWeight: 600,
            borderRadius: "4px",
            textTransform: "uppercase"
          }}
        >
          Return to base
        </Link>
      </div>
      <Footer />
    </>
  );
}
