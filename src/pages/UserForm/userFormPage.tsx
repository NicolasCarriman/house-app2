
import React, { useEffect, useState } from 'react'
import { Box,Button,Image,Text } from '@chakra-ui/react'
import { chakra} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { UserFormLogin } from './userLogin'
import house1 from '../../addons/house1.jpg'
import { UserFormRegister } from './userRegister'
import { useForm } from './Hooks/useForm';

export default function UserFormPage(){
    const {form, animateBox, fontCont, handleClick} = useForm()
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
                        ref={fontCont}
                        className='formCont'
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
                        backdropFilter='auto' 
                        backdropBlur='6px'
                        boxShadow='1px 1px 0px 0px #424242, -1px -1px 0px 0px #404040, 0px 0px 15px 8px #0000009c;'
                        p='6'
                        rounded='md'
                        animate={animateBox}
                        transition={{
                            duration: '1',
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
                                     <UserFormRegister/>
                                 }
                        </Box>
                    </ChakraBox>
            </Box>
        </>
    )

}