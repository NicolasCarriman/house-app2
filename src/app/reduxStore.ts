import { configureStore } from '@reduxjs/toolkit'
import spacesSlice from '../reducers/spacesSlice'
import inputSlice from '../reducers/inputSlice'
import sloganSlice from '../reducers/sloganSlice'
import BtnSlice from '../reducers/BtnSlice'
import btnRefSlice from '../reducers/btnRefSlice'
import userSlice from '../reducers/userSlice'


export const store = configureStore({
  reducer: {
    getSpaces: spacesSlice,
    inputValues: inputSlice,
    getSlogan : sloganSlice,
    btnTxt : BtnSlice,
    btnFormRef : btnRefSlice,
    userData: userSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch