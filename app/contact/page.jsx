import Image from 'next/image'
import React from 'react'
import sloth from "../../public/images/cuteslothworker.png"
import styles from "./page.module.css"
export default function contact() {
  return (
    <div className={styles.container}><Image src={sloth} alt='sloth working' width={280} height={280}/></div>
  )
}
