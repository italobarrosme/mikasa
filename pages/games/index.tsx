import styles from './../../styles/Games.module.scss'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Card from './../../components/Card'
import { useQuery } from '@apollo/client'
import { GET_GAMES } from '../../lib/querys'



// export const getStaticProps = async () => {
  // const ramdomNumber = Math.floor(Math.random() * 10)
  // const response = await fetch(`https://api.rawg.io/api/games?key=69002ae81c6b49eab730ac819760dcc5&page=${ramdomNumber}`)
  // const data = await response.json()

  // return {
  //   props: {
  //     games: data
  //   }
  // }

// }

const Games: NextPage = () => {
  const { data } = useQuery(GET_GAMES)

  return(
    <>
      <Head>
        <title>Game Over | Game list</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>Game List</h1>

        <ul className={styles.ul}>
          {data?.games.map((game: any) => (
            <li key={game.id} className={styles.li}>
              <Link href={'/games/' + game.title}>
                <a className={styles.a}>
                  <Card title={game.title} image={game.image.url}/>
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