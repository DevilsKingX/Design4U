import {BsPersonPlusFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {MdPayments} from 'react-icons/md'
import styles from './paymentOptions.module.css'
import Image from 'next/image'
import BoostingIcon from '../../public/Boosting.svg'
import Tilt from 'tilt.js'

export default function PaymentOptions(){
    return(
        <div className={styles.main}>
            <div className={styles.paymentTitle}>PAYMENT METHODS</div>
        <div className={styles.paymentOptions}>
            <div className={styles.method} data-tilt data-tilt-perspective="700">
                <i><RiServiceFill/></i>
                <div className={styles.methodTitle}>Server Levels</div>
                <div className={styles.methodDescription}>Use XP gained by server Activity.</div>
            </div>
            <div className={styles.method} data-tilt data-tilt-perspective="700">
                <i><BsPersonPlusFill/></i>
                <div className={styles.methodTitle}>Server Referrals</div>
                <div className={styles.methodDescription}>Inviting your friends to our server.</div>
            </div>
            <div className={styles.method} data-tilt data-tilt-perspective="700">
                <i><Image src={BoostingIcon} width={50} height={50} alt="Boosting"/ ></i>
                <div className={styles.methodTitle}>Server Boosting</div>
                <div className={styles.methodDescription}>Supporting us by boosting our server.</div>
            </div>
            <div className={styles.method} data-tilt data-tilt-perspective="700">
                <i><MdPayments/></i>
                <div className={styles.methodTitle}>Online Payment</div>
                <div className={styles.methodDescription}>Paying via Paypal, Nitro, Crypto etc.</div>
            </div>
        </div>
        </div>
    )
}