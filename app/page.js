import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";
export const metadata = {
  title: "Sally Resch | Software Developer Portfolio",
  description: "Welcome to Sally Resch's portfolio. Explore projects, skills, and get in touch with a passionate software developer.",
  keywords: ["Sally Resch", "portfolio", "software developer", "web developer", "projects", "contact"],
  authors: [{ name: "Sally Resch" }],
  openGraph: {
    title: "Sally Resch | Software Developer Portfolio",
    description: "Explore Sally Resch's work and get in touch for collaborations.",
    url: "https://portfolio2-0-xi-seven.vercel.app/",
    siteName: "Sally Resch Portfolio",
    images: [
      {
        url: "https://portfolio2-0-xi-seven.vercel.app/projects", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Sally Resch Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="about" className={styles.welcomeSection}>
          <div className={styles.about}>
            <h1>Sally Resch</h1>
            <h2>a software developer<br/> at your service</h2>
              <div className={styles.navButtons}>
              <Link className={styles.startlink} href="/projects">View my work</Link>
              <Link className={styles.startlink} href="/contact">Get in touch</Link>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
