import React, { useState, useEffect,useContext, useRef } from "react";
import getInputForm from '../utilitis/getInputForm'
import { useDispatch } from "react-redux";
import {areaAdapter} from "../../../addapters/areaValuesAdapter";
import {getInputs} from '../../../reducers/inputSlice'



export default function useInput(){
    const [areaInputs, setAreaInputs] = useState(null)
    const dispatch = useDispatch();

    const handleSubmit=( e: HTMLFormElement )=>{
        e.preventDefault();
        setAreaInputs(getInputForm(e))
    }
    useEffect(()=>{ 

        if (areaInputs !== null){
            dispatch(getInputs(areaAdapter(areaInputs)))
        }
    },[areaInputs]);
    return {areaInputs, handleSubmit}
}