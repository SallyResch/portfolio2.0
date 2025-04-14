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
        <div className={styles.menu}>
          <Link href="#about" className={styles.navLinks} onClick={() => scrollToSection("about")}>
            About
          </Link>
          <Link href="/projects" className={styles.navLinks}>
            Work
          </Link>
          <Link href="#contact" className={styles.navLinks} onClick={() => scrollToSection("contact")}>
            Contact
          </Link>
        </div>
    </nav>
  );
}