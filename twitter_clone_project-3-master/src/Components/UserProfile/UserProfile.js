import userprofile from './userprofile.module.css'
import LeftSection from '../../Sections/LeftSection/LeftSection'
import RightSection from '../../Sections/RightSection/RightSection'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {  useNavigate } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import {BiCalendar} from 'react-icons/bi'
import { FaRegComment , FaRetweet} from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import {CgInsights} from 'react-icons/cg'
import {FiShare} from 'react-icons/fi'
const Icons= [
    {
        Icon : <FaRegComment />,
        count : '4000'
    },
    {
        Icon : <FaRetweet />,
        count : '8000'
    },
    {
        Icon : <AiOutlineHeart />,
        count : '75.27K'
    },
    {
        Icon : <CgInsights />,
        count : '1.9M'
    },
    {
        Icon: <FiShare />
    }
]

const UserProfile = () => {
    const navigate = useNavigate()
    const userDetails =   JSON.parse(localStorage.getItem("list"))
    const localData = JSON.parse(localStorage.getItem("userTweets"))  
    let updatedTweetData = localData.filter((element) => element.name === userDetails.Name )
    
    function navigateHome(){
        navigate('/main')
      } 
    return(
        
        <div className={userprofile.mainComponent}>
                <LeftSection />
                <div className={userprofile.middleSection}>
                    <p  className={userprofile.backIcon}><HiOutlineArrowLeft onClick={navigateHome} /><h5 className={userprofile.nameTag}>{userDetails.Name}</h5></p>
                <div className={userprofile.profileBackground}>
                    <FaUserCircle className={userprofile.profileIcon} />
                    <button className={userprofile.button}>Set up profile</button></div> 
                <div className={userprofile.profileContent}>
                <h4 className={userprofile.nameTag}>{userDetails.Name}</h4>
                <p className={userprofile.namepTag}>@{userDetails.Name}</p>
                <p ><BiCalendar/> Joined January 2023 </p>
                <p><span className={userprofile.nameTag}>0</span> Following  <span className={userprofile.nameTag}>0</span> Followers</p>
                <div className={userprofile.bottom}>
                    <p className={userprofile.active}>Tweets</p>
                    <p>Tweets & replies</p>
                    <p>Media</p>
                    <p>Likes</p>
                 </div>
                </div> 

               
                 {updatedTweetData.map((element) => <p>
                    <div className={userprofile.cardHeader}><FaUserCircle  className={userprofile.cardIcon} />
                    <p className={userprofile.cardInnerName}><h4 className={userprofile.cardName}>{element.name}</h4>{element.name}</p></div>
                    <p className={userprofile.tweetText}>{element.tweetText}</p>
                    <img className={userprofile.Image} src={element.tweetPic} />
                    <div className={userprofile.cardBottom}>
                     {Icons.map((element) => <p><span className={userprofile.cardBottomIcon}>{element.Icon}</span>{element.count} </p>)}   
                    </div>
                     <p className={userprofile.border}></p>
                    </p>)}
                </div>
            <RightSection />
        </div>

    )
}

export default UserProfile