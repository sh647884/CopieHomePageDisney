import Structure from './Structure'
import styles from './Logos.module.css'

// names
import disneyIcon from '../../assets/logos/disn.png'
import pixarIcon from '../../assets/logos/px.png'
import marvelIcon from '../../assets/logos/marvel.png'
import starwarsIcon from '../../assets/logos/sw.png'
import natgeoIcon from '../../assets/logos/ng.png'

// animations vid
import diss from '../../assets/vids/diss.mp4'
import marv from '../../assets/vids/marv.mp4'
import ntg from '../../assets/vids/ntg.mp4'
import sws from '../../assets/vids/sws.mp4'
import pix from '../../assets/vids/pix.mp4'

const Logos = () => {

    const cards = [
        { img: disneyIcon, title: 'dis', video: diss },
        { img: pixarIcon, title: 'pix', video: pix },
        { img: marvelIcon, title: 'mar', video: marv },
        { img: starwarsIcon, title: 'sws', video: sws },
        { img: natgeoIcon, title: 'ntg', video: ntg }
    ]

    return (
        <div className={styles.view}>
            {cards.map((item) => (
                <Structure img={item.img} title={item.title} video={item.video} />
            ))}
        </div>
    )
}

export default Logos