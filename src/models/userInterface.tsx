type userInputs = {value : string}
export interface userI{
    fName : string,
    lName :  string,
    email :  string,
    pasword :  string,
}
export interface UseregI{
    firstName: userInputs
    lastName: userInputs
    email:userInputs
    password: userInputs
    confirmPassword: userInputs
}
export interface NewuserI extends userI{
    cPasword : string
}
export interface ErrorI{
    error: {
        state: boolean;
        message: string;
    }
}