import { useRef, useState } from "react"

export const useForm = () =>{
    const [form, setForm] =useState(true)
    const fontCont = useRef(null)
    const [animateBox, setAnimateBox] = useState({
        opacity:[0,1],
        transform:['translateX(-50px)','translateX(10px)','translateX(0px)']
        })
    const handleClick = () =>{
        setForm(false)
    }
    return {form, animateBox, fontCont, handleClick}

}