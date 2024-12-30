import styles from './Cards.module.css'

const Cards = ({ img, title }) => {
    return (
        <div className={styles.crdContainer}>
            <div className={styles.element}>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default Cards;
