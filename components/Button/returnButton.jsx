import React from 'react'
import Link from 'next/link'
import styles from "@/app/page.module.css";
function ReturnButton() {
    return (
        <Link href="/" className={styles.startlink}>
            Return Home
        </Link>
    )
}

export default ReturnButton