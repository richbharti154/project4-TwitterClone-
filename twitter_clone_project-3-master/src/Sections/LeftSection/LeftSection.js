import leftsection from '../LeftSection/leftsection.module.css'
import {RiHome7Fill } from 'react-icons/ri'
import {CgHashtag  } from 'react-icons/cg'
import { FaUserCircle } from 'react-icons/fa'
import {FiBell } from 'react-icons/fi'
import {MdOutlineEmail } from 'react-icons/md'  
import {CiCircleMore} from 'react-icons/ci'
import {BsTwitter} from 'react-icons/bs'
import {FaRegListAlt , FaRegBookmark} from 'react-icons/fa'
import TweetButton from '../../Atoms/TweetButton/TweetButton'
import { isDialogBox } from '../../Recoil/RecoilAtom'
import {useRecoilState} from 'recoil'
import PopUp from '../../Components/PopUp/PopUp'
import { useNavigate } from 'react-router-dom'


const LeftSection = () => {
    const [isDialogue , setIsDialogueBox] = useRecoilState(isDialogBox)
    const navigate = useNavigate()

    function Toggle() {
      setIsDialogueBox(!isDialogue)
    }
    function Profile() {
      navigate('/profile')
    }
    function navigateHome(){
      navigate('/main')
    }       
    
    const icons = [
        {icon:<BsTwitter style={{fontSize: '32px'}} onClick={navigateHome} />},
        {icon:<RiHome7Fill onClick={navigateHome} /> , iconName:'Home'},
        {icon:<CgHashtag /> , iconName:'Explorer'},
        {icon:<FiBell /> , iconName:'Notifications'},
        {icon:<MdOutlineEmail /> , iconName:'Messages'},
        {icon: <FaRegBookmark />, iconName:'Bookmarks'},
        {icon: <FaRegListAlt />, iconName:'Lists'},
        {icon:<FaUserCircle onClick={Profile} /> , iconName:'Profile'},
        {icon:<CiCircleMore /> , iconName:'More'},
      ]

    return (
            <div className={leftsection.mainComponent}>

            <div className={leftsection.IconSection}>
            {icons.map((element) => <h1 className={leftsection.IconSize}>{element.icon}<span className={leftsection.IconName}>{element.iconName}</span></h1>)}
            <div className={leftsection.tweetButton}>

            <TweetButton Name='Tweet' onClick={Toggle} />
            <PopUp />
            </div>
            </div>
          
            </div>
    )
}
export default LeftSection