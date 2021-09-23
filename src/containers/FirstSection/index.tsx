import React from 'react'
import styles from './FirstSection.module.css'
import bannerLogo from '../../assets/Header/bannerLogo.png'
import separator from '../../assets/About/separator.png'

const FirstSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionWrapper}>
        <img src={bannerLogo} alt="banner Logo" />
      </div>
      <img src={separator} alt="separator" className={styles.separator} />
    </div>
  )
}

export default FirstSection
