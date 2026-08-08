export interface Cert {
  name: string;
  issuer: string;
  date: string; // YYYY-MM
  thumbnail: string; // filename in public/certs/ or public/pics/ (or standard icons)
  verifyUrl?: string;
}

export const certifications: Cert[] = [
  {
    name: "eLearnSecurity Junior Penetration Tester (eJPT)",
    issuer: "INE / eLearnSecurity",
    date: "2024-03",
    thumbnail: "22cbd3ab5f32de6c87235.jpg", // mapping to one of the photos/images as placeholders
    verifyUrl: "https://verify.ine.com/"
  },
  {
    name: "Certified Defensive Security Analyst (CDSA)",
    issuer: "Hack The Box",
    date: "2024-07",
    thumbnail: "30d3a83d24a4a5fafcb518.jpg",
    verifyUrl: "https://academy.hackthebox.com/"
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2023-09",
    thumbnail: "b4645141dcd85d8604c920.jpg",
    verifyUrl: "https://www.credly.com"
  }
];
