
export type ShowViewsType = {
    houseForm : boolean,
    rooms:  boolean,
    comprobations: boolean,
    loading: boolean,
}
export type SloganTxt = {
    houseForm : string,
    rooms:  string,
    comprobations: string,
    loading: string,
}

export const showHouseViews: ShowViewsType= {
    houseForm : false,
    rooms:  false,
    comprobations: false,
    loading: false,
}
export const slogantxts : string= 'Choose your measures'


export const buttonElement : HTMLButtonElement | null= null

/*    rooms:  '',
    comprobations: 'Are You Sure?',
    loading: 'Showing Rooms',*/