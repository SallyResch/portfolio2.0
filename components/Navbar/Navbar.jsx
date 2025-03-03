"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={styles.navbar}>
      {/* Desktop menu */}
      <div className={styles.menu}>
        <button className={styles.navLinks}
          onClick={() => scrollToSection("about")}
        >
         <h3>About</h3>
        </button>
        <button className={styles.navLinks}
          onClick={() => scrollToSection("projects")}
        >
         <h3>Work</h3> 
        </button>
        <button className={styles.navLinks}
          onClick={() => scrollToSection("contact")}
        >
         <h3>Contact</h3> 
        </button>
      </div>
    </nav>
  )
}