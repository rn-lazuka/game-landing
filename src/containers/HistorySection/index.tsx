import React from 'react';
import styles from './HistorySection.module.css'
import hunter from '../../assets/History/Hunter.png'
import bandit from '../../assets/History/Bandit.png'
import girl from '../../assets/History/Girl.png'
import knight from '../../assets/History/Knight.png'
import sprites from '../../assets/History/Sprites.png'
import footerDeco from '../../assets/History/footerDeco.png'


const HistorySection = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionWrapper}>
                <div className={styles.titleWrap}>
                    <div className={styles.titleBackground}/>
                    <div className={styles.titleDecoration}/>
                    <span className={styles.title}>
                Write history
            </span>
                </div>
                <div className={styles.avatarsWrapper}>
                    <img src={hunter} alt="hunter"/>
                    <img src={bandit} alt="bandit"/>
                    <img src={girl} alt="girl"/>
                    <img src={knight} alt="knight"/>
                </div>
                <div className={styles.textWrap}>
                    <div className={styles.textBackground}/>
                    <span className={styles.text}>
                    In a chaotic world, you assume the role of a guild master,
                    vying for influence and control within Sanctum. By controlling
                    your network of pawns, you will complete increasingly difficult missions:
                    while collecting loot, leveling up, and learning more about the world.
                </span>
                </div>
                <img src={sprites} alt="sprites" className={styles.sprites}/>
                <img src={footerDeco} alt="footer decoration" className={styles.footerDecoration}/>
            </div>
        </div>
    );
}

export default HistorySection;