import React from 'react';
import styles from './AboutSection.module.css';
import titleBack from '../../assets/About/titleBack.png';
import recruiting from '../../assets/About/recruiting.png';
import recruitingText from '../../assets/About/recruitingText.png';
import equippingText from '../../assets/About/equippingText.png';
import equipping from '../../assets/About/equipping.png';
import missionsSending from '../../assets/About/missionsSending.png';
import missionsSendingText from '../../assets/About/missionsSendingText.png';
import loot from '../../assets/About/loot.png';
import lootText from '../../assets/About/lootText.png';
import transmutation from '../../assets/About/transmutation.png';
import transmutationText from '../../assets/About/transmutationText.png';
import transmute from '../../assets/About/transmute.png';
import decoration from '../../assets/About/decoration.png';

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

                <div className={styles.textContainer}>
                    <img src={missionsSending} alt="missions sending" className={styles.sideImg}/>
                    <div className={styles.rightTextWrap}>
                        <img src={missionsSendingText} alt="missions background" className={styles.textBackground}/>
                        <span className={styles.rightSubTitle}>
                        Sending on missions
                    </span>
                        <span className={styles.rightSubText}>
                            Starting with a selection of missions, and you'll obtain new missions simply by completing the current ones.
                            Each mission will require different expertise, calling upon mages for certain quests, and archers for another.
                        </span>
                    </div>
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.leftTextWrap}>
                        <img src={lootText} alt="loot background" className={styles.textBackground}/>
                        <span className={styles.leftSubTitle}>
                        Loot
                    </span>
                        <span className={styles.leftSubText}>
                            Depending on the rarity of the mission, and it's difficulty:
                            you'll receive items and gold to match. This will be the primary income source for your guild,
                            and also the primary way of obtaining new items to strengthen your pawns.
                        </span>
                    </div>
                    <img src={loot} alt="loot" className={styles.sideImg}/>
                </div>

                <div className={styles.textContainer}>
                    <img src={transmutation} alt="transmutation sending" className={styles.sideImg}/>
                    <div className={styles.rightTextWrap}>
                        <img src={transmutationText} alt="transmutation background" className={styles.textBackground}/>
                        <span className={styles.rightSubTitle}>
                        Transmutation
                    </span>
                        <span className={styles.rightSubText}>
                            For the more established guild master, you can try your luck with the transmutation experts.
                            They dabble in the little-understood art of transmuting items (or even pawns) into a superior variant,
                            but everything has a cost!
                        </span>
                    </div>
                </div>

                <img src={transmute} alt="transmute" className={styles.centeredImg}/>
                <img src={decoration} alt="decoration" className={styles.lastSectionImg}/>

            </div>
        </div>
    );
}

export default AboutSection;
