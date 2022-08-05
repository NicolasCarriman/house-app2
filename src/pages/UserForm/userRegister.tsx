import { FormControl, FormLabel, Input, Box, InputGroup, Button, FormErrorMessage, FormHelperText, } from "@chakra-ui/react"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import  {useRegister} from './Hooks/useRegister'

export const UserFormRegister = () =>{
    const[isError,setIsError] = useState(false)

    const {handleSubmit, errors}= useRegister()
    useEffect(()=>{
        if (errors?.confirmPaswordError == true || errors?.fieldsError == true ){
            setIsError(true)   
        }
    },[errors])
    return (
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
                isInvalid={isError}
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
                {!isError ? (
                    <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                        ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
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
    )
} 