import styles from './inpagenav.module.css'
import { useEffect,useRef } from 'react'

export default function InPageNav(props){


    return(
        <div className={styles.navigationMenu}>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('designs')} onTouchStart={()=>props.scrollTo('designs')}>Designs ↘</div>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('reviews')} onTouchStart={()=>props.scrollTo('reviews')}>Review ↘</div>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('price')} onTouchStart={()=>props.scrollTo('price')}>Prices ↘</div>
            <div className={styles.navivationCategory} onClick={()=>props.scrollTo('team')} onTouchStart={()=>props.scrollTo('team')}>Team ↘</div>
        </div>
    )
}