import styles from '../components/heading.module.css'
import Image from 'next/image'
import {BsTwitter,BsInstagram,BsFacebook, BsDiscord} from 'react-icons/bs'
import Titl from 'tilt.js'
export default function Heading(){
return(
    <>
    <div className={styles.Heading}>
        <div className={styles.largeText}>YOUR GO-TO STOP FOR <span>DESIGNS</span>.</div>
        <div className={styles.glassInfo} data-tilt data-tilt-perspective="700">
            <div className={styles.glass} data-tilt data-tilt-perspective="500">
                <div className={styles.glassHeading}>DESIGN4U</div>
                <div className={styles.glassDescription}>We&apos;re a <span>designing</span> server that offers multiple ways of getting <span>high-quality GFX & VFX</span> for free as well as paid!</div>
            </div>
            <div className={styles.glassProps1}></div>
            <div className={styles.glassProps2}></div>
        </div>
    </div>
   
    </>
)}