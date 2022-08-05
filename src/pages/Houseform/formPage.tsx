
import React from 'react'
//@ts-ignore
import HouseForm from './houseForm.tsx'
import { Box } from '@chakra-ui/react'
import SloganText from './slogan'
import { useEffect, useState } from 'react'





export default function HouseFormPage(){
    const [slogan,setSlogan] = useState('Choose your measures')
    const handleChange = (state: string) =>{
        setSlogan(state)
    }

    return (
        <>
            <Box 
                minH='100vh' 
                h= '100%' 
                display='flex' 
                alignItems='center' 
                bgColor='#161e26'  
                justifyContent='center' 
            >
                <Box 
                    overflow='hidden'
                    borderStyle='none'
                    display='flex' 
                    flexDirection='row'
                    maxW='110vh' 
                    minH='55vh' 
                    w='100%' 
                    bgColor='white' 
                    alignItems='center'
                >
                    <HouseForm handleChange={handleChange}/>
                    <SloganText></SloganText>
                </Box>
            </Box>
        </>
    )

}