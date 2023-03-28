import {useState} from 'react'
import Input from '../Atoms/Input/Input.js'
import {isValidemail , isValidPassword , isValidUserName} from '../Helper/Validations'
import Button from '../Atoms/Button/Button'

const SignUp =() => {
    const [ emailCapture , setEmailCapture] = useState()
    const [ passwordCapture , setPasswordCapture] = useState()
    const [ emailError , setEmailError] = useState(false)
    const [ passwordError , setPasswordError] = useState(false)
    const [userNameError , setUserNameError] = useState(false)
    const [userNameCapture , setUserNameCapture] = useState()
    const [local, setLocal] = useState([])

    const placeHolderEmail = 'Name'
    const placeHolderPassword = 'Phone or Email'
    const SignupText = 'Sign up'
    const type = 'date'

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
    function userNameValidation (e) {
        const userNameValidated = isValidUserName(e.target.value)
        setUserNameCapture(e.target.value)
        setUserNameError(!userNameValidated)        
    }   
    function StoreData() {
        console.log('-----Clicked-------')
        const Data={
        Name: userNameCapture,
        EmailOrPhone: emailCapture,
        Password: passwordCapture
        }
        setLocal(localStorage.setItem('list' ,  JSON.stringify(Data)))
        alert('Registered Successful')
        if(emailError === true && passwordError===true && userNameError ===true){
            window.alert("Registered Successfully")
        }             
    }


    return (
        <div>
            <Input  placeHolder = {placeHolderEmail} onChange = {userNameValidation} />
            <Input placeHolder = {placeHolderPassword} onChange = {emailValidation}  />
            <div >
            <h3 >Date of birth</h3>
            </div>
            <div >
            <p >This will not be shown publicly. Confirm your own age, even if this<br/> account is for a business, a pet, or something else.</p>  
            </div>
            <div>
            <Input type={type} />
            </div>
            <Button ButtonText={SignupText} onClick={StoreData}/>

        </div>
    )
}
export default SignUp