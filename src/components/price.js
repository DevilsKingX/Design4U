import styles from './price.module.css'
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
import { useState,useRef,useEffect } from 'react'
import {AiOutlineUsergroupAdd,} from 'react-icons/ai';
import {BsCurrencyDollar} from 'react-icons/bs'
export default function Price(){

    const [activeCategory, setactiveCategory]=useState(0);

    const GFX=[
        {name:'AVI',available:true,ref:5,cur:3.75},
        {name:'Jersey',available:true,ref:12,cur:9},
        {name:'Roster',available:true,ref:15,cur:11.25},
        {name:'Banner',available:true,ref:10,cur:7.5},
        {name:'3D Text',available:true,ref:4,cur:3},
        {name:'Wallpaper',available:true,ref:10,cur:7.5},
        {name:'Concept Logo',available:true,ref:18,cur:13.5},
        {name:'Profile Picture',available:true,ref:8,cur:6},
        {name:'Twitter Header',available:true,ref:10,cur:7.5},
        {name:'Stream Overlay',available:false,ref:12,cur:9},
        {name:'AVI With PopOut',available:true,ref:6,cur:4.5},
        {name:'Background Cut',available:true,ref:3,cur:2.25},
        {name:'Drip/Logo Design',available:true,ref:12,cur:9},
        {name:'Text Emoji',available:true,ref:3,cur:2.25},
        {name:'Youtube Thumbnail',available:true,ref:8,cur:6},
        {name:'Premade Mascot Logo',available:true,ref:8,cur:6},   
    ]

    return(
        <>
            <div className={`${styles.worksTitle}`}>PRICE LIST</div>
            <div className={styles.priceContainer}>
                <div className={styles.Navigator}>
                    <div className={(activeCategory==0)?(`${styles.navigatorElement} ${styles.activeElement}`):(styles.navigatorElement)} onClick={()=> setactiveCategory(0)}>GFX</div>
                    <div className={(activeCategory==1)?(`${styles.navigatorElement} ${styles.activeElement}`):(styles.navigatorElement)} onClick={()=> setactiveCategory(1)}>VFX</div>
                    <div className={(activeCategory==2)?(`${styles.navigatorElement} ${styles.activeElement}`):(styles.navigatorElement)} onClick={()=> setactiveCategory(2)}>Packs</div>
                    <div className={(activeCategory==3)?(`${styles.navigatorElement} ${styles.activeElement}`):(styles.navigatorElement)} onClick={()=> setactiveCategory(3)}>Booster</div>
                    <div className={(activeCategory==4)?(`${styles.navigatorElement} ${styles.activeElement}`):(styles.navigatorElement)} onClick={()=> setactiveCategory(4)}>Level-Up</div>
                </div>
            <div className={styles.bodyHeading}>
                <div className={styles.rightHeading}>FX Name</div>
                <div className={styles.leftHeading}>
                    <div className={styles.leftHeadingElement}>Referrals</div>
                    <div className={styles.leftHeadingElement}>Currency</div>
                </div>
            </div>
            <div className={styles.bodyContainer}>
                {
                    GFX.map((fx,index)=>{
                        (<div className={styles.FX} id={index}>
                            <div className={styles.rightArea}>
                                <div className={styles.rightElement}>
                                    <div className={styles.rightFx}>
                                        <div className={styles.rightStatus}>{(fx['available'])?(<AiFillCheckCircle/>):(<AiFillCloseCircle/>)}</div>
                                        <div className={styles.fxName}>AVI</div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={styles.leftArea}>
                            <div className={styles.priceSections}>
                                <div className={styles.priceElement}><AiOutlineUsergroupAdd className={styles.elementIcon}/>10</div>
                                <div className={styles.priceElement}><BsCurrencyDollar className={styles.elementIcon}/>11</div>
                            </div>
                            </div>
                            </div>)
                    })
                }
                
               
                
            </div>
            </div>
        </>
    )
}