import Image from "next/image";
import styles from "./page.module.css";
import gitImage from "../public/github.png";
import linkedImage from "../public/linkedin.png";
import emailImage from "../public/email.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <a href="#welcomeSection">About</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <main className={styles.main}>
        <section id="welcomeSection" className={styles.welcomeSection}>
          <div className={styles.night}>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
          </div>
          <div>
            <h1>Hi, I am Sally</h1>
            <p>a software developer</p>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <h1>Projects</h1>
          <div className={styles.projectTile}>
            <h3 className={styles.sectionText}>Work/Internship projects</h3>
            <div className={styles.workProjects}>
              <a className={styles.link} href="https://www.heyey.se" target="_blank" rel="noopener noreferrer">
                <iframe src="https://www.heyey.se" height="300" width="400" title="Iframe Example" scrolling="no"></iframe>
                <p>HEYEY</p> 
              </a>
              <a className={styles.link} href="https://www.elevateyourself.se" target="_blank" rel="noopener noreferrer">
                <iframe src="https://www.elevateyourself.se" height="300" width="400" title="Iframe Example" scrolling="no"></iframe>
                <p>Elevateyourself AB</p> 
              </a>
            </div>
          </div>
          <h3 className={styles.sectionText}>Selfmade projects</h3>
          <div className={styles.selfProjects}>
            <h3>Coming soon....</h3>
          </div>
        </section>
        <section className={styles.contact}> 
          <h1>Lets do projects together</h1>
          <p>Contact:</p>
          <div className={styles.contactLinks}>
            <a className={styles.profileLink} href="https://se.linkedin.com/in/sally-resch" target="_blank" rel="noopener noreferrer">
                <p>LinkedIn</p>
                <Image className={styles.linkImage} src={linkedImage} alt="LinkedInIcon" width={50} height={50} />
            </a>
            <a className={styles.profileLink} href="mailto:sallyresch27@gmail.com">
                <p>Mail</p>
                <Image className={styles.linkImage} src={emailImage} alt="mailIcon" width={50} height={50} />
            </a>
            <a className={styles.profileLink} href="https://github.com/SallyResch" target="_blank" rel="noopener noreferrer">
                <p>GitHub</p>
                <Image className={styles.linkImage} src={gitImage} width={50} height={50} alt="githubIcon" />
            </a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 Sally Resch</p>
      </footer>
    </div>
  );
}
