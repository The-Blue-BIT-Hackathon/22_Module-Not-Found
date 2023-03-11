import { toast } from "react-hot-toast";




/** Validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    return errors;
}

/** Validate Password  */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate username */
function usernameVerify(error ={}, values){
    if(!values.username){
        error.username = toast.error("Username required !");
    }
    else if(values.username.includes(" ")){
        error.username = toast.error("Invalid Username");
    }

    return error;
}

/** validate password */
function passwordVerify(error={}, values){
    const specialChars = "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$";
    if(!values.password){
        error.password = toast.error("Password Required...!");
    }
    else if(values.password.includes(" ")){
        error.password = toast.error("Invalid Password ");
    }
    else if(values.password.length < 4){
        error.password = toast.error("Password must be of more than 4 characters");
    }
    else if(!specialChars.test(values.password)){
        error.password = toast.error("Password must contain atleast 1 special character");
    }

    return error;
}


/** validate reset password */
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirmPassword){
        errors.exist = toast.error("Password doesn't match ...!");
    }

    return errors;
}

/** Email Verify */ 
function emailVerify(error={} ,values){
    const emailRegex = "^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$";
    if(!values.email){
        error.email = toast.error("Email required...!");
    }
    else if(values.email.includes(" ")){
        error.email = toast.error("Somewhere I saw a whitespace");
    }
    else if(!emailRegex.test(values.email)){
        error.email = toast.error("Please Enter a valid email");
    }

    return error;
}
/** first name and last name verify */
function nameVerify(error={}, values){
    const nameRegex = "/^[A-Za-z]+$/";
    if(!values.firstName){
        error.firstName = toast.error("Please Enter First Name");
    }
    else if(!values.lastName){
        error.lastName = toast.error("Please Enter Last Name");
    }
    else if(values.firstName.includes(" ")){
        error.firstName = toast.error("Did you entered a white space?");
    }
    else if(values.lastName.includes(" ")){
        error.firstName = toast.error("Did you entered a white space?");
    }
    else if(!nameRegex.test(values.firstName)){
        error.firstName = toast.error("Error in first name");
    }
    else if(!nameRegex.test(values.lastName)){
        error.lastName = toast.error("Error in last name");
    }

    return error;
}

/** register validate */
export async function registerValidation(values) {
    const errors = usernameVerify({}, values);
    nameVerify(errors, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);
    
    return errors;

}