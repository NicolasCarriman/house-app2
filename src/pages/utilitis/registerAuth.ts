import { NewuserI, UseregI, userI } from "../../models/userInterface"
import { userAdapter } from "../../addapters/userAdapter";
import { getData } from "../../services/api";
export const registerAuthentify = async (formReg: NewuserI) =>{
    const fetchUsers = async () =>{
        const users = await getData();
        const userDuplicated = users.filter(user => {;return user.email === formReg.email });
        return !userDuplicated.length
    };
    let errorReq = {
        state : false,
        message: ''
    } 
    const authuserReg = Object.values(formReg).includes('');
    if (!authuserReg) {
        return errorReq= {
            state:true,
            message:'completar todas las inputs'
        };
    } 
    if (formReg.pasword != formReg.cPasword){
        return errorReq= {
            state:true,
            message:'contraseñas no coinsiden'
        }
    }
    if (await fetchUsers()){
        return errorReq= {
            state:true,
            message:'ya existe una cuenta asociada con ese email'
        }
    }
    else return errorReq 
}

/*
const authuserReg = Object.values(formReg).includes('');
    if (!authuserReg && formReg.pasword == formReg.cPasword && await fetchUsers()){
        return true
    }
    else return false 
}*/