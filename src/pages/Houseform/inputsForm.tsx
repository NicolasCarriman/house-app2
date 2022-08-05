import userEvent from '@testing-library/user-event';
import * as React from "react";
import '../../styles/areastyle.css';
import {InputComponent} from './input'
import { Heading,Box, chakra} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import {formInputAdapter} from '../../addapters/inputAdapter'
import BtnForm from './btnForm'
import {inputM2,inputBedroom} from './utilitis/inputsFormHouse'
import useInput from './Hooks/useInputs';


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export default function InputForm() {
   
    const {areaInputs, handleSubmit } = useInput()
    
    return (
        //@ts-ignore
            <form onSubmit={handleSubmit}  
                className='formHouse'              
                >
                <Box 
                    display='flex'
                    flexDirection='column' 
                    gap='15px' 
                    width='20vh'
                >
                    <InputComponent 
                        inputValues={formInputAdapter(inputM2)} 
                        stringValue='m2'
                        name='width'
                    />
                    <InputComponent 
                        inputValues={formInputAdapter(inputM2)} 
                        stringValue='m2'
                        name='height'
                    />
                    <InputComponent 
                        inputValues={formInputAdapter(inputBedroom)} 
                        stringValue='bedrooms'
                        name='bedrooms'
                    />
                    <BtnForm textBtn='SEND' ></BtnForm>
                </Box>
                <ChakraBox 
                    display='flex' 
                    flexDirection='column' 
                    gap='40px' 
                    padding='10px' 
                    marginBottom='70px'
                    fontFamily='Montserrat , sans-serif'
                    color='brand.100'
                    animate={{
                        opacity:[0,1],
                        transform:['translateY(-50px)','translateY(0px)']
                        }}
                    transition={{
                        duration: '1',
                        ease: "easeInOut",
                    }}
                    >
                        <Heading 
                            as='h2' 
                            fontSize='15px' 
                            fontWeight='bold'
                        >Select Width!
                        </Heading>
                        <Heading 
                            as='h2' 
                            fontSize='15px' 
                            fontWeight='bold'
                        >Select Height!
                        </Heading>
                        <Heading 
                            as='h2' 
                            fontSize='15px'  
                            fontWeight='bold'
                        >Select Bedrooms quantity
                        </Heading>
                </ChakraBox>
            </form>

  );
}

