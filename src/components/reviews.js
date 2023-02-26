import styles from '../components/reviews.module.css'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import Image from 'next/image'
import {app, database} from '../firebaseCongif';
import { collection, getDoc, doc } from 'firebase/firestore';
import { useState,useEffect,useRef } from 'react';

export default function Reviews(){

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
      review:[
        {CAv: "https://cdn.discordapp.com/avatars/702979435481006210/b346110f5db2d224c5703850510ca763.webp?size=4096", CTag: "Ace777#3517", DAv: "https://cdn.discordapp.com/avatars/748426441716269107/7a24dc3a26d846eb5084626fac9198e2.webp?size=4096", DTag: "Orbit#9091", Desc: "Awesome design!"},
        {CAv: "https://cdn.discordapp.com/avatars/1004662221558788096/eb75e784da3389bab71a57e411e5d380.webp?size=4096", CTag: "jordan.#0625", DAv: "https://cdn.discordapp.com/avatars/387374587333181452/d7730c22d467e64b692bd074476ddffe.webp?size=4096", DTag: "LilJøny#6237", Desc: "Made exactly what I wanted in a short amount of time! Great work!"},
        {CAv: "https://cdn.discordapp.com/avatars/817515739711406140/13fe6fddafa3d8415e1e6cd7ff8947b4.webp?size=4096", CTag: " !! Zer0 🥀 | ᵖᵏ#1999", DAv: "https://cdn.discordapp.com/avatars/695285074282676235/257b5d88a038422e551ebae460eff31d.webp?size=4096", DTag: "Lazy#7696", Desc: "Good design and in a good time."},
        {CAv: "https://cdn.discordapp.com/embed/avatars/1.png", CTag: "repeatz#0001", DAv: "https://cdn.discordapp.com/avatars/773114093677969408/6ba3df094cd87459365c85451fb6675b.webp?size=4096", DTag: "f7re#0007", Desc: "Absolutely amazin helped me when i needed resizing even after i had accepted the product"},
        {CAv: "https://cdn.discordapp.com/avatars/709369652043579483/c55de2239f0f18af2658506337cdfc42.webp?size=4096", CTag: "RG ॐ#0367", DAv: "https://cdn.discordapp.com/avatars/736115344539779072/21ee9c93c1e70c2bf640857028aa23e5.webp?size=4096", DTag: "Devils King#4686", Desc: "Devil OP as always, what should i say more"},
        {CAv: "https://cdn.discordapp.com/avatars/410460876433391627/e88cce2a165525c712aed9a3bd385c0c.webp?size=4096", CTag: "AgentRift#2271", DAv: "https://cdn.discordapp.com/avatars/753914287596240948/e44809f9cc65d61a961a8a1a22645a58.webp?size=4096", DTag: "zMagnus#6078", Desc: "10/10 on the header made."},
        {CAv: "https://cdn.discordapp.com/embed/avatars/4.png", CTag: "Grizz#1234", DAv: "https://cdn.discordapp.com/avatars/753914287596240948/e44809f9cc65d61a961a8a1a22645a58.webp?size=4096", DTag: "zMagnus#6078", Desc: "Polite and friendly service, delivered exactly what I was looking for, cheap cost and fast delivery. Would recommend 10/10 ❤️"},
        {CAv: "https://cdn.discordapp.com/avatars/294318141423747072/d76015eebbf907573b420d4b5915d99c.webp?size=4096", CTag: "The_Real_Rick#5882", DAv: "https://cdn.discordapp.com/avatars/753914287596240948/e44809f9cc65d61a961a8a1a22645a58.webp?size=4096", DTag: "zMagnus#6078", Desc: "PFP was great. Gave a few elements of what I wanted. then I trusted zMagnus completely. Came out amazing."},
        {CAv: "https://cdn.discordapp.com/avatars/706716987685994588/52147c49fc03d9232e7763d4bbb888e3.webp?size=4096", CTag: "Syniez#2021", DAv: "https://cdn.discordapp.com/avatars/736115344539779072/21ee9c93c1e70c2bf640857028aa23e5.webp?size=4096", DTag: "Devils King#4686", Desc: "Bad(ass) logos made by Dewils 💪10/1"},
        {CAv: "https://cdn.discordapp.com/embed/avatars/1.png", CTag: "repeatz#0001", DAv: "https://cdn.discordapp.com/avatars/387384348770566145/368a67e7a55af0904c2c0eed20cfeac3.webp?size=4096", DTag: "Kuha#5887", Desc: "Very nice pfp by Kuha"}
      ]
    }

    const [stats,setStats]=useState(initialData);

    async function gettingStats()
    {
        const thefile=await getDoc(doc(database, 'stats', 'Hero'));
        await setStats(thefile.data())
       

       
       const reviewDivs = stats.review.map((obj, index) => (
        <div key={index}>
          {Object.keys(obj).map((key) => (
            <div key={key}>
              {`${key}: ${obj[key]}`}
            </div>
          ))}
        </div>
      ));
       
    }

    
    
   useEffect((()=>{
    gettingStats();
 }),[])


    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }    
      
      const containerRef = useRef(null);
      const scrollAmount = useRef(0);
      const maxScrollAmount = useRef(0);
      const mouseDown = useRef(false);
      const mouseDownX = useRef(null);
      const mouseDownScrollAmount = useRef(null);
      
      useEffect(() => {
        const container = containerRef.current;
        const containerWidth = container.scrollWidth - container.clientWidth;
        maxScrollAmount.current = containerWidth;
      
        const animateScroll = () => {
          if (!mouseDown.current) {
            scrollAmount.current += 0.0001 * containerWidth;
            if (scrollAmount.current > maxScrollAmount.current) {
              scrollAmount.current = 0;
            }
            container.scrollTo(scrollAmount.current, 0);
          }
          requestAnimationFrame(animateScroll);
        };
      
        const handleMouseDown = (e) => {
          e.preventDefault();
          mouseDown.current = true;
          mouseDownX.current = e.clientX || e.touches[0].clientX;
          mouseDownScrollAmount.current = scrollAmount.current;
        };
      
        const handleMouseUp = () => {
          mouseDown.current = false;
        };
      
        const handleMouseMove = (e) => {
          if (mouseDown.current) {
            const mouseMoveX = e.clientX || e.touches[0].clientX;
            const deltaX = mouseMoveX - mouseDownX.current;
            scrollAmount.current = mouseDownScrollAmount.current - deltaX;
            if (scrollAmount.current < 0) {
              scrollAmount.current = 0;
            } else if (scrollAmount.current > maxScrollAmount.current) {
              scrollAmount.current = maxScrollAmount.current;
            }
            container.scrollTo(scrollAmount.current, 0);
          }
        };
      
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('touchstart', handleMouseDown);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('touchend', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('touchmove', handleMouseMove);
      
        requestAnimationFrame(animateScroll);
      
        return () => {
          container.removeEventListener('mousedown', handleMouseDown);
          container.removeEventListener('touchstart', handleMouseDown);
          container.removeEventListener('mouseup', handleMouseUp);
          container.removeEventListener('touchend', handleMouseUp);
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('touchmove', handleMouseMove);
        };
      }, []);
      

  useEffect(()=>{gettingStats},stats.review)
      
return(

    <div className={styles.main}>
        
        <div className={styles.paymentTitle}>CLIENT REVIEWS </div>
        <div className={styles.reviewsContainer} ref={containerRef}>
        {(stats.review).map((rev,i)=>(
        <div className={styles.review} key={i}>
            <div className={styles.nameHandler}>
            <div>
            <div className={styles.reviewTitle}>CLIENT NAME</div>
            <div className={styles.reviewValueArea}>
                <Image className={styles.statsProfileImg} loader={myLoader} src={rev['CAv']} width={30} height={30} alt="Client"/>
                <div className={styles.reviewValue}>{rev['CTag']}</div>
            </div>
            </div>
            <div>
            <div className={styles.reviewTitle} style={{textAlign:'right'}}>DESIGNER NAME</div>
            <div className={styles.reviewValueArea}>
                <Image className={styles.statsProfileImg} loader={myLoader} src={rev['DAv']} width={30} height={30} alt="Client"/>
                <div className={styles.reviewValue}>{rev['DTag']}</div>
            </div>
            </div>
            </div>
            <i><FaQuoteLeft/></i>
            <div className={styles.reviewDesc}><span>{rev['Desc']}</span></div>
            <div className={styles.bottomQuote}>
                <i><FaQuoteRight/></i></div>
        </div>
    )
    )}
        </div>
        </div>
)
}