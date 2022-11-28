import { Navbar } from "@/useComponents/Navbar/Navbar";
import { Footer } from "@/useComponents/Footer/Footer";
import Head from 'next/head'

const DefaultLayout = ({ children }: any) => {
  return (
    <div className="font-mono overflow-y-hidden">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Application for cataloging the games I've finished" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-[calc(100vh-110px)] overflow-y-auto p-12">
        {children}
      </main>
      <Footer copyRight="Copyright 2022 YellowScreen" />
    </div>
  )
}

export default DefaultLayout;