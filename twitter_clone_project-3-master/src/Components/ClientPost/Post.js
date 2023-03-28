import post from './post.module.css'
import LeftSection from '../../Sections/LeftSection/LeftSection'
import RightSection from '../../Sections/RightSection/RightSection'
import {clickedProfileIndex , clickedComment} from '../../Recoil/RecoilAtom'
import {useRecoilValue} from 'recoil'
import { FaRegComment , FaRetweet} from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import {CgInsights} from 'react-icons/cg'
import {FiShare} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import {HiBadgeCheck} from 'react-icons/hi'
import {RiMoreFill} from 'react-icons/ri'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {RiFileGifLine} from 'react-icons/ri'
import {TfiList} from 'react-icons/tfi'
import {BsEmojiSmile} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'
import {SlLocationPin} from 'react-icons/sl'
import CommentBox from '../CommentDialog/CommentBox'

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


const Post = () => {
    const clickedProfile  = useRecoilValue(clickedProfileIndex)
    const userComments = JSON.parse(localStorage.getItem("userComments")) || []
    const commentPostDetails = useRecoilValue(clickedComment)
    const userMatched = clickedProfile.filter((user) => user.tweetText === commentPostDetails.tweetText)
    return (
        <div className={post.mainComponent}>
            <LeftSection />
            <div className={post.middleSection}>
            {clickedProfile.map((element) => <><div className={post.header}><p className={post.profileIcon}><FaUserCircle /></p>
          <p className={post.Name}>{element.name} </p>
          <p className={post.BadgeIcon}><HiBadgeCheck/></p>
          <p className={post.smallName}>{element.handlerName} . Jan16</p>
          <p className={post.more}><RiMoreFill /></p></div>
          <p className={post.caption}>{element.tweetText} </p>
          <img className={post.Image} src={element.tweetPic} />
          <div className={post.bottom}>
            {Icons.map((element)=> <p className={post.Paragraph}><span className={post.Iconss}>{element.Icon}</span> {element.count} </p> )}
          </div><p className={post.border}></p>

          <div className={post.commentBox}>
          <div className={post.container }>
            <span className={post.Icon}><FaUserCircle  /></span>
            <input placeholder='Tweet your reply'  className={post.searchButton}  />
            </div>
            <div className={post.bottom2}>
            <label for='files'>< MdOutlinePhotoSizeSelectActual/></label><input  type='file' id='files' className={post.fileUpload} /><RiFileGifLine/><TfiList/><BsEmojiSmile/><TbCalendarTime/><SlLocationPin/>
            <span className={post.tweetButton}><button className={post.Button}>Reply</button></span>
            </div>
          </div>
          
          <div className={post.commentSection}>
          {userMatched.length >0 ? <> {userComments.map((element) => <><div className={post.header2}><p className={post.profileIcon2}><FaUserCircle /></p>
          <p className={post.Name2}>{element.name} </p>
          <p className={post.BadgeIcon2}><HiBadgeCheck/></p>
          <p className={post.smallName2}>{element.handlerName} . Jan16</p>
          <p className={post.more2}><RiMoreFill /></p></div>
          <p className={post.caption2}>{element.commentText} </p>
          <img className={post.Image2} src={element.tweetPic} />
          
          <div className={post.bottom2}>
            {Icons.map((element)=> <p className={post.Paragraph2}><span className={post.Icon2}>{element.Icon}</span> {element.count} </p> )}
          </div></> )}</> : null}
          </div>
          </>) }  
            </div> 
            
            <RightSection />
        </div>
    )
}
export default Post