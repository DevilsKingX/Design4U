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

    const categs=['AVI','Concept Logo'];
    const categsID=['AVI','conceptLogo'];
    const [activeIndex, setActiveIndex] = useState(0);
    const refs = Array(categs.length).fill(useRef(null));

    const dummyData={AVI:['Hello','Hello'],conceptLogo:['Hello','Hello']};
    const [designS,setDesignS]=useState(dummyData);
    const [userDB,setUserDB]=useState({})
    const [themeC,setThemeC]=useState({})
    async function gettingDesigns()
    {   
        const thefile=await getDoc(doc(database, 'stats', 'Designs'));
        await setDesignS(thefile.data())

        const thefile2=await getDoc(doc(database, 'stats', 'users'));
        await setUserDB(thefile2.data())
       
    }

    

    useEffect((()=>{
        gettingDesigns();
      }),[])

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

      
    return(
        <>
        <div className={`${styles.worksTitle} ${styles.Devil}`} >DESIGNS SHOWCASE</div>
        <div className={styles.navigationMenu}>
      {folderNames.map((name, index) => (
        <Link href={`/designs/${name}`} key={index}>{name} ↘
        </Link>
      ))}
    </div>
        <div className={`${styles.main} ${styles.Devil}`}>
            <div className={styles.scrollContainer}>
            {categs.map((text, index) => (
        <div
          key={index}
          ref={refs[index]}
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
                                {designS[categsID[index]].map((dezign, indexj) => (
                                    <div className={styles.designComponent} key={categ+indexj} >
                                    <div className={styles.design} onMouseEnter={()=> props.themeFun((dezign['theme'])?(dezign['theme']):([255,77,77,'red']))} onMouseLeave={()=> props.themeFun([255,77,77,'red'])}>
                                        <div className={styles.overlayDiv}></div>
                                        <img className={styles.designImage} alt="Design" src={dezign['designURL']} />
                                        <div className={styles.categoryName}>{categ}</div>
                                        <div className={styles.hoveredInfo}>
                                            <img className={styles.designerAv} alt="Design" src={(userDB[dezign['userID']])?(userDB[dezign['userID']]['avatar']):('https://cdn.discordapp.com/avatars/723731923968720948/f90e3b84998242ab4f1dbb354ab989cb.png')}/>
                                            
                                            <div className={styles.hoveredText}>
                                            <div className={styles.designerName}>{(userDB[dezign['userID']])?(userDB[dezign['userID']]['username'].substring(0,userDB[dezign['userID']]['username'].indexOf('#'))):('Loading...')}</div>
                                            <div className={styles.designerTag}>{(userDB[dezign['userID']])?(userDB[dezign['userID']]['username'].substring(userDB[dezign['userID']]['username'].indexOf('#'))):('Loading...')}</div>
                                            </div>
                                        </div>
                                        <FaExpandAlt className={styles.resizeIcon}/>
                                        {(<a href={dezign['designURL']} target="_blank" rel="noreferrer"><FaExpandAlt className={styles.resizeIcon}/></a>)}
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
                                    
                                    (designS[categsID[index]].length%4==0)?(null):((designS[categsID[index]].length%4==3)?(
                                        <div className={`${styles.designComponent} ${styles.LineBreakerEven}`}></div> 
                                    ):((designS[categsID[index]].length%4==2)?(
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