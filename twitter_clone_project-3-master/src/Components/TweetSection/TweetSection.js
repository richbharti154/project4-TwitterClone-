import tweetsection from '../TweetSection/tweetsection.module.css'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {RiFileGifLine} from 'react-icons/ri'
import {TfiList} from 'react-icons/tfi'
import {BsEmojiSmile} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'
import {SlLocationPin} from 'react-icons/sl'
import { useNavigate } from 'react-router-dom' 
import {useRecoilState} from 'recoil'
import {ImageAdress} from '../../Recoil/RecoilAtom'


const TweetSection = (props) => {
    const [imageLocation , setImageLocation] = useRecoilState(ImageAdress)
    const navigate = useNavigate()


    function navigateProfile(){ 
        navigate('/profile')
    }
    return (
        <div className={tweetsection.mainComponent }>
            <div className={tweetsection.container }>
           <span className={tweetsection.Icon}><FaUserCircle onClick={navigateProfile} /></span>
            <input onChange={props.onChange } placeholder={props.placeholder}  className={tweetsection.searchButton}  />
            </div>
            <div className={tweetsection.bottom}>
              <label for='files'>< MdOutlinePhotoSizeSelectActual/></label><input onChange={(e) => setImageLocation(URL.createObjectURL(e.target.files[0])) } type='file' id='files' className={tweetsection.fileUpload} multiple/><RiFileGifLine/><TfiList/><BsEmojiSmile/><TbCalendarTime/><SlLocationPin/>
               <span className={tweetsection.tweetButton}><button onClick={props.onClick} className={tweetsection.Button}>Tweet</button></span>
            </div>
        </div>
    )
}

export default TweetSection