import Image from "next/image";
import styles from "./page.module.css";
import gitImage from "../public/github.png";
import linkedImage from "../public/linkedin.png";
import emailImage from "../public/email.png";


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
          <div className={styles.projectTile}>
            <h3 className={styles.sectionText}>Work/Internship projects</h3>
            <div className={styles.workProjects}>
              <a className={styles.link} href="https://www.heyey.se" target="_blank" rel="noopener noreferrer">
                <iframe className={styles.webFrame} src="https://www.heyey.se"  title="Iframe Example" scrolling="no"></iframe>
                <p>HEYEY</p> 
              </a>
              <a className={styles.link} href="https://www.elevateyourself.se" target="_blank" rel="noopener noreferrer">
                <iframe className={styles.webFrame} src="https://www.elevateyourself.se" title="Iframe Example" scrolling="no"></iframe>
                <p>Elevateyourself AB</p> 
              </a>
            </div>
          </div>
         <div className={styles.projectTile}>
          <h3 className={styles.sectionText}>Selfmade projects</h3>
          <div className={styles.selfMadeProjects}>
          <a className={styles.link} href="/htmlCss/AccessibilityQuizBuilding/index.html">
          <iframe src="/htmlCss/AccessibilityQuizBuilding/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>AccessibilityQuiz</p>
          </a>
          <a className={styles.link} href="/htmlCss/BalanceSheet/index.html">
          <iframe src="/htmlCss/BalanceSheet/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>BalanceSheet</p>
          </a>
          <a className={styles.link} href="/htmlCss/CafeMenuApp/index.html">
          <iframe src="/htmlCss/CafeMenuApp/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>CafeMenuPage</p>
          </a>
          <a className={styles.link} href="/htmlCss/CatPhotoApp/index.html">
          <iframe src="/htmlCss/CatPhotoApp/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>CatPhotoPage</p>
          </a>
          <a className={styles.link} href="/htmlCss/ColorMarkersApp/index.html">
          <iframe src="/htmlCss/ColorMarkersApp/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>ColorMarkers</p>
          </a>
          <a className={styles.link} href="/htmlCss/CssBoxModelRothko/index.html">
          <iframe src="/htmlCss/CssBoxModelRothko/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>CssBoxModelRothko</p>
          </a>
          <a className={styles.link} href="/htmlCss/CssCat/index.html">
          <iframe src="/htmlCss/CssCat/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>CssCat</p>
          </a>
          <a className={styles.link} href="/htmlCss/FerrisWheel/index.html">
          <iframe src="/htmlCss/FerrisWheel/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>FerrisWheel</p>
          </a>
          <a className={styles.link} href="/htmlCss/Magazine/index.html">
          <iframe src="/htmlCss/Magazine/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>Magazine</p>
          </a>
          <a className={styles.link} href="/htmlCss/NutritionLabel/index.html">
          <iframe src="/htmlCss/NutritionLabel/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>NutritionLabel</p>
          </a>
          <a className={styles.link} href="/htmlCss/Penguin/index.html">
          <iframe src="/htmlCss/Penguin/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>Penguin</p>
          </a>
          <a className={styles.link} href="/htmlCss/Photogallery/index.html">
          <iframe src="/htmlCss/Photogallery/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>Photogallery</p>
          </a>
          <a className={styles.link} href="/htmlCss/ProductLandingPage/index.html">
          <iframe src="/htmlCss/ProductLandingPage/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>ProductLandingPage</p>
          </a>
          <a className={styles.link} href="/htmlCss/RegistrationForm/index.html">
          <iframe src="/htmlCss/RegistrationForm/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>RegistrationForm</p>
          </a>
          <a className={styles.link} href="/htmlCss/ResponsivePiano/index.html">
          <iframe src="/htmlCss/ResponsivePiano/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>ResponsivePiano</p>
          </a>
          <a className={styles.link} href="/htmlCss/SkylineCssVariables/index.html">
          <iframe src="/htmlCss/SkylineCssVariables/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>SkylineCssVariables</p>
          </a>
          <a className={styles.link} href="/htmlCss/SurveyForm/index.html">
          <iframe src="/htmlCss/SurveyForm/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>SurveyForm</p>
          </a>
          <a className={styles.link} href="/htmlCss/TechnicalDoc/index.html">
          <iframe src="/htmlCss/TechnicalDoc/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>TechnicalDoc</p>
          </a>
          <a className={styles.link} href="/htmlCss/TributePage/index.html">
          <iframe src="/htmlCss/TributePage/index.html" className={styles.webFrame} title="Iframe Example" scrolling="no"></iframe>
          <p>TributePage</p>
          </a>
          </div>
          </div>
        </section> 
      </main>
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
          <p>© 2025 Sally Resch</p>
        </section>
    </div>
  );
}
