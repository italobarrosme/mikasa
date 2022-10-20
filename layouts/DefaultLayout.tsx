import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import Head from 'next/head'

const DefaultLayout = ({ children }: any) => {
  return (
    <div className="container mx-auto @apply font-mono overflow-y-hidden bg-brand-light;">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-[calc(100vh-130px)] overflow-y-auto p-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout;