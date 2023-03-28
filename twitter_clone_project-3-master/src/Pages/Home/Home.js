import SignIn from '../../Components/SignIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import Button from '../../Atoms/Button/Button'
import app from './app.module.css'
import {Link} from 'react-router-dom'


function Home() {
  const TextGoogle = 'Sign in with Google'
  const TextApple = 'Sign in with Apple'
  // const res = JSON.parse(localStorage.getItem('list'))
  // console.log(res)


  return (
    
   <div className={app.mainComponent}>
   
    <div className={app.container}>

    <div className={app.Icon} >
      <p className={app.stylIcon}> <TwitterIcon /></p>
    </div>
    <div className={app.heading}>
      <h1>Sign in to Twitter</h1>
    </div>
    <div className={app.button1}>
      <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1913018193%3A1674050518742985&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DP1jwa3%2FN7MFfjAwNV1G9bw%26channel_id%3Dedf87b25066ebb87f4a2a7f57e2defddc119dcc1d0657c6f716a37eef7e9c36c%26origin%3Dhttps%3A%2F%2Ftwitter.com&faa=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHflsBOSNKXWoYp-acIfc-WUIrR7R8KqUYugbFyKsuP_zuSeQMS_VKk7Fj0ASIGX4RdvtsgDpg"><Button ButtonText={TextGoogle} /></a>
    </div>
    <div className={app.button2}>
     <a href="https://appleid.apple.com/auth/authorize?client_id=com.twitter.twitter.siwa&redirect_uri=https%3A%2F%2Ftwitter.com&response_type=code%20id_token&state=b5_avAjZFS6nuoQrsaw6mhvVkqTIP7-0nDLVS_rvpXT&scope=name%20email&response_mode=web_message&frame_id=0d19a57d-a541-47a9-9a4c-75e82b0b6d01&m=11&v=1.5.4"> <Button ButtonText={TextApple} /></a>
    </div>
    <div className={app.SigIn}>
    <SignIn />
    </div>
    <div className={app.bottom}>
      <p>Don't have an account ? <Link className={app.link} to='/signup'>Sign Up</Link></p>
    </div>
    </div>
   </div>
  );
}

export default Home;
