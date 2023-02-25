import styles from './inpagenav.module.css'
import { useEffect,useRef } from 'react'

export default function InPageNav(){


    return(
        <div className={styles.navigationMenu}>
            <div className={styles.navivationCategory}>Designs ↘</div>
            <div className={styles.navivationCategory}>Review ↘</div>
            <div className={styles.navivationCategory}>Prices ↘</div>
            <div className={styles.navivationCategory}>Team ↘</div>
        </div>
    )
}