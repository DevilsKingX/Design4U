import styles from '@/styles/featured.module.css'
import Navbar from '@/components/navbar'
import {BsBehance,BsTwitter,BsGlobe2,BsInstagram,BsYoutube} from 'react-icons/bs'
import {app, database, storage} from '../firebaseCongif';
import { collection, getDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import {useState,useRef,useEffect} from 'react'
import InPageNav from '@/components/inpagenav';
import Footer from '@/components/footer'
import MobileNav from '@/components/mobileNav'
import Head from 'next/head';
export default function Featured() {
    const [loading,setLoading]=useState(true);
    const router = useRouter();
    const isHomepage = router.asPath === '/';
    const [mainBanner,setMainBanner]=useState('https://i.ibb.co/g9ZyByp/zmangnus-vagabond2.png');
    const [mainUrl,setMainUrl]=useState('https://zmagnus.studio');
    const mainBannerRef=useRef();
    const mainBannerRef2=useRef();
    const particle1Ref=useRef();
    const particle2Ref=useRef();
    const logoRef=useRef();
    const overlayContainerRefPrev=useRef();
    const overlayContainerRefPrim=useRef();
    const [mainBanners,setMainBanners]=useState([{image:'https://i.ibb.co/g9ZyByp/zmangnus-vagabond2.png',url:'https://zmagnus.studio',color:[75,137,106]}])
    const [theme,setTheme]=useState([75,137,106,'red']);
    const [animationDelay,setAnimationDelay]=useState(true);
    const [themeNext,setThemeNext]=useState([255,202,109,'red']);
    const normalItem={
        title:'Graphics Guide',
        tags:['Affliated'],
        description:'Graphics Guide is server for learning FX of your choice on Device of your choice with softwares, you guessed it, of your choice. Beri Short Description.',
        longDescription:'・┈━━━━━━⋅•⋅∘∘⋅•⋅━━━━━━┈・\nGraphics Guide is associated with Design4U. It is created to teach you GFX & VFX on different platforms (iOS, Android and PC). You’ll learn through simple, easy-to-learn video tutorials and hands-on exercises. Graphics Guide isn’t new. We’ve been here for almost 2 years, and today we offer more tutorials than ever.\n・┈━━━━━━⋅•⋅∘∘⋅•⋅━━━━━━┈・\nSoftwares/Apps that you will learn here:\n◆ PS Touch\n◆ Ibis Paint X\n◆ Photoshop\n◆ Adobe Illustrator\n◆ Luma Fusion\n◆ Alight Motion\n◆ After Affects\n◆ Premiere Pro\n┈━━━━━━⋅•⋅∘∘⋅•⋅━━━━━━┈・\nMore softwares/apps can be added anytime.',
        banner:'https://cdn.discordapp.com/attachments/921012751181156432/945366265604767794/Graphics_Guide_Banner_Blueish.gif',
        icon:'https://cdn.discordapp.com/attachments/921012751181156432/944156675399647282/Graphics_Guide_icon.png',
        socials:{
            behance:'https://www.behance.net/graphicsguide',
            twitter:'https://twitter.com/graphicsguide',
            website:'https://graphicsguide.net',
        },
        buttons:[
            {name:'Join Now',link:'https://discord.gg/graphicsguide'},
    ]
    }

    const [featuredItems,setFeaturedItems]=useState([])
    const [stats, setStats] = useState({ featuredBanners: [], featuredItems: [] });
    async function gettingStats()
    {   
        const thefile2=await getDoc(doc(database, 'stats', 'Main'));
        await setStats(thefile2.data())
    }

    useEffect(()=>{
        gettingStats();
    },[])

    useEffect(()=>{
        if(stats.featuredBanners.length>0)
        {
            setMainBanners(stats.featuredBanners)
        }
        if(stats.featuredItems.length>0)
        {
            setFeaturedItems(stats.featuredItems)
        }
    },[stats])

    //useEffect with function to add styles.changeBannerAnim class to mainBannerRef.current every 5 second and change the mainBanner to next in series after 1 second of adding class
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(isHomepage) return;
            const targetArray = ({image:mainBanner, color:[theme[0], theme[1], theme[2]]});
            const index = mainBanners.findIndex(banner => (banner.image) === targetArray.image);
            setTheme([...mainBanners[(index+1)%mainBanners.length].color,'red'])
           
            overlayContainerRefPrev.current.className=`${styles.overlayContainerPrev}`
            overlayContainerRefPrim.current.className=`${styles.overlayContainerPrim}`
            mainBannerRef.current.className=`${styles.featuredBannerOverlay} ${styles.bannerChangeAnim}`
            mainBannerRef2.current.className=`${styles.featuredBannerOverlay2} ${styles.bannerChangeAnim}`
            particle1Ref.current.className=`${styles.overlayParticles} ${styles.particleAnim}`
            particle2Ref.current.className=`${styles.overlayParticles2} ${styles.particleAnim2}`
            logoRef.current.className=`${styles.D4ULogo} ${styles.logoAnim}`
            setTimeout(()=>{
                
                setMainBanner(mainBanners[(index+1)%mainBanners.length].image)
                setMainUrl(mainBanners[(index+1)%mainBanners.length].url)
                
                setThemeNext([...mainBanners[(index)%mainBanners.length].color,'red'])
            },1850)

            setTimeout(()=>{
                mainBannerRef.current.className=`${styles.featuredBannerOverlay}`
                mainBannerRef2.current.className=`${styles.featuredBannerOverlay2}`
                particle1Ref.current.className=`${styles.overlayParticles}`
                particle2Ref.current.className=`${styles.overlayParticles2}`
                overlayContainerRefPrev.current.className=``
                overlayContainerRefPrim.current.className=``
                logoRef.current.className=`${styles.D4ULogo}`
            },4000)
            
        },7000)
        return ()=>clearInterval(interval)
    },[mainBanner])

    
  function scrollTo(refX){
    if(refX=='designs')
    window.location.href='/#designs';
    else if(refX=='reviews')
    window.location.href='/#reviews';
    else if(refX=='price')
    window.location.href='/#price';
    else if(refX=='team')
    window.location.href='/#team';
    else if(refX=='home')
    window.location.href='/';
  }

  const [isMobileNavOpen,setIsMobileNavOpen]=useState(false);

    return(
        <>
        <Head>
      
      <title>Design4U ⟡ Featured</title>
      <meta name="description" content="Go-To Stop for Graphic Designs" />
      <meta property="og:image" content="https://i.ibb.co/zXR91rp/D4-U-Banner.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
    </Head>
        
        <div className={styles.featured} style={{ 
            '--themeR': `${theme[0]}`,
            '--themeG': `${theme[1]}`,
            '--themeB': `${theme[2]}`,
            '--themeRn': `${themeNext[0]}`,
            '--themeGn': `${themeNext[1]}`,
            '--themeBn': `${themeNext[2]}`,
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
            '--glass-theme': 'calc(var(--themeR)*1.3),calc(var(--themeG)*1.3),calc(var(--themeB)*1.3)',
            '--theme-darkshadeN': 'calc(var(--themeRn)*0.5),calc(var(--themeGn)*0.5),calc(var(--themeBn)*0.5)',
            '--theme-lightshadeN': 'calc(var(--themeRn)*1.2),calc(var(--themeGn)*1.2),calc(var(--themeBn)*1.2)',
            '--primary-themeN': 'var(--themeRn), var(--themeGn), var(--themeBn)',
          }}>
            <MobileNav scrollTo={scrollTo} page='main' isOpen={isMobileNavOpen} Open={setIsMobileNavOpen}/>
            <Navbar MobileOpen={setIsMobileNavOpen}/>
            <InPageNav scrollTo={scrollTo} page='main'/>
            <div className={styles.featuredTitle}>FEATURED</div>
            <a href={mainUrl} target="_blank" rel="noreferrer" className={styles.featuredA}><div className={styles.featuredBanner} style={{backgroundImage:`url(${mainBanner})`}}>
                <div style={{opacity:0}} ref={overlayContainerRefPrev}><div className={styles.featuredBannerOverlay2} ref={mainBannerRef2}></div></div>
                <div style={{opacity:1}} ref={overlayContainerRefPrim}><div className={styles.featuredBannerOverlay1} ref={mainBannerRef}></div></div>
                <div className={styles.overlayParticles} ref={particle1Ref}></div>
                <div className={styles.overlayParticles2} ref={particle2Ref}></div>
                <div className={styles.D4ULogo} ref={logoRef}><div className={styles.logoOverlay}></div></div>
            </div></a>
            <div className={styles.featuredContent}>
                {featuredItems.map((item,index)=>{
                        return(
                            <div className={styles.featuredElement} key={index}>
                                <div className={styles.featBanner} style={{backgroundImage:`url(${item.banner})`}}><div className={styles.featAv} style={{backgroundImage:`url(${item.icon})`}}></div></div>
                                <div className={styles.featDivision}>
                                <div className={styles.featContent}>
                                <div className={styles.featTitleandTags}>
                                <div className={styles.featTitle}>{item.title}</div>
                                <div className={styles.featTags}>
                                        {item.tags.map((tag,indexj)=>{
                                            return(
                                                <div className={styles.featTag} key={indexj}>◈ {tag}</div>
                                            )
                                        })}
                                </div>
                                </div>
                                <div className={styles.featDescriptions}>
                                <div className={styles.featDescription}>{liner(item.description)}</div>
                                <div className={styles.featLongDescription}>{liner(item.longDescription)}</div>
                                </div>
                                </div>

                                <div className={styles.featInteractions}>
                                    {item.buttons.map((button,indexk)=>{
                                        return(
                                            <a href={button.link} target="_blank" rel="noreferrer" key={indexk}><div className={styles.featButton}>{button.name}</div></a>
                                        )
                                    })}
                                    <div className={styles.featSocials}>
                                        {
                                            <>
                                            {item.socials.website?(<a href={item.socials.website} target="_blank" rel="noreferrer" ><div className={styles.featSocial}><BsGlobe2/></div></a>):''}
                                            {item.socials.twitter?<>| <a href={item.socials.twitter} target="_blank" rel="noreferrer" ><div className={styles.featSocial}><BsTwitter/></div></a></>:''}
                                            {item.socials.behance?<>| <a href={item.socials.behance} target="_blank" rel="noreferrer" ><div className={styles.featSocial}><BsBehance/></div></a></>:''}
                                            {item.socials.instagram?<>| <a href={item.socials.instagram} target="_blank" rel="noreferrer" ><div className={styles.featSocial}><BsInstagram/></div></a></>:''}
                                            {item.socials.youtube?<>| <a href={item.socials.youtube} target="_blank" rel="noreferrer" ><div className={styles.featSocial}><BsYoutube/></div></a></>:''}
                                            </>
                                        }
                                    </div>
                                </div>
                                </div>
                            </div>
                        )})}
                
            </div>
            <Footer/>
        </div></>
    )
}

function liner(str){
    

    let arr=str.split('\\n');
    let compos=arr.map((item,index)=>{
        return(
            <>{(item!='')?(<div key={index}>{item}</div>):''}
            {(index!=arr.length-1 && item!='')?<br/>:''}</>
        )
    })

    return (<div>{compos}</div>)
}
