export const config = {
  name: "Bùi Trường An",
  nickname: "Merlin",
  title: "Cybersecurity Graduate & Developer",
  bio: "Bachelor Graduate in Cyber Security from USTH (Classification: Very Good). Actively seeking opportunities in Blue Team Cybersecurity, Web Development, or roles across the Cyber & IT domain. Experienced in engineering threat detection proxies (SIDERIS WAF), blue team log analysis, malware triage, and full-stack web applications.",
  location: "Ha Noi, Viet Nam",
  status: "Open for Opportunities",
  cvUrl: "/cv.pdf", // Placeholder for later
  email: "anbt.personal@gmail.com",
  socials: {
    github: "https://github.com/Ann-BT",
    linkedin: "https://www.linkedin.com/in/ann-bt/",
    facebook: "https://www.facebook.com/merlinthegreatmage",
    instagram: "https://www.instagram.com/merlin.themage/",
    discord: "https://discord.com/users/700193463655727134"
  },
  education: {
    school: "University of Science and Technology of Hanoi (USTH)",
    major: "Cyber Security",
    year: "Graduated (Classification: Very Good)"
  },
  languages: [
    { name: "Vietnamese", level: "Native" },
    { name: "English", level: "B2 / Fluent" },
    { name: "French", level: "TCF A2" },
    { name: "Chinese", level: "Learning" }
  ],
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  }
};
