import styles from './staff.module.css'
import {BsBehance,BsTwitter,BsGlobe2,BsInstagram,BsYoutube} from 'react-icons/bs'
import { useState,useEffect } from 'react'
import AvatarFetcher from './avatarFetcher';

import {app, database, storage} from '../firebaseCongif';
import { collection, getDoc, doc } from 'firebase/firestore';
export default function Staff(props){
    const defaultAV='https://cdn.discordapp.com/avatars/723731923968720948/f90e3b84998242ab4f1dbb354ab989cb.png';
    const [staffs,setStaffs]=useState(['664903359693586451']);
    const [staffInfo,setStaffInfo]=useState(
        {
            '664903359693586451':{
                username:'Apricity#5111',
                roles:['OWNER','APRICITY','STAFF MANAGER','SENIOR MODERATOR','MODERATOR'],
                socials:{}
            },
            '443919146674028586':{
                username:'Panzo#4308',
                roles:['OWNER','PANZO','STAFF MANAGER','SUPPORT MANAGER','SENIOR MODERATOR'],
                socials:{},
            }
        }
    )
    const [roleColor, setRoleColor]=useState({
        'OWNER': 'R255G77B77',
        'APRICITY': 'R250G232B194',
        'PANZO': 'R161G165B248',
        'DERWESH': 'R255G255B255',
        'STAFF MANAGER': 'R223G0B0',
        'SENIOR MODERATOR': 'R255G69B107',
        'MODERATOR': 'R0G218B235',
        'SUPPORT MANAGER': 'R255G157B68',
        'TICKET OVERSEER': 'R255G217B104',
        'SERVER SUPPORT': 'R149G119B255',
        'DESIGNER': 'R101G127B255'
    })

    async function gettingDesigns()
    {   

        const theUserFile=await getDoc(doc(database, 'stats', 'users'));
        const userData=theUserFile.data();
        setStaffInfo(userData);
        const theMainFile=await getDoc(doc(database, 'stats', 'Main'));
        const mainData=theMainFile.data();
        setStaffs(mainData.staffs)
        
       
    }

    useEffect((()=>{
        gettingDesigns();
      }),[])

    const [currentRole,setCurrentRole]=useState('');

    useEffect(()=>{
            props.themeFun((currentRole=='')?([277,77,77,'red']):(colorGiver(roleColor[currentRole])))
    },[currentRole])

    function colorGiver(colorStr){
        let R=colorStr.substring(1,colorStr.indexOf('G'));
        let G=colorStr.substring(colorStr.indexOf('G')+1,colorStr.indexOf('B'));
        let B=colorStr.substring(colorStr.indexOf('B')+1,);
        return([R,G,B,'red'])
    }
    const [avURLs,setAvURLs]=useState([]);
    useEffect(()=>{
       let urls=[];
       let promises=(staffs).map(async (rev,i)=>{
           urls[rev]=await AvatarFetcher(rev,'id');
       })
       Promise.all(promises).then(()=>{setAvURLs(urls);

     });
   
     },[staffs])

    return(
        <div className={styles.main}>
            <div className={`${styles.worksTitle}`}>OUR TEAM</div>
            <div className={styles.coveringArea}>
            {
                    (staffs).map((rev,i)=>(
                    <div className={(staffInfo[rev]['roles'].includes(currentRole) || currentRole=='')?(`${styles.member}`):(`${styles.member} ${styles.grayscale}`)} key={rev}>
                    <img src={avURLs[rev]} className={styles.avatar}></img>
                    <div className={styles.banner}>{(staffInfo[rev]['banner'])?(<><div className={styles.tint}></div><img src={staffInfo[rev]['banner']}></img></>):('')}</div>
                    <div className={styles.blankSpace}></div>
                    <div className={styles.memberBody}>
                        <div>
                            <div className={styles.socials}>
                                {(staffInfo[rev]['socials']['Website'])?(<a href={staffInfo[rev]['socials']['Website']} target="_blank" rel="noreferrer"><BsGlobe2 className={styles.socialIcon}/></a>):(<></>)}
                                {(staffInfo[rev]['socials']['Twitter'])?(<a href={staffInfo[rev]['socials']['Twitter']} target="_blank" rel="noreferrer"><BsTwitter className={styles.socialIcon}/></a>):(<></>)}
                                {(staffInfo[rev]['socials']['Instagram'])?(<a href={staffInfo[rev]['socials']['Instagram']} target="_blank" rel="noreferrer"><BsInstagram className={styles.socialIcon}/></a>):(<></>)}
                                {(staffInfo[rev]['socials']['Behance'])?(<a href={staffInfo[rev]['socials']['Behance']} target="_blank" rel="noreferrer"><BsBehance className={styles.socialIcon}/></a>):(<></>)}
                                {(staffInfo[rev]['socials']['Youtube'])?(<a href={staffInfo[rev]['socials']['Youtube']} target="_blank" rel="noreferrer"><BsYoutube className={styles.socialIcon}/></a>):(<></>)}
                            </div>
                            
                            <div className={styles.memberName}><span className={styles.Username}>{(staffInfo[rev]['username']).substring(0,(staffInfo[rev]['username']).indexOf('#'))}</span><span className={styles.Tag}>{(staffInfo[rev]['username']).substring((staffInfo[rev]['username']).indexOf('#'))}</span></div>
                            <div className={styles.rolesContainer} onMouseEnter={(e)=>e.target.scrollLeft=0} onMouseLeave={(e)=>e.target.scrollLeft=0}>
                            {
                                    (staffInfo[rev]['roles']).map((role,j)=>(
                                        <div className={styles.role} key={j} onMouseEnter={()=>setCurrentRole(role)} onMouseLeave={()=>setCurrentRole('')}>{'◈ '+role}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                    ))
            }
 

            </div>
        </div>
    )
}