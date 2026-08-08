export interface Cert {
  name: string;
  issuer: string;
  date: string; // YYYY-MM-DD
  thumbnail: string; // filename in public/certs/
  description: string; // Detailed description of cert content
  verifyUrl?: string;
}

export const certifications: Cert[] = [
  {
    name: "Fortinet Certified Associate in Cybersecurity (FCA)",
    issuer: "Fortinet",
    date: "2025-12-17",
    thumbnail: "Fortinet_Certified_Associate_in_Cybersecurity.png",
    description: "Validates proficiency in executing high-level configurations of FortiGate Next-Generation Firewall (NGFW) devices, administering security profiles, and managing threat vectors under the Fortinet Security Fabric.",
    verifyUrl: "https://training.fortinet.com/admin/tool/certificate/index.php"
  },
  {
    name: "Fortinet Certified Fundamentals in Cybersecurity (FCF)",
    issuer: "Fortinet",
    date: "2025-12-17",
    thumbnail: "Fortinet_Certified_Fundamentals_in_Cybersecurity.png",
    description: "Covers foundational operations of threat intelligence systems, configuring secure cloud interfaces, and administering primary components of corporate network security.",
    verifyUrl: "https://training.fortinet.com/admin/tool/certificate/index.php"
  },
  {
    name: "FortiGate 7.6 Operator (Self-Paced)",
    issuer: "Fortinet",
    date: "2025-12-17",
    thumbnail: "FortiGate_7_6_Operator_Self-Paced.png",
    description: "Focuses on the practical configuration, administration, policy management, and real-time packet monitoring of FortiGate Next-Generation Firewalls (NGFW) running version 7.6.",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "Google Cybersecurity Professional Certificate (9 Courses)",
    issuer: "Google / Coursera",
    date: "2025-12-11",
    thumbnail: "Coursera_cybersecurity.png",
    description: "Comprehensive program verifying entry-level proficiency across security frameworks, Python automation, Linux/SQL commands, network operations, SIEM tools, and AI applications.",
    verifyUrl: "https://coursera.org/verify/professional-cert/8N7V01K25JQK"
  },
  {
    name: "Office of the CISO Institute: Cybersecurity Essentials",
    issuer: "Google Cloud / Cybersecurity Action Team",
    date: "2025-12-11",
    thumbnail: "Coursera_CISO.png",
    description: "Specialized credential from Google Cloud and the Cybersecurity Action Team focusing on CISO governance, cloud threat models, compliance metrics, and risk auditing.",
    verifyUrl: "https://coursera.org/verify/T75H16KNSR1J"
  },
  {
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    date: "2025-12-22",
    thumbnail: "Network_Defense.png",
    description: "Covers defense-in-depth methodologies, network traffic behavior analysis, cryptographic encryption protocols, and corporate firewall/IPS deployment controls."
  },
  {
    name: "Ubuntu with WSL",
    issuer: "F8",
    date: "2025-02-28",
    thumbnail: "cert_wsl.png",
    description: "Expertise in managing Linux terminal commands, configuring development environments on Ubuntu via WSL, shell scripting, and systems administration tools."
  },
  {
    name: "Frontend Development (HTML & CSS)",
    issuer: "F8",
    date: "2022-10-12",
    thumbnail: "cert_html.png",
    description: "Advanced front-end development skills including responsive layouts, semantic tags, and modern CSS techniques."
  },
  {
    name: "Information Technology Onboarding",
    issuer: "F8",
    date: "2022-04-17",
    thumbnail: "cert_ITO.jpg",
    description: "Comprehensive IT onboarding covering computer systems architecture, operating systems configurations, basic networking protocols, and technical support fundamentals."
  },
  {
    name: "Google Automate Cybersecurity Tasks with Python",
    issuer: "Coursera / Google",
    date: "2025-12-10",
    thumbnail: "Coursera_python.png",
    description: "Covers developing custom Python scripts to parse system log files, filtering malicious IP patterns, and automating threat detection alerts.",
    verifyUrl: "https://coursera.org/verify/5L2XLSF8EXU6"
  },
  {
    name: "Google AI for Cybersecurity",
    issuer: "Coursera / Google",
    date: "2025-12-11",
    thumbnail: "Coursera_AI.png",
    description: "Explores utilizing Generative AI models to optimize alert triaging, write threat summaries, parse security incident logs, and draft report documentation.",
    verifyUrl: "https://coursera.org/verify/6E5G444OW9M7"
  },
  {
    name: "Google Tools of the Trade: Linux and SQL",
    issuer: "Coursera / Google",
    date: "2025-12-10",
    thumbnail: "Coursera_Tool_of_trade.png",
    description: "Provides hand-on training in Linux OS commands, folder permissions administration, and running SQL relational database queries to extract security logs.",
    verifyUrl: "https://coursera.org/verify/IUBLLNW5DUTT"
  },
  {
    name: "Google Sound the Alarm: Detection and Response",
    issuer: "Coursera / Google",
    date: "2025-12-10",
    thumbnail: "Coursera_Sound_of_alarm.png",
    description: "Focuses on security incident response operations, SIEM dashboard analysis (using Chronicle/Splunk), and alert rules validation.",
    verifyUrl: "https://coursera.org/verify/07KCHCHXJWQV"
  },
  {
    name: "Google Connect and Protect: Networks and Network Security",
    issuer: "Coursera / Google",
    date: "2025-12-08",
    thumbnail: "Coursera_connect_and_protect.png",
    description: "Covers TCP/IP model layers, network sniffing analysis, routing protocols, DNS security, and configuring virtual private networks (VPNs).",
    verifyUrl: "https://coursera.org/verify/CII2OKMH4A1Q"
  },
  {
    name: "Google Assets, Threats, and Vulnerabilities",
    issuer: "Coursera / Google",
    date: "2025-12-10",
    thumbnail: "Coursera_threats.png",
    description: "Covers standard system vulnerability scanning, asset catalog management, and triaging software exploits to mitigate threats.",
    verifyUrl: "https://coursera.org/verify/1LUQ9YKTYM3I"
  },
  {
    name: "Google Foundations of Cybersecurity",
    issuer: "Coursera / Google",
    date: "2024-03-21",
    thumbnail: "cert_coursera.png",
    description: "Course 1 of the Google Cybersecurity program, covering the NIST security framework, core security analyst responsibilities, and standard industry tools.",
    verifyUrl: "https://coursera.org/verify/VKTR6DA4PNMS"
  },
  {
    name: "Google Play It Safe: Manage Cybersecurity Risks",
    issuer: "Coursera / Google",
    date: "2025-12-08",
    thumbnail: "Coursera_play_it_safe.png",
    description: "Covers corporate risk assessment methodologies, security audit frameworks, threat modeling (STRIDE), and risk mitigation planning.",
    verifyUrl: "https://coursera.org/verify/SRXOOH9HSPK2"
  },
  {
    name: "Google Put It to Work: Prepare for Cybersecurity Jobs",
    issuer: "Coursera / Google",
    date: "2025-12-11",
    thumbnail: "Coursera_put_it_to_work.png",
    description: "Covers generating incident reports, presenting technical security summaries to stakeholders, and analyzing real-world security interview scenarios.",
    verifyUrl: "https://coursera.org/verify/GFFNYWCCQE6I"
  },
  {
    name: "Introduction to the Threat Landscape 3.0",
    issuer: "Fortinet Training Institute",
    date: "2025-12-11",
    thumbnail: "NSE_1.png",
    description: "Validates basic comprehension of the cybersecurity threat landscape, malicious agent profiles, and foundational corporate security terminologies."
  },
  {
    name: "Technical Introduction to Cybersecurity 3.0",
    issuer: "Fortinet Training Institute",
    date: "2025-12-17",
    thumbnail: "Technical_Introduction_to_Cybersecurity_3_0.png",
    description: "Covers foundational structures of network cryptography, firewall topologies, access controls, and administrative security baselines."
  },
  {
    name: "Getting Started in Cybersecurity 3.0",
    issuer: "Fortinet Training Institute",
    date: "2025-12-17",
    thumbnail: "Getting_Started_in_Cybersecurity_3_0.png",
    description: "Introduces core operational security principles, malware types, data privacy rules, and corporate threat defense tools."
  }
];
