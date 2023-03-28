import rightsection from '../RightSection/rightsection.module.css'
import Trending from '../../Components/Trending/Trending'
import Searchbar from '../../Components/SearchBar/Searchbar' 
import Follow from '../../Components/Follow/Follow.js'
import {GoSearch } from 'react-icons/go'  



const RightSection = () => {
    const search = <GoSearch /> 
    const text = 'Search Tweet'

    return(
        <div className={rightsection.mainComponent}>
            <div className={rightsection.searchSection}>
            <Searchbar placeholder={text}  />
            <div className={rightsection.TrendingSection}>
            <Trending />
            </div>
            <div className={rightsection.follow}>
            <Follow />
            </div>
            </div>

        </div>
    )
}
export default RightSection