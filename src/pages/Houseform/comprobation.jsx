
import BtnForm from './btnForm.tsx'
import { Box } from '@chakra-ui/react';

export const ComprobationBtns= () =>{
    return(
        <Box
            display='flex'
            flexDirection='column'
            gap='40px'
        >
            <BtnForm textBtn= 'YES'></BtnForm>
            <BtnForm textBtn= 'NO'></BtnForm>
        </Box>
    );
}