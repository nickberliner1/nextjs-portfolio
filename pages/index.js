import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nick Berliner</title>
        <meta name="description" content="Nick Berliner's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1>Front End Engineer</h1>
        <p>Musician</p>
      </div>
    </div>
  )
}
