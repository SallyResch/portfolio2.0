import ProjectList from '@/components/ProjectList/ProjectList'
import React from 'react'
import { projectsData } from "../../components/ProjectList/constants"

export default function projects() {
  return (
    <main>
      <ProjectList title="Work Projects" projects={projectsData} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      </div>

    </main>
  )
}
