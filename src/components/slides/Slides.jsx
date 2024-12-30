import styles from './Slides.module.css'

const Slides = ({ slides, imgSlide, transitionClass }) => {
  return (
    <div>
      <div className={`${styles.imgContainer} ${transitionClass}`}>
        <img src={slides[imgSlide].img} alt="title" className={styles.imgSlide} />
      </div>
    </div>
  );
};

export default Slides