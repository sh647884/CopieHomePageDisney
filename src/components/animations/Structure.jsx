import styles from './Structure.module.css'

const Structure = ({ img, title, video }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={img} alt={title} />
        <video loop autoPlay muted playsInline className={styles.animation}>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default Structure;
