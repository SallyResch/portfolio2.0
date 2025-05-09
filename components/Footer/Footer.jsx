import React from 'react'
import styles from './Footer.module.css'
import Image from "next/image";
import gitImage from "../../public/github.png";
import linkedImage from "../../public/linkedin.png";
import emailImage from "../../public/email.png";
export default function Footer() {
  return (
    <div>
        <section id="contact" className={styles.contact}> 
            <h3>Lets do projects together</h3>
            <p>Contact Me @:</p>
            <div className={styles.contactLinks}>
            <a className={styles.profileLink} href="https://se.linkedin.com/in/sally-resch" target="_blank" rel="noopener noreferrer">
                <Image className={styles.linkImage} src={linkedImage} alt="LinkedInIcon" width={50} height={50} />
        
            </a>
            <a className={styles.profileLink} href="mailto:sallyresch27@gmail.com">
                <Image className={styles.linkImage} src={emailImage} alt="mailIcon" width={50} height={50} />

            </a>
            <a className={styles.profileLink} href="https://github.com/SallyResch" target="_blank" rel="noopener noreferrer">
                <Image className={styles.linkImage} src={gitImage} width={50} height={50} alt="githubIcon" />
            </a>
            </div>
            <p>© 2025 Sally Resch</p>
        </section>
  </div>
  )
}
