import styles from './Note.module.css'
import logo from '../../assets/logos/disneyIcon.svg';

const Note = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <img src={logo} className={styles.icon} />
            </div>
            <div className={styles.links}>
                <div className={styles.touchable}>
                    <span>Politique de confidentialité</span>
                    <span>Conditions d'abonnement</span>
                    <span>Aide</span>
                    <span>Appareils compatibles</span>
                </div>
                <div className={styles.touchable}>
                    <span>À propos de Disney+</span>
                    <span>Publicité personnalisée</span>
                </div>
            </div>
            <div className={styles.copyrigth}>
                <div className={styles.text}>
                    Le service Disney+ est commercialisé par Disney DTC LATAM, Inc., 2400 W Alameda Ave., Burbank CA 91521, et Tax ID 75-3016153.
                </div>
            </div>
            <div className={styles.copyrigth}>
                <div className={styles.text}>
                    © Disney. Tous droits réservés.
                </div>
            </div>
        </div>
    )
}

export default Note;