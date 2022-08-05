import {inputValueInterface} from '../../../models/inputinterface'
export class MyInputValues {
    input:  React.ChangeEvent<HTMLFormElement>;
    constructor(e :  React.ChangeEvent<HTMLFormElement>) {
        this.input = e;
    }
    GetValuesInput() {
        return this.input
    }
    setValues(){
        const newInput:inputValueInterface = {
            height :  this.input.target.height.value,
            width :   this.input.target.width.value,
            bedrooms :  this.input.target.bedrooms.value
        }
        return newInput
    }
}