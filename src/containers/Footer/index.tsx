import React, {FC} from 'react'
import styles from './Footer.module.css'
import selective from '../../assets/Footer/selective.png'

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.footerWrapper}>
        <img src={selective} alt="made by selective" className={styles.logo} />
      </div>
    </div>
  )
}

export default Footer
