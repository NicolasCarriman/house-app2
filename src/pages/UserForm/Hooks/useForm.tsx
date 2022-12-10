import { useRef, useState } from "react"

export const useForm = () =>{
    const [form, setForm] =useState(false)

    const handleClick = () =>{
        setForm(false)
    }
    return {form, handleClick}

}