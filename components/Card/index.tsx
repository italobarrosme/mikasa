import styles from './Card.module.scss'
import clsx from 'clsx'

type CardProps = {
  title: string,
  order: number,
  image: string,
}

export const Card = ({ title, order, image }: CardProps) => {
  return (

    <div className={clsx(styles.card, "bg-brand-secondary text-brand-light")}>
      <div className={styles.card__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.card__content}>
        <span className={styles.order}>Order Finished {order}º</span>
        <h3 className={styles.card__title}>{title}</h3>
      </div>
    </div>
  )
}