import React, {FC} from 'react'
import styles from './Header.module.css'
import logo from '../../assets/Header/Logo.png'
import twitter from '../../assets/Header/Twitter.png'
import discord from '../../assets/Header/Discord.png'
import about from '../../assets/Header/About.png';
import road from '../../assets/Header/Roadmap.png';
import docs from '../../assets/Header/Docs.png';

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <div className={styles.leftWrapper}>
          <a href="#">
            <img src={logo} alt="logo" className={styles.logo} />
          </a>
          <button className={styles.btn}>
            <img src={about} alt="about" />
          </button>
          <button className={styles.btn}>
            <img src={road} alt="road" />
          </button>
          <button className={styles.btn}>
            <img src={docs} alt="road" />
          </button>
        </div>
        <div>
          <a href="#">
            <img src={twitter} alt="twitter" className={styles.socialLink} />
          </a>
          <a href="#">
            <img src={discord} alt="discord" className={styles.socialLink} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
