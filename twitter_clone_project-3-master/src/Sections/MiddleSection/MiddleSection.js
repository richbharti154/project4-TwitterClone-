import middlesection from '../MiddleSection/middlesection.module.css'
import TweetSection from '../../Components/TweetSection/TweetSection'
import {useState} from 'react'
import {Data , ImageAdress } from '../../Recoil/RecoilAtom'
import { useRecoilState , useRecoilValue } from 'recoil'
import TweetCard from '../../Components/TweetCards/TweetCard'


const MiddleSection = () => {
    const [tweetCapture , setTweetCapture] = useState();
    const [addingDataToRecoil , setAddingDataToRecoil] = useRecoilState(Data)
    const [imageAdress , setImageAdress] = useRecoilState(ImageAdress)
    function captureTweetInput(e) {
     setTweetCapture(e.target.value)   
    }
    let Details = JSON.parse(localStorage.getItem("list"))

    function AddDataToRrecoil(){
        const obj = {
            name: Details.Name,
            tweetText : tweetCapture,
            handlerName : Details.Name,
            tweetPic : imageAdress,
            isComment : false            
        }
        setAddingDataToRecoil([ obj ,...addingDataToRecoil])
        let data = localStorage.userTweets?.length > 0 ? JSON.parse(localStorage.userTweets) : [];
        data = [obj , ...data ]
        
        localStorage.setItem('userTweets' , JSON.stringify(data))
        setImageAdress("")
     console.log( imageAdress)

        
    }

    return (
        <div className={middlesection.mainComponent}>

        <div className={middlesection.scrollerSection}>

            <h2 className={middlesection.heading}>Home</h2>

            <div className={middlesection.TweetSection}>
               <TweetSection onClick={AddDataToRrecoil} onChange={captureTweetInput} placeholder= 'What’s happening?' />        
            </div>
                     
                <TweetCard />
            </div>    

        </div>
    )
}
export default MiddleSection