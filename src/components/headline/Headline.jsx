import styles from './Headline.module.css';

// components
import HeadlineEl from './HeadlineEl';

// media
import dIcon from '../../assets/logos/disneyIcon.svg';
import profile from '../../assets/logos/avatar.png';

// react icons
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi';
import { HiHome, HiStar } from 'react-icons/hi';
import { RiTvFill } from 'react-icons/ri';

const Headline = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    {
      name: 'ACCUEIL',
      icon: HiHome
    },
    {
      name: 'RECHERCHE',
      icon: BiSearch
    },
    {
      name: 'MA LISTE',
      icon: FaPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'FILMS',
      icon: GiFilmSpool
    },
    {
      name: 'SÉRIES',
      icon: RiTvFill
    }
  ];

  return (
    <div className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
      <img src={dIcon} className={styles.dIcon} />
      <div className={styles.menu}>
        {menu.map((item, index) => (
          <HeadlineEl key={index} name={item.name} Icon={item.icon} />
        ))}
      </div>
      <div className={styles.user}>
        <p className={styles.username } >Samy</p>
        <img src={profile} className={styles.profile} />
      </div>
    </div>
  );
};

export default Headline;
