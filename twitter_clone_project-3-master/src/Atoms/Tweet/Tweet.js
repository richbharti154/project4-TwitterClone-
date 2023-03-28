import tweet from '../Tweet/tweet.module.css'
import {useState} from 'react'


const Tweet = (props) => {

    const [isFollow, setIsFollow] = useState(false)

    function Toggle() { 
        console.log('------clicked---------')
        setIsFollow(!isFollow)

    }

    return (
        <div className={tweet.mainComponent}>
              { isFollow ? <button className={tweet.Button} onClick={Toggle} >Following  </button> : 
               <button className={tweet.Button} onClick={Toggle} >Follow  </button> }
        </div>

    )
}
export default Tweet