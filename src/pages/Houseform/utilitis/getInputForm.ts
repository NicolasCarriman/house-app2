//@ts-ignore
import {MyInputValues} from './inputclass.ts'

export default function getInputForm(e:HTMLFormElement){
    const newInput = new MyInputValues(e); 
    return newInput.setValues()
}