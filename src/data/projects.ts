export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: "ctf" | "tool" | "research" | "script" | "other";
  github?: string;
  demo?: string;
  date: string; // YYYY-MM
  featured?: boolean;
  content: string; // Markdown case study body
}

export const projects: Project[] = [
  {
    slug: "sideris-waf",
    title: "SIDERIS",
    description: "A self-hosted behavioral WAF and real-time threat detection proxy that intercepts, analyzes, and neutralizes malicious traffic — without touching a single line of your application code.",
    tags: ["Node.js", "React", "Redis", "PostgreSQL", "Docker", "Web Security"],
    category: "tool",
    github: "https://github.com/Ann-BT/SIDERIS",
    date: "2024-05",
    featured: true,
    content: `
### SIDERIS: Behavioral WAF & Real-Time Threat Detection Proxy

#### Overview
SIDERIS is a **self-hosted Web Application Firewall and behavioral analysis proxy** that runs in front of your existing website. It requires no changes to your application and works with any stack — WordPress, Laravel, Node.js, Django, static HTML.

It works by sitting between users and the server, silently watching *how* visitors behave — not just *what* they request. Keystroke dynamics, mouse movement patterns, request timing, browser fingerprinting. When behavior looks automated, SIDERIS acts. When it looks human, traffic passes through untouched.

#### The Problem It Solves
Traditional WAFs only block known attack signatures. SIDERIS goes further — it detects behavioral anomalies like bots, scrapers, and credential stuffers that don't trigger signature-based rules because they simply *behave differently from humans*.

| Threat Type | Traditional WAF | SIDERIS |
|:---|:---:|:---:|
| Known attack signatures (SQLi, XSS) | ✅ Blocked | ✅ Blocked |
| Behavioral anomalies (bots, scrapers) | ❌ Invisible | ✅ Detected |

#### Tech Stack
- **Node.js** — core proxy and analysis engine
- **React** — admin dashboard for real-time traffic visualization
- **Redis** — in-memory session and behavioral state caching
- **PostgreSQL** — persistent threat log storage
- **Docker** — containerized sidecar deployment

#### Key Results
- Detects and blocks automated threats that bypass conventional WAFs
- Runs as a zero-code-change sidecar alongside any web stack
- Under 3ms request parsing overhead per packet
- Successful simulation and blocking of 1,200+ malicious payloads in red-team testing
`
  },
  {
    slug: "phishield-extension",
    title: "PhishShield Extension",
    description: "A Chrome browser extension powered by machine learning that automatically scans URLs and page content in real time to detect and block phishing websites as you browse.",
    tags: ["JavaScript", "Python", "FastAPI", "Machine Learning", "Chrome Extension", "MongoDB"],
    category: "tool",
    github: "https://github.com/Huyn-coder/phishieldextension",
    date: "2024-03",
    featured: true,
    content: `
### PhishShield: ML-Powered Phishing Detection Chrome Extension

#### Overview
PhishShield is a browser-side phishing detection tool built as a Chrome extension with a Python/FastAPI backend inference server. As users browse, the extension monitors active URLs and sends extracted features to the backend ML model, which classifies sites as legitimate or phishing in real time.

#### Architecture
- **Chrome Extension (Frontend):** Automatically scans every URL the user visits, extracts URL features, and displays a risk badge on the extension icon. Provides auto-scan, link scanner, report, whitelist, and blacklist capabilities.
- **FastAPI Backend:** Receives URL feature vectors from the extension, runs ML inference using a trained classification model, and returns a phishing probability score.
- **MongoDB:** Persists user-defined whitelist and blacklist entries across sessions.

#### Key Features
- **Auto-scan** — automatically scans the current URL on every page load
- **Risk Badge** — displays a real-time danger level indicator on the toolbar icon
- **Link Scanner** — scans all links present on the current page
- **Report** — allows users to flag suspicious URLs for review
- **Whitelist / Blacklist** — personal lists for trusted and blocked domains

#### Tech Stack
- JavaScript, HTML, CSS (Chrome Extension APIs)
- Python + FastAPI (backend ML inference server)
- Machine Learning (phishing URL classification model)
- MongoDB (whitelist/blacklist persistence)
`
  },
  {
    slug: "portfolio-site",
    title: "This Portfolio",
    description: "A custom-built cybersecurity portfolio site with a hacker terminal, real-time guestbook, admin photo manager, and Swiss-minimal design aesthetic.",
    tags: ["Next.js", "TypeScript", "Supabase", "Framer Motion", "CSS Modules", "GitHub Pages"],
    category: "other",
    github: "https://github.com/Ann-BT/Portfolio_2026",
    demo: "http://merlinthemage.me",
    date: "2026-08",
    featured: true,
    content: `
### Portfolio Site: Full-Stack Static Portfolio with Hacker Aesthetic

#### Overview
A fully custom portfolio site built with **Next.js 16 (Turbopack)** and deployed as a static site on **GitHub Pages**. Designed with a Swiss-minimal dark aesthetic, animated with **Framer Motion**, and backed by **Supabase** for real-time cross-device data sync.

#### Key Features
- **Hacker Terminal Overlay** — drop-down terminal with working commands, admin login via \`login\` → \`Merlin\` → password flow, and Easter egg flags
- **Admin Photo Manager** — when logged in as Merlin, drag-and-drop photo reordering, preset selection, and image uploads to the Hero section
- **Real-time Guestbook** — cross-device message board powered by Supabase Realtime (Postgres \`postgres_changes\` subscription). Messages appear instantly on all devices
- **Fanned Photo Stack** — interactive drag-to-cycle photo stack in the hero section using Framer Motion gestures
- **Certifications Gallery** — image lightbox with expand/collapse, 3-column grid, no placeholder data
- **Dynamic Skills Cards** — flip-card interactions showing tool inventory across 4 categories

#### Tech Stack
- **Next.js 16 + TypeScript** — static export, App Router, Turbopack
- **React + Framer Motion** — animations, drag gestures, layout transitions
- **Supabase** — Postgres database + Realtime subscriptions + Storage
- **CSS Modules** — scoped component styles, Swiss-grid layout system
- **GitHub Pages + gh-pages** — automated static deploy pipeline
`
  }
];

