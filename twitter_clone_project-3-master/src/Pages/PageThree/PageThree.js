import pagethree from './pagethree.module.css'
import SignUp from '../../Components/SignUp'
import { FunctionsOutlined } from '@mui/icons-material'

const PageThree = () => {     

    return(
        <div className={pagethree.mainComponent}>
         
         <div className={pagethree.container}>
         <div className={pagethree.paragraph1}>
            <p>Step 1 of 5</p>
         </div>        
         
         <div className={pagethree.heading}>
            <h1>Create your account</h1>
         </div>
         <div className={pagethree.inputfieldone}>
          <SignUp />
         </div>
        </div>    
        </div>
    )
}
export default PageThree