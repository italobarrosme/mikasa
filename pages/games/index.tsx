import styles from './../../styles/Games.module.scss'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Card from './../../components/Card'

export const getStaticProps = async () => {
  
  const ramdomNumber = Math.floor(Math.random() * 10)
  const response = await fetch(`https://api.rawg.io/api/games?key=69002ae81c6b49eab730ac819760dcc5&page=${ramdomNumber}`)
  const data = await response.json()

  return {
    props: {
      games: data.results
    }
  }

}

const Games: NextPage = ({ games }: any) => {
  return(
    <>
      <Head>
        <title>Game Over | Game list</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>List Games</h1>

        <ul className={styles.ul}>
          {games.map((game: any) => (
            <li key={game.id} className={styles.li}>
              <Link href={'/games/' + game.name}>
                <a className={styles.a}>
                  <Card title={game.name} image={game.background_image}/>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Games;