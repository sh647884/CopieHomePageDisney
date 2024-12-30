import styles from './LCards.module.css';

const LCards = ({ img, title }) => {
  return (
    <div className={styles.largeCardContainer}>
      <div className={styles.card}>
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default LCards;