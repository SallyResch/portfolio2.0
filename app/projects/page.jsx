import ProjectList from '@/components/ProjectList/ProjectList'
import React from 'react'
import { projectsData } from "../../components/ProjectList/constants"
import styles from './page.module.css';

export const metadata = {
  title: "Projects | Sally Resch Portfolio",
  description: "Browse a curated selection of Sally Resch's professional and self-developed software projects.",
  keywords: ["Sally Resch", "projects", "portfolio", "web development", "software", "frontend", "react", "next.js"],
  openGraph: {
    title: "Projects | Sally Resch Portfolio",
    description: "Browse a curated selection of Sally Resch's professional and self-developed software projects.",
    url: "https://portfolio2-0-xi-seven.vercel.app/", // Replace with your actual domain
    siteName: "Sally Resch Portfolio",
    images: [
      {
        url: "https://portfolio2-0-xi-seven.vercel.app/projects", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Sally Resch Projects Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
// ---

export default function projects() {
  return (
    <main>
      <div className={styles.header}>
      <h1>Projects</h1>
      <h2>Explore my work</h2>
      <h3>A mix of work- & self-developed projects</h3>
      </div>
      <ProjectList projects={projectsData} />
    </main>
  )
}
