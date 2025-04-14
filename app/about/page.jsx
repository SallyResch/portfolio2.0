import React from 'react'
import sloth from "../../public/cuteslothworker.png"
import Image from 'next/image'
export default function about() {
  return (
    <div>
      <Image src={sloth} alt='sloth working'/>
    </div>
  )
}
