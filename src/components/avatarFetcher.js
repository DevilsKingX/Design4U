import {app, database} from '../firebaseCongif';
import {doc, updateDoc,getDoc} from 'firebase/firestore'
async function isValidImageUrl(url) {
    return new Promise((resolve) => {
      const img = document.createElement('img');
  
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
  
      img.src = url;
    });
  }


export default async function AvatarFetcher(id,method){
    const defaultURL='https://i.ibb.co/XVzcCMn/f90e3b84998242ab4f1dbb354ab989cb.png';
    
    const thefile=await getDoc(doc(database, 'stats', 'Main'));
    const usersdata=(thefile.data());
    const avs=usersdata.avatars || [];   

    
    if(!avs[id]) {
        
        const theqfile=await getDoc(doc(database, 'stats', 'Main'));
        const qstats=(theqfile.data());
        const queries=qstats.updateQueue || [];
        if(!queries.includes('Av'+method+'-'+id))
        {
            await updateDoc(doc(database, 'stats', 'Main'), {
                updateQueue: [...queries, 'Av' + method + '-' + id],
                }).then(()=>{
                    return defaultURL;
                })
        }
        

        
            
    }
    else{
        const promise=await isValidImageUrl(avs[id]);
        if(promise){ 
            return avs[id];
        }
        else{
            console.log('Found for '+id+' but invalid image. Updating...')
            const theqfile=await getDoc(doc(database, 'stats', 'Main'));
            const qstats=await (thefile.data());
            const queries=qstats['updateQueue'] || [];
            if(!queries.includes('Av'+method+'-'+id)) 
            {
                await updateDoc(doc(database, 'stats', 'Main'), {
                    updateQueue: [...queries, 'Av' + method + '-' + id],
                    }).then(()=>{
                        return defaultURL;
                    })
            }
            
        }
    }
}