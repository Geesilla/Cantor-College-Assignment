import Image from "next/image"
import styles from "./page.module.css"
import Head from "next/head"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cantor College</title>
        <meta name="description" content="Welcome to the Cantor homepage" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Welcome to the Cantor College Website</h1>
      </header>
      <main className={styles.main}>
        <p>Use this page to introduce your content and engage users.</p>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 Your Name</p>
      </footer>
    </div>
  );
}