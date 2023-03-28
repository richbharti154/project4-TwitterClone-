import clientprofile from './clientprofile.module.css'
import LeftSection from '../../Sections/LeftSection/LeftSection'
import RightSection from '../../Sections/RightSection/RightSection'  
import {Data} from '../../Recoil/RecoilAtom'
import { useRecoilValue } from 'recoil'
import { FaRegComment , FaRetweet} from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import {CgInsights} from 'react-icons/cg'
import {FiShare} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {FaUserCircle} from 'react-icons/fa'
import {BiCalendar} from 'react-icons/bi'
import {clickedProfileIndex} from '../../Recoil/RecoilAtom'
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

const ClientProfile= () => {
    const updatedTweetData =useRecoilValue(clickedProfileIndex)
    const navigate = useNavigate()

    function navigateHome(){
        navigate('/main')
      } 

    return (
        <div className={clientprofile.mainComponent}>
            <LeftSection />
            <div className={clientprofile.middleSection}>
            {updatedTweetData.map((element) => <div>
                <p onClick={navigateHome} className={clientprofile.backIcon}><HiOutlineArrowLeft  /><h5 className={clientprofile.nameTag}>{element.name}</h5></p>
                <div className={clientprofile.profileBackground}>
                    <FaUserCircle className={clientprofile.profileIcon} />
                   </div> 
                <div className={clientprofile.profileContent}>
                <h4 className={clientprofile.nameTag}>{element.name}</h4>
                <p className={clientprofile.namepTag}>@{element.name}</p>
                <p ><BiCalendar/> Joined January 2023 </p>
                <p><span className={clientprofile.nameTag}>0</span> Following  <span className={clientprofile.nameTag}>0</span> Followers</p>              
                <div className={clientprofile.bottom}>
                    <p className={clientprofile.active}>Tweets</p>
                    <p>Tweets & replies</p>
                    <p>Media</p>
                    <p>Likes</p>
                 </div>
                 </div>
                 </div>)}
            </div>
            <RightSection />
        </div>
    )
}

export default ClientProfile