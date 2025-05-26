import ProjectList from '@/components/ProjectList/ProjectList'
import React from 'react'
import { projectsData } from "../../components/ProjectList/constants"
import styles from './page.module.css';
export default function projects() {
  return (
    <main>
      <div className={styles.header}>
      <h1>Projects</h1>
      <h2>Explore my work</h2>
      <h3>A mix of work and self-developed projects</h3>
      </div>
      <ProjectList projects={projectsData} />
    </main>
  )
}
