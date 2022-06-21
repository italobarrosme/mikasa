import type { NextPage } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import styles from '../styles/404.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound: NextPage = () => {

  const router = useRouter();
  

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 8000);
  }, []);


  return (
    <>
      <h1 className={styles.h1}>404</h1>
      <h2 className={styles.h2}>That page cannot be found.</h2>
      <Link href="/">
        <a className={styles.a}><Icon icon={'bi:arrow-left-circle'} />Back to Home </a>
      </Link>
    </>
  );
}

export default NotFound;