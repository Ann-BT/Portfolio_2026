export interface Cert {
  name: string;
  issuer: string;
  date: string; // YYYY-MM
  thumbnail: string; // filename in public/certs/
  description: string; // Detailed description of cert content
  verifyUrl?: string;
}

export const certifications: Cert[] = [
  {
    name: "Fortinet Certified Associate in Cybersecurity (FCA)",
    issuer: "Fortinet",
    date: "2024-05",
    thumbnail: "Fortinet_Certified_Associate_in_Cybersecurity.png",
    description: "Validates proficiency in executing high-level configurations of FortiGate firewall devices, administering security profiles, and managing corporate threat vectors under the Fortinet Security Fabric.",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "Fortinet Certified Fundamentals in Cybersecurity (FCF)",
    issuer: "Fortinet",
    date: "2024-04",
    thumbnail: "Fortinet_Certified_Fundamentals_in_Cybersecurity.png",
    description: "Covers foundational operations of threat intelligence systems, configuring secure cloud interfaces, and administering primary components of corporate network security.",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "FortiGate 7.6 Operator (Self-Paced)",
    issuer: "Fortinet",
    date: "2024-06",
    thumbnail: "FortiGate_7_6_Operator_Self-Paced.png",
    description: "Focuses on the practical configuration, administration, policy management, and real-time packet monitoring of FortiGate Next-Generation Firewalls (NGFW) running version 7.6.",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    date: "2023-10",
    thumbnail: "Network_Defense.png",
    description: "Covers defense-in-depth methodologies, network traffic behavior analysis, cryptographic encryption protocols, and corporate firewall/IPS deployment controls."
  },
  {
    name: "Google Automate Cybersecurity Tasks with Python",
    issuer: "Coursera / Google",
    date: "2023-10",
    thumbnail: "Coursera_python.png",
    description: "Covers developing custom Python scripts to parse system log files, filtering malicious IP patterns, and automating threat detection alerts.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google AI for Cybersecurity",
    issuer: "Coursera / Google",
    date: "2023-12",
    thumbnail: "Coursera_AI.png",
    description: "Explores utilizing Generative AI models to optimize alert triaging, write threat summaries, parse security incident logs, and draft report documentation.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Tools of the Trade: Linux and SQL",
    issuer: "Coursera / Google",
    date: "2023-08",
    thumbnail: "Coursera_Tool_of_trade.png",
    description: "Provides hand-on training in Linux OS commands, folder permissions administration, and running SQL relational database queries to extract security logs.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Sound the Alarm: Detection and Response",
    issuer: "Coursera / Google",
    date: "2023-09",
    thumbnail: "Coursera_Sound_of_alarm.png",
    description: "Focuses on security incident response operations, SIEM dashboard analysis (using Chronicle/Splunk), and alert rules validation.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Connect and Protect: Networks and Network Security",
    issuer: "Coursera / Google",
    date: "2023-08",
    thumbnail: "Coursera_connect_and_protect.png",
    description: "Covers TCP/IP model layers, network sniffing analysis, routing protocols, DNS security, and configuring virtual private networks (VPNs).",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Assets, Threats, and Vulnerabilities",
    issuer: "Coursera / Google",
    date: "2023-09",
    thumbnail: "Coursera_threats.png",
    description: "Covers standard system vulnerability scanning, asset catalog management, and triaging software exploits to mitigate threats.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Foundations of Cybersecurity",
    issuer: "Coursera / Google",
    date: "2023-07",
    thumbnail: "Coursera_cybersecurity.png",
    description: "Introduction to NIST Framework structures, core security analyst roles, security compliance (GDPR/HIPAA), and standard incident handling loops.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Play It Safe: Manage Cybersecurity Risks",
    issuer: "Coursera / Google",
    date: "2023-08",
    thumbnail: "Coursera_play_it_safe.png",
    description: "Covers corporate risk assessment methodologies, security audit frameworks, threat modeling (STRIDE), and risk mitigation planning.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Put It to Work: Prepare for Cybersecurity Jobs",
    issuer: "Coursera / Google",
    date: "2023-10",
    thumbnail: "Coursera_put_it_to_work.png",
    description: "Covers generating incident reports, presenting technical security summaries to stakeholders, and analyzing real-world security interview scenarios.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google CISO / Foundations",
    issuer: "Coursera / Google",
    date: "2023-11",
    thumbnail: "Coursera_CISO.png",
    description: "Covers high-level information security governance models, compliance auditing, strategic security planning, and security team organization.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Google / Coursera",
    date: "2023-08",
    thumbnail: "cert_coursera.png",
    description: "Covers troubleshooting methodologies, customer service protocols, operating systems settings, system administration fundamentals, and network protocols.",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Ubuntu with WSL",
    issuer: "F8",
    date: "2023-02-28",
    thumbnail: "cert_wsl.png",
    description: "Expertise in managing Linux terminal commands, configuring development environments on Ubuntu via WSL, shell scripting, and systems administration tools."
  },
  {
    name: "Frontend Development (HTML & CSS)",
    issuer: "F8",
    date: "2022-10-12",
    thumbnail: "cert_html.png",
    description: "Advanced front-end development skills including responsive design, modern CSS techniques, and HTML5 best practices."
  },
  {
    name: "Information Technology Onboarding",
    issuer: "F8",
    date: "2022-04-17",
    thumbnail: "cert_ITO.jpg",
    description: "Comprehensive IT onboarding covering computer components assembly, operating systems configurations, basic networking protocols, and technical support fundamentals."
  },
  {
    name: "NSE 1 Network Security Associate",
    issuer: "Fortinet",
    date: "2023-11",
    thumbnail: "NSE_1.png",
    description: "Validates basic comprehension of the cybersecurity threat landscape, malicious agent profiles, and foundational corporate security terminologies.",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "Technical Introduction to Cybersecurity 3.0",
    issuer: "Cisco Networking Academy",
    date: "2023-12",
    thumbnail: "Technical_Introduction_to_Cybersecurity_3_0.png",
    description: "Covers foundational structures of network cryptography, firewall topologies, access controls, and administrative security baselines."
  },
  {
    name: "Getting Started in Cybersecurity 3.0",
    issuer: "Cisco Networking Academy",
    date: "2023-11",
    thumbnail: "Getting_Started_in_Cybersecurity_3_0.png",
    description: "Introduces core operational security principles, malware types, data privacy rules, and corporate threat defense tools."
  }
];
