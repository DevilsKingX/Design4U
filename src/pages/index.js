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

export default function Home() {

  return (
    <>
      <Head>
      
        <title>Design4U</title>
        <meta name="description" content="Go-To Stop for Graphic Designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>
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
        <Designs/>
      </main>
      
    </>
  )
}
