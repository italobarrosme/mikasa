import { ReactNode } from 'react'

type footerProps = {
  children?: ReactNode,
  copyRight: string
}

export const Footer = ({ children, copyRight }: footerProps) => {
  return (
    <>
      <footer className="container mx-auto flex items-center justify-between w-full absolute bottom-0 p-4">
        {children}
        <span className="mx-4">{copyRight}</span>
      </footer>
    </>
  )
}