import styles from './Card.module.scss'

type CardProps = {
  title: string,
  order: number,
  image: string,
}

export const Card = ({ title, order, image }: CardProps) => {
  return (

    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt={title} />
        <span className={styles.order}>{order}º</span>
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
      </div>
    </div>
  )
}