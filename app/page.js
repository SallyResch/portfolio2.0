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
const javaScript = [
  { name: "Background Colorchanger", url: "/javaScript/BackgroundColorChanger/index.html"},
  { name: "CalorieCounter", url: "/javaScript/CalorieCounter/index.html"},
  { name: "GradeHelp", url: "/javaScript/GradeHelp/index.html"},
  { name: "PyramidBuilding", url: "/javaScript/PyramidBuilding/index.html"},

];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="about" className={styles.welcomeSection}>
          <div className={styles.night}>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
          </div>
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
