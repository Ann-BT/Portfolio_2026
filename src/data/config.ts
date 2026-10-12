export const config = {
  name: "Bùi Trường An",
  nickname: "Merlin",
  title: "Penetration Tester / Security Engineer",
  bio: "Cybersecurity graduate from USTH (Classification: Very Good, 3-year scholarship) with a solid full-stack development foundation. Focused on offensive web/API security testing, discovering real-world vulnerabilities, and helping engineering teams remediate them effectively. Aspiring to pursue research and become a university lecturer.",
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
