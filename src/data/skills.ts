export interface SkillCategory {
  id: string;
  name: string;
  iconName: "Shield" | "Terminal" | "Radio" | "Code";
  tools: string[];
  note: string;
}

export const skills: SkillCategory[] = [
  {
    id: "security-assessment",
    name: "Security Assessment & Pentest",
    iconName: "Shield",
    tools: [
      "Burp Suite",
      "OWASP ZAP",
      "Wireshark",
      "Wazuh",
      "OWASP Top 10",
      "Web / API Vulnerability Assessment",
      "Source Code Audit",
      "Threat Modeling",
      "Secure Code Remediation"
    ],
    note: "Hands-on web/API security testing — IDOR, XXE, SSRF, SQLi, Deserialization, Prompt Injection. Reported findings with developer-ready remediation on a real production app."
  },
  {
    id: "security-research",
    name: "Security Research & Malware",
    iconName: "Terminal",
    tools: [
      "IDA Pro",
      "PEStudio",
      "Process Monitor",
      "REMnux",
      "Digital Forensics (EC-Council CHFI curriculum)",
      "Malware Analysis (static + dynamic)",
      "CVE Reproduction",
      "Offensive Labs (VulnHub, OWASP Juice Shop)"
    ],
    note: "Analyzed malware samples on REMnux, studied forensics acquisition and anti-forensics, and reproduced real CVEs in lab environments. Always learning, always breaking things safely."
  },
  {
    id: "programming-scripting",
    name: "Programming & Development",
    iconName: "Code",
    tools: [
      "JavaScript / TypeScript",
      "Node.js (Express)",
      "Python",
      "Next.js / React",
      "REST APIs",
      "WebSockets",
      "HTML5 / CSS Modules"
    ],
    note: "Full-stack engineering background that now serves offensive work — reading app source code, tracing data flows, and spotting logic flaws the way a developer would never expect."
  },
  {
    id: "systems-infrastructure",
    name: "Systems, Networking & Infrastructure",
    iconName: "Radio",
    tools: [
      "Linux (Fedora / CachyOS / Arch — daily driver)",
      "Windows & Lab VMs",
      "TCP/IP, HTTP/HTTPS, DNS",
      "Docker (network isolation, container hardening)",
      "Redis",
      "PostgreSQL / Supabase",
      "Git / GitHub",
      "Firewall Configuration"
    ],
    note: "Daily Linux user. Built SIDERIS as a reverse-proxy sidecar on Docker with Redis-backed atomic enforcement — understanding infrastructure is understanding the attack surface."
  }
];
