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
  '--circle-color': 'var(--themeR),calc(var(--themeG)*0.7),calc(var(--themeB)*0.7)',
  '--background-color': 'calc(var(--themeR)*0.0784),calc(var(--themeG)*0.091),calc(var(--themeB)*0.091)',
  '--theme-darkshade': 'calc(var(--themeR)*0.717),calc(var(--themeG)*0.441),calc(var(--themeB)*0.441)',
  '--theme-lightshade': 'calc(var(--themeR)*1),calc(var(--themeG)*1.091),calc(var(--themeB)*1.091)',
  '--theme-maincolor2': 'calc(var(--themeR)*0.968),calc(var(--themeG)*0.286),calc(var(--themeB)*0.675)',
  '--theme-maincolor3': 'calc(var(--themeR)*1),calc(var(--themeG)*0.82),calc(var(--themeB)*1.156)',
  '--theme-hover': 'calc(var(--themeR)*0.95),calc(var(--themeG)*0.91),calc(var(--themeB)*0.91)',
  '--primary-underline': 'calc(var(--themeR)*0.894),calc(var(--themeG)*0.961),calc(var(--themeB)*0.961)',
  '--glass-theme': 'calc(var(--themeR)*0.992),calc(var(--themeG)*1.36),calc(var(--themeB)*1.36)'
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
