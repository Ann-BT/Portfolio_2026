export interface Paper {
  title: string;
  status: "in-progress" | "preprint" | "published";
  venue?: string; // journal or conference
  year: number;
  abstract?: string;
  pdfUrl?: string;
  codeUrl?: string;
}

export interface ResearchNote {
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface InterestArea {
  title: string;
  description: string;
}

export const papers: Paper[] = [
  {
    title: "A Study on Real-time Sidecar Web Application Firewalls for Containerized Microservices",
    status: "in-progress",
    year: 2026,
    abstract: "This paper outlines the architectural patterns of deploying sidecar reverse proxies as dedicated security layers. We explore rate-limiting algorithms, regex matches latency overhead, and container isolation principles under malicious load scenarios."
  },
  {
    title: "Applying Machine Learning Classifiers to Detect Anomalous Session Behaviors at WAF Gateways",
    status: "in-progress",
    year: 2026,
    abstract: "An analysis of applying lightweight decision tree classifiers directly at edge proxies to triage session identifiers, identifying high-risk clients before full database inspection occurs."
  }
];

export const researchNotes: ResearchNote[] = [
  {
    title: "Incident Response and log analysis in Windows AD",
    date: "2026-08-01",
    summary: "A short review of Event ID indicators for Kerberoasting and Pass-the-Hash attacks in Active Directory environments.",
    tags: ["AD Security", "Blue Team", "Forensics"]
  },
  {
    title: "Comparative analysis of Suricata vs Snort rulesets",
    date: "2026-07-15",
    summary: "Analyzing processing speeds and multithreading overhead between Snort 3 and Suricata engine running custom alert definitions.",
    tags: ["IDS/IPS", "Log Triage", "Performance"]
  }
];

export const interestAreas: InterestArea[] = [
  {
    title: "Container & Microservice Security",
    description: "Designing isolated sidecars, secure API gateways, and analyzing kernel namespaces configuration vulnerabilities."
  },
  {
    title: "Intrusion Detection Systems",
    description: "Parsing real-time packet buffers to discover pattern markers for remote command execution and shellcode drops."
  },
  {
    title: "Academic Cybersecurity Instruction",
    description: "Exploring teaching methodologies for malware reverse engineering, cryptography basics, and CTF training curriculum."
  }
];
