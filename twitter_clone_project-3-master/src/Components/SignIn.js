import {useState} from 'react'
import Input from '../Atoms/Input/Input.js'
import {isValidemail , isValidPassword} from '../Helper/Validations'
import Button from '../Atoms/Button/Button'
import { useNavigate } from 'react-router-dom'
import {isLogin} from '../Recoil/RecoilAtom'
import { useRecoilState } from 'recoil'


const SignIn = () => {
    const [Login , setLogIn] = useRecoilState (isLogin)
    const [ emailCapture , setEmailCapture] = useState()
    const [ passwordCapture , setPasswordCapture] = useState()
    const [ emailError , setEmailError] = useState(false)
    const [ passwordError , setPasswordError] = useState(false)

    const placeHolderEmail = ' @EmailAdress'
    const placeHolderPassword = ' @Password'
    const inputType = 'password'
    const TextSubmit = 'Submit'
    const navigate = useNavigate()


   function emailValidation (e){
    const emailValidated = isValidemail(e.target.value)
    setEmailCapture(e.target.value)
    setEmailError(!emailValidated)
   } 

   function passwordValidation (e) {
    const passwordValidated = isValidPassword(e.target.value)
    setPasswordCapture(e.target.value)
    setPasswordError(!passwordValidated)    
   }
   function CheckDatabase () {
    console.log('--Clicked---')
    const res = JSON.parse(localStorage.getItem('list'))
    console.log(res)
    if(res.EmailOrPhone === emailCapture ){
        alert('LogIn Successfull')
        navigate('/main')
        setLogIn(!Login)
    }else{
        alert('User not found')
    }

   }

    return (
        <div>
            <Input  placeHolder = {placeHolderEmail} onChange = {emailValidation} />
            {/* {emailError && <p style={{color: 'white'}}> InValid Details</p>} */}
            <Input placeHolder = {placeHolderPassword} onChange = {passwordValidation} type={inputType} />
            {/* {passwordError && <p style={{color: 'white'}}> Enter Valid Password</p>} */}
            <div >
            <Button onClick={CheckDatabase} ButtonText={TextSubmit} />
            </div>

        </div>
    )
}
export default SignIn