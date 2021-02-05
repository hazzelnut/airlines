import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Detail() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airlines</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Detail
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
          <Image src="/monalisa.png" layout="intrinsic" height={700} width={500}/>
            <p>
              Some details and a picture
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
