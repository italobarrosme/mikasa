import styles from './Card.module.scss'



const Card = ({ title, order, image }: any) => {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt={title} />
        <span className={styles.order}>{ order }º</span>
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
      </div>
    </div>
    </>
  )
}

export default Card