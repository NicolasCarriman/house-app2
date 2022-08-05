
import { Spinner } from '@chakra-ui/react'


const SpinnerComp = ()=>{
    return(
        <Spinner
            thickness='10px'
            speed='0.65s'
            emptyColor='gray.200'
            color='brand.50'
            width='5rem'
            height='5rem'
        />
    )
}
export default SpinnerComp;

