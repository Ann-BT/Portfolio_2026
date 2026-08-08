export interface SkillCategory {
  id: string;
  name: string;
  iconName: "Shield" | "Terminal" | "Radio" | "Code";
  tools: string[];
  note: string;
}

export const skills: SkillCategory[] = [
  {
    id: "os-tools",
    name: "OS & Tools",
    iconName: "Terminal",
    tools: ["Linux (daily user)", "Windows", "Virtual Machines", "Docker", "Git / GitHub", "Redis"],
    note: "Comfortable working across Linux and Windows environments, including VM-based lab setups."
  },
  {
    id: "programming",
    name: "Programming & Web",
    iconName: "Code",
    tools: ["JavaScript", "Python (basic)", "Node.js", "React", "Express.js", "REST APIs"],
    note: "Building web tools, automation scripts, and full-stack security utilities."
  },
  {
    id: "networking",
    name: "Networking",
    iconName: "Radio",
    tools: ["TCP/IP fundamentals", "HTTP / HTTPS", "DNS", "Wireshark", "Common network protocols", "Packet Analysis"],
    note: "Solid grasp of core network protocols and traffic analysis techniques."
  },
  {
    id: "security",
    name: "Security",
    iconName: "Shield",
    tools: ["Burp Suite", "OWASP ZAP", "Splunk", "IDA Pro", "Process Monitor", "PEStudio", "Web Security", "Malware Analysis", "Digital Forensics"],
    note: "Hands-on experience with security tooling, malware triage, and forensic investigation."
  }
];
