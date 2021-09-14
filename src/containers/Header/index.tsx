import React, {FC} from 'react'
import logo from '../../assets/Header/Logo.png'
import twitter from '../../assets/Header/Twitter.png'
import discord from '../../assets/Header/Discord.png'
import about from '../../assets/Header/About.png';
import road from '../../assets/Header/Roadmap.png';
import docs from '../../assets/Header/Docs.png';
import burger from '../../assets/Burger/burger.png';
import BurgerMenu from '../../components/BurgerMenu'
import useToggle from '../../utils/useToggle'

import styles from './Header.module.css'


const Header: FC = () => {
    const [isBurgerModal, toggleIsBurgerModal] = useToggle();
    return (
        <div className={styles.container}>

            {isBurgerModal
                ? <BurgerMenu isBurgerModal={isBurgerModal} modalToggleHandler={toggleIsBurgerModal}/>
                : null}

            <div className={styles.navWrapper}>
                <div className={styles.leftWrapper}>
                    <a href="#">
                        <img src={logo} alt="logo" className={styles.logo}/>
                    </a>
                    <button className={styles.btn}>
                        <img src={about} alt="about"/>
                    </button>
                    <button className={styles.btn}>
                        <img src={road} alt="road"/>
                    </button>
                    <button className={styles.btn}>
                        <img src={docs} alt="road"/>
                    </button>
                </div>
                <div>
                    <button onClick={toggleIsBurgerModal} className={styles.burgerBtn}>
                        <img src={burger} alt="burger"/>
                    </button>
                    <a href="#" className={styles.linkWrapper}>
                        <img src={twitter} alt="twitter" className={styles.socialLink}/>
                    </a>
                    <a href="#" className={styles.linkWrapper}>
                        <img src={discord} alt="discord" className={styles.socialLink}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
