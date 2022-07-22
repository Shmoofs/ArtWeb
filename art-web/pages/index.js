import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NoteOperations from './components/NoteOperations';
import bar from './bar.js';

bar();

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ArtWeb</title>
        <meta name="description" content="The website for artists" />
        <link rel="icon" href="/artweb.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <NoteOperations />
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </main>

    </div>
  )
}