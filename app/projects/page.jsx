import ProjectList from '@/components/ProjectList/ProjectList'
import React from 'react'
import { projectsData } from "../../components/ProjectList/constants"

export default function projects() {
  return (
    <main>
      <ProjectList title="Work Projects" projects={projectsData} />
    </main>
  )
}
