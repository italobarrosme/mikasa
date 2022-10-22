import Link from 'next/link'
import { useWindowSize } from 'usehooks-ts'
import clsx from 'clsx'
import { Card } from '@/components/Card'

export type ListCardsProps = {
  items?: Array<any>,
  linkRef?: string
}


export const ListCards = ({ items, linkRef }: ListCardsProps) => {

  const { width } = useWindowSize()


  return (
    <ul className={clsx(width < 1080 ? 'flex flex-col gap-6 items-center' : 'flex flex-wrap gap-4')}>
      {items?.map((it: any) => (
        <li key={it.id}>
          {linkRef ? <Link href={linkRef + it.id}>
            <a>
              <Card title={it.title} image={it?.image.url} order={it.orderFinished} />
            </a>
          </Link> : <Card title={it.title} image={it?.image.url} order={it.orderFinished} />}
        </li>
      ))}
    </ul>
  )
}