import {useState, useRef, useEffect } from 'react';
import {useSelector} from 'react-redux'

export const useArea = (areaMeasures)=>{
    const inputState = useSelector((state) => state.inputValues);
    const idState = useSelector((state) => state.getSpaces); 
    const [setRoom, setStateRoom] = useState(false)
    useEffect(()=>{
        if (inputState !== null){
            areaMeasures.current.style.height = inputState.height*30 + 'px';
            areaMeasures.current.style.width = inputState.width*30  + 'px';
        }
    },[areaMeasures])
    
    useEffect(()=>{
        if (idState !== null && areaMeasures.current !== null){
            setStateRoom(true)
        }
        
    },[idState])
    return {setRoom}
}
