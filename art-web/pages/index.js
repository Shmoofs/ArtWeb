import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NoteOperations from './components/NoteOperations';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAvPJfr2vYg3mYbO3Lbo-RBFqezE2GtG4",
  authDomain: "artweb-2d885.firebaseapp.com",
  projectId: "artweb-2d885",
  storageBucket: "artweb-2d885.appspot.com",
  messagingSenderId: "728843305018",
  appId: "1:728843305018:web:f69d8b60914c6d896df503",
  measurementId: "G-32CHLQJCSP"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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