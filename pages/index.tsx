import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import LastGames from '../components/LastGames'
import { Button } from '@chakra-ui/react'

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
            <h1 className={styles.h1}>
            Finished a game?
            </h1> 
            <Button bg='brand.light'>Register here and share your game</Button>
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
