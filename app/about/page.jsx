import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import sloth from "../../public/cuteslothworker.png"
export default function about() {
  return (
    <div className={styles.container}>
      <Image src={sloth} width={320}></Image>
    </div>
  )
}
