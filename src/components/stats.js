import styles from '../components/stats.module.css'
import Image from 'next/image'
import {BsTwitter,BsInstagram,BsFacebook, BsDiscord} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa';
import {app, database} from '../firebaseCongif';
import { collection, getDoc, doc } from 'firebase/firestore';
import { useState,useEffect, useRef } from 'react';
export default function Stats(){

    const dbInstance=collection( database, 'stats');
    const initialData={
      boostCount: 20,
      memberCount: 13000,
      paidOrderCount:2000,
      totalTicketCount:2000,
      latestClient:['Loading...','https://cdn.discordapp.com/avatars/723731923968720948/f90e3b84998242ab4f1dbb354ab989cb.png'],
      latestBooster:['Loading...','https://cdn.discordapp.com/avatars/723731923968720948/f90e3b84998242ab4f1dbb354ab989cb.png'],
      latestPaidClient:['Loading...','https://cdn.discordapp.com/avatars/723731923968720948/f90e3b84998242ab4f1dbb354ab989cb.png'],
      latestMember:['Loading...','https://cdn.discordapp.com/avatars/723731923968720948/f90e3b84998242ab4f1dbb354ab989cb.png'],
      
    }
   
    const [stats,setStats]=useState(initialData);
    async function gettingStats()
    {
        const thefile=await getDoc(doc(database, 'stats', 'Hero'));
        await setStats(thefile.data())
       
    }

   useEffect((()=>{
      gettingStats();
       

    }),[])


    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
//Member Count Run

const [memberCountRun,setMemberCountRun]=useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          if (memberCountRun < stats.memberCount) {
            const diffcv=(stats.memberCount-memberCountRun)
            const addA=((diffcv>=1000))?1000:((diffcv>=100)?100:((diffcv>=10)?10:1))
            setMemberCountRun(memberCountRun + addA);
          } else {
            clearInterval(interval);
          }
        }, 50);
        return () => clearInterval(interval);
      }, [memberCountRun, stats.memberCount]);

//Ticket Count Run

const [ticketCountRun,setticketCountRun]=useState(0);
      useEffect(() => {
        
        const interval = setInterval(() => {
          if (ticketCountRun < stats.totalTicketCount) {
            const diffcv=(stats.totalTicketCount-ticketCountRun)
            const addA=((diffcv>=1000))?1000:((diffcv>=100)?100:((diffcv>=10)?10:1))
            setticketCountRun(ticketCountRun + addA);
          } else {
            clearInterval(interval);
          }
        }, 50);
        return () => clearInterval(interval);
      }, [ticketCountRun, stats.totalTicketCount]);

//Booster Count Run

const [boostCountRun,setboostCountRun]=useState(0);
      useEffect(() => {
        
        const interval = setInterval(() => {
          if (boostCountRun < stats.boostCount) {
            const diffcv=(stats.boostCount-boostCountRun)
            const addA=1;
            setboostCountRun(boostCountRun + addA);
          } else {
            clearInterval(interval);
          }
        }, 70);
        return () => clearInterval(interval);
      }, [boostCountRun, stats.boostCount]);

//Paid Count Run

const [paidTicketCountRun,setpaidTicketCountRun]=useState(0);
useEffect(() => {
  
  const interval = setInterval(() => {
    if (paidTicketCountRun < stats.paidOrdersCount) {
      const diffcv=(stats.paidOrdersCount-paidTicketCountRun)
      const addA=((diffcv>=1000))?1000:((diffcv>=100)?100:((diffcv>=10)?10:1))
      setpaidTicketCountRun(paidTicketCountRun + addA);
    } else {
      clearInterval(interval);
    }
  }, 50);
  return () => clearInterval(interval);
}, [paidTicketCountRun, stats.paidOrdersCount]);

    return(
        <>
     <div className={styles.statsContainer} >
            <div className={styles.mouseFollower}></div>
            <div className={styles.stat}>
                <div className={styles.statName}>MEMBER COUNT</div>
                <div className={styles.statCount}>{memberCountRun}</div>
                <div className={styles.latestTitle}>LATEST MEMBER:</div>
                <div className={styles.latestContainer} >
                    <Image className={styles.statsProfileImg} loader={myLoader} src={stats.latestMember.at(1)} width={30} height={30} alt="Member"/>
                    <div>{stats.latestMember.at(0)}</div>
                </div>
            </div>
            <div className={styles.stat}>
                <div className={styles.statName}>TOTAL TICKET COUNT</div>
                <div className={styles.statCount}>{ticketCountRun}</div>
                <div className={styles.latestTitle}>LATEST CLIENT:</div>
                <div className={styles.latestContainer}>
                  <Image className={styles.statsProfileImg} loader={myLoader} src={stats.latestClient.at(1)} width={30} height={30} alt="Client"/>
                    <div>{stats.latestClient.at(0)}</div>
                </div>
            </div>
            <div className={styles.stat}>
                <div className={styles.statName}>BOOST COUNT</div>
                <div className={styles.statCount}>{boostCountRun}</div>
                <div className={styles.latestTitle}>LATEST BOOSTER:</div>
                <div className={styles.latestContainer}>
                    <Image className={styles.statsProfileImg} loader={myLoader} src={stats.latestBooster.at(1)} width={30} height={30} alt="Client"/>
                    <div>{stats.latestBooster.at(0)}</div>
                </div>
            </div>
            <div className={styles.stat}>
                <div className={styles.statName}>PAID TICKET COUNT</div>
                <div className={styles.statCount}>{paidTicketCountRun}</div>
                <div className={styles.latestTitle}>LATEST PAID CLIENT:</div>
                <div className={styles.latestContainer}>
                    <Image className={styles.statsProfileImg} loader={myLoader} src={stats.latestPaidClient.at(1)} width={30} height={30} alt="Client"/>
                    <div>{stats.latestPaidClient.at(0)}</div>
                </div>
            </div>
            <div className={styles.mouseFollower}></div>
        </div>
        </>
    )
   
}