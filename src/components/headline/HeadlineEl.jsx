import React from 'react'
import styles from './HeadlineEl.module.css'

const HeadlineEl = ({ name, Icon }) => {
  return (
    <div className={styles.menuItems}>
        <Icon className={styles.icon}/>
        <span className={styles.item}>{name}</span>
    </div>
  )
}

export default HeadlineEl