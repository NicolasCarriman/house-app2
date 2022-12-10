import { UseregI, userI } from "../models/userInterface"

export const userAdapter = (userInput : UseregI ) =>{
    
    let newUser: userI = {
        fName : userInput.firstName.value,
        lName : userInput.lastName.value,
        email : userInput.email.value,
        pasword : userInput.password.value,
    }

    return newUser
}