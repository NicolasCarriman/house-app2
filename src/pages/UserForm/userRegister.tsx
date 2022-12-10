import { FormControl, FormLabel, Input, Box, InputGroup, Button, FormErrorMessage, FormHelperText, chakra, } from "@chakra-ui/react"
import { isValidMotionProp, motion } from "framer-motion"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { ErrorI } from "../../models/userInterface"
import '../../styles/userform/userRegister.css'
import InputForm from "../Houseform/inputsForm"
import { Input_Form } from "./components/inputs"
import  {useRegister} from './Hooks/useRegister'

interface prop {
    handleError:  (e: React.SyntheticEvent) => void
}
export const UserFormRegister = (props:prop) =>{
    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
        });
    const {handleError} = props
    const {handleSubmit, errors} = useRegister(handleError);
    const handleInputChange = (e: any) =>{
        console.log(e.target.name)
    }
   
    console.log(errors)
    return (
        <ChakraBox
        >
            <Box 
                className="registerBox"
                w='auto' 
                display='flex' 
                flexDirection='column' 
                color='white'
            >
            <form
                onSubmit={handleSubmit}
                >
                <FormControl 
                    display='flex' 
                    flexDirection='column'
                    gap='5px' 
                    isInvalid={errors.error.state}
                >
                    <Box 
                        display='flex' 
                        flexDirection='row' 
                        gap='10px'
                    >
                        <FormLabel 
                            fontSize='12'
                        >First Name
                        </FormLabel>
                        <InputGroup>
                            <Input 
                                height='35px'
                                name='firstName' 
                            />
                        </InputGroup>
                        <FormLabel
                            fontSize='12'
                            >Last Name </FormLabel>
                        <InputGroup>
                            <Input 
                                name='lastName' 
                                height='35px'
                            />
                        </InputGroup>
                    </Box>
                    <FormLabel
                        fontSize='12'
                        >Email</FormLabel>
                    <InputGroup>
                        <Input 
                            name='email' 
                            height='35px'
                            pattern="[^ @]*@[^ @]*"
                            required 
                        />
                    </InputGroup>
                    <FormLabel
                        fontSize='12'
                        >Pasword</FormLabel>
                    <InputGroup>
                        <Input 
                            name='password'
                            height='35px' 
                        />
                    </InputGroup>
                    <FormLabel 
                    fontSize='12'
                    >Confirm Pasword</FormLabel>
                    <InputGroup>
                        <Input 
                            name='confirmPassword' 
                            height='35px'
                        />
                    </InputGroup>
                    <Input_Form name={"confirmPassword"} handleInputChange={handleInputChange}>Confirm Pasword</Input_Form>
                    {errors.error.state? (
                        <FormHelperText>
                        {errors.error.message}
                        </FormHelperText>
                            ) : (
                        <FormErrorMessage>passwords dont be the same</FormErrorMessage>
                            )
                    }
                    
                    <Button 
                        mt={8} 
                        w='350px' 
                        type='submit'
                        colorScheme='whiteAlpha'
                    >
                        Sign Up
                    </Button>
                </FormControl>
            </form>
        </Box>
    </ChakraBox>
    )
} 