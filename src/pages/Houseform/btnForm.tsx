import {Button} from '@chakra-ui/react'
import { useEffect, useRef } from 'react';
import { useBtnContext } from '../components/context/form/viewContext';
interface props{
    textBtn: string
}
const BtnForm= (props: props) =>{
    const BtnRef:  React.MutableRefObject<HTMLButtonElement | null> = useRef(null);
    const {btnElement, setBtnElement} = useBtnContext()
    const {textBtn }= props
    return(
        <Button 
                onClick={()=> {setBtnElement(BtnRef.current)}}
                className='buttonForm'
                id= 'btnForm' 
                ref={BtnRef}
                type='submit'
                minWidth='40vh'
                width='100%'
                bg='#394754'
                height='100%'
                minH='7vh'
                marginTop='15px'
                marginLeft='0px'
                borderLeftRadius='10px' 
                borderRightRadius='10px'
                alignItems='center'
                transition='ease-out 0.3s'
                boxShadow=' inset 0 0 0 0 #1ba6ee'
                _hover=
                {{
                    boxShadow:'inset 300px 0 0 0 #2fbfb1',
                    letterSpacing:'2px',
                    fontWeight:'400'
                }}
                color='white'
        >
            {textBtn}
        </Button>
    );
}
export default BtnForm