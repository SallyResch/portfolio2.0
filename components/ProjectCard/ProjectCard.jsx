import Image from 'next/image'
import React from 'react'
import image from "../../public/cuteslothworker.png"


export default function ProjectCard() {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
   <Image className="w-full h-48 object-cover" src={image} alt="picture" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Name</h2>
      <p className="text-gray-600">Description</p>
    </div>
  </div>
  )
}
