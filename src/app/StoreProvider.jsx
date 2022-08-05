import { createContext, useContext, useReducer } from 'react'
//@ts-ignore

const StoreContext = createContext();

const StoreProvider = ({ children }) =>
        <StoreContext.Provider value={''}>
            {children}
        </StoreContext.Provider>

const useStore = () => useContext(StoreContext)

export { StoreContext, useStore }
export default StoreProvider;