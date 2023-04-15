import styles from '../components/navbar.module.css'
import D4ULogo from '../../public/Design4U.svg'
import Image from 'next/image'
import Link from 'next/link'
import {BsTwitter,BsInstagram,BsFacebook, BsDiscord} from 'react-icons/bs'
export default function Navbar(){
return(
    <div className={styles.navbar}>
        <div className={styles.rightWing}>
            <div className={styles.socials}>
                <a href='https://twitter.com/__design4u' target="_blank" rel="noreferrer"><i><BsTwitter/></i></a>
                <a href='https://www.instagram.com/design4u.ig/' target="_blank" rel="noreferrer"><i><BsInstagram/></i></a>
                <a href='https://discord.com/servers/design4u-701847935817744384' target="_blank" rel="noreferrer"><i><BsDiscord/></i></a>
            </div>   
        </div>
        
        <div className={styles.D4ULogo}>
  <div className={styles.logoOverlay}>
    <Link href="/">
        <div className={styles.logoOverlay}></div>
    </Link>
  </div>
</div>
        <div className={styles.rightWing}>
        <a href='https://discord.gg/design4u' target="_blank" rel="noreferrer"><div className={styles.joinNow}>
                JOIN NOW
            </div></a>
        </div>
    </div>
)
}