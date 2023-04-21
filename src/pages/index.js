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
import { useRouter } from 'next/router';
import Leaderboard from '@/components/leaderboard'
const inter = Inter({ subsets: ['latin'] })
import { useState,useEffect,useRef } from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import {GiBookCover} from 'react-icons/gi'
import Footer from '@/components/footer'
import MobileNav from '@/components/mobileNav'

export default function Home() {
  const [theme,setTheme]=useState([255,77,77,'red']);
  const router = useRouter();
  const isHomepage = router.asPath === '/';
  const mainRef = useRef(null)
  const mouseFollowerRef = useRef(null)
  const designScrollRef = useRef(null)
  const reviewScrollRef = useRef(null)
  const priceScrollRef = useRef(null)
  const teamScrollRef = useRef(null)

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
      if(!isHomepage) return;
      mainRef.current.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  function scrollTo(refX){
    console.log(teamScrollRef.current)
    
    if(refX=='designs')
    window.scrollTo({top: designScrollRef.current.offsetTop,behavior: 'smooth'});
    else if(refX=='reviews')
    window.scrollTo({top: reviewScrollRef.current.offsetTop,behavior: 'smooth'});
    else if(refX=='price')
    window.scrollTo({top: priceScrollRef.current.offsetTop,behavior: 'smooth'});
    else if(refX=='team')
    window.scrollTo({top: teamScrollRef.current.offsetTop,behavior: 'smooth'});
    else if(refX=='featured')
    window.location.href='/featured';
    else if(refX=='contact')
    window.open('https://discord.com/channels/701847935817744384/733874592786939906', '_blank');

    
  }

  useEffect(() => {
    console.log('Reloaded ? '+window.performance.navigation.type)
    console.log('Referrer: '+document.referrer)
    console.log('Location: '+window.location.href)
    if(window.performance.navigation.type==1 || document.referrer === window.location.href) return;
    // Check if the route has a hash fragment of "#designs"
    if (router.asPath.endsWith('#designs')) 
      window.scrollTo({top: designScrollRef.current.offsetTop,behavior: 'smooth'});
    else if (router.asPath.endsWith('#reviews')) 
      window.scrollTo({top: reviewScrollRef.current.offsetTop,behavior: 'smooth'});
    else if (router.asPath.endsWith('#price')) 
        window.scrollTo({top: priceScrollRef.current.offsetTop,behavior: 'smooth'});
    else if (router.asPath.endsWith('#team')) 
          window.scrollTo({top: teamScrollRef.current.offsetTop,behavior: 'smooth'});

    
  }, []);

  const [isMobileNavOpen,setIsMobileNavOpen]=useState(false);
  return (
    <>
    

      <Head>
      
        <title>Design4U</title>
        <meta name="description" content="Go-To Stop for Graphic Designs" />
        <meta property="og:image" content="https://design4u.vercel.app/images/ogimage.png" />
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
      <MobileNav scrollTo={scrollTo} page='main' isOpen={isMobileNavOpen} Open={setIsMobileNavOpen}/>
        <div className={styles.Hero}>
          <div className={styles.heroContent}>
            
            <Navbar MobileOpen={setIsMobileNavOpen}/>
            <InPageNav scrollTo={scrollTo} page='main'/>
            <Heading themeVar={theme}/>
            <Stats/>
          </div>
          <div className={styles.heroOverlay}></div>
        </div>
        <PaymentOptions/>
        <div className={styles.orderNowBannerOutline}>
        <div className={styles.orderNowBanner}>
          <div className={styles.orderNowArts}>
            <div className={styles.orderNowArtsOverlay}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://i.ibb.co/cYnCqsb/5-443919146674028586-R187-G28-B255.jpg)`}}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://i.ibb.co/f88kDsh/8-736115344539779072-R0-G140-B255.png)`}}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://i.ibb.co/nbdT8VV/20-773114093677969408-R67-G0-B255.png)`}}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://i.ibb.co/pbzbGLP/3-927845266671931392-R56-G255-B158.png)`}}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://i.ibb.co/F3mdSzF/5-387384348770566145-R0-G224-B12.png)`}}></div>
          </div>
          <div className={styles.orderNowBannerContent}>
              <div className={styles.orderNowBannerHeading}>Want your own design?</div>
              <div className={styles.orderNowBannerDescription}>Take advantage of our <span>Anniversary Discounts</span> now!</div>
            </div>
          <div className={styles.orderNowButtonContainer}>
          <a href='https://discord.com/channels/701847935817744384/721800053341159596' target="_blank" rel="noreferrer"><div className={styles.orderNowBannerButton}><FaShoppingCart className={styles.buyIcon}/> Order Now</div></a></div>
        </div>
        </div>
        <div className={styles.closureDiv} ref={reviewScrollRef}><Reviews/></div>
        <div className={styles.closureDiv} ref={designScrollRef}><Designs themeVar={theme} themeFun={setTheme} id="designs"/></div>
        <div className={styles.closureDiv} ref={priceScrollRef}><Price/></div>
        
        
        <div className={styles.closureDiv} ref={teamScrollRef}><Staff  themeVar={theme} themeFun={setTheme}/></div>
        <Leaderboard/>
        <div className={styles.orderNowBannerOutline}  onMouseEnter={()=> setTheme([158,76,205,'pink'])} onMouseLeave={()=> setTheme([255,77,77,'red'])}>
        <div className={styles.orderNowBanner}>
          <div className={styles.orderNowArts}>
            <div className={styles.orderNowArtsOverlay}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://i.ytimg.com/vi/oU66yuUVOvc/maxresdefault.jpg)`}}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://cdn.discordapp.com/attachments/853096556223791108/995000040173076571/unknown.png)`}}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://media.discordapp.net/attachments/819693175416422460/1014487729851088906/IMG_0385.png)`}}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://i3.ytimg.com/vi/llCq6fn5vOM/maxresdefault.jpg)`}}></div>
            <div className={styles.orderNowArt} style={{backgroundImage:`url(https://i3.ytimg.com/vi/a7geoPYfRvU/maxresdefault.jpg)`}}></div>
          </div>
          <div className={styles.orderNowBannerContent}>
              <div className={styles.orderNowBannerHeading}>Want to learn designing?</div>
              <div className={styles.orderNowBannerDescription}>What are you waiting for? Our <span>Tutorials, Tasks, Badges</span> are waiting for you!</div>
            </div>
          <div className={styles.orderNowButtonContainer}>
          <a href='https://discord.com/channels/701847935817744384/721800053341159596' target="_blank" rel="noreferrer"><div className={styles.orderNowBannerButton}><GiBookCover className={styles.buyIcon}/> Start Learning</div></a></div>
        </div>
        </div>
        <Footer/>
      </main>
      
    </>
  )
}
