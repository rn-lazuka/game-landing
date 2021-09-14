import React, {FC, useEffect, useRef} from 'react';
import useOutsideClick from '../../utils/useOutsideClick';
import {IBurgerMenuProps} from "./types";
import back from '../../assets/Burger/burgerMenu.png';
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
                    <img src={back} alt="back" className={styles.containerBackground}/>
                    <div className={styles.header_modal}>
                        <button onClick={modalToggleHandler} className={styles.closeIcon}>
                            X
                        </button>
                    </div>
                    <nav className={styles.nav}>
                        <a>
                            <button className={styles.navBtn} onClick={modalToggleHandler}>
                                nav
                            </button>
                        </a>
                        <a>
                            <button className={styles.navBtn} onClick={modalToggleHandler}>
                                nav
                            </button>
                        </a>
                        <a>
                            <button className={styles.navBtn} onClick={modalToggleHandler}>
                                nav
                            </button>
                        </a>
                    </nav>
                </div>
            </div>
            {/*</ModalPortal>*/}
        </React.Fragment>
    )
}

export default BurgerMenuModal;
