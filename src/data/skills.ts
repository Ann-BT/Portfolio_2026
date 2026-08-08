export interface SkillCategory {
  id: string;
  name: string;
  iconName: "Shield" | "Terminal" | "Radio" | "Code" | "BookOpen";
  tools: string[];
  note: string;
}

export const skills: SkillCategory[] = [
  {
    id: "def-sec",
    name: "Defensive Security",
    iconName: "Shield",
    tools: ["SOC Operations", "Log Analysis", "Malware Triage", "SIEM Tools", "Snort", "Suricata", "YARA Rules"],
    note: "Focusing on Blue Team engineering and behavioral analysis."
  },
  {
    id: "off-sec",
    name: "Offensive Security",
    iconName: "Terminal",
    tools: ["Web App Testing", "Burp Suite", "OWASP ZAP", "Nmap", "Metasploit", "PEStudio", "IDA Pro"],
    note: "Hands-on experience in vulnerability assessment and static binary triage."
  },
  {
    id: "net-prot",
    name: "Networking & Protocols",
    iconName: "Radio",
    tools: ["Wireshark", "TCP/IP Suite", "DNS Security", "HTTP/HTTPS Analysis", "VPNs", "Packet Analysis"],
    note: "Analyzing deep-level traffic captures to reconstruct attack vectors."
  },
  {
    id: "prog",
    name: "Programming & Systems",
    iconName: "Code",
    tools: ["Python", "JavaScript", "C / C++", "Bash Scripting", "Linux Systems", "Git & Docker"],
    note: "Building custom automation scripts, sidecars, and small security tools."
  },
  {
    id: "research-tools",
    name: "Academic & Research",
    iconName: "BookOpen",
    tools: ["Threat Modeling", "Scientific Writing", "Latex", "Academic Research", "Reverse Engineering"],
    note: "Aspirations to study Masters in Cybersecurity and work in academia."
  }
];
