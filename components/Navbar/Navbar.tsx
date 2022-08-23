import Link from 'next/link'
// import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss'
import { useWindowSize } from 'usehooks-ts'
import clsx from 'clsx'

const pages = [
  {
    name: 'Home',
    href: '/',
    icon: 'home'
  },
  {
    name: 'Game List',
    href: '/games',
    icon: 'gamepad'
  },
  {
    name: 'About',
    href: '/about',
    icon: 'info'
  }

]


export const Navbar = () => {
  const router = useRouter();
  const { width, height } = useWindowSize()

  return (
    <>
      <nav className={styles.navbar_list}>

        {width > 1080 &&
          <div className={styles.logo}>
            <Icon icon="simple-icons:pcgamingwiki" />
            {/* <Image src="/logo.png" width={'64'} height={'64'} alt="logo" /> */}
          </div>
        }
        <ul className={clsx(width < 1080 ? styles.items_list_mobile : styles.items_list_desktop)}>
          {pages.map(page => (
            <li className={router.pathname === page.href ? styles.__active : ''} key={page.name}>
              <Link href={page.href}>
                <a>
                  <Icon icon={page.icon} />
                  <span>{page.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}