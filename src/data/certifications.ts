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
    name: "FortiGate 7.6 Operator (Self-Paced)",
    issuer: "Fortinet",
    date: "2024-06",
    thumbnail: "FortiGate_7_6_Operator_Self-Paced.png",
    verifyUrl: "https://training.fortinet.com/"
  },
  {
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    date: "2023-10",
    thumbnail: "Network_Defense.png"
  }
];
