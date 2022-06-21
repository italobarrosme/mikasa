import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './../styles/About.module.scss'
import { Icon } from '@iconify/react';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Over | About</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>About</h1>
        <p>
          This site is used to catalog the games I've finished I've been doing this for 10 years, PC games are a hobby I have, 90% of the games played on the PC platform are zeroed games in campaign mode most of them in normal or hard mode.
        </p>

        <Link href="/">
          <a className={styles.a}><Icon icon={'bi:arrow-left-circle'} />Back to Home </a>
        </Link>
      </main>
    </>
  );
}

export default About;
