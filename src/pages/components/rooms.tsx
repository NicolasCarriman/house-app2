import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { inputValueInterface } from "../../models/inputinterface";
import { idModel } from "../../models/setside";
import sizesDistribution from "../components/data/sizesDistribution";
import roomsDistribution from "../Houseform/utilitis/algoritmRoomsClass";

export default function Rooms(){
    const getInputs:inputValueInterface = useSelector((state: any) => state.inputValues)
    const algoritm = new roomsDistribution(sizesDistribution, getInputs)
    const firstField = algoritm.getDistributionSpaces()
    console.log(firstField)
    return (
    <>
        {
             Object.entries(firstField).map(([item, value]) => {

                return (<Box color='white' 
                        key={value} 
                        borderStyle='solid' 
                        borderColor='brand.50'
                        borderWidth='2px'
                        width={value.w *30+ 'px'}
                        height={value.h *30 + 'px'}>
                            {item} {value.w}x{value.h}
                        </Box> )
            })
        }

    </>
    )}
