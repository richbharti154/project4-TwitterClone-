import commentbox from './commentbox.module.css'
import {useRecoilState} from 'recoil'
import {ImageAdress , commentInput} from '../../Recoil/RecoilAtom'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {RiFileGifLine} from 'react-icons/ri'
import {TfiList} from 'react-icons/tfi'
import {BsEmojiSmile} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'
import {SlLocationPin} from 'react-icons/sl'


const CommentBox = () => {
    const [imageLocation , setImageLocation] = useRecoilState(ImageAdress)
    const [commentCapture , setCommentCapture] = useRecoilState(commentInput)
    const userDetails = JSON.parse(localStorage.getItem("list"))

    function handleReplyButton(){
        const obj = {
            name: userDetails.Name,
            handlerName: userDetails.Name,
            commentText : commentCapture
        }
        let data = localStorage.userComments?.length > 0 ? JSON.parse(localStorage.userComments) : [];
        data = [obj , ...data ]

        localStorage.setItem('userComments' , JSON.stringify(data))
        setCommentCapture('')
    }

    return(
        <div> 
            <div className={commentbox.container }>
            <span className={commentbox.Icon}><FaUserCircle  /></span>
            <input placeholder='Tweet your reply' onChange={(e) => setCommentCapture(e.target.value)} className={commentbox.searchButton}  />
            </div>
            <div className={commentbox.bottom}>
            <label for='files'>< MdOutlinePhotoSizeSelectActual/></label><input onChange={(e) => setImageLocation(URL.createObjectURL(e.target.files[0])) } type='file' id='files' className={commentbox.fileUpload} /><RiFileGifLine/><TfiList/><BsEmojiSmile/><TbCalendarTime/><SlLocationPin/>
            <span className={commentbox.tweetButton}><button onClick={handleReplyButton} className={commentbox.Button}>Reply</button></span>
            </div>
        </div>
    )
}

export default CommentBox