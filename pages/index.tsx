import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import LastGames from '../components/LastGames'

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
            <h1 className="text-3xl font-serif">
            Finished a game?
            </h1>
          </div>
        </div>
        <div className={styles.content}>
          <LastGames />
        </div>
      </main>
    </>
  )
}

export default Home
