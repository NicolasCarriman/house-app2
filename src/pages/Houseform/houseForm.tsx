import userEvent from '@testing-library/user-event';
import * as React from "react";
import '../../styles/areastyle.css';
import { chakra} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import InputForm from './inputsForm'
import { ComprobationBtns } from './comprobation.jsx';
import { useEffect } from 'react';
import SpinnerComp from '../components/spinner';
import Area from '../components/areaMaker'
import {useViewContext} from '../components/context/form/viewContext'
import { useFormView } from './Hooks/useFormViews';

export default function HouseForm() {
    const {showViews} = useViewContext()
    useFormView();

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
        });
  return (
        <ChakraBox 
            className='houseForm'
            bg='transparent' 
            blur='sm'
            flexBasis='370px'
            justifyContent= 'center'
            display='flex'
            animate={{
                        opacity:[0,1],
                        transform:['translateX(-50px)','translateX(10px)','translateX(0px)']
                        }}
            transition={{
                        duration: '1',
                        ease: "easeInOut",
                    }}
        >
            {showViews.houseForm?
                <InputForm/>
                :
                <></>
            }
            {
            showViews.comprobations?
                <ComprobationBtns ></ComprobationBtns>
                :
                <></>
            }
            {
            showViews.loading? 
                <SpinnerComp/>
                :
                <></>
            }
            {
            showViews.rooms?
                <Area></Area>
                :
                <></>
            }
        </ChakraBox>
  );
}