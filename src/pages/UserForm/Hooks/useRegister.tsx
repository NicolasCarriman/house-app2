import { useEffect, useState } from "react"
import {  UseregI, ErrorI } from "../../../models/userInterface";
import { useDispatch } from "react-redux";
import { createUser } from "../../../reducers/userSlice";
import { registerAdapter } from "../../../addapters/registerAdapter";
import { userAdapter } from "../../../addapters/userAdapter";
import { registerAuthentify } from "../../utilitis/registerAuth";

export const useRegister = (handleError: any) =>{
    const [values, setValues] = useState<UseregI | undefined>(undefined)
    const [errors, setErrors] = useState<ErrorI>( {
        error: {
            state: false,
            message: ''
        }
    })
    const dispatch = useDispatch();
   
    async function comprobation(){
        if(values !==undefined){
            const errorAuth = await registerAuthentify(registerAdapter(values));
            if (!errorAuth.state){
                dispatch(createUser(userAdapter(values)))
            }
            else {
                setErrors({...errors, error:errorAuth});
                handleError();
                console.log('si')
            }
            
        }
    }
    const handleSubmit= async (e: React.SyntheticEvent) =>{
        e.preventDefault()
        let target = e.target as typeof e.target & UseregI;
        setValues(target)
    }
    useEffect(()=>{
        comprobation();
    },[values])
    return {handleSubmit, errors}
}/* convertir los inputs a componentes mas chicos que recviban props */