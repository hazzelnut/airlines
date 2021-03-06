import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airlines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Airlines 
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
            Hello 👋, this is some text to explain what we are planning to do. Here's a link to my <a href="">store</a>.
          </div>
        </div>
      </main>
    </div>
  )
}
