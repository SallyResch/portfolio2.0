import ProjectList from '@/components/ProjectList/ProjectList'
import React from 'react'
import { workProjects, selfMadeProjects, javaScript, typeScript } from "../../components/ProjectList/constants"

export default function projects() {
  return (
    <main>
      <ProjectList title="Work Projects" projects={workProjects} />
      <ProjectList title="Self-Made Projects" projects={selfMadeProjects} />
      <ProjectList title="JavaScript Projects" projects={javaScript} />
      <ProjectList title="TypeScript Projects" projects={typeScript} />
    </main>
  )
}
