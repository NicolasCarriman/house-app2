import { createSlice } from '@reduxjs/toolkit';
// @ts-ignore



const defaultSlogan = 'Choose your measures'
  

export const sloganSlice = createSlice ({
    name : 'slogan',
    initialState : defaultSlogan ,
    reducers : {
        sloganState: (state, action) => action.payload, 
    }
});

export const {sloganState} = sloganSlice.actions;

export default sloganSlice.reducer;