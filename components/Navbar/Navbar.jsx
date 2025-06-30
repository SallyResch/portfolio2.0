"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <Link
          href="/"
          className={`${styles.navLinks} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${styles.navLinks} ${pathname === "/projects" ? styles.active : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`${styles.navLinks} ${pathname === "/about" ? styles.active : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${styles.navLinks} ${pathname === "/contact" ? styles.active : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}