import mainscreenpage from './mainscreenpage.module.css'
import LeftSection from '../../Sections/LeftSection/LeftSection'
import MiddleSection from '../../Sections/MiddleSection/MiddleSection'
import RightSection from '../../Sections/RightSection/RightSection'
import TweetSection from '../../Components/TweetSection/TweetSection'
import { useRecoilValue , useRecoilState } from 'recoil'
import { isDialogBox } from '../../Recoil/RecoilAtom'
import {isLogin , Data} from '../../Recoil/RecoilAtom'
import Home from '../Home/Home'
import {useState} from 'react'
 
const Mainscreeenpage = () => {
  const LoginStatus = useRecoilValue(isLogin)
  const[ DialogueBox , setDialogBox] = useRecoilState(isDialogBox)
  const [tweetCapture , setTweetCapture] = useState();
  const [addingDataToRecoil , setAddingDataToRecoil] = useRecoilState(Data)
  
  function captureTweetInput(e) {
    setTweetCapture(e.target.value)   
   }
   let Details = JSON.parse(localStorage.getItem("list"))

   function AddDataToRrecoil(){
       const obj = {
           name: Details.Name,
           tweetText : tweetCapture,
           handlerName : Details.Name,
           tweetPic :"https://th.bing.com/th/id/OIP.AdzhkXtdEuGDv94QoKVmaAHaHa?pid=ImgDet&rs=1"            
       }
       setAddingDataToRecoil([ obj ,...addingDataToRecoil])
       
   }
   function close() {
    setDialogBox(false)
   } 


    return (
        <div>
       {LoginStatus && <div className={mainscreenpage.mainComponent}>
          <LeftSection />

          {DialogueBox ? <dialog  className={mainscreenpage.DialogueBox} >
            <div className={mainscreenpage.DialogueContainer}> <button onClick={close} className={mainscreenpage.closeButton}>x</button>
              <TweetSection onClick={AddDataToRrecoil} onChange={captureTweetInput}  placeholder='What’s happening???' />  
            </div></dialog> : null}

          <MiddleSection />
          <RightSection />           
        </div>}
       { !LoginStatus && <Home />}
        </div>
    )
}

export default Mainscreeenpage