export const config = {
  name: "Bùi Trường An",
  nickname: "Merlin",
  title: "Penetration Tester / Security Engineer",
  bio: "Cybersecurity graduate from USTH (Very Good, 3-year scholarship). Started as a full-stack engineer — now use that background to break things on purpose. Hands-on security testing on a real production app, built SIDERIS (a behavioral WAF sidecar), and led PhishShield. Always studying: malware, forensics, offensive labs. Aiming for a Master's in Cybersecurity and a teaching role someday.",
  location: "Hanoi, Vietnam",
  status: "Available for Penetration Tester & Security Roles",
  cvUrl: "/CV_Bui_Truong_An_Security_Pentest.pdf",
  email: "anbt.personal@gmail.com",
  phone: "0397677835",
  socials: {
    github: "https://github.com/Ann-BT",
    linkedin: "https://www.linkedin.com/in/ann-bt/",
    facebook: "https://www.facebook.com/merlinthegreatmage",
    instagram: "https://www.instagram.com/merlin.themage/",
    discord: "https://discord.com/users/700193463655727134"
  },
  education: {
    school: "University of Science and Technology of Hanoi (USTH)",
    degree: "Bachelor of Science in Cyber Security",
    major: "Cyber Security",
    classification: "Very Good",
    honors: "Top 3 academic ranking in first year, Awarded 3-year scholarship"
  },
  careerVision: {
    immediate: "Penetration Tester / Product Security Engineer — uncovering critical vulnerabilities across web, API, and cloud services before attackers do, and collaborating closely with engineering teams on actionable remediation.",
    academic: "Lifelong commitment to continuous security research, pursuing a Master's degree in Cybersecurity, and becoming a university lecturer / academic mentor to inspire the next generation of security researchers."
  },
  languages: [
    { name: "Vietnamese", level: "Native" },
    { name: "English", level: "B2 (USTH certified)" },
    { name: "French", level: "A2 (TCF certified)" },
    { name: "Chinese", level: "Self-studying" }
  ],
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  }
};
