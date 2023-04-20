import styles from './mobileNav.module.css'
import { useEffect,useRef } from 'react'

export default function mobileNav(props){


    return(
        <div className={(props.isOpen)?(`${styles.inPage}`):(`${styles.inPage} ${styles.inactivePage}`)} onClick={()=>props.Open(false)}>
        <div className={(props.isOpen)?(`${styles.navigationMenu}`):(`${styles.navigationMenu} ${styles.inactiveNav}`)}>
            <><div className={styles.navivationCategory} onClick={()=>props.scrollTo('home')} onTouchStart={()=>props.scrollTo('home')}>Home</div></>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('price')} onTouchStart={()=>props.scrollTo('price')}>Pricing</div>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('designs')} onTouchStart={()=>props.scrollTo('designs')}>Our Works</div>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('reviews')} onTouchStart={()=>props.scrollTo('reviews')}>Reviews</div>
            {(props.page=='main')?<><div className={styles.navivationCategory} onClick={()=>props.scrollTo('featured')} onTouchStart={()=>props.scrollTo('featured')}>Featured</div></>:''}
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('team')} onTouchStart={()=>props.scrollTo('team')}>Our Team</div>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('contact')} onTouchStart={()=>props.scrollTo('team')}>Contact Us</div>
        </div></div>
    )
}