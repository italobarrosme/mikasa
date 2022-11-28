import type { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { GET_GAMES, GetGamesQueryResponse } from '@/services/graphQl/querys'
import { ListCards } from '@/useComponents/ListCards'

const Games: NextPage = () => {
  const { data } = useQuery<GetGamesQueryResponse>(GET_GAMES)


  console.log(data, 'DATA')


  return (
    <>
      <Head>
        <title>Game Over | Game list</title>
      </Head>
      <section>
        <div className="flex justify-center items-center mb-4">
          <h1 className="title-font font-medium text-2xl bg-brand-dark text-brand-light mb-4 w-[140px]">Game List</h1>
        </div>

        <ListCards items={data?.games} linkRef="/games/" ></ListCards>
      </section>
    </>
  )
}

export default Games;