import styles from './designs.module.css'
import {useState,useEffect,useRef} from 'react'
export default function Designs(){
    const categs=['AVI','Banner','Header','Profile Picture','Logo Design','Concept Logo','Wallpaper','Jersey','Roster','Overlay'];
    const [activeIndex, setActiveIndex] = useState(0);
    const refs = Array(categs.length).fill(useRef(null));

    const handleClick = (index) => {
        console.log('Clicked '+index)
        setActiveIndex(index);
    }
    return(
        <>
        <div className={styles.worksTitle}>DESIGNS SHOWCASE</div>
        <div className={styles.main}>
            <div className={styles.scrollContainer}>
            {categs.map((text, index) => (
        <div
          key={index}
          ref={refs[index]}
          className={activeIndex === index ? `${styles.category} ${styles.activeCategory}` : `${styles.category}`}
          onClick={() => handleClick(index)}
        >
          {text}
        </div>
      ))}
            </div>
            <div className={styles.designsContainer}>
                <div className={styles.designComponent}>
                    <div className={styles.design}></div>
                </div>
                <div className={styles.designComponent}>
                    <div className={styles.design}></div>
                </div>
                <div className={styles.designComponent}>
                    <div className={styles.design}></div>
                </div>
                <div className={styles.designComponent}>
                    <div className={styles.design}></div>
                </div>
            </div>
        </div>
        </>
        
    )
}