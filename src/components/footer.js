import styles from './footer.module.css'
import {BsCurrencyDollar } from 'react-icons/bs'
import {BiCalendarEvent,BiSupport} from 'react-icons/bi'
import { MdWork,MdReviews } from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import { BsDiscord, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                    <div className={styles.iconx}></div>
                    <div className={styles.text}>Buy Quality FX using free or paid methods.</div>
                </div>
                <div className={styles.footerCenter}>
                    <div className={styles.title}>Quick Links</div>
                    <div className={styles.categs}>
                        <a href='https://discord.com/channels/701847935817744384/713034329915261170'  target="_blank" rel="noreferrer"><div className={styles.categ}><BsCurrencyDollar className={styles.categIcon}/> Pricing</div></a> 
                        <a href='https://discord.com/channels/701847935817744384/740196432941809770'  target="_blank" rel="noreferrer"><div className={styles.categ}><MdWork className={styles.categIcon}/> Our Works</div></a> 
                        <a href='https://discord.com/channels/701847935817744384/721800053341159596'  target="_blank" rel="noreferrer"><div className={styles.categ}><MdReviews className={styles.categIcon}/> Reviews</div></a> 
                        <a href='https://discord.com/channels/701847935817744384/733874592786939906'  target="_blank" rel="noreferrer"><div className={styles.categ}><BiSupport className={styles.categIcon}/> Contact Us</div></a> 
                    </div> 
                    </div>
                
                <div className={styles.footerRight}>
                <div className={styles.title}>Our Socials</div>
                    <div className={styles.categs}>
                        <a href='https://www.instagram.com/design4u.ig/'  target="_blank" rel="noreferrer"><div className={styles.categ}><BsInstagram className={styles.categIcon}/> Instagram</div></a> 
                        <a href='https://www.youtube.com/@design4u633'  target="_blank" rel="noreferrer"><div className={styles.categ}><BsYoutube className={styles.categIcon}/> Youtube</div></a> 
                        <a href='https://twitter.com/__design4u'  target="_blank" rel="noreferrer"><div className={styles.categ}><BsTwitter className={styles.categIcon}/> Twitter</div></a> 
                        <a href='https://discord.gg/design4u'  target="_blank" rel="noreferrer"><div className={styles.categ}><BsDiscord className={styles.categIcon}/> Discord</div></a> 
                    </div>
                    
                </div>
        </div>
            <div className={styles.copyright}>© 2023 <span>Design4U</span>. All Rights Reserved. </div>
        </div>
    )
}