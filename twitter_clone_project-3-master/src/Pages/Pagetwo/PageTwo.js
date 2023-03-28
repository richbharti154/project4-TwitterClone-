import TwitterIcon from '@mui/icons-material/Twitter'
import pagetwo from './pagetwo.module.css'
import Button from '../../Atoms/Button/Button'
import {Link} from 'react-router-dom'

const PageTwo = () => {
    const TextGoogle =' Sign up with Google'
    const TextApple = 'Sign up with Apple'
    const TextSignup = 'Sign up with phone or email'

    return (

   <div className={pagetwo.mainComponent}>
   
   <div className={pagetwo.container}>
        
   <div className={pagetwo.Icon} >
      <p className={pagetwo.stylIcon}> <TwitterIcon /></p>
    </div>
    <div className={pagetwo.heading}>
    <h1> Join Twitter today</h1>
    </div>
    <div className={pagetwo.button1}>
        <Button ButtonText={TextGoogle}/>
    </div>
    <div className={pagetwo.button2}>
        <Button ButtonText={TextApple}/>
    </div>
    <div className={pagetwo.orcomponent}>
        <p> or</p>
    </div>    
    <div className={pagetwo.button3}>
      <Link className={pagetwo.signUpButton} to= '/sigup'> <Button ButtonText={TextSignup}/></Link>
    </div>    
    <div className={pagetwo.termsAndService}>
      <p>By signing up, you agree to the <span className={pagetwo.spanColor}>Terms of Service</span><br/> and<span className={pagetwo.spanColor}> Privacy Policy</span>, including<span className={pagetwo.spanColor}> Cookie Use</span>.</p>  
    </div>
    <div className={pagetwo.link}>
        <p className={pagetwo.paragraph}>Have an account already ? <Link className={pagetwo.linker} to='/'> Log in</Link></p>
    </div>

   </div>
  </div>
    )
}

export default PageTwo