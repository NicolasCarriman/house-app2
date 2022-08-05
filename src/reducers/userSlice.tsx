import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/reduxStore';
import { userI } from '../models/userInterface';

const defaultUser :userI = {
    fName:'', 
    lName:'', 
    email:'', 
    pasword:''
}

export const userSlice = createSlice ({
    name : 'user',
    initialState : defaultUser ,
    reducers : {
        user: (state , action:PayloadAction<userI>) => action.payload, 
    }
});

export const {user} = userSlice.actions;

export default userSlice.reducer;