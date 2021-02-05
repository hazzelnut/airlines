import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airlines</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>
        
        <div className={styles.navbar}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
          <Link href="/detail">
            <a>Detail</a>
          </Link>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.cardSimple}>
            Here is some text about us. Here is some text about us. Here is some text about us. Here is some text about us. Here is some text about us.
          </div>
        </div>
      </main>
    </div>
  )
}
