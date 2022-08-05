import {Box, Heading, Button} from '@chakra-ui/react'
import { Container, chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useSlogan } from './Hooks/useSlogan.tsx';



export default function SloganText(){
    const ChakraBox = chakra(motion.div, 
        {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
        });
    const  [showButton, slogan] = useSlogan()
    return (

        <Box 
        width='55vh'
        minH='55vh' 
        height='100%'
        alignItems='center'
        display='flex'
        justifyContent='center'
        bg='linear-gradient(150deg, #2a8f85 40%, #1c4066)'
    >
            <ChakraBox 
                animate={{
                    opacity:[0,0.5,1],
                    transform:['translateX(-50px)','translateX(0px)']
                    
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                padding='5px'
                fontFamily='Montserrat , sans-serif'
                size='xl' 
                marginTop='0px'
                textAlign='center'
                lineHeight='70px'
                maxW='100vh' 
                w='100%' 
                color='white'
                borderTopLeftRadius='3vh'
                borderTopRightRadius='3vh'
                fontWeight='400'
                fontSize='60px'
            >{slogan}
                {showButton?
                <Button 
                bg='brand.100'
                width='100px'
                >SAVE</Button>
                :
                <></>
                }
            </ChakraBox>
        </Box>
    )
}
