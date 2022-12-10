import { useContext,createContext } from "react";

import { showHouseViews, ShowViewsType, slogantxts } from './viewType';


export interface showInterface{
  showViews: ShowViewsType, 
  setshowViews: (c: ShowViewsType) => void
}
export const ViewsContext = createContext<showInterface>({
  showViews: showHouseViews,
  setshowViews: () => {}
});

export const useViewContext = () => useContext(ViewsContext)

export interface TxtSloganInterface{
  showTxt: string, 
  setShowTxt: (c: string) => void
}
export const sloganContext = createContext<TxtSloganInterface>({
  showTxt: slogantxts,
  setShowTxt: () => {}
})
export const useSloganContext = () => useContext(sloganContext)

export interface btnInterface{
  btnElement: HTMLButtonElement | null,
  setBtnElement: (c: HTMLButtonElement | null) => void
}

export const btnContext = createContext<btnInterface>({
  btnElement: null,
  setBtnElement: () => {}
})
export const useBtnContext = () => useContext(btnContext)
