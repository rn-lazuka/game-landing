import React, {FC} from 'react'
import sanctum from '../../assets/Header/sanctum.png'
import twitter from '../../assets/Header/twitter.png'
import medium from '../../assets/Header/medium.png'
import discord from '../../assets/Header/discord.png'
import about from '../../assets/Header/about.png'
import road from '../../assets/Header/roadmap.png'
import docs from '../../assets/Header/docs.png'
import marketplace from '../../assets/Header/marketplace.png'
import partners from '../../assets/Header/partners.png'
import burger from '../../assets/Burger/burger.png'
import BurgerMenu from '../../components/BurgerMenu'
import useToggle from '../../utils/useToggle'

import styles from './Header.module.css'

const Header: FC = () => {
  const [isBurgerModal, toggleIsBurgerModal] = useToggle()
  return (
    <div className={styles.container}>

      {isBurgerModal
        ? <BurgerMenu isBurgerModal={isBurgerModal} modalToggleHandler={toggleIsBurgerModal} />
        : null}

      <div className={styles.navWrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.logo} />
          <img src={sanctum} alt="sanctum" className={styles.mobileHeaderImg} />
          <a href="#about">
            <button className={styles.standardBtn}>
              <img src={about} alt="about" />
            </button>
          </a>
          <a href="#roadmap">
            <button className={styles.standardBtn}>
              <img src={road} alt="road" />
            </button>
          </a>
          <button className={styles.marketBtn}>
            <img src={marketplace} alt="marketplace" />
          </button>
          <button className={styles.docsBtn}>
            <img src={docs} alt="docs" />
          </button>
          <button className={styles.partnersBtn}>
            <img src={partners} alt="partners" />
          </button>
        </div>
        <div>
          <button onClick={toggleIsBurgerModal} className={styles.burgerBtn}>
            <img src={burger} alt="burger" />
          </button>
          <a href="#" className={styles.linkWrapper}>
            <img src={medium} alt="medium" className={styles.socialLink} />
          </a>
          <a href="#" className={styles.linkWrapper}>
            <img src={twitter} alt="twitter" className={styles.socialLink} />
          </a>
          <a href="#" className={styles.linkWrapper}>
            <img src={discord} alt="discord" className={styles.socialLink} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
