import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'
import Heading from '@/components/heading'
import Stats from '@/components/stats'
import InPageNav from '@/components/inpagenav'
import PaymentOptions from '@/components/paymentOptions'
import Reviews from '@/components/reviews'
import Designs from '@/components/designs'
import Price from '@/components/price'
import Staff from '@/components/staff'
import Leaderboard from '@/components/leaderboard'
const inter = Inter({ subsets: ['latin'] })
import { useState,useEffect,useRef } from 'react';
import { css } from '@emotion/css';

export default function Home() {
  const [theme,setTheme]=useState([255,77,77,'red']);
 
  const mainRef = useRef(null)
  const mouseFollowerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mainRect = mainRef.current.getBoundingClientRect()
      const mouseX = e.clientX - mainRect.left - (mouseFollowerRef.current.offsetWidth / 2)
      const mouseY = e.clientY - mainRect.top - (mouseFollowerRef.current.offsetHeight / 2)

      if (
        mouseX >= 0 &&
        mouseY >= 0 &&
        mouseX + mouseFollowerRef.current.offsetWidth <= mainRect.width &&
        mouseY + mouseFollowerRef.current.offsetHeight <= mainRect.height
      ) {
        mouseFollowerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }

    mainRef.current.addEventListener('mousemove', handleMouseMove)

    return () => {
      mainRef.current.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])



  return (
    <>
    

      <Head>
      
        <title>Design4U</title>
        <meta name="description" content="Go-To Stop for Graphic Designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className='main' ref={mainRef} style={{ 
  '--themeR': `${theme[0]}`,
  '--themeG': `${theme[1]}`,
  '--themeB': `${theme[2]}`,
  '--theme-solid': `${theme[3]}`,
  '--primary-theme': 'var(--themeR), var(--themeG), var(--themeB)',
  '--circle-color': 'var(--themeR)*0.7,calc(var(--themeG)*0.7),calc(var(--themeB)*0.7)',
  '--background-color': 'calc(var(--themeR)*0.07),calc(var(--themeG)*0.07),calc(var(--themeB)*0.07)',
  '--theme-darkshade': 'calc(var(--themeR)*0.5),calc(var(--themeG)*0.5),calc(var(--themeB)*0.5)',
  '--theme-lightshade': 'calc(var(--themeR)*1.2),calc(var(--themeG)*1.2),calc(var(--themeB)*1.2)',
  '--theme-maincolor2': 'calc(var(--themeR)*0.8),calc(var(--themeG)*0.8),calc(var(--themeB)*0.8)',
  '--theme-maincolor3': 'calc(var(--themeR)*0.6),calc(var(--themeG)*0.6),calc(var(--themeB)*0.6)',
  '--theme-hover': 'calc(var(--themeR)*0.9),calc(var(--themeG)*0.9),calc(var(--themeB)*0.9)',
  '--primary-underline': 'calc(var(--themeR)*0.92),calc(var(--themeG)*0.92),calc(var(--themeB)*0.92)',
  '--glass-theme': 'calc(var(--themeR)*1.3),calc(var(--themeG)*1.3),calc(var(--themeB)*1.3)'
}}>
      <div className={styles.mouseFollower} ref={mouseFollowerRef}></div>
        <div className={styles.Hero}>
          <div className={styles.heroContent}>
            <Navbar/>
            <InPageNav/>
            <Heading themeVar={theme}/>
            <Stats/>
          </div>
          <div className={styles.heroOverlay}></div>
        </div>
        <PaymentOptions/>
        <Reviews/>
        <Designs themeVar={theme} themeFun={setTheme}/>
        <Price/>
        <Staff  themeVar={theme} themeFun={setTheme}/>
        <Leaderboard/>
      </main>
      
    </>
  )
}
