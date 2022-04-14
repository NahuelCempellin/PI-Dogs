import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {getHeight, orderByHeight} from '../../../Reducer/reducer/actions'
import { Select } from "../../../Styles/Selector/selector";



export default function SelectorHeight({setOrder}){
    const dispatch= useDispatch();
    const dogsHeight= useSelector((state)=>state.Height);
    
    

    

    useEffect(()=>{
        dispatch(getHeight())
    },[dispatch]);

    function handleSelectorHeight(e){
        e.preventDefault();
        dispatch(orderByHeight(e.target.value))
        setOrder(`Ordered ${e.target.value}`)
        
    }

    return(
        <div>
            <Select onClick={(e)=>handleSelectorHeight(e)}>
            <option value='All'>HEIGHT</option>
                {
                    dogsHeight.map((el)=>{
                        return(
                            <option value={el}>{el}</option>
                        )
                    })
                }
            </Select>
        </div>
    )
}