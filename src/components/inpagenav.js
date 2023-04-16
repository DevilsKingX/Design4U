import styles from './inpagenav.module.css'
import { useEffect,useRef } from 'react'

export default function InPageNav(props){


    return(
        <div className={styles.navigationMenu}>
            {(props.page=='featured')?<><div className={styles.navivationCategory} onClick={()=>props.scrollTo('home')} onTouchStart={()=>props.scrollTo('home')}>Home</div> <span>|</span></>:''}
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('designs')} onTouchStart={()=>props.scrollTo('designs')}>Designs</div> <span>|</span>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('reviews')} onTouchStart={()=>props.scrollTo('reviews')}>Review</div> <span>|</span>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('price')} onTouchStart={()=>props.scrollTo('price')}>Prices</div> <span>|</span>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('team')} onTouchStart={()=>props.scrollTo('team')}>Team</div>
            {(props.page=='main')?<><span>|</span><div className={styles.navivationCategory} onClick={()=>props.scrollTo('featured')} onTouchStart={()=>props.scrollTo('featured')}>Featured</div></>:''}
        </div>
    )
}