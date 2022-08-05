import { FormControl, FormLabel, Input, FormHelperText, Box, InputLeftElement, InputGroup, Button, FormErrorMessage, Radio, Text } from "@chakra-ui/react"
import {EmailIcon, LockIcon} from '@chakra-ui/icons'
import { useState } from "react"
import { Target } from "framer-motion"

interface props {
    handleClick : () => void
}
export const UserFormLogin = (props: props) =>{
    const [input, setInput] = useState('')
    const {handleClick} = props
    const isError = input === ''
    const handleInputChange = (e: any) =>{
        setInput(e.target.value)
    }
    return (
        <Box 
            w='350px' 
            display='flex' 
            flexDirection='column' 
            color='white' 
        >
        <FormControl 
            display='flex' 
            gap='5px' 
            flexDirection='column' 
            isInvalid={isError}
        >
                <FormLabel>Email address</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EmailIcon color='gray.300' 
                    />}
                    />
                    <Input 
                        type='email' 
                        value={input}
                        onChange={handleInputChange}
                        pattern="[^ @]*@[^ @]*"
                        required 
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
            <FormLabel>Pasword </FormLabel>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<LockIcon color='gray.300' />}
                />
                <Input type='pasword' />
            </InputGroup>
            <Box 
                display='flex' 
                gap='100px'
            >
                <Radio value='0' size='sm'>
                    Remember me
                </Radio>
                <Text 
                    as='h6' 
                    fontSize='sm'
                >
                    forgot your pasword?
                </Text>
            </Box>
            <Button 
                mt={8} 
                w='350px' 
                colorScheme='whiteAlpha'
            >
                Sign in
            </Button>
        </FormControl>
        <Button 
                background='transparent'
                color='#3b2828'
                _hover={{
                        color: '#ffffff'
                    }}
                variant='link'
                onClick={handleClick}
            >Create Acount</Button>
    </Box>
    )
} 