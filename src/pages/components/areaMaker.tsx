import userEvent from '@testing-library/user-event';
import { Box } from '@chakra-ui/react';
import Rooms from './rooms'
import { useArea} from '../Houseform/Hooks/useAreaMaker'
import { useRef } from 'react';


export default function Area() {
    const areaMeasures = useRef<HTMLDivElement>(null);
    const {setRoom} = useArea(areaMeasures)
    return (
        <Box className='area' ref={areaMeasures} borderWidth='5px' borderColor='brand.700' bg='linear-gradient(194deg, #262e38 55%, #202e40 , #14313e )'>
            {
                setRoom?
                <Rooms></Rooms>
                :   
                <></>
            }
        </Box>                 
    )
}