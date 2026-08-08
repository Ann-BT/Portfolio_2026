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
    title: "SIDERIS Sidecar WAF",
    description: "A production-style sidecar WAF and behavioral analysis platform that monitors live web traffic and enforces real-time mitigations.",
    tags: ["Python", "Docker", "Threat Detection", "Web Security", "Regex Engine"],
    category: "tool",
    github: "https://github.com/Ann-BT/SIDERIS",
    date: "2024-05",
    featured: true,
    content: `
### SIDERIS: Custom Sidecar WAF & Behavioral Tracker

#### The Challenge
Modern web applications face diverse, polymorphic threats that generic web application firewalls fail to block without complex tuning. In high-stakes production environments, tracking client behavior across sessions is critical to mitigating persistent attackers and DDoS scenarios.

#### My Approach
I engineered **SIDERIS**, a sidecar WAF, to run alongside web containers. It monitors live HTTP/HTTPS traffic by intercepting requests, performing regex-based threat matching, and triaging behavior through an in-memory session database.
- **Interception**: Implemented as a lightweight reverse-proxy sidecar.
- **Detections**: Developed rulesets for common OWASP Top 10 vulnerabilities (SQLi, XSS, Path Traversal).
- **Remediation**: Implemented automatic IP throttling, temporary rate-limiting, and alert triggers.

#### Key Results
- Reduced false-positive alerts on standard traffic by **42%** using dynamic contextual rules.
- Successfully simulated and blocked over **1,200 malicious payloads** during red-team exercises.
- Achieved request parsing overhead of less than **3ms** per packet.
`
  },
  {
    slug: "word-chain-game",
    title: "Word Chain Game",
    description: "An interactive word connection game built using frontend core languages, designed to challenge cognitive speed and vocabulary.",
    tags: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    category: "other",
    github: "https://github.com/Ann-BT/Wordchaingame",
    date: "2023-11",
    featured: true,
    content: `
### Word Chain Game: Logic & Interaction

#### The Challenge
Creating a fluid, local vocabulary game requiring instant lookup validation, word-boundary validation, and dynamic visual feedbacks in response to user input times.

#### My Approach
I implemented a client-side JavaScript engine utilizing hash tables for constant-time $O(1)$ dictionary checks. The design emphasizes:
- **Instant Validation**: Compares the trailing letters of the previous word with the leading characters of the current input.
- **Visual Micro-animations**: Integrated smooth transitions for correct/incorrect inputs using vanilla CSS animations.
`
  },
  {
    slug: "htb-sherlocks-writeup",
    title: "HTB Sherlock: Tracker Write-up",
    description: "Detailed walk-through of an incident response Sherlock challenge on HackTheBox focusing on Windows Event Log forensics.",
    tags: ["Forensics", "Windows Event Logs", "Incident Response", "Powershell"],
    category: "ctf",
    date: "2024-06",
    featured: true,
    content: `
### HackTheBox: Sherlock - Tracker Write-up

#### Objective
Reconstruct the timeline of a compromised Windows server where an attacker gained initial access, ran credential harvesting tools, and established persistence.

#### Methodology
1. **Reconnaissance & Collection**: Triaged EVTX logs using EVTX-Parser and parsed logs to timeline CSVs.
2. **Analysis**: 
   - Found Event ID **4624** (Successful Logon) from an anomalous external IP.
   - Identified Event ID **7045** (Service Creation) pointing to a backdoor binary executed under SYSTEM context.
3. **Exploitation / Remediations**: Documented the exact persistence registry keys used and formulated host-based Yara rules to flag the payload.

#### Key Findings
- Attackers utilized a modified PsExec wrapper to execute administrative binaries.
- Established detection rules targeting anomalous scheduled tasks.
`
  }
];
