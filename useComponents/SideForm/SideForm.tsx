import Styles from './SideForm.module.scss'
import { Icon } from '@iconify/react';
import { ReactNode } from 'react'
import clsx from 'clsx';

export type SideFormProps = {
  children: ReactNode
  title?: string,
  toggle: string,
  emitEventClose: (event: Boolean) => void
}

export const SideForm = ({ children, title = 'Titulo', emitEventClose, toggle = 'isClosed', ...props }: SideFormProps) => {
  return (
    <aside  {...props} className={clsx(Styles[toggle], Styles.component)} >
      <div className={Styles.header}>
        <h1>{title}</h1>
        <button onClick={() => emitEventClose(true)}>
          <Icon icon="ep:circle-close-filled" />
        </button>
      </div>
      <nav className={Styles.navbar}>
        {children}
      </nav>
    </aside>
  )

}