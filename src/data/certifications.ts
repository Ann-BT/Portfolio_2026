export interface Cert {
  name: string;
  issuer: string;
  date: string; // YYYY-MM
  thumbnail: string; // filename in public/certs/
  verifyUrl?: string;
}

export const certifications: Cert[] = [
  {
    name: "Fortinet Certified Associate in Cybersecurity (FCA)",
    issuer: "Fortinet",
    date: "2024-05",
    thumbnail: "Fortinet_Certified_Associate_in_Cybersecurity.png",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "Fortinet Certified Fundamentals in Cybersecurity (FCF)",
    issuer: "Fortinet",
    date: "2024-04",
    thumbnail: "Fortinet_Certified_Fundamentals_in_Cybersecurity.png",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "NSE 1 Network Security Associate",
    issuer: "Fortinet",
    date: "2023-11",
    thumbnail: "NSE_1.png",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "FortiGate 7.6 Operator (Self-Paced)",
    issuer: "Fortinet",
    date: "2024-06",
    thumbnail: "FortiGate_7_6_Operator_Self-Paced.png",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "Getting Started in Cybersecurity 3.0",
    issuer: "Cisco Networking Academy",
    date: "2023-11",
    thumbnail: "Getting_Started_in_Cybersecurity_3_0.png"
  },
  {
    name: "Technical Introduction to Cybersecurity 3.0",
    issuer: "Cisco Networking Academy",
    date: "2023-12",
    thumbnail: "Technical_Introduction_to_Cybersecurity_3_0.png"
  },
  {
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    date: "2023-10",
    thumbnail: "Network_Defense.png"
  },
  {
    name: "Google Foundations of Cybersecurity",
    issuer: "Coursera / Google",
    date: "2023-07",
    thumbnail: "Coursera_cybersecurity.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Play It Safe: Manage Cybersecurity Risks",
    issuer: "Coursera / Google",
    date: "2023-08",
    thumbnail: "Coursera_play_it_safe.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Connect and Protect: Networks and Network Security",
    issuer: "Coursera / Google",
    date: "2023-08",
    thumbnail: "Coursera_connect_and_protect.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Tools of the Trade: Linux and SQL",
    issuer: "Coursera / Google",
    date: "2023-08",
    thumbnail: "Coursera_Tool_of_trade.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Assets, Threats, and Vulnerabilities",
    issuer: "Coursera / Google",
    date: "2023-09",
    thumbnail: "Coursera_threats.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Sound the Alarm: Detection and Response",
    issuer: "Coursera / Google",
    date: "2023-09",
    thumbnail: "Coursera_Sound_of_alarm.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Automate Cybersecurity Tasks with Python",
    issuer: "Coursera / Google",
    date: "2023-10",
    thumbnail: "Coursera_python.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google Put It to Work: Prepare for Cybersecurity Jobs",
    issuer: "Coursera / Google",
    date: "2023-10",
    thumbnail: "Coursera_put_it_to_work.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google CISO / Foundations",
    issuer: "Coursera / Google",
    date: "2023-11",
    thumbnail: "Coursera_CISO.png",
    verifyUrl: "https://coursera.org"
  },
  {
    name: "Google AI for Cybersecurity",
    issuer: "Coursera / Google",
    date: "2023-12",
    thumbnail: "Coursera_AI.png",
    verifyUrl: "https://coursera.org"
  }
];
