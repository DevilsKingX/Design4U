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
const inter = Inter({ subsets: ['latin'] })
import { useState,useEffect } from 'react';
import { css } from '@emotion/css';

export default function Home() {
  const [theme,setTheme]=useState([255,77,77,'red']);

  useEffect(()=>{
  },[theme])
  return (
    <>
    

      <Head>
      
        <title>Design4U</title>
        <meta name="description" content="Go-To Stop for Graphic Designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className='main' style={{ 
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
      
        <div className={styles.Hero}>
          <div className={styles.heroContent}>
            <Navbar/>
            <InPageNav/>
            <Heading/>
            <Stats/>
          </div>
          <div className={styles.heroOverlay}></div>
          <div className={styles.backgroundCircles}>
            <div className={styles.backgroundCircle1}></div>
            <div className={styles.backgroundCircle2}></div>
            <div className={styles.backgroundCircle3}></div>
        </div>
        </div>
        <PaymentOptions/>
        <Reviews/>
        <Designs themeVar={theme} themeFun={setTheme}/>
      </main>
      
    </>
  )
}
