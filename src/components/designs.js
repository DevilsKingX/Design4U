import styles from './designs.module.css'
import {useState,useEffect} from 'react'
export default function Designs(){

    const [categ,setCateg]=useState(false);

    function clickButton(){
        setCateg(!categ);
    }
    return(
        <>
        {(categ)?(<div className={styles.main}>
            <div className={styles.scrollContainer}>
                <div className={styles.priorCategories}><div className={styles.category}>Category1</div></div>
                <div className={styles.currentCategory}><div className={styles.category}>Category2</div></div>
                <div className={styles.laterCategories}>
                    <div className={styles.category} onClick={clickButton}>Category3</div>
                    <div className={styles.category}>Category4</div>
                </div>
            </div>
            <div className={styles.designsContainer}></div>
        </div>):(<div className={styles.main}>
            <div className={styles.scrollContainer}>
                <div className={styles.priorCategories}><div className={styles.category}>Category1</div><div className={styles.category}  onClick={clickButton}>Category2</div></div>
                <div className={styles.currentCategory}><div className={styles.category}>Category3</div></div>
                <div className={styles.laterCategories}>
                    <div className={styles.category}>Category4</div>
                </div>
            </div>
            <div className={styles.designsContainer}>
                    <div className={styles.designComponent}>
                            <div className={styles.user}>
                                <div className={styles.avatar}></div>
                                <div className={styles.userInfo}>
                                    <div className={styles.username}>Devils King</div>
                                    <div className={styles.tag}>#4686</div>
                                </div>
                            </div>
                    </div>
                    <div className={styles.designComponent}>
                            <div className={styles.user}>
                                <div className={styles.avatar}></div>
                                <div className={styles.userInfo}>
                                    <div className={styles.username}>Devils King</div>
                                    <div className={styles.tag}>#4686</div>
                                </div>
                            </div>
                    </div>
                    <div className={styles.designComponent}>
                            <div className={styles.user}>
                                <div className={styles.avatar}></div>
                                <div className={styles.userInfo}>
                                    <div className={styles.username}>Devils King</div>
                                    <div className={styles.tag}>#4686</div>
                                </div>
                            </div>
                    </div>
            </div>
        </div>)}
        </>
        
    )
}