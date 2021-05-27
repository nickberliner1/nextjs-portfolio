import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyTerminal from '../components/MyTerminal';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Berliner</title>
        <meta name="description" content="Nick Berliner's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MyTerminal />
      </div>
    </div>
  )
}
