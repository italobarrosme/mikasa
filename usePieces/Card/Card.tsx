import clsx from 'clsx'

export type CardProps = {
  title: string,
  order: number,
  image: string,
}

export const Card = ({ title, order, image }: CardProps) => {
  return (

    <div className={clsx("bg-brand-primary text-brand-light max-w-xs p-6 rounded-md shadow-md hover:bg-brand-accent")}>
      <div >
        <img className='object-fit object-center w-full rounded-md h-56 ' src={image} alt={title} />
      </div>
      <div className="mt-6 mb-2 h-20">
        <span className='block text-xs font-medium tracking-widest uppercase '>Order Finished {order}º</span>
        <h3 className='text-xl font-semibold tracking-wide'>{title}</h3>
      </div>
    </div>
  )
}