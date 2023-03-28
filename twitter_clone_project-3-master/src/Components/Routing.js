import {Route , Routes} from 'react-router-dom'
import PageTwo from '../Pages/Pagetwo/PageTwo'
import Home from '../Pages/Home/Home'
import PageThree from '../Pages/PageThree/PageThree'
import Mainscreeenpage from '../Pages/Mainscreenpage/Mainscreenpage'
import UserProfile from './UserProfile/UserProfile'
import ClientPost from './ClientPost/Post'
import ClientProfile from './ClientProfile/ClientProfile'

const Routing = () => {
    const details = JSON.parse(localStorage.getItem("list"))

    return (
        <div>
            <Routes>
            <Route path ='/' element={<Home/>} />    
            <Route path='/signup' element={<PageTwo />} />
            <Route path='/sigup' element={<PageThree />} />
            <Route path='/main' element={<Mainscreeenpage />} />
            <Route path='/profile' element={<UserProfile/>} />
            <Route path='/post' element={<ClientPost />} />
            <Route path='/profile1' element={<ClientProfile />} />
            </Routes>
        </div>
    )
}

export default Routing