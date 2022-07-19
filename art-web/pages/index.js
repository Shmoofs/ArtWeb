import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ArtWeb</title>
        <meta name="description" content="The website for artists" />
        <link rel="icon" href="/artweb.ico" />
      </Head>

      <main className={styles.main}>

      </main>
    </div>
  )
}