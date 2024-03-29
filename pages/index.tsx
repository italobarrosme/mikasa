import type { NextPage } from 'next'
import Head from 'next/head'
import { RegisterGame } from '@/useCases/RegisterGame'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Over | Home</title>
        <meta name="keywords" content="games" />
      </Head>
      <div className="flex justify-center items-center h-[calc(100vh-16em)]">
        <RegisterGame></RegisterGame>
      </div>
    </>
  )
}

export default Home
