import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Icon } from '@iconify/react';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Over | About</title>
      </Head>
      <main className="container mx-auto flex flex-col justify-center items-center h-[500px]">
        <h1 className="title-font font-medium text-2xl bg-brand-dark text-brand-light mb-4">About</h1>
        <p>
          This site is used to catalog the games Ive finished.
          Ive been doing this for 10 years, PC games are a hobby I have, 90% of the games played are on the PC platform
          games are completed in campaign mode, most of them on normal or hard difficulty.
        </p>

        <Link href="/">
          <a className="flex items-center gap-4 mt-6"><Icon icon={'bi:arrow-left-circle'} />Back to Home </a>
        </Link>
      </main>
    </>
  );
}

export default About;
