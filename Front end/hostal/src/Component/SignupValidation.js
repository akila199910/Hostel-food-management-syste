function SignupValidation(value) {

    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[aa-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(value.fname===""){
        error.fname= "First name should not be empty"
    }
    else{
        error.fname=""
    }

    if(value.lname===""){
        error.lname= "Last name should not be empty"
    }
    else{
        error.lname=""
    }

    if(value.regnumber===""){
        error.regnumber= "Register  number should not be empty"
    }
    else{
        error.regnumber=""
    }

    if(value.Picture===""){
        error.Picture= "Register  number should not be empty"
    }
    else{
        error.Picture=""
    }

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
export default SignupValidation;