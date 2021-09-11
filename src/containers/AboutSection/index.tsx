import React from 'react';
import styles from './AboutSection.module.css'
import transmute from '../../assets/About/transmute.png'
import titleBack from '../../assets/About/titleBack.png'
import recruiting from '../../assets/About/recruiting.png'
import recruitingText from '../../assets/About/recruitingText.png'
import equippingText from '../../assets/About/equippingText.png'
import equipping from '../../assets/About/equipping.png'


const AboutSection = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionWrapper}>
                <div className={styles.titleWrap}>
                    <img src={titleBack} alt="title decoration" className={styles.titleBackground}/>
                    <span className={styles.title}>
                        About
                    </span>
                </div>
                <div className={styles.textContainer}>
                    <img src={recruiting} alt="recruiting" className={styles.sideImg}/>
                    <div className={styles.rightTextWrap}>
                        <img src={recruitingText} alt="recruiting background" className={styles.textBackground}/>
                        <span className={styles.rightSubTitle}>
                        Recruiting pawns
                    </span>
                        <span className={styles.rightSubText}>
                            As a guild master, you don't personally get your hands dirty in the field.
                            For that, you have a roster of pawns - archers, warriors, and mages - to do your bidding.
                        </span>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.leftTextWrap}>
                        <img src={equippingText} alt="equipping background" className={styles.textBackground}/>
                        <span className={styles.leftSubTitle}>
                        Equipping
                    </span>
                        <span className={styles.leftSubText}>Along with payments,
                            missions will also sometimes reward items which can be equipped to your pawns. However,
                            each item is unique and can vary greatly in power and rarity.
                        </span>
                    </div>
                    <img src={equipping} alt="equipping" className={styles.sideImg}/>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
