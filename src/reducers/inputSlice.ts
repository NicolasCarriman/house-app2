import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { inputValueInterface } from '../models/inputinterface';

interface inputType {
    value: inputValueInterface | null
}
const defaultState: inputType = {
    value: null
}
const inputSlice = createSlice({
    name: 'input',
    initialState: defaultState.value,
    reducers: {
        getInputs: (state, action:PayloadAction<inputValueInterface>) => action.payload, 
    },
  })
export const {getInputs} = inputSlice.actions
  
export default inputSlice.reducer