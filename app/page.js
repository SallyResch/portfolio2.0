import Image from "next/image";
import styles from "./page.module.css";
import gitImage from "../public/github.png";
import linkedImage from "../public/linkedin.png";
import emailImage from "../public/email.png";
import ProjectList from "../components/ProjectList";

const workProjects = [
  { name: "HEYEY", url: "https://www.heyey.se" },
  { name: "Elevateyourself AB", url: "https://www.elevateyourself.se" },
];

const selfMadeProjects = [
  { name: "AccessibilityQuiz", url: "/htmlCss/AccessibilityQuizBuilding/index.html" },
  { name: "BalanceSheet", url: "/htmlCss/BalanceSheet/index.html" },
  { name: "CafeMenuPage", url: "/htmlCss/CafeMenuApp/index.html" },
  { name: "CatPhotoPage", url: "/htmlCss/CatPhotoApp/index.html" },
  { name: "ColorMarkers", url: "/htmlCss/ColorMarkersApp/index.html" },
  { name: "CssBoxModelRothko", url: "/htmlCss/CssBoxModelRothko/index.html" },
  { name: "CssCat", url: "/htmlCss/CssCat/index.html" },
  { name: "FerrisWheel", url: "/htmlCss/FerrisWheel/index.html" },
  { name: "Magazine", url: "/htmlCss/Magazine/index.html" },
  { name: "NutritionLabel", url: "/htmlCss/NutritionLabel/index.html" },
  { name: "Penguin", url: "/htmlCss/Penguin/index.html" },
  { name: "Photogallery", url: "/htmlCss/Photogallery/index.html" },
  { name: "ProductLandingPage", url: "/htmlCss/ProductLandingPage/index.html" },
  { name: "RegistrationForm", url: "/htmlCss/RegistrationForm/index.html" },
  { name: "ResponsivePiano", url: "/htmlCss/ResponsivePiano/index.html" },
  { name: "SkylineCssVariables", url: "/htmlCss/SkylineCssVariables/index.html" },
  { name: "SurveyForm", url: "/htmlCss/SurveyForm/index.html" },
  { name: "TechnicalDoc", url: "/htmlCss/TechnicalDoc/index.html" },
  { name: "TributePage", url: "/htmlCss/TributePage/index.html" },
];


export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <a className={styles.navLinks} href="#welcomeSection">About</a>
        <a className={styles.navLinks} href="#projects">Work</a>
        <a className={styles.navLinks} href="#contact">Contact</a>
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
          <div className={styles.about}>
            <h1>Hi, I am Sally</h1>
            <p>a software developer</p>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
        <h1>Projects</h1>
        <ProjectList title="Work/Internship projects" projects={workProjects} />
        <ProjectList title="Selfmade projects" projects={selfMadeProjects} />
      </section>
      </main>
      <section className={styles.contact}> 
          <h3>Lets do projects together</h3>
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
          <p>© 2025 Sally Resch</p>
        </section>
    </div>
  );
}
