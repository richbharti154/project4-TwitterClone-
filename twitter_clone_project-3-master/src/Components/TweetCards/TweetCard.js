import tweetcard from '../TweetCards/tweetcard.module.css'
import {Data ,isLikeValue , clickedProfileIndex , commentBox} from '../../Recoil/RecoilAtom'
import { useRecoilValue , useRecoilState } from 'recoil'
import { FaUserCircle } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'
import {RiMoreFill} from 'react-icons/ri'
import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'    
import {AiOutlineHeart} from 'react-icons/ai'    
import {CgInsights} from 'react-icons/cg'    
import {FiShare} from 'react-icons/fi'  
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import DialogBox from '../CommentDialog/Dialog'
import {commentClickedIndex} from '../../Recoil/RecoilAtom'


const TweetCard = () => {
    const [isLike , setIsLike] = useRecoilState(isLikeValue)
    const [likeCount , setLikeCount] = useState(100)
    const [clickedProfile , setClickedProfile] = useRecoilState(clickedProfileIndex)
    const [isCommentBox , setIsCommentBox] = useRecoilState(commentBox)
    const [tweetData , setTweetData] = useRecoilState(Data)
    const data =  JSON.parse(localStorage.getItem("userTweets"))
    const navigate = useNavigate()

    useEffect( () => {
        let data = localStorage.userTweets?.length > 0 ? JSON.parse(localStorage.userTweets) : [];
        setTweetData(data)
    } , [])



    const Icons= [
        {
            Icon : <FaRetweet />, 
            count : '8000'
        },
        {
            Icon : isLike ?<AiFillHeart style={{color:'#FF0080'}} onClick={Like}/> :<AiOutlineHeart onClick={Like} />,
            count : isLike ? '100.28K' : '100.27K'
        },
        {
            Icon : <CgInsights />,
            count : '1.9M'
        },
        {
            Icon: <FiShare />
        }
    ]   

    function Like() {
        setIsLike(!isLike)
        setLikeCount(likeCount + 1)
    }
    function Toggle(index) {
        const clickedObject = tweetData[index]
            // tweetData[index].isComment = !tweetData[index].isComment
            // tweetData.splice(index , 1)
        const newObject = {...clickedObject}
        newObject.isComment = true
        console.log(newObject)
        setTweetData([ ...tweetData, newObject])
      }
    function close(index) {
        // const clickedObject = tweetData[index]
        // const newObject = {...clickedObject}
        // newObject.isComment = false
        // setTweetData([newObject , ...tweetData])
       } 

    useEffect(() => {   // Added useEffect because i was not getting the updated recoil value

    } , [clickedProfile])

    function filteringClickedPost(index){
        // console.log(tweetData.filter((element) => element.name === tweetData[index].name))
        const clickedObject= tweetData.filter((element) => element.tweetText === tweetData[index].tweetText)
        setClickedProfile(clickedObject)
        navigate('/post')
        // console.log(clickedProfile)
    }
   
    function filteringClickedProfile(index){
        const clickedObject= [tweetData[index]]
        // const clickedObject= tweetData.filter((element) => element.name === tweetData[index].name)
        setClickedProfile(clickedObject)
       navigate('/profile1') 
    }
    return (
        <div className={tweetcard.mainComponent}>            
            {tweetData.map((element , index) => <div ><div  className={tweetcard.header}><p onClick={()=>filteringClickedProfile(index)} className={tweetcard.profileIcon}><FaUserCircle  /></p>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.Name}>{element.name} </p>

          {tweetData[index].isComment ? <dialog  className={tweetcard.DialogueBox} >
            <div className={tweetcard.DialogueContainer}> <button onClick={()=>close(index)} className={tweetcard.closeButton}>x</button>
             <FaUserCircle /><input />
            </div></dialog> : null}

          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.BadgeIcon}><HiBadgeCheck/></p>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.smallName}>{element.handlerName} . Jan16</p>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.more}><RiMoreFill /></p></div>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.caption}>{element.tweetText} </p>
          <img onClick={()=>filteringClickedPost(index)} className={tweetcard.Image} src={element.tweetPic} />

          <div className={tweetcard.bottom}>
            <p className={tweetcard.Paragraph}><span className={tweetcard.Icon}><DialogBox props={index} /></span> 4000  </p>
            {Icons.map((element)=> <p className={tweetcard.Paragraph}><span className={tweetcard.Icon}>{element.Icon}</span> {element.count} </p> )}
          </div>
          <p className={tweetcard.border}></p>
          </div> ) } 
         
        </div>
    )
}

export default TweetCard
