export interface SkillCategory {
  id: string;
  name: string;
  iconName: "Shield" | "Terminal" | "Radio" | "Code";
  tools: string[];
  note: string;
}

export const skills: SkillCategory[] = [
  {
    id: "security-offensive",
    name: "Offensive Security & Pentest",
    iconName: "Shield",
    tools: [
      "Burp Suite (Professional & Community)",
      "OWASP ZAP",
      "OWASP Top 10 & API Security Top 10",
      "Web Vulnerability Assessment (IDOR, XXE, SSRF, Deserialization, SQLi)",
      "Secure Code Review & Remediation Guidance",
      "Wazuh SIEM",
      "Wireshark (Packet Analysis)",
      "IDA Pro, PEStudio & Process Monitor",
      "Malware Analysis (REMnux VM)",
      "Digital Forensics (EC-Council CHFI curriculum)"
    ],
    note: "Specialized in web application security testing, vulnerability discovery across production architectures, business logic bypasses, and translating findings into actionable developer patches."
  },
  {
    id: "programming-engineering",
    name: "Programming & Secure Engineering",
    iconName: "Code",
    tools: [
      "JavaScript & TypeScript",
      "Node.js & Express.js",
      "Python (Exploit scripting & Automation)",
      "Next.js & React",
      "REST APIs, WebSockets & GraphQL",
      "Pydantic strict validation",
      "HMAC-signed JWTs & CSP Policies"
    ],
    note: "Former IT Engineering foundation enables deep understanding of how applications are built, allowing precise source code auditing, automated script development, and writing robust frontend/backend security patches."
  },
  {
    id: "systems-networking",
    name: "Systems & Networking",
    iconName: "Radio",
    tools: [
      "Linux (Fedora / CachyOS / Arch - daily driver)",
      "Windows Environments & Active Directory concepts",
      "TCP/IP, HTTP/HTTPS, DNS & WebSockets",
      "Virtualization & Lab Environments (VMware, VirtualBox, KVM)",
      "Chronos VulnHub & Offensive Lab Environments",
      "Anonymous FTP, SSH & Firewall Configuration",
      "Distributed Systems (RPC / MPI)"
    ],
    note: "Extensive hands-on networking and operating system proficiency as a daily Linux power-user, analyzing live traffic streams and setting up reproducible security testing labs."
  },
  {
    id: "infrastructure-cloud",
    name: "Infrastructure & Data",
    iconName: "Terminal",
    tools: [
      "Docker & Container Network Isolation",
      "Redis (Atomic Lua scripts, Rate Limiting & Streams)",
      "PostgreSQL & Supabase (RLS Policies)",
      "Git & GitHub Workflows",
      "Celery / vLLM / ONLYOFFICE Architecture Review"
    ],
    note: "Experience in auditing containerized microservices, identifying exposed infrastructure ports, mitigating multi-service communication risks, and deploying scalable defensive sidecars."
  }
];
