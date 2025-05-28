import React from 'react'
import styles from "./page.module.css"

import Image from 'next/image';
import certified from "../../public/Check-Badge--Streamline-Ultimate.svg";
import document from "../../public/Bookmarks-Document--Streamline-Ultimate.svg";
import experienceImage from "../../public/Desktop-Computer-Pc--Streamline-Ultimate.svg";
import Link from 'next/link';
export default function about() {
  return (
    <div className={styles.container}>
      <section className={styles.aboutMeContainer}>
        <div>
        <h1 className={styles.heading}>About Me</h1>
          <div className={styles.textContainer}>
            <p className={styles.text}>Introduction</p>
            <p className={styles.text}>Motivation and interest</p>
            <p className={styles.text}>Relevant Experience</p>
            <p className={styles.text}>Ending</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
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
        <Image className={styles.certified} src={experienceImage} alt="certified" width={50} height={50}/>
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
        <Image className={styles.certified} src={document} alt="certified" width={50} height={50}/>
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
          <Image className={styles.certified} src={certified} alt="certified" width={50} height={50}/>
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
    </div>
  )
}
