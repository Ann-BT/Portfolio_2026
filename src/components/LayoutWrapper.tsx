// src/components/LayoutWrapper.tsx
"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import TerminalOverlay from "./TerminalOverlay";
import CustomCursor from "./CustomCursor";

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      {/* Blend-mode Custom Cursor */}
      <CustomCursor />

      {/* Compressed Navigation bar with overlay toggle */}
      <Navbar onTerminalToggle={() => setIsTerminalOpen(!isTerminalOpen)} />

      {/* Full-width Terminal overlay */}
      <TerminalOverlay 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />

      {/* Page Content */}
      <main style={{ paddingTop: "80px" }}>{children}</main>
    </>
  );
}
