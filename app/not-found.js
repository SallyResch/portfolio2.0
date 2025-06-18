import ReturnButton from "@/components/Button/returnButton"
import styles from "@/app/about/page.module.css";
export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <ReturnButton />
    </div>
  )
}