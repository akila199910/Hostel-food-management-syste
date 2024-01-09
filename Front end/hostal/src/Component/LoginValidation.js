import React from 'react'

function LoginValidation(value) {

    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[aa-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(value.email===""){
        error.email= "Email should not be empty"
    }
    else if(!email_pattern.test(value.email)){
        error.email= "Email didn't match"

    }else{
        error.email=""
    }

    if(value.password===""){
        error.password= "Password should not be empty"
    }
    else if(!password_pattern.test(value.password)){
        error.password= "Password didn't match"

    }else{
        error.password=""
    }

  return error;
}
export default LoginValidation;