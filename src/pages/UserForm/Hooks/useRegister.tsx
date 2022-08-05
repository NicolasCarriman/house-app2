import { useEffect, useState } from "react"
import {  UseregI, NewuserI, ErrorI } from "../../../models/userInterface";
import { registerAuth } from "../utilitis/registerAuth";
import { useDispatch } from "react-redux";
import Users from '../../components/data/users'
export const userAdapter = (userInput : UseregI ) =>{
    let newUser: NewuserI = {
        fName : userInput.firstName.value,
        lName : userInput.lastName.value,
        email : userInput.email.value,
        pasword : userInput.password.value,
        cPasword : userInput.confirmPassword.value
    }
    return newUser
}
export const useRegister = () =>{
    const [registerValues, setRegisterValues] = useState<EventTarget & UseregI | undefined>(undefined);
    const [errors, setErrors] = useState<ErrorI | undefined>(undefined)
    const dispatch = useDispatch()
 
    const handleSubmit= (e: React.SyntheticEvent) =>{
        e.preventDefault()
        let target = e.target as typeof e.target & UseregI;
        let registerValidation = new registerAuth(userAdapter(target));
        setErrors(registerValidation.getRegisterAuth())
        registerValues
    }
    
    useEffect(()=>{
        if (errors?.confirmPaswordError == false && errors.fieldsError == false){
      
        }
    },[errors])
    return {handleSubmit, errors}
}

