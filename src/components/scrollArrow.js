import styles from './scrollarrow.module.css'
import {BiChevronDownCircle} from 'react-icons/bi'
import { useRef ,useEffect} from 'react'
export default function ScrollArrow() {

    const arrowOver=useRef(null);
    useEffect(()=>{
        arrowOver.current.style.top='40%';
    })
    return (
        <div className={styles.scrollArrow}>
        <div className={styles.arrowOverlay} ref={arrowOver} style={{opacity:'0'}}></div>
        <div className={styles.arrowOverlay} ref={arrowOver} style={{position:'absolute'}}></div>
        <BiChevronDownCircle className={styles.arrow}/>
        </div>
    )
}