import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/reduxStore';



interface Txt {
    value: string | null
}
const defaultTxt : Txt = { value : null}

export const btnRefSlice = createSlice ({
    name : 'refState',
    initialState : defaultTxt.value ,
    reducers : {
        refState: (state , action:PayloadAction<string>) => action.payload, 
    }
});

export const {refState} = btnRefSlice.actions;

export default btnRefSlice.reducer;