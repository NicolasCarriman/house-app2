
import {inputValueInterface} from '../models/inputinterface'
export const areaAdapter = (input: { height: Number; width: Number; bedrooms: Number }) =>{
    const areaSizes : inputValueInterface = {
        height :  (input.height).toString(),
        width :   (input.width).toString(),
        bedrooms: (input.bedrooms).toString()
    }
    return areaSizes
}