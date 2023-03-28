import follow from './follow.module.css'
import {FaUserCircle} from 'react-icons/fa'
import Tweet from '../../Atoms/Tweet/Tweet'
import { HiBadgeCheck } from 'react-icons/hi'


const Follow = () => {
    
    const Data= [ 
        {Icon : <FaUserCircle />,
         Name : 'SharukKhan',
         Badge : <HiBadgeCheck />
         },
         {Icon : <FaUserCircle />,
         Name : 'SalmanKhan',
         Badge : <HiBadgeCheck />

         },
         {Icon : <FaUserCircle />,
         Name : 'Saif AliKhan',
         Badge : <HiBadgeCheck />

         },
    ]

    return (
        <div className={follow.mainComponent}>
            <div className={follow.container}>
            <div className={follow.header}>
                <h2>Who to follow</h2>
            </div>
           <div className={follow.data}>
              {Data.map( (element) => <p className={follow.Section}>
                <span className={follow.Icon}>{element.Icon}</span>
                {element.Name}
                <span className={follow.Badge}>{element.Badge}</span> 
                <Tweet />  
                </p>   )}
                <div className={follow.buttonSection}>
                </div>
           </div> 
           </div>
        </div>
    )
}
export default Follow