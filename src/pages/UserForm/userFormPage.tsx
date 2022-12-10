
import React, { useEffect, useRef, useState } from 'react'
import { Box,Button,Image,Text } from '@chakra-ui/react'
import { chakra} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { UserFormLogin } from './userLogin'
import house1 from '../../addons/house1.jpg'
import { UserFormRegister } from './userRegister'
import { useForm } from './Hooks/useForm';
import { ErrorI } from '../../models/userInterface';

export default function UserFormPage(){

    const {form, handleClick} = useForm()
    const [errors, setErrors] = useState<ErrorI>({error:{
        state: false,
        message: ''
    }})
    const handleError = (e: React.SyntheticEvent) =>{
        setErrors(errors =>({...errors, error: {state: true, message:''}}))
    }
    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
        });
    return (
        <>
            <Box 
                minH='100vh' 
                h= '100%' 
                display='flex' 
                flexDirection='column'
                alignItems='center' 
                backgroundImage={house1}
                backgroundSize = 'cover'
                backgroundPosition='center'
                justifyContent='center' 
                gap='20px'
            >
                    <ChakraBox 
                    backdropFilter='auto' 
                    backdropBlur='6px'
                    gap='10px'
                    overflow='hidden'
                    borderStyle='none'
                    display='flex'
                    flexDir='column-reverse' 
                    height='auto'
                    minH='65vh'
                    w='auto' 
                    bgColor='#0e191c85'
                    alignItems='center'
                    boxShadow='1px 1px 0px 0px #424242, -1px -1px 0px 0px #404040, 0px 0px 15px 8px #0000009c;'
                    p='6'
                    rounded='md'
                    animate={
                        errors.error.state?
                        {
                            backgroundColor: 'rgba(90 8 8 0.63)'
                        }: 
                        {
                            opacity:[0,1],
                            transform:['translateX(-50px)','translateX(10px)','translateX(0px)']
                        }
                    }
                    transition={{
                        duration: '0.8',
                        ease: "easeInOut",
                    }}
                    >
                        <Box 
                            className='textLoginCont'
                            display='flex'
                            justifyContent='center'
                            gridArea='3/2/3/2'
                            alignItems='center'
                            >
                                {form ?
                                    <Text as='h1'>LOGIN</Text>
                                :
                                    <Text as='h1'>REGISTER</Text>
                                }
                        </Box>
                        <Box 
                            display='flex' 
                            bgColor='transparent' 
                            height='auto' 
                            w='55vh' 
                            alignItems='center' 
                            justifyContent='center'
                            gridArea='1/2/2/2'
                            >
                                {form ?
                                     <UserFormLogin handleClick={handleClick}/>
                                :
                                     <UserFormRegister handleError= {handleError}/>
                                 }
                        </Box>
                    </ChakraBox>
            </Box>
        </>
    )

}