import React from 'react';
import styles from './FirstSection.module.css'
import firstImg from '../../assets/Header/Banner.png'

const FirstSection = () => {
    return (
        <div className={styles.sectionContainer}>
        <div className={styles.sectionWrapper}>
            <img src={firstImg} alt="town"/>
        </div>
        </div>
    );
}

export default FirstSection;
