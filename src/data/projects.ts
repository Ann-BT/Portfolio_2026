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
### SIDERIS — Behavioral WAF & Real-Time Threat Detection Proxy

A sidecar security layer that intercepts, analyzes, and neutralizes malicious traffic — without touching a single line of your application code.

#### The Problem It Solves

Your application is being probed right now. Credential stuffers, content scrapers, endpoint fuzzers — most of them don't trigger traditional WAF signatures because they don't use known payloads. They just **behave differently from humans**. SIDERIS measures that difference.

| Threat Type | Traditional WAF | SIDERIS |
|---|---|---|
| Known attack signatures (SQLi, XSS) | ✅ Blocked | ✅ Blocked |
| Behavioral anomalies (bots, scrapers) | ❌ Invisible | ✅ Detected |
| Credential stuffing | ❌ Invisible | ✅ Detected |
| Headless browser automation | ❌ Invisible | ✅ Detected |
| Legitimate human users | ✅ Pass | ✅ Pass |

#### Zero Application Changes Required

SIDERIS is a sidecar. Your application keeps running exactly as-is. You point traffic through SIDERIS first. That's the entire integration.

~~~
Before SIDERIS:   [Users] ──────────────────────────────── [Your App :8080]

After  SIDERIS:   [Users] ── [SIDERIS :4000] ──────────── [Your App :8080]
                                    ↑
                        security happens here
~~~

#### Architecture

SIDERIS runs as **three Docker containers**: \`sideris-redis\` for live state, \`sideris-postgres\` for event archiving, and \`sideris-app\` housing the core microservices running concurrently.

~~~
[ Visitor Browser ]
       │
       ▼  :4000  ◄── the only port your users ever see
┌─────────────────────────────────┐
│         SIDERIS WAF PROXY       │
│  • Enforces blocks at edge      │
│  • Injects agent.js into HTML   │
│  • Drops confirmed threats      │
└──────────────┬──────────────────┘
               │  clean traffic only
               ▼  :8080
   [ Your Web Application ]
   (untouched, unaware, unbothered)

   agent.js (in browser)          Collects silently:
   ─────────────────────          • Keystroke timing intervals
   Injected into every page        • Mouse movement vectors
   Zero visible UI changes         • Browser fingerprint
                                   • Request cadence + patterns
               │  telemetry stream
               ▼  :5000
   [ INGEST COLLECTOR ]  →  Redis Streams
               │
               ▼
   [ SCORING ENGINE ]   Score = Impact × Confidence × Persistence
               │
   Tier 1 ──► Monitor    Tier 4 ──► Soft Block
   Tier 2 ──► Rate Limit Tier 5 ──► Hard Block
   Tier 3 ──► CAPTCHA
               │
               ▼  :6001
   [ SOC DASHBOARD ]  — Real-time session monitor, IP-gated
~~~

#### Threat Detection — 5 Families

- **Injection Attacks** — SQLi pattern matching, XSS vectors, SSRF probes, command injection, Log4Shell / Log4j patterns
- **Authentication Abuse** — Credential stuffing (high-frequency auth attempts, single IP, varied usernames), password spraying across distinct usernames
- **Fuzzing & Reconnaissance** — Known scanner user-agents (\`sqlmap\`, \`nikto\`, \`burpsuite\`, \`nmap\`, \`ffuf\`, \`nuclei\`), sensitive file exposure (\`.env\`, \`.git/config\`, \`wp-config.php\`), CMS admin portal scans, directory traversal (\`../\`), HTTP method abuse (TRACE, CONNECT, PROPFIND), Recon 404 storms
- **Bot Automation** — Headless browser detection (\`navigator.webdriver\`), rapid navigation (10+ pages in 5s), instant form submission (< 800ms), inhuman keystroke dynamics, zero mouse interaction on forms
- **Volumetric Abuse** — Request floods (> 50 req/min), endpoint hammering (> 20 hits on single endpoint in 60s)

#### Mitigation Tiers

When thresholds are breached, the Guard executes real-time mitigation using **Redis-backed atomic Lua scripts**:

| Score | Action | Duration |
|---|---|---|
| ≥ 10 | Rate Limit | 300s decay |
| ≥ 20 | CAPTCHA Challenge | 600s, 5-min human grace period |
| ≥ 30 | Soft Block | 1,800s — doubles per offense |
| ≥ 50 | Hard Block | Immediate connection termination + global IP ban |

#### Performance

Tested against OWASP Juice Shop on a single-machine Docker setup:

| Request Condition | Added Latency | Note |
|---|---|---|
| Clean request, session in Redis | ~2–4ms | Typical for returning visitors |
| First request, cold session | ~8–12ms | One-time cost per new visitor |
| Blocked session | < 1ms | Dropped at proxy, never reaches app |

| Container | Idle RAM |
|---|---|
| sideris-proxy | ~60 MB |
| sideris-ingest | ~50 MB |
| sideris-dashboard | ~80 MB |
| Redis | ~30 MB |
| PostgreSQL | ~90 MB |
| **Total** | **~310 MB** |

A **1GB VPS** is sufficient for low-to-medium traffic. Handles ~10,000 concurrent tracked sessions before Redis memory pressure becomes a factor.

#### Key Design Decisions

- **Fail-open safe mode** — If Redis goes down, SIDERIS falls back to pass-through. Your site stays online even if security telemetry fails temporarily
- **Horizontal scaling** — State lives in Redis, allowing multiple WAF Proxy instances behind a load balancer. Detector Worker uses a Redis Consumer Group (\`sideris_group\`) to distribute scoring
- **Static scoring thresholds, not ML** — Eliminates warm-up delays, makes scoring fully predictable and auditable. Tune sensitivity directly in \`.env\`
- **MIT Licensed** — Free to use, modify, and deploy on personal projects or commercial sites
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

