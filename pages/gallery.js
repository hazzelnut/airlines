import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airlines</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gallery 
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
            <Link href="/postcard.jpg">
              <a>
                <Image
                  src="/postcard.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard2.jpg">
              <a>
                <Image
                  src="/postcard2.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard.jpg">
              <a>
                <Image
                  src="/postcard.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard2.jpg">
              <a>
                <Image
                  src="/postcard2.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard.jpg">
              <a>
                <Image
                  src="/postcard.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard2.jpg">
              <a>
                <Image
                  src="/postcard2.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard.jpg">
              <a>
                <Image
                  src="/postcard.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard2.jpg">
              <a>
                <Image
                  src="/postcard2.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard.jpg">
              <a>
                <Image
                  src="/postcard.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard2.jpg">
              <a>
                <Image
                  src="/postcard2.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard.jpg">
              <a>
                <Image
                  src="/postcard2.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
          <div className={styles.cardSimple}>
            <Link href="/postcard2.jpg">
              <a>
                <Image
                  src="/postcard.jpg"
                  height={350}
                  width={500}
                />
              </a>
            </Link>
            <p>
              Text for the pictures
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
