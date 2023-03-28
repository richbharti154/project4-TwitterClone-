import trending from './trending.module.css'
import {RiMoreFill} from 'react-icons/ri'
import {useState} from 'react'
import {TfiFaceSad} from 'react-icons/tfi'

const Trending = () => {
    const Data = [ 
        {
            Trending : 'Trending in India',
            Hashtag : '#ViratKohli',
            count : '23k Tweets',
            isNotIntrested : true,
            isPopup : false
        },
        {
            Trending : 'Trending in India',
            Hashtag : '#GujaratRiots',
            count : '53.2k Tweets',
            isNotIntrested : true,
            isPopup : false

        },{
            Trending : 'Trending in USA',
            Hashtag : '#WhiteHouse',
            count : '92.6k Tweets',
            isNotIntrested : true,
            isPopup : false

         }
        ,{
            Trending : 'Trending in Pakistan',
            Hashtag : '#BombBlast',
            count : '13.6k Tweets',
            isNotIntrested : true,
            isPopup : false
        },
        //{
        //     Trending : 'Trending in india',
        //     Hashtag : '#TajMahal',
        //     count : '70k Tweets'
        // },{
        //     Trending : 'Trending in india',
        //     Hashtag : '#Engineers',
        //     count : '42.1 Tweets'
        // },

    ]
    const [newData , seNewData] = useState(Data)

    function handlePopUp(index){
    newData[index].isPopup = !newData[index].isPopup 
    seNewData([...newData])
        
    }

    function handleIsIntrested (index) {
      newData[index].isNotIntrested = !newData[index].isPopup 
      seNewData([...newData])  
    }

    return (
        <div className={trending.mainComponent}>
         <div className={trending.heading}>
            <div className={trending.container}>
            <h2>What’s happening</h2>
            {newData.map((element , index) => element.isNotIntrested && <p className={trending.paragraph}>{element.Trending}
             <p className={trending.moreIcon}>{newData[index].isPopup && <div className={trending.popup} onClick={() => handleIsIntrested(index)}><TfiFaceSad />isNotIntrested</div>}<RiMoreFill onClick={()=>handlePopUp(index)}  /></p> <h2 className={trending.Hashtag}>{element.Hashtag}</h2> {element.count}   </p>)}
            </div>          
        </div>  
        

        </div>
    )
}

export default Trending