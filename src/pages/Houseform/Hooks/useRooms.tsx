
import React from "react";
import { useSelector } from "react-redux";
import { inputValueInterface } from "../../../models/inputinterface";
import { idModel } from "../../../models/setside";

export default function useRooms(){
    const idProp:idModel = useSelector((state:any) => state.getSpaces)
    const getInputs:inputValueInterface = useSelector((state: any) => state.inputValues)
    const math =Math.random()
    console.log(Math.round(math) )
}