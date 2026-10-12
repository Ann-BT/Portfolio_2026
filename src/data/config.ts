export const config = {
  name: "Bùi Trường An",
  nickname: "Merlin",
  title: "Penetration Tester & Security Engineer",
  bio: "Cybersecurity Graduate from USTH (Classification: Very Good, Top 3 first year, 3-year academic scholarship). Dedicated security practitioner and passionate lifelong learner focused on offensive web application security, penetration testing, and product vulnerability assessment. With a robust engineering background spanning full-stack architectures and defensive systems (creator of SIDERIS behavioral WAF), I break systems to understand how to build them resiliently. Aspiring security researcher and future university lecturer.",
  location: "Hanoi, Vietnam",
  status: "Available for Penetration Tester & Product Security Roles",
  cvUrl: "/CV_Bui_Truong_An_Security_Pentest.pdf",
  cvPentestUrl: "/CV_Bui_Truong_An_Security_Pentest.pdf",
  cvItUrl: "/CV_Bui_Truong_An_IT_Engineer.pdf",
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
