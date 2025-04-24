import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import altPicture from "../../public/cuteslothworker.png"
export default function about() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.heading}>About Me</h1>
          <div className={styles.textContainer}>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, labore, dicta velit, quae recusandae amet cumque quisquam itaque provident aspernatur optio atque cupiditate neque explicabo nostrum ab unde necessitatibus placeat!</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste ad aliquid, aut harum, molestiae, ducimus velit repellat aspernatur libero ea? Aperiam ipsum autem distinctio ad ullam, iusto unde deserunt.</p>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, veritatis? Ipsa voluptatum fuga nihil blanditiis ipsam, illo, quae suscipit cumque quas quo non animi impedit omnis alias iusto magni dolore?</p>
          </div>
      </section>
      <section>
        <h2>Skills & Technologies</h2>
        <div className={styles.skillsContainer}>
          <div>Html</div>
          <div>CSS</div>
          <div>React</div>
          <div>Next.js</div>
          <div>.NET</div>
          <div>C#</div>
          <div>Java</div>
          <div>Postman</div>
          <div>Git</div>
          <div>Figma</div>
        </div>
      </section>
      <section>
        <Image src={altPicture} width={260} height={260} alt='alternative bild'/>
      </section>
      <section className={styles.experienceContainer}>
        <h2>Experience</h2>
        <div className={styles.experiencePart}>
          <div>
          <h3>Backend Developer Intership</h3>
          <p>Company name. | 2024 october - 2024 december</p>
          </div>
        </div>
        <div className={styles.experiencePart}>
          <div>
          <h3>Backend Developer Intership</h3>
          <p>Company name. | 2024 october - 2024 december</p>
          </div>
        </div>
        <div className={styles.experiencePart}>
          <div>
          <h3>Backend Developer Intership</h3>
          <p>Company name. | 2024 october - 2024 december</p>
          </div>
        </div>
        <div className={styles.experiencePart}>
          <div>
          <h3>Backend Developer Intership</h3>
          <p>Company name. | 2024 october - 2024 december</p>
          </div>
        </div>
      </section>
      <section className={styles.educationContainer}>
        <h2>Education</h2>
        <div className={styles.educationPart}>
          <div>
          <h3>Java </h3>
          <p>Company name. | 2024 october - 2024 december</p>
          </div>
        </div>
      </section>
      <section className={styles.certificationsContainer}>
        <h2>Certifications</h2>
        <div className={styles.certificationsPart}>
          <div>
          <h3>Backend Developer Intership</h3>
          <p>Company name. | 2024 october - 2024 december</p>
          </div>
        </div>
        
      </section>
    </div>
  )
}
