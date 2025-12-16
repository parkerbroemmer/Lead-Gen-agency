import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Lead Agency</title>
        <meta name="description" content="Lead Generation Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>My Lead Agency</span>
        </h1>

        <p className={styles.description}>
          Your trusted partner for generating quality leads
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Multi-City Coverage</h2>
            <p>We serve clients across multiple cities</p>
          </div>

          <div className={styles.card}>
            <h2>Email Integration</h2>
            <p>Automated email service for lead management</p>
          </div>

          <div className={styles.card}>
            <h2>Call Tracking</h2>
            <p>Track and analyze your lead calls</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Lead Agency. All rights reserved.</p>
      </footer>
    </div>
  )
}
