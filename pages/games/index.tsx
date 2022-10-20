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
      <section >
        <h1 className="bg-brand-dark text-white p-4 my-8 rounded-md">Game List</h1>

        <ul className="flex flex-wrap gap-6 justify-center">
          {data?.games.map((game: any) => (
            <li key={game.id}>
              <Link href={'/games/' + game.id}>
                <a>
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