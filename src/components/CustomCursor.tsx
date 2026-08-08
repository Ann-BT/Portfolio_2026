// src/components/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    const addHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [role='button'], .clickable");
      targets.forEach((target) => {
        target.addEventListener("mouseenter", handleHoverStart);
        target.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    // Run periodically to catch dynamically added items
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      const targets = document.querySelectorAll("a, button, [role='button'], .clickable");
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleHoverStart);
        target.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference",
        backgroundColor: "var(--accent, #ffffff)",
        borderRadius: "50%",
        width: isHovered ? 48 : 8,
        height: isHovered ? 48 : 8,
      }}
      animate={{
        scale: isHovered ? 1 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}
