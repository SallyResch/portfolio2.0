import Image from "next/image";
import styles from "./page.module.css";
import gitImage from "../public/github.png";
import linkedImage from "../public/linkedin.png";
import emailImage from "../public/email.png";
import ProjectList from "../components/ProjectList/ProjectList";
import { workProjects, selfMadeProjects, javaScript } from "../components/ProjectList/constants";
import Stars from "@/components/Animations/Stars";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="about" className={styles.welcomeSection}>
          <Stars />
          <div className={styles.about}>
            <h1>Sally Resch</h1>
            <h3>a software developer<br/> at your service</h3>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
        <h1>Projects</h1>
        <ProjectList title="Work/Internship projects" projects={workProjects} />
        <ProjectList title="HTML CSS projects" projects={selfMadeProjects} />
        <ProjectList title="JavaScript projects" projects={javaScript} />
      </section>
      </main>
      <section id="contact" className={styles.contact}> 
          <h3>Lets do projects together</h3>
          <p>Contact Me @:</p>
          <div className={styles.contactLinks}>
            <a className={styles.profileLink} href="https://se.linkedin.com/in/sally-resch" target="_blank" rel="noopener noreferrer">
                <Image className={styles.linkImage} src={linkedImage} alt="LinkedInIcon" width={50} height={50} />
                <p>LinkedIn</p>
            </a>
            <a className={styles.profileLink} href="mailto:sallyresch27@gmail.com">
                <Image className={styles.linkImage} src={emailImage} alt="mailIcon" width={50} height={50} />
                <p>Mail</p>
            </a>
            <a className={styles.profileLink} href="https://github.com/SallyResch" target="_blank" rel="noopener noreferrer">
                <Image className={styles.linkImage} src={gitImage} width={50} height={50} alt="githubIcon" />
                <p>GitHub</p>
            </a>
          </div>
          <p>© 2025 Sally Resch</p>
        </section>
    </div>
  );
}
