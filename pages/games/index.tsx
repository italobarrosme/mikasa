import { ListGames } from '@/useCases/ListGames'
import type { NextPage } from 'next'
import Head from 'next/head'


const Games: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Over | Game list</title>
      </Head>
      <ListGames />
    </>
  )
}

export default Games;