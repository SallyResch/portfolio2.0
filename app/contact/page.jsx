import Image from 'next/image'
import React from 'react'
import sloth from "../../public/cuteslothworker.png"

export default function contact() {
  return (
    <div><Image src={sloth} alt='sloth working' width={280} height={280}/></div>
  )
}
