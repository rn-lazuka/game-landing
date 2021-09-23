import React, {FC, useEffect, useRef} from 'react'
import useOutsideClick from '../../utils/useOutsideClick'
import {IBurgerMenuProps} from './types'
import back from '../../assets/Burger/burgerMenu.png'
import close from '../../assets/Burger/close.png'
import about from '../../assets/Burger/about.png'
import roadmap from '../../assets/Burger/roadmap.png'
import marketplace from '../../assets/Burger/marketplace.png'
import docs from '../../assets/Burger/docs.png'
import discord from '../../assets/Burger/discord.png'
import twitter from '../../assets/Burger/twitter.png'
import medium from '../../assets/Burger/medium.png'
import styles from './BurgerMenu.module.css'

const BurgerMenuModal: FC<IBurgerMenuProps> = ({isBurgerModal, modalToggleHandler}) => {
  const modalRef = useRef(null)

  useEffect(() => {
    // @ts-ignore
    const timer = setTimeout(() => modalRef && modalRef.current.classList.add(`${styles.opened}`), 0)
    return () => clearTimeout(timer)
  }, [])

  useOutsideClick(modalRef, () => {
    modalToggleHandler()
  })

  return (
    <React.Fragment>
      {/*<ModalPortal>*/}
      <div className={styles.backdrop}>
        <div className={styles.modal} ref={modalRef}>
          <img src={back} alt="back" className={styles.containerBackground} />
          <button onClick={modalToggleHandler} className={styles.closeIcon}>
            <img src={close} alt="close" />
          </button>
          <nav className={styles.nav}>
            <a href="#about">
              <button className={styles.navBtn} onClick={modalToggleHandler}>
                <img src={about} alt="about" />
              </button>
            </a>
            <a href="#roadmap">
              <button className={styles.navBtn} onClick={modalToggleHandler}>
                <img src={roadmap} alt="roadmap" />
              </button>
            </a>
            <button className={styles.navBtn} onClick={modalToggleHandler}>
              <img src={marketplace} alt="marketplace" />
            </button>
            <button className={styles.navBtn} onClick={modalToggleHandler}>
              <img src={docs} alt="docs" />
            </button>
            <button className={styles.navBtn} onClick={modalToggleHandler}>
              <img src={discord} alt="discord" />
            </button>
            <button className={styles.navBtn} onClick={modalToggleHandler}>
              <img src={twitter} alt="twitter" />
            </button>
            <button className={styles.navBtn} onClick={modalToggleHandler}>
              <img src={medium} alt="medium" />
            </button>
          </nav>
        </div>
      </div>
      {/*</ModalPortal>*/}
    </React.Fragment>
  )
}

export default BurgerMenuModal
