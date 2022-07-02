import styles from './../../styles/Games.module.scss'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { useQuery } from '@apollo/client'
import { GET_GAMES, GetGamesQueryResponse } from '@/graphQl/querys'

const Games: NextPage = () => {
  const { data } = useQuery<GetGamesQueryResponse>(GET_GAMES)


  console.log(data, 'DATA')


  return (
    <>
      <Head>
        <title>Game Over | Game list</title>
      </Head>
      <section className={styles.games}>
        <h1 className={styles.h1}>Game List</h1>

        <ul className={styles.ul}>
          {data?.games.map((game: any) => (
            <li key={game.id} className={styles.li}>
              <Link href={'/games/' + game.id}>
                <a className={styles.a}>
                  <Card title={game.title} image={game?.image.url} order={game.orderFinished} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Games;