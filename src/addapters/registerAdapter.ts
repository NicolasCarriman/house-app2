import { NewuserI, UseregI } from "../models/userInterface"

export const registerAdapter = (userInput: UseregI)=>{
    let newUser: NewuserI = {
        fName : userInput.firstName.value,
        lName : userInput.lastName.value,
        email : userInput.email.value,
        pasword : userInput.password.value,
        cPasword: userInput.confirmPassword.value
    }
    return newUser
}