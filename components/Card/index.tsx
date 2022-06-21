import styles from './Card.module.scss'



const Card = ({ title, description, image }: any) => {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
      </div>
    </div>
    </>
  )
}

export default Card