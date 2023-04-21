import styles from './featuredSmall.module.css'
export default function FeaturedSmall(props){
    return(
        <div className={style.featuredSmall}>
            <div className={styles.Title}>FEATURED</div>
            <div className={styles.adContainer}>
                <div className={styles.ad}></div>
                <div className={styles.moreButton}></div>
            </div>
        </div>
    )
}