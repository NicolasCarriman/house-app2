import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const defaultSlogan: string = 'SEND'

export const BtnSlice = createSlice ({
    name : 'slogan',
    initialState : defaultSlogan ,
    reducers : {
        btnState: (state, action:PayloadAction<string>) => action.payload, 
    }
});

export const {btnState} = BtnSlice.actions;

export default BtnSlice.reducer;