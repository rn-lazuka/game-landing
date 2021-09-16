import React from 'react';
import styles from './FirstSection.module.css'
import bannerLogo from '../../assets/Header/bannerLogo.png'

const FirstSection = () => {
    return (
        <div className={styles.sectionContainer}>
        <div className={styles.sectionWrapper}>
            <img src={bannerLogo} alt="banner Logo" />
        </div>
        </div>
    );
}

export default FirstSection;
