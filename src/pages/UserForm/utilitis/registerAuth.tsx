import { NewuserI } from "../../../models/userInterface"


export class registerAuth {
    newUser: NewuserI
    constructor(newUser: NewuserI){
        this.newUser = newUser
    }
    private getConfirmPasswordError(){
        if (this.newUser.pasword !==this.newUser.cPasword ){
            return true
        }
        else return false 
    }
    private getFieldsError(){
        const mapUser = Object.entries(this.newUser).map(this.userMap)
        let result: boolean | null = null
        for (let i = 0; i< mapUser.length; i++){
            if (mapUser[i] === false){
                result = true
            }
            else result = false
        }
        return result
    }
    private userMap(currentValue: string[])
    {
        return currentValue[1] !== ''
    }
    getRegisterAuth(){
        let auth = {
            fieldsError: this.getFieldsError(),
            confirmPaswordError: this.getConfirmPasswordError()
        }
        return auth
    }
    
}