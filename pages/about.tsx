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
      <h1 className={styles.h1}>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni vitae itaque autem neque dolor ut repellendus debitis explicabo quidem aspernatur voluptatum, 
        id recusandae magnam excepturi facere esse ad inventore in.</p>

      <Link href="/">
        <a className={styles.a}><Icon icon={'bi:arrow-left-circle'} />Back to Home </a>
      </Link>
    </>
  );
}

export default About;
