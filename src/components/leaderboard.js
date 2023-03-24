import styles from './leaderboard.module.css'
import {app, database, storage} from '../firebaseCongif';
import { collection, getDoc, doc } from 'firebase/firestore';
import {BsBehance,BsTwitter,BsGlobe2,BsInstagram,BsYoutube} from 'react-icons/bs'
import { useState,useEffect } from 'react';

import AvatarFetcher from './avatarFetcher';
export default function Leaderboard(){
    var initialData=new Array(5).fill('723731923968720948')
    const [stats,setStats]=useState(null);
    const [userDB,setUserDB]=useState([]);
    const [DLB,setDLB]=useState(initialData);

    async function gettingStats()
    {
        const thefile=await getDoc(doc(database, 'stats', 'Main'));
        setStats(thefile.data())
        const thefile2=await getDoc(doc(database, 'stats', 'users'));
        setUserDB(thefile2.data())
    }
 
  useEffect((()=>{
    gettingStats();
 }),[])

 const [avURLs,setAvURLs]=useState([]);
 useEffect((()=>{
    if(stats==null) return
    if(DLB!=stats.designerLB) setDLB(stats.designerLB);
    let urls=[];
    let promises=(DLB).map(async (designer,i)=>{
        urls[designer]=await AvatarFetcher(designer,'id');
    })
    Promise.all(promises).then(()=>{setAvURLs(urls)
  });
 }),[stats,DLB])



 return(
    <>
        <div className={styles.worksTitle}>DESIGNER LEADERBOARD</div>
        <div className={styles.leaderboard}>
            {DLB.map((designer,i)=>{
                
                return (
                    <div key={designer+i} className={styles.lbMember}>
                        <div className={styles.ranking}>#{i+1}</div>
                        <div style={{backgroundImage:`url(${(avURLs[designer])?(avURLs[designer]):('https://i.ibb.co/TLnDJn6/f90e3b84998242ab4f1dbb354ab989cb.png')})`}} className={styles.memberImg}></div>
                        <div className={styles.username}>{(userDB[designer]?userDB[designer]['username']:'Database Issue... Will be updated soon.')}</div>
                        <div className={styles.socials}>
                            {(userDB[designer])?(
                                <>
                                {(userDB[designer]['socials']['Website'])?(<a href={userDB[designer]['socials']['Website']} target="_blank" rel="noreferrer"><BsGlobe2 className={styles.socialIcon}/></a>):('')}
                                {(userDB[designer]['socials']['Behance'])?(<a href={userDB[designer]['socials']['Behance']} target="_blank" rel="noreferrer"><BsBehance className={styles.socialIcon}/></a>):('')}
                                {(userDB[designer]['socials']['Twitter'])?(<a href={userDB[designer]['socials']['Twitter']} target="_blank" rel="noreferrer"><BsTwitter className={styles.socialIcon}/></a>):('')}
                                {(userDB[designer]['socials']['Instagram'])?(<a href={userDB[designer]['socials']['Instagram']} target="_blank" rel="noreferrer"><BsInstagram className={styles.socialIcon}/></a>):('')}
                                {(userDB[designer]['socials']['Youtube'])?(<a href={userDB[designer]['socials']['Youtube']} target="_blank" rel="noreferrer"><BsYoutube className={styles.socialIcon}/></a>):('')}
                                </>):((<a href={'https://discord.gg/design4u'} target="_blank" rel="noreferrer"><BsGlobe2 className={styles.socialIcon}/></a>))
                                }
                                
                        </div>
                        
                    </div>
                )}
                )}
        </div>
        </>
 )
}