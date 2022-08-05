import {Box, HStack, Button, Input, useNumberInput, Heading} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { formInput } from '../../models/forminput'

interface inputProps{
  inputValues :  formInput
  stringValue: string
  name: string
}

export  const InputComponent = ({inputValues, stringValue, name}: inputProps) => {    
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =useNumberInput(inputValues)
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
    return (
        <HStack  
                  bg='transparent'  
                  borderStyle='solid'
                  maxW='120px' 
                  display='flex' 
                  flexDirection='row' 
                  alignContent='left' 
                  alignItems='flex-start' 
                  borderWidth='1px' 
                  borderColor='#575f68' 
                  boxShadow='-1px -1px 4px 1px #a1a1a1, inset 0 0 6px 1px #999393'
          >
          <Box display='flex' flexDirection='column' justifyContent='space-between' padding='0.5' >
            <Button {...inc} height='20px' borderRadius='none'top='-1px' color='white' fontWeight='bold' bg='brand.100' _hover={{bg:'brand.50'}}>+</Button>
            <Button {...dec} height='20px' borderRadius='none'top='1px' color='white' fontWeight='bold' bg='brand.100' _hover={{bg:'brand.50'}}>-</Button>
          </Box>
          <Box  width='80px'>
            <Input
                  {...input} 
                  name={name}
                  top='1px'
                  marginLeft='-1px' 
                  padding='0px' 
                  left='0px'
                  maxW='50px' 
                  width='100%' 
                  minH='21px' 
                  height='100%' 
                  borderWidth='2px' 
                  borderRadius='none' 
                  bg='transparent'
                  borderStyle='none'
                  _focusVisible={{boxShadow: 'none'}}
            />
            <Heading 
                as='h6' 
                bg='transparent'
                fontSize='small'
                fontWeight='light'
            >
             {stringValue}
            </Heading>

          </Box>
          
        </HStack>
    )
  }
