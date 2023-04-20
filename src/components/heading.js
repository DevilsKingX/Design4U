import styles from '../components/heading.module.css'
import Image from 'next/image'
import {BsTwitter,BsInstagram,BsFacebook, BsDiscord} from 'react-icons/bs'
import Titl from 'tilt.js'
import { useState,useEffect,useRef } from 'react'

export default function Heading(props){

  const ref=useRef(null);
  const [sW,setSW]=useState(1440);

  useEffect(() => {
    if (ref.current) {
      setSW(ref.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    console.log('What are you doing in console?')
  }, [sW]);

  return (
    <>
      <div className={styles.Heading} ref={ref}>
        <div className={styles.leftSide}>
          <div className={styles.largeText}>YOUR GO-TO STOP FOR <span>DESIGNS</span>.</div>
          <div className={styles.joinButton}>JOIN NOW</div>

        </div>
        
            <div className={styles.glassInfo}>
              <div className={styles.glass}>
                <div className={styles.glassHeading}>DESIGN4U</div>
                <div className={styles.glassDescription}>We&apos;re a <span>designing</span> server that offers multiple ways of getting <span>high-quality GFX & VFX</span> for free as well as paid!</div>
              </div>
              <div className={styles.glassProps1}>
                <div className={(props.themeVar[3]!='red')?(`${styles.glassOverlay}`):(`${styles.glassOverlay} ${styles.glassOverlayRed}`)}></div>
                <div className={(props.themeVar[3]!='red')?(`${styles.glassImage}`):(`${styles.glassImage} ${styles.glassImageRed}`)}></div>
              </div>
              <div className={styles.glassProps2}>
              <div className={(props.themeVar[3]!='red')?(`${styles.glassOverlay}`):(`${styles.glassOverlay} ${styles.glassOverlayRed}`)}></div>
                <div className={(props.themeVar[3]!='red')?(`${styles.glassImage}`):(`${styles.glassImage} ${styles.glassImageRed}`)}></div>
              </div>
            </div>
          
      </div>
    </>
  )
}