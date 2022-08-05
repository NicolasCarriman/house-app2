import {useNumberInput} from '@chakra-ui/react'
// @ts-ignore
import {formInput} from '../models/forminput.ts'

export const formInputAdapter = (data: formInput) =>{

    const inputType : formInput=
    {   
        step: data.step,
        defaultValue: data.defaultValue,
        min: data.min,
        max: data.max,
        precision: data.precision,
    }
    return inputType
}