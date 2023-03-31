import styles from '../components/navbar.module.css'
import D4ULogo from '../../public/Design4U.svg'
import Image from 'next/image'
import {BsTwitter,BsInstagram,BsFacebook, BsDiscord} from 'react-icons/bs'
export default function Navbar(){
return(
    <div className={styles.navbar}>
        <div className={styles.rightWing}>
            <div className={styles.socials}>
                <i><BsTwitter/></i>
                <i><BsInstagram/></i>
                <i><BsDiscord/></i>
            </div>   
        </div>
        <div className={styles.D4ULogo}><Image src={D4ULogo} alt='Design4U Logo' width={68} height={68}/></div>
        <div className={styles.rightWing}>
            <div className={styles.joinNow}>
                JOIN NOW
            </div>   
        </div>
    </div>
)
}