export const isValidemail  =(emailCapture) => {
    const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;
    const mobileRegixExpression = /^([+]\d{2})?\d{10}$/;
    if((emailRegixExpression.test(emailCapture)) || (mobileRegixExpression.test(emailCapture)) ){
        console.log('Valid Details')
        return true
    }else{
        console.log('Invalid Details')
        return false
    }
}

export const isValidPassword =(passwordCapture) => {
    const passwordRegixExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
        if(passwordRegixExpression.test(passwordCapture)){
            console.log('Password is valid')
            return true
        } else {
            console.log('password is Invalid')
           return false
        }
}

export const isValidUserName = (userNameCapture) => {
    const nameRegixExpression =/^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/ ;
    if(nameRegixExpression.test(userNameCapture)){
     return true
    }else{
     return false
    }
}
