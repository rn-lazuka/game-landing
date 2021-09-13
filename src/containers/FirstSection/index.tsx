import React from 'react';
import styles from './FirstSection.module.css'
import town from '../../assets/Header/town.gif'

const FirstSection = () => {
    return (
        <div className={styles.sectionContainer}>
        <div className={styles.sectionWrapper}>
            <img src={town} alt="town"/>
        </div>
        </div>
    );
}

export default FirstSection;
