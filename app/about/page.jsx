import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import sloth from "../../public/cuteslothworker.png"
export default function about() {
  return (
    <div className={styles.container}>
    <Image src={sloth} width={320} alt='Under construction'></Image>
      {/*<section className={styles.aboutMeContainer}>
        <div>
        <h1 className={styles.heading}>About Me</h1>
          <div className={styles.textContainer}>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, labore, dicta velit, quae recusandae amet cumque quisquam itaque provident aspernatur optio atque cupiditate neque explicabo nostrum ab unde necessitatibus placeat!</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste ad aliquid, aut harum, molestiae, ducimus velit repellat aspernatur libero ea? Aperiam ipsum autem distinctio ad ullam, iusto unde deserunt.</p>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, veritatis? Ipsa voluptatum fuga nihil blanditiis ipsam, illo, quae suscipit cumque quas quo non animi impedit omnis alias iusto magni dolore?</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <ProfileImageCarousel />
        </div>
      </section>
      <section className={styles.skillsContainer}>
        <h2 className={styles.heading}>Skills & Technologies</h2>
        <div>
          <div className={styles.skill}>Html</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>React</div>
          <div className={styles.skill}>Next.js</div>
          <div className={styles.skill}>.NET</div>
          <div className={styles.skill}>C#</div>
          <div className={styles.skill}>Java</div>
          <div className={styles.skill}>Postman</div>
          <div className={styles.skill}>Git</div>
          <div className={styles.skill}>Figma</div>
          <div className={styles.skill}>Vs Code</div>
          <div className={styles.skill}>Visual Studio</div>
          <div className={styles.skill}>PostgreSQL</div>
        </div>
      </section>

      <section className={styles.experienceContainer}>
        <div className={styles.certificationsHeader}>
        <h2>Experience</h2>
        <i className="fa-solid fa-laptop-code fa-beat-fade fa-2xl"></i>
        </div>

        <div className={styles.experiencePart}>
          <div>
          <h3>Backend Developer Internship | .NET</h3>
          <p>Elevateyourself AB | 2024 oct - 2024 dec</p>
          </div>
        </div>
        <div className={styles.experiencePart}>
          <div>
          <h3>Website structure - Wordpress</h3>
          <p>Kulturantenn AB | 2024 oct - 2024 dec</p>
          </div>
        </div>
        <div className={styles.experiencePart}>
          <div>
          <h3>Frontend Developer Internship | Next.js - React</h3>
          <p>Elevateyourself AB | 2024 feb - 2024 may</p>
          </div>
        </div>
      </section>
      <section className={styles.educationContainer}>
        <div className={styles.certificationsHeader}>
        <h2>Education</h2>
        <i className="fa-solid fa-graduation-cap fa-beat-fade fa-2xl"></i>
        </div>
        <div className={styles.educationPart}>
          <div>
            <h3>System Developer .NET</h3>
            <p>Lexicon IT profs | 2024 feb - 2024 dec</p>
          </div>
          <div>
            <h3>Java Developer</h3>
            <p>Stockholms Tekniska Institut. | 2021 aug - 2023 aug</p>
          </div>
          <div>
            <h3>Responsive Web Design</h3>
            <p>FreeCodeCamp | 2024 dec - 2025 feb</p>
          </div>
        </div>
      </section>
      <section className={styles.certificationsContainer}>
        <div className={styles.certificationsHeader}>        
          <h2>Certifications</h2>
          <i className="fa-solid fa-ribbon fa-beat-fade fa-2xl"></i>
        </div>
        <div className={styles.certificationsPart}>
          <div className={styles.certification}>
          <h3>System Developer .NET</h3>
          <p>School: Lexicon | 2024 feb - 2024 aug</p>
          <p>Link to <Link className={styles.certLink} href="https://true.lexicon.se/diploma-lexicon-sally-resch-193127-3804/?zone=truecrt&modal=1&lang=se">Certificate</Link></p>
          </div>
          <div className={styles.certification}>
          <h3>Java Developer</h3>
          <p>School: Stockholms Technical Institute | 2021 aug - 2023 okt</p>
          <p>Link to <Link className={styles.certLink} href="https://true.sti.se/examensbevis-sally-resch-119694-1863/?zone=truecrt&modal=1&lang=se">Certificate</Link></p>
          </div>
          <div className={styles.certification}>
          <h3>Responsive Web Design</h3>
          <p>School: FreeCodeCamp | 2024 dec - 2025 feb</p>
          <p>Link to <Link className={styles.certLink} href="https://true.sti.se/examensbevis-sally-resch-119694-1863/?zone=truecrt&modal=1&lang=se">Certificate</Link></p>
          </div>
        </div>
      </section>
      */}
    </div>
  )
}
