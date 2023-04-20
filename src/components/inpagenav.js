import styles from './inpagenav.module.css'
import { useEffect,useRef } from 'react'

export default function InPageNav(props){


    return(
        <div className={styles.inPage}>
        <div className={styles.navigationMenu}>
            <><div className={styles.navivationCategory} onClick={()=>props.scrollTo('home')} onTouchStart={()=>props.scrollTo('home')}>Home</div> <span>|</span></>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('price')} onTouchStart={()=>props.scrollTo('price')}>Pricing</div> <span>|</span>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('designs')} onTouchStart={()=>props.scrollTo('designs')}>Our Works</div> <span>|</span>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('reviews')} onTouchStart={()=>props.scrollTo('reviews')}>Reviews</div>
            {(props.page=='main')?<><span>|</span><div className={styles.navivationCategory} onClick={()=>props.scrollTo('featured')} onTouchStart={()=>props.scrollTo('featured')}>Featured</div></>:''} <span>|</span>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('team')} onTouchStart={()=>props.scrollTo('team')}>Our Team</div> <span>|</span>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('contact')} onTouchStart={()=>props.scrollTo('team')}>Contact Us</div>
        </div></div>
    )
}