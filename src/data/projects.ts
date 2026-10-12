export type ProjectCategory = "security" | "webdev" | "tools" | "other";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
  date: string; // YYYY-MM
  featured?: boolean;
  content: string; // Markdown case study body
}

export const projects: Project[] = [
  {
    slug: "production-app-security-review",
    title: "Production Web App Security Review & Hardening",
    description: "Self-directed end-to-end security review of a confidential document processing & LLM translation production web application. Uncovered critical backend vulnerabilities (IDOR, XXE, SSRF, Deserialization RCE, Prompt Injection) and implemented full-stack mitigations.",
    tags: ["Burp Suite", "OWASP Top 10", "Code Review", "SSRF", "XXE", "Prompt Injection", "Docker Security"],
    category: "security",
    date: "2026-08",
    featured: true,
    content: `
### Production Web Application Security Review & Remediation Guidance

A self-directed, comprehensive security review of a confidential production web application providing automated document processing and Large Language Model (LLM) translation workflows. 

Conducted black-box, grey-box testing, and source code auditing across frontend, backend microservices, and container infrastructure. Reported high-severity vulnerabilities with remediation guidance to backend engineers, while directly authoring and implementing frontend security hardening.

#### 1. Critical Vulnerabilities Identified & Remediated

| Vulnerability Vector | Severity | Technical Impact | Remediation Delivered |
|---|---|---|---|
| **Broken Access Control (IDOR)** | **High** | Insecure direct object references allowed unauthorized cross-tenant document fetching at the database query layer. | Enforced session-bound ownership validation at database query layers. |
| **Mass Assignment** | **Medium** | Unrestricted request body payloads allowed parameter tampering during model profile creation. | Replaced loose dict unpacking with strict Pydantic schema validation. |
| **File-Processing Flaws (XXE, Zip Slip, Zip Bomb)** | **High** | Parsing untrusted XML documents exposed server file retrieval (XXE); archives threatened filesystem overwrite (Zip Slip) and decompression DoS bombs. | Migrated parser to \`defusedxml\`, implemented magic-byte file header verification, archive path normalization, and dynamic extraction timeouts. |
| **Server-Side Request Forgery (SSRF)** | **High** | ONLYOFFICE document server integration accepted arbitrary webhook callbacks, allowing internal cloud network probing. | Enforced HMAC-signed JWT authentication tokens and internal IP allowlisting. |
| **Infrastructure & Deserialization Risks** | **Critical** | Exposed internal ports (Database, Redis, vLLM inference engine); Celery task worker configured with unsafe Python \`pickle\` deserialization (potential RCE); prompt injection vectors in LLM translation prompts. | Isolated backend containers onto internal Docker bridge networks; migrated Celery serializer to JSON; implemented prompt-delimiter guardrails and output sanitization. |

#### 2. Direct Frontend Security Implementation

Beyond reporting backend findings, directly authored and deployed defensive layers across the client application:
- **Cookie Security:** Enforced \`HttpOnly\`, \`Secure\`, and \`SameSite=Strict\` cookie flags to prevent script-accessible session tokens.
- **Content Security Policy (CSP):** Implemented strict CSP headers restricting script and connect origins, mitigating XSS blast radius.
- **Client Route Guards & Storage Hygiene:** Added cryptographic session expiry listeners and automated memory/cache cleanup on logout to completely eliminate XSS-driven session persistence.
- **Compliance:** Supported compliance verification for a **Level 3 Information System Security** accreditation standard.
`
  },
  {
    slug: "sideris-waf",
    title: "SIDERIS — Sidecar Threat Detection & WAF Proxy",
    description: "A self-hosted behavioral WAF and real-time threat detection proxy built at ICTLab USTH. Employs inline signature matching, client telemetry behavioral scoring in Redis, and escalating mitigation without modifying application code.",
    tags: ["Node.js", "React", "Redis", "PostgreSQL", "Docker", "WAF", "Burp Suite", "OWASP Juice Shop"],
    category: "security",
    github: "https://github.com/Ann-BT/SIDERIS",
    date: "2026-06",
    featured: true,
    content: `
### SIDERIS — Behavioral WAF & Real-Time Threat Detection Proxy

Built during research and engineering at **ICTLab, USTH**, SIDERIS is an inline reverse-proxy sidecar that intercepts, analyzes, and neutralizes malicious traffic — deployed transparently in front of target web applications with **zero changes required to application source code**.

#### Architecture & Multi-Layer Detection
SIDERIS operates across two distinct analysis layers:
1. **Layer 1: Inline Signature Matching** — Evaluates incoming HTTP request headers, query strings, and payloads at the reverse proxy (:4000) to immediately drop known OWASP Top 10 injection vectors (SQLi, XSS, XXE, SSRF, Command Injection, SSTI, Log4Shell).
2. **Layer 2: Behavioral Telemetry Scoring** — Combines server-side access logs with silent client-side telemetry (\`agent.js\`) measuring keystroke timing, mouse movement vectors, and request cadence to score session anomalies (brute force, credential stuffing, headless-browser automation, scrapers, and volumetric abuse).

#### Escalating Automated Mitigation
Threat states are evaluated against an atomic **Score = Impact × Confidence × Persistence** formula enforced via **Redis Lua scripts**:
- **Score ≥ 10:** Dynamic rate limiting (300s sliding decay).
- **Score ≥ 20:** Automated CAPTCHA challenge with human verification grace period.
- **Score ≥ 30:** Soft block (1,800s session suspension, doubling on repeat offenses).
- **Score ≥ 50:** Hard block (immediate TCP connection termination + global IP ban with SOC alert).

#### Validation Against OWASP Juice Shop
Rigorously verified and bench-tested across **7 real-world attack scenarios** against an OWASP Juice Shop target:
- SQL injection payload extraction dropped under 1ms at proxy boundary.
- Credential stuffing and automated password spraying flagged and rate-limited within 4 attempts.
- Headless Puppeteer browser automation caught via missing interaction vectors and rapid form submission.
- Real-time React SOC Dashboard provides site operators with live threat graphs, attack origin geolocation, and manual blocklist overrides.
`
  },
  {
    slug: "phishield-extension",
    title: "PhishShield — Machine Learning Anti-Phishing Extension",
    description: "Led team development of a browser security extension combining dual-layer heuristics (whitelist/blacklist) with a Random Forest machine learning model to classify and alert on phishing URLs in real time.",
    tags: ["JavaScript", "Python", "FastAPI", "Random Forest", "Chrome Extension", "Machine Learning"],
    category: "security",
    github: "https://github.com/Huyn-coder/phishieldextension",
    date: "2026-01",
    featured: true,
    content: `
### PhishShield: ML-Powered Phishing Detection Chrome Extension

#### Overview & Leadership
Served as **Team Lead** for the development of PhishShield, an automated browser-level defense against credential harvesting and malicious phishing websites. 

Combines lightweight client-side heuristic inspection with a dedicated machine learning inference pipeline (FastAPI + Random Forest) to evaluate multi-dimensional lexical and structural URL features.

#### Key Detection Capabilities
- **Real-Time URL Feature Extraction:** Evaluates URL entropy, domain age, brand spoofing keywords, hyphen counts, HTTPS certificates, and homograph obfuscation.
- **Dual-Layer Verification:** Fast-paths known domains through verified whitelists/blacklists stored in MongoDB before triggering asynchronous model inference.
- **Active In-Page Link Scanner:** Traverses DOM elements to analyze all embedded links on the active page and visually highlights high-risk hyperlinks.
- **Dynamic Risk Badge:** Gives non-technical users immediate visual feedback regarding the visited site's security score.
`
  },
  {
    slug: "offensive-security-labs",
    title: "Offensive Security Labs & CVE Reproduction",
    description: "Hands-on penetration testing and vulnerability reproduction across real-world targets: Chronos (VulnHub), CVE-1999-0497 (Anonymous FTP exploitation), OWASP Top 10 labs, and SMS OTP 2FA engineering.",
    tags: ["VulnHub", "Privilege Escalation", "OS Command Injection", "CVE Reproduction", "Wireshark", "Linux"],
    category: "security",
    date: "2026-04",
    featured: true,
    content: `
### Offensive Security Labs & Vulnerability Research

A curated collection of practical penetration testing engagements, lab environments, and vulnerability reproductions undertaken as part of deep security research:

#### 1. Chronos Machine (VulnHub Engagement)
- **Reconnaissance:** Network mapping via Nmap, identifying HTTP services with custom User-Agent filtering.
- **Exploitation:** Discovered and exploited unauthenticated **OS Command Injection** within a backend date-formatting API to gain an initial non-privileged interactive shell.
- **Privilege Escalation:** Audited local Linux permissions, identified a vulnerable sudoers configuration, and escalated privileges to root shell via an unrestricted administrative tool.

#### 2. IDS / IPS & CVE-1999-0497 Reproduction
- Isolated virtual network lab setup reproducing **CVE-1999-0497** (unrestricted anonymous FTP file upload and service exploitation).
- Captured and analyzed malicious network packets in **Wireshark**, drafting Snort/Suricata IDS signature rules and iptables firewall policies to detect and mitigate unauthorized access.

#### 3. Secure Two-Factor Authentication (2FA) Implementation
- Architected and implemented an out-of-band **SMS OTP 2FA system** utilizing Python (Flask), Redis (with strict TTL expiry and brute-force attempt throttling), and Twilio API to prevent credential theft.
`
  },
  {
    slug: "portfolio-site",
    title: "This Portfolio — Engineering Meets Security",
    description: "A custom-built cybersecurity portfolio site with a hacker terminal, real-time guestbook, admin photo manager, and Swiss-minimal design aesthetic.",
    tags: ["Next.js", "TypeScript", "Supabase", "Framer Motion", "CSS Modules", "GitHub Pages"],
    category: "webdev",
    github: "https://github.com/Ann-BT/Portfolio_2026",
    demo: "http://merlinthemage.me",
    date: "2026-08",
    featured: false,
    content: `
### Portfolio Site: Full-Stack Static Portfolio with Hacker Aesthetic

#### Overview
A fully custom portfolio site built with **Next.js 16 (Turbopack)** and deployed as a static site on **GitHub Pages**. Designed with a Swiss-minimal dark aesthetic, animated with **Framer Motion**, and backed by **Supabase** for real-time cross-device data sync.

#### Key Features
- **Hacker Terminal Overlay** — drop-down terminal with working commands, admin login flow, and Easter egg flags
- **Real-time Guestbook** — cross-device message board powered by Supabase Realtime with strict parameterized sanitization
- **Fanned Photo Stack** — interactive drag-to-cycle photo stack in the hero section using Framer Motion gestures
- **Security-First Architecture** — static client-side build with zero dynamic server attack surfaces, hardened against XSS and injection
`
  }
];
