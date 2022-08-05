import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';


export const useSlogan = () =>{
    
    const slogan = useSelector((state: any) => state.getSlogan)

    const [showButton, setShowButton] = useState(false)
    useEffect(()=>{
        if (slogan === ''){
            setShowButton(true)
        }
    },[slogan])

    return [showButton, slogan]
}
   