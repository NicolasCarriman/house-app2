import { FormLabel, Input, InputGroup } from "@chakra-ui/react"

interface Prop {
    name: string,
    handleInputChange: (e: any) => void
    children:string
    pattern?:string 
}
export const Input_Form = (props : Prop) =>{
    const {name, handleInputChange, children,pattern } = props
 return (
    <>
    <FormLabel
            fontSize='12'
            >{children}
    </FormLabel>
    <InputGroup>
            <Input 
                name={name} 
                height='35px'
                onChange={handleInputChange}
                pattern={pattern ? pattern : ''}
            />
    </InputGroup>
    </>
                
 )
}