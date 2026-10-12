// Semua isi website ada di file ini. Ubah teks di sini, tidak perlu menyentuh komponen.

export const profile = {
  name: "Farrel Athaillah Putra",
  email: "farrelayebgsz@gmail.com",
  linkedin: "https://www.linkedin.com/in/farrelathaillahputra",
  github: "https://github.com/FarrelAthaillahPutra",
};

export const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

export const about = {
  summary:
    "I'm a Computer Science student at Universitas Negeri Semarang, working across software development and UI/UX design. I design user-centred interfaces in Figma and Sketch, then turn them into responsive applications in code. The problems I like best sit between design and engineering.",
  props: [
    ["Studying", "Computer Science, undergraduate"],
    ["University", "Universitas Negeri Semarang"],
    ["Since", "2023"],
    ["Focus", "UI/UX design and front-end development"],
    ["Location", "Semarang, Indonesia"],
    ["Languages", "Indonesian (native), English (professional working proficiency)"],
  ],
};

// GANTI href di setiap proyek dengan link proyek yang asli.
// "thumb" memilih ilustrasi di components/Thumbs.js.
export const projects = [
  {
    name: "LandRanger",
    slot: "p1",
    thumb: "land",
    what: "A Web3 platform on ICP that converts real-world assets, such as land certificates, into non-fungible tokens (ICRC-7).",
    meta: "Team project, UI/UX design",
    href: "https://github.com/FarrelAthaillahPutra",
  },
  {
    name: "FitNess",
    slot: "p2",
    thumb: "fit",
    what: "Helps students track progress, build exercise plans and consult personal trainers. I designed the flows and interfaces, then built them as interactive web apps, including an AI chatbot.",
    meta: "Team project, UI/UX design and front end",
    href: "https://github.com/FarrelAthaillahPutra",
  },
  {
    name: "AspiraX",
    slot: "p3",
    thumb: "aspira",
    what: "A public aspiration platform built on Web3 and AI.",
    meta: "Team project, UI/UX design",
    href: "https://github.com/FarrelAthaillahPutra",
  },
  {
    name: "POS Benua Jaya Gold",
    slot: "p4",
    thumb: "pos",
    what: "A web-based point-of-sale system that digitises sales, purchasing and inventory for a gold and diamond jewellery retailer, with 4C diamond grading standards and member loyalty features.",
    meta: "Team project, UI/UX design",
    href: "https://github.com/FarrelAthaillahPutra",
  },
  {
    name: "EasyWarehouse",
    slot: "p5",
    thumb: "warehouse",
    what: "A smart warehouse management platform that brings RFID tracking, real-time inventory intelligence and process automation together for enterprise logistics and supply chain teams.",
    meta: "Team project, UI/UX design",
    href: "https://github.com/FarrelAthaillahPutra",
  },
];

export const experience = [
  {
    when: "January to June 2026",
    org: "PT. Rapier Technology International",
    role: "Internship, UI/UX design",
    points: [
      "Designed interfaces, wireframes and high-fidelity interactive prototypes for key projects, including the BJG POS system and the EasyWarehouse landing page.",
      "Created user flows and responsive web layouts focused on smooth navigation, usability and conversion.",
      "Worked with developers and product teams so design specifications were implemented accurately.",
    ],
  },
  {
    when: "March to December 2025",
    org: "Codelines UNNES",
    role: "Head of Cybersecurity Division",
    points: [
      "Led the team in cybersecurity research and development.",
      "Organised meeting schedules and ran weekly knowledge-sharing sessions.",
      "Managed time across the team to keep productivity up and skills growing.",
    ],
  },
];

export const toolkit = [
  { title: "Design and prototyping", items: ["Figma", "Sketch", "Framer"] },
  { title: "Collaboration and ideation", items: ["Miro", "Notion", "Whimsical"] },
  {
    title: "Front end",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
];
