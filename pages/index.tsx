import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import { LastGames } from '@/useCases/LastGames'
import { RegisterGame } from '@/useCases/RegisterGame'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Over | Home</title>
        <meta name="keywords" content="games" />
      </Head>
      <div className={styles.home}>
        <RegisterGame></RegisterGame>
      </div>
    </>
  )
}

export default Home
