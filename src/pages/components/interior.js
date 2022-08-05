import {useState, useRef, useEffect} from 'react';
import sizes from './data/sizes.js' 
import RoomMaker from './maker.js'

export default function Interior(props) {

    const door = useRef(null)
    const dormitorio = useRef(null)
    const [variables, setVariables] = useState([]);
    const [distribution, setstateDistribution] = useState([])


    function prueba(propietis){
        
        const datos = propietis;
        if (datos.id == 'sur'){
            const ubicacion0 = ()=>{
               datos.entrada = '3/2/3/4';
               datos.hab = '2/1/4/1';
               datos.baño = '1 / 2 / 1 / 3';
               datos.cocina = '1 / 3 / 1 / 3';
               datos.comedor = '2 / 2 / 2 / 4'
               setVariables(datos)
            }
            ubicacion0();   
        }
        else if (datos.id == 'norte'){
            const ubicacion0 = ()=>{
               datos.entrada = '1/1/1/4';
               datos.hab = '3 / 1 / 3 / 3';
               datos.baño = '1 / 2 / 1 / 3';
               datos.cocina = '1 / 3 / 1 / 3';
               datos.comedor = '2 / 1 / 2 / 4'
               setVariables(datos)
            }
            ubicacion0();
        }
        else if (datos.id == 'este'){
            const ubicacion0 = ()=>{
               datos.entrada = '1/3/3/4';
               datos.hab = '3 / 2 / 3 / 4';
               datos.baño = '1 / 1 / 1 / 1';
               datos.cocina = '2 / 1 / 4 / 1';
               datos.comedor = '1 / 2 / 3 / 2'
               setVariables(datos)
            }
            ubicacion0();
        }
        else if (datos.id == 'oeste'){
            const ubicacion0 = ()=>{
               datos.entrada = '1/1/4/1';
               datos.hab = '1 / 1 / 2 / 1';
               datos.baño = '3 / 3 / 3 / 3';
               datos.cocina = '1 / 3 / 3 / 3';
               datos.comedor = '2 / 2 / 4 / 2'
               setVariables(datos)
            }
            ubicacion0();
        }
        if (Number(props.data2.props.Values[0].habitaciones) > 1){
            datos.habitaciones = []
            for (let i = 0; i < Number(props.data2.props.Values[0].habitaciones); i++){      
                datos.habitaciones.push(datos.hab)
            }
            setVariables(datos)
        }

    }
    useEffect(()=>{
        prueba()
    },[variables])

    return (
        <>  
        <RoomMaker 
            data2={props.data2} 
            variables = {variables} 
            distributions={distribution} 
            content={props.content}>

        </RoomMaker> 
        </>
    )

}