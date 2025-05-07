import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

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
