import styles from './price.module.css'
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
import { useState,useRef,useEffect } from 'react'
import {AiOutlineUsergroupAdd,} from 'react-icons/ai';
import {BsCurrencyDollar} from 'react-icons/bs'
import {SiSupabase} from 'react-icons/si'
import {IoIosRocket} from 'react-icons/io'
import ScrollArrow from './scrollArrow';
export default function Price(){

    const [activeCategory, setactiveCategory]=useState(0);
    const [topmost,setTopmost]=useState(true);
    const [bottommost,setBottommost]=useState(false);
    const scrollRef=useRef(null);
    const [topmost2,setTopmost2]=useState(true);
    const [bottommost2,setBottommost2]=useState(true);
    const scrollRef2=useRef(null);

    //A function to check if Y scroll position of scrollRef is 0
    function checkScroll(active){
        if(scrollRef.current.scrollTop==0){
            setTopmost(true);}
        else 
        setTopmost(false);

        if(scrollRef.current.scrollTop==scrollRef.current.scrollHeight-scrollRef.current.clientHeight){
            setBottommost(true);
        }
        else
        setBottommost(false);

        if(active==1) {setBottommost(true); setTopmost(true);}


        }

        function checkScroll2(active){
            if(scrollRef2.current.scrollTop==0){
                setTopmost2(true);}
            else 
            setTopmost2(false);
    
            if(scrollRef2.current.scrollTop==scrollRef2.current.scrollHeight-scrollRef2.current.clientHeight){
                setBottommost2(true);
            }
            else
            setBottommost2(false);

            if(active==0) {setBottommost2(true); setTopmost2(true);}
            }

    const GFX=[
        {name:'AVI',available:true,ref:5,cur:3.75,level:10,boost:1},
        {name:'Jersey',available:true,ref:12,cur:9,level:10,boost:1},
        {name:'Roster',available:true,ref:15,cur:11.25,level:15,boost:1},
        {name:'Banner',available:true,ref:10,cur:7.5,level:10,boost:1},
        {name:'3D Text',available:true,ref:4,cur:3,level:10,boost:1},
        {name:'Wallpaper',available:true,ref:10,cur:7.5,level:10,boost:1},
        {name:'Concept Logo',available:true,ref:18,cur:13.5,level:20,boost:2,'longname':true},
        {name:'Profile Picture',available:true,ref:8,cur:6,level:10,boost:1,'longname':true},
        {name:'Twitter Header',available:true,ref:10,cur:7.5,level:10,boost:1,'longname':true},
        {name:'Stream Overlay',available:false,ref:12,cur:9,level:10,boost:1,'longname':true},
        {name:'AVI With PopOut',available:true,ref:6,cur:4.5,level:10,boost:1,'longname':true},
        {name:'Background Cut',available:true,ref:3,cur:2.25,level:10,boost:1,'longname':true},
        {name:'Drip/Logo Design',available:true,ref:12,cur:9,level:10,boost:1,'longname':true},
        {name:'Text Emoji',available:true,ref:3,cur:2.25,level:10,boost:1},
        {name:'Youtube Thumbnail',available:true,ref:8,cur:6,level:10,boost:1,'longname':true},
        {name:'Premade Mascot Logo',available:true,ref:8,cur:6,level:10,boost:'-','longname':true},   
    ]

    const VFX=[
        {name:'GIF(Name)',available:true,ref:12,cur:9,level:10},
        {name:'GIF(Name+Logo)',available:true,ref:15,cur:11.5,level:10,'longname':true},
        {name:'Intro(Name)',available:true,ref:12,cur:9,level:15},
        {name:'Intro(Name+Logo)',available:true,ref:15,cur:11.5,level:10,'longname':true},
        {name:'Animated Overlay',available:true,ref:18,cur:13.5,level:10,'longname':true},
        {name:'30-Second Montage',available:true,ref:12,cur:9,level:10,'longname':true},
        {name:'1-Minute Montage',available:true,ref:15,cur:11.25,level:20,'longname':true},
        {name:'2-Minute Montage',available:true,ref:20,cur:15,level:10,'longname':true},
        {name:'3-Minute Montage',available:true,ref:25,cur:18.75,level:10,'longname':true},
        {name:'4-Minute Montage',available:false,ref:30,cur:22.5,level:10,'longname':true},
    ]

    return(
        <>
            <div className={`${styles.worksTitle}`}>PRICE LIST</div>
            <div className={styles.priceContainer}>
                
                <div className={styles.Navigator}>
                    <div className={(activeCategory==0)?(`${styles.navigatorElement} ${styles.activeElement}`):(styles.navigatorElement)} onClick={()=> {setactiveCategory(0);checkScroll(0);checkScroll2(0);}} style={{marginLeft:'0px'}}>GFX</div>
                    <div className={(activeCategory==1)?(`${styles.navigatorElement} ${styles.activeElement}`):(styles.navigatorElement)} onClick={()=> {setactiveCategory(1);checkScroll(1);checkScroll2(1);}}>VFX</div>
                </div>
                <div className={styles.priceBodies}>
                    <div className={styles.pbody}  style={{width:(activeCategory==0)?('100%'):('0px')}}>
                    <div className={styles.arrowDown} style={(bottommost)?({opacity:0}):({opacity:1})}><ScrollArrow/></div>
                
                        <div className={styles.bodyHeading}>
                            <div className={styles.rightHeading}>FX Name</div>
                            <div className={styles.leftHeading}>
                                <div className={styles.leftHeadingElement}>Referrals</div>
                                <div className={`${styles.leftHeadingElement} ${styles.mhide}`}>Levels</div>
                                <div className={`${styles.leftHeadingElement} ${styles.mhide}`}>Boosts</div>
                                <div className={styles.leftHeadingElement}>Currency</div>
                            </div>
                        </div>
                        <div className={styles.bodyContainer} ref={scrollRef} onScroll={()=>checkScroll(0)}>
                        <div className={styles.arrowUp} style={(topmost)?({opacity:0}):({opacity:1})}><ScrollArrow/></div>
                            {
                                GFX.map((fx,index)=>{
                                    return (<div className={styles.FX} key={index}>
                                        <div className={styles.rightArea}>
                                            <div className={styles.rightElement}>
                                                <div className={styles.rightFx}>
                                                    <div className={styles.rightStatus}>{(fx['available'])?(<AiFillCheckCircle/>):(<AiFillCloseCircle/>)}</div>
                                                    <div className={(!fx['longname'])?(`${styles.fxName}`):(`${styles.fxName} ${styles.longfx}`)}><span>{fx['name']}</span></div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className={styles.leftArea}>
                                        <div className={styles.priceSections}>
                                            <div className={styles.priceElement}><span><AiOutlineUsergroupAdd className={styles.elementIcon}/>{fx['ref']}</span></div>
                                            <div className={`${styles.priceElement} ${styles.mhide}`}><span><SiSupabase className={styles.elementIcon}/>{fx['level']}</span></div>
                                            <div className={`${styles.priceElement} ${styles.mhide}`}><span><IoIosRocket className={styles.elementIcon}/>{fx['boost']}</span></div>
                                            <div className={styles.priceElement}><span><BsCurrencyDollar className={styles.elementIcon}/>{fx['cur']}</span></div>
                                        </div>
                                        </div>
                                        </div>)
                                })
                            }
                            
                        
                            
                        </div>
                    </div>
                    <div className={styles.pbody} style={{width:(activeCategory==0)?('0px'):('100%')}}>
                    <div className={styles.arrowDown} style={(bottommost2)?({opacity:0}):({opacity:1})}><ScrollArrow/></div>
                
                        <div className={styles.bodyHeading}>
                            <div className={styles.rightHeading}>FX Name</div>
                            <div className={styles.leftHeading}>
                                <div className={styles.leftHeadingElement}>Referrals</div>
                                <div className={styles.leftHeadingElement}>Currency</div>
                            </div>
                        </div>
                        <div className={styles.bodyContainer} ref={scrollRef2} onScroll={()=>checkScroll2(1)}>
                        <div className={styles.arrowUp} style={(topmost2)?({opacity:0}):({opacity:1})}><ScrollArrow/></div>
                            {
                                VFX.map((fx,index)=>{
                                    return (<div className={styles.FX} key={index}>
                                        <div className={styles.rightArea}>
                                            <div className={styles.rightElement}>
                                                <div className={styles.rightFx}>
                                                    <div className={styles.rightStatus}>{(fx['available'])?(<AiFillCheckCircle/>):(<AiFillCloseCircle/>)}</div>
                                                    <div className={(!fx['longname'])?(`${styles.fxName}`):(`${styles.fxName} ${styles.longfx}`)}><span>{fx['name']}</span></div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className={styles.leftArea}>
                                        <div className={styles.priceSections}>
                                            <div className={styles.priceElement}><span><AiOutlineUsergroupAdd className={styles.elementIcon}/>{fx['ref']}</span></div>
                                            <div className={styles.priceElement}><span><BsCurrencyDollar className={styles.elementIcon}/>{fx['cur']}</span></div>
                                        </div>
                                        </div>
                                        </div>)
                                })
                            }
                            
                        
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}