import { createSlice } from '@reduxjs/toolkit';


export const emptyDistributins = null
  

export const spacesSlice = createSlice ({
    name : 'spaces',
    initialState : emptyDistributins ,
    reducers : {
        location: (state, action) => action.payload, 
    }
});

export const {location} = spacesSlice.actions;

export default spacesSlice.reducer;
