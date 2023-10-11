import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>This is Splitwisely</h1>
      <p className={styles.description}>the best way to manage your expenses on your trip 🌎</p>
    </div>
  )
}
