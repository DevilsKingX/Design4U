import styles from './designs.module.css'
import {useState,useEffect,useRef} from 'react'
import Image from  'next/image'
import {FaExpandAlt} from 'react-icons/fa';
import {BsBehance,BsTwitter,BsGlobe2,BsInstagram} from 'react-icons/bs'
import {app, database, storage} from '../firebaseCongif';
import { collection, getDoc, doc } from 'firebase/firestore';
import Stats from './stats';
import React from 'react';

export default function Designs(){
    
    const categs=['AVI','Concept Logo'];
    const categsID=['AVI','conceptLogo'];
    const [activeIndex, setActiveIndex] = useState(0);
    const refs = Array(categs.length).fill(useRef(null));

    const dummyData={AVI:['Hello','Hello'],conceptLogo:['Hello','Hello']};
    const [designS,setDesignS]=useState(dummyData);
    async function gettingDesigns()
    {   
        //console.log(designS)
        const thefile=await getDoc(doc(database, 'stats', 'Designs'));
        await setDesignS(thefile.data())
       
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
        <div className={styles.worksTitle} onClick={gettingDesigns}>DESIGNS SHOWCASE</div>
        <div className={styles.main}>
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
                                    <div className={styles.designComponent} key={categ+indexj}>
                                    <div className={styles.design}>
                                        <img className={styles.designImage} alt="Design" src={dezign['designURL']}/>
                                        <div className={styles.categoryName}>{categ}</div>
                                        <div className={styles.hoveredInfo}>
                                            <img className={styles.designerAv} alt="Design" src='https://cdn.discordapp.com/avatars/753914287596240948/748db2567d63af57e1dd12f3af271ac5.webp?size=4096'/>
                                            
                                            <div className={styles.hoveredText}>
                                            <div className={styles.designerName}>zMagnus</div>
                                            <div className={styles.designerTag}>#6078</div>
                                            </div>
                                        </div>
                                        <FaExpandAlt className={styles.resizeIcon}/>
                                        <div className={styles.socials}>
                                            <a href="https://zmagnus.studio" target="_blank" rel="noreferrer"><BsGlobe2 className={styles.socialIcon}/></a>
                                            <BsBehance className={styles.socialIcon}/>
                                            <BsTwitter className={styles.socialIcon}/>
                                            <BsInstagram className={styles.socialIcon}/>
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
                <div className={styles.designComponent}>
                    <div className={styles.design}>
                        <img className={styles.designImage} alt="Design" src='https://cdn.discordapp.com/attachments/1068162891448074260/1079040920109973504/image.png'/>
                        <div className={styles.hoveredInfo}>
                            <img className={styles.designerAv} alt="Design" src='https://cdn.discordapp.com/avatars/753914287596240948/748db2567d63af57e1dd12f3af271ac5.webp?size=4096'/>
                            <div className={styles.hoveredText}>
                            <div className={styles.designerName}>zMagnus</div>
                            <div className={styles.designerTag}>#6078</div>
                            </div>
                        </div>
                        <FaExpandAlt className={styles.resizeIcon}/>
                        <div className={styles.socials}>
                            <a href="https://zmagnus.studio" target="_blank" rel="noreferrer"><BsGlobe2 className={styles.socialIcon}/></a>
                            <BsBehance className={styles.socialIcon}/>
                            <BsTwitter className={styles.socialIcon}/>
                            <BsInstagram className={styles.socialIcon}/>
                        </div>
                    </div>
                </div>
                <div className={styles.designComponent}>
                    <div className={styles.design}></div>
                </div>
                <div className={`${styles.designComponent} ${styles.LineBreakerD}`}></div>
                <div className={`${styles.designComponent} ${styles.LineBreakerS}`}></div>
                <div className={styles.designComponent}>
                    <div className={styles.design}></div>
                </div>
            </div>
        </div>
        </>
        
    )
}