import styles from './designs.module.css'
import {useState,useEffect,useRef} from 'react'
import Image from  'next/image'
import {FaExpandAlt} from 'react-icons/fa';
import {BsBehance,BsTwitter,BsGlobe2,BsInstagram,BsYoutube} from 'react-icons/bs'
import {app, database, storage} from '../firebaseCongif';
import { collection, getDoc, doc } from 'firebase/firestore';
import Stats from './stats';
import React from 'react';
import Link from 'next/link'

export default function Designs(props){
    
    const designFolders = require.context('../../public/images/designs', true, /\.\/.*$/)
    const folderNames = designFolders.keys().map(key => key.slice(2))
    var Dejains=[];
    folderNames.map((name,index)=>{
        var fNcategory=name.substring(0,name.indexOf('/'));
        var fNfile=name.substring(name.indexOf('/')+1)
        var fNindex=fNfile.substring(0,fNfile.indexOf('['))
        var fNuserID=fNfile.substring(fNfile.indexOf('[')+1,fNfile.indexOf(']'))
        var fNR=fNfile.substring(fNfile.indexOf('R')+1,fNfile.indexOf('G'))
        var fNG=fNfile.substring(fNfile.indexOf('G')+1,fNfile.indexOf('B'))
        var fNB=fNfile.substring(fNfile.indexOf('B')+1,fNfile.indexOf('.'))
        if(!Dejains[fNcategory]) Dejains[fNcategory]=[];
        if(!Dejains[fNcategory][fNindex]) Dejains[fNcategory][fNindex]={};
        Dejains[fNcategory][fNindex]['path']=name;
        Dejains[fNcategory][fNindex]['userID']=fNuserID;
        Dejains[fNcategory][fNindex]['theme']=[fNR,fNG,fNB];
       })

    const categs=['AVI','Concept Logo'];
    const categsID=['AVI','conceptLogo'];
    const catRef1=useRef(null);
    const catRef2=useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [inScroll,setInScroll]=useState(true);
    

    const refs = [useRef(null),useRef(null)]

   
    const [userDB,setUserDB]=useState({})
    const [themeC,setThemeC]=useState({})

    async function gettingDesigns()
    {   
        const thefile2=await getDoc(doc(database, 'stats', 'users'));
        await setUserDB(thefile2.data())
       
    }
    

    

    useEffect((()=>{
        gettingDesigns();
      }),[])

    useEffect((()=>{
      console.log(refs[0])
      console.log(refs[1])
      }),[activeIndex])

      const handleClick = (index) => {
        setActiveIndex(index);
        if (refs[index].current) {
          const childNode = refs[index].current;
          const parentNode = childNode.parentNode;
      
          const parentRect = parentNode.getBoundingClientRect();
          const childRect = childNode.getBoundingClientRect();
      
          const parentScrollableWidth = parentNode.scrollWidth - parentRect.width;
          const parentScrollableHeight = parentNode.scrollHeight - parentRect.height;
      
          let scrollPercent;
          if (parentScrollableWidth > parentScrollableHeight) {
            const childOffset = childRect.left - parentRect.left;
            scrollPercent = (childOffset / parentScrollableWidth) * 100;
            parentNode.scrollTo({
              left: parentScrollableWidth * (scrollPercent / 100),
              behavior: "smooth",
            });
          } else {
            const childOffset = childRect.top - parentRect.top;
            scrollPercent = (childOffset / parentScrollableHeight) * 100;
            parentNode.scrollTo({
              top: parentScrollableHeight * (scrollPercent / 100),
              behavior: "smooth",
            });
          }
        }
      }
    
    

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

      useEffect(() => {
        
        const observer = new IntersectionObserver((entries) => {
          const visibleEntry = entries.find((entry) => entry.isIntersecting);
          if (visibleEntry) {
            const index = refs.findIndex(
              (ref) => ref.current === visibleEntry.target
            );
            const { top, bottom } = visibleEntry.boundingClientRect;
            const height = bottom - top;
            const halfway = height / 2;
            const midpoint = top + halfway;
            if ((midpoint >= window.innerHeight / 2) && inScroll) {
              setActiveIndex(index);
            }
          }
        });
      
        refs.forEach((ref) => {
          if (ref.current) {
            observer.observe(ref.current);
          }
        });
      
        return () => {
          observer.disconnect();
        };
      }, [refs]);

      useEffect(()=>{console.log(inScroll+':Current')},[inScroll])

    
      
    return(
        <>
        <div className={`${styles.worksTitle}`}>DESIGNS SHOWCASE</div>
        <div className={styles.navigationMenu}>
    </div>
        <div className={`${styles.main}`}>
            <div className={styles.scrollContainer} onMouseEnter={()=> setInScroll(false)} onMouseLeave={()=> setInScroll(true)} onTouchStart={()=> setInScroll(false)} onTouchEnd={()=> setInScroll(true)}>
            {categs.map((text, index) => (
        <div
          key={index}
          
          className={activeIndex === index ? `${styles.category} ${styles.activeCategory}` : `${styles.category}`}
          onClick={() => handleClick(index)}
        >
          {text}
        </div>
      ))}
            </div>
            <div className={styles.designsContainer}>
                {
                            categs.map((categ, index) => (
                            <React.Fragment key={categ}>
                                {Dejains[categ].map((dezign, indexj) => (
                                    <div className={styles.designComponent} key={categ+indexj}  ref={(indexj==1)?(refs[index]):null}>
                                    <div className={styles.design} onMouseEnter={()=> props.themeFun((dezign['theme'])?(dezign['theme']):([255,77,77,'red']))} onMouseLeave={()=> props.themeFun([255,77,77,'red'])}>
                                        <div className={styles.overlayDiv}></div>
                                        <img className={styles.designImage} alt="Design" src={('images/designs/'+encodeURIComponent(dezign['path']))} />
                                        <div className={styles.categoryName}>{categ}</div>
                                        <div className={styles.hoveredInfo}>
                                            <img className={styles.designerAv} alt="Design" src={(userDB[dezign['userID']])?(userDB[dezign['userID']]['avatar']):('https://cdn.discordapp.com/avatars/723731923968720948/f90e3b84998242ab4f1dbb354ab989cb.png')}/>
                                            
                                            <div className={styles.hoveredText}>
                                            <div className={styles.designerName}>{(userDB[dezign['userID']])?(userDB[dezign['userID']]['username'].substring(0,userDB[dezign['userID']]['username'].indexOf('#'))):('Loading...')}</div>
                                            <div className={styles.designerTag}>{(userDB[dezign['userID']])?(userDB[dezign['userID']]['username'].substring(userDB[dezign['userID']]['username'].indexOf('#'))):('Loading...')}</div>
                                            </div>
                                        </div>
                                        <FaExpandAlt className={styles.resizeIcon}/>
                                        {(<a href={('images/designs/'+encodeURIComponent(dezign['path']))} target="_blank" rel="noreferrer"><FaExpandAlt className={styles.resizeIcon}/></a>)}
                                        <div className={styles.socials}>
                                        <React.Fragment>
                                            {(userDB[dezign['userID']])?((userDB[dezign['userID']]['socials']['Website'])?(<a href={userDB[dezign['userID']]['socials']['Website']} target="_blank" rel="noreferrer"><BsGlobe2 className={styles.socialIcon}/></a>):('')):('')}
                                            {(userDB[dezign['userID']])?((userDB[dezign['userID']]['socials']['Behance'])?(<a href={userDB[dezign['userID']]['socials']['Behance']} target="_blank" rel="noreferrer"><BsBehance className={styles.socialIcon}/></a>):('')):('')}
                                            {(userDB[dezign['userID']])?((userDB[dezign['userID']]['socials']['Twitter'])?(<a href={userDB[dezign['userID']]['socials']['Twitter']} target="_blank" rel="noreferrer"><BsTwitter className={styles.socialIcon}/></a>):('')):('')}
                                            {(userDB[dezign['userID']])?((userDB[dezign['userID']]['socials']['Youtube'])?(<a href={userDB[dezign['userID']]['socials']['Youtube']} target="_blank" rel="noreferrer"><BsYoutube className={styles.socialIcon}/></a>):('')):('')}
                                            {(userDB[dezign['userID']])?((userDB[dezign['userID']]['socials']['Instagram'])?(<a href={userDB[dezign['userID']]['socials']['Instagram']} target="_blank" rel="noreferrer"><BsInstagram className={styles.socialIcon}/></a>):('')):('')}
                                        </React.Fragment>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                {
                                    
                                    (Object.keys(Dejains[categ]).length%4==0)?(null):((Object.keys(Dejains[categ]).length%4==3)?(
                                        <div className={`${styles.designComponent} ${styles.LineBreakerEven}`}></div> 
                                    ):((Object.keys(Dejains[categ]).length%4==2)?(
                                        <React.Fragment>
                                        <div className={`${styles.designComponent} ${styles.LineBreakerD}`}></div> 
                                        <div className={`${styles.designComponent} ${styles.LineBreakerS}`}></div> 
                                        </React.Fragment>
                                    ):(
                                        <React.Fragment>
                                        <div className={`${styles.designComponent} ${styles.LineBreakerD}`}></div> 
                                        <div className={`${styles.designComponent} ${styles.LineBreakerS}`}></div> 
                                        <div className={`${styles.designComponent} ${styles.LineBreakerT}`}></div> 
                                        </React.Fragment>
                                    )))
                                }
                                
                            </React.Fragment>
                            ))
                        }
                
                
               
                
            </div>
        </div>
        </>
        
    )
}