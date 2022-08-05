import {useBtnContext, useViewContext} from '../../components/context/form/viewContext'
import { sloganState } from '../../../reducers/sloganSlice'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/reduxStore';
import { useEffect } from 'react';
import { refState } from '../../../reducers/btnRefSlice';

export const useFormView = () =>{
    const dispatch = useDispatch();
    const {showViews, setshowViews} = useViewContext()
    const area = useSelector((state: RootState) => state.inputValues); 
    const {btnElement, setBtnElement} = useBtnContext()

    useEffect(()=>{
        setshowViews({...showViews, houseForm: true
        })
    },[])
    
    useEffect(()=>{

        if (btnElement?.textContent === 'SEND'){
            setshowViews({...showViews, houseForm: false, comprobations: true})
            dispatch(sloganState('Are You Sure?'))

        }
        else if (btnElement?.textContent === 'YES'){
            setshowViews({...showViews, comprobations: false, loading: true})
            setTimeout(loadingFunction,2500);
            dispatch(sloganState('showing Rooms'))
        }
        else if (btnElement?.textContent === 'NO'){
            setshowViews({...showViews, houseForm: true, comprobations: false})
            dispatch(sloganState(''))
        }
    },[btnElement])
   
    function loadingFunction()
    {
        setshowViews({...showViews, loading: false, rooms: true, comprobations: false })
    }
}   
  