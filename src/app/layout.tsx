// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bùi Trường An | Cybersecurity",
  description: "Personal portfolio of Bùi Trường An (Merlin), Cyber Security major at USTH. Aspiring SOC Analyst and Blue Team operations engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Global Noise Overlay */}
        <div className="noise-overlay" />

        {/* Global Interactive Elements */}
        <CustomCursor />
        <LoadingScreen />
        
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
