import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Over | Home</title>
        <meta name="keywords" content="games" />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.hero_text}>
            <h1 className={styles.h1}>Game Over</h1>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
