import "./globals.css";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const text = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-text",
  display: "swap",
});

export const metadata = {
  title: "Farrel Athaillah Putra, UI/UX Designer and Front-End Developer",
  description:
    "Portfolio of Farrel Athaillah Putra, a Computer Science student in Semarang working across UI/UX design and front-end development.",
};

export const viewport = {
  themeColor: "#E3E6EB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
