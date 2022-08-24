import style from './SideForm.module.scss'
import { Icon } from '@iconify/react';
import { ReactNode } from 'react'
import clsx from 'clsx';

type SideFormProps = {
  children: ReactNode
  title?: string,
  toggle: string,
  emitEventClose: (event: Boolean) => void
}

export const SideForm = ({ children, title = 'Titulo', emitEventClose, toggle = 'isClosed', ...props }: SideFormProps) => {
  return (
    <aside  {...props} className={clsx(style[toggle], style.component)} >
      <div className={style.header}>
        <h1>{title}</h1>
        <button onClick={() => emitEventClose(true)}>
          <Icon icon="ep:circle-close-filled" />
        </button>
      </div>
      <nav className={style.navbar}>
        {children}
      </nav>
    </aside>
  )

}