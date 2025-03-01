"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        SR
      </Link>
    {/* Desktop menu */}
      <div className={styles.menu}>
        <button
          variant="ghost"
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          variant="ghost"
          onClick={() => scrollToSection("work")}
        >
          Work
        </button>
        <button
          variant="ghost"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  )
}