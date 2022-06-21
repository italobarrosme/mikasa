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
            <h1>All Games</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae itaque autem neque dolor ut repellendus debitis explicabo quidem aspernatur voluptatum, id recusandae magnam excepturi facere esse ad inventore in.</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
