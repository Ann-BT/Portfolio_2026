export interface SkillCategory {
  id: string;
  name: string;
  iconName: "Shield" | "Terminal" | "Radio" | "Code";
  tools: string[];
  note: string;
}

export const skills: SkillCategory[] = [
  {
    id: "os-platforms",
    name: "OS & Platforms",
    iconName: "Terminal",
    tools: [
      "Linux (Fedora/Cachy/Arch - daily user)",
      "Windows & VMs",
      "Docker & Kubernetes",
      "Redis",
      "Supabase & PostgreSQL",
      "Git / GitHub"
    ],
    note: "Daily Linux user across Arch/Fedora/Cachy distros, managing VM labs, containerized microservices, and databases."
  },
  {
    id: "programming-web",
    name: "Programming & Web",
    iconName: "Code",
    tools: [
      "JavaScript",
      "TypeScript",
      "Python (basic)",
      "Node.js & Express.js",
      "Next.js & React",
      "REST APIs & WebSockets",
      "CSS Modules"
    ],
    note: "Full-stack web engineering, building real-time dashboards, API backends, and browser extensions."
  },
  {
    id: "networking",
    name: "Networking",
    iconName: "Radio",
    tools: [
      "TCP/IP Fundamentals",
      "HTTP / HTTPS & DNS",
      "Common Network Protocols",
      "Packet Analysis (Wireshark)",
      "Distributed Systems (RPC/MPI)"
    ],
    note: "Solid foundation in core network protocols, traffic packet analysis, and distributed system architectures."
  },
  {
    id: "security-forensics",
    name: "Security & Forensics",
    iconName: "Shield",
    tools: [
      "Web Security (OWASP Top 10)",
      "Malware Analysis (REMnux)",
      "Digital Forensics (CHFI)",
      "Burp Suite & OWASP ZAP",
      "Wazuh SIEM",
      "IDA Pro & PEStudio",
      "Process Monitor"
    ],
    note: "Defensive Blue Team operations, malware triage on REMnux, binary investigation, and forensic acquisition."
  }
];
