import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/reduxStore';
import { userI } from '../models/userInterface';

const defaultUser :userI  = {
    fName:'', 
    lName:'', 
    email:'', 
    pasword:''
}

export const userSlice = createSlice ({
    name : 'user',
    initialState : defaultUser ,
    reducers : {
        createUser: (state , action:PayloadAction<userI>) => action.payload, 
        modifyUser:  (state, action:PayloadAction<userI>) =>  { return {...state, ...action.payload} },
        resetUser: (state, action:PayloadAction<userI>) => defaultUser
    }
});

export const {createUser, modifyUser, resetUser} = userSlice.actions;

export default userSlice.reducer;