import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTemperaments, orderTemp } from "../../../Reducer/reducer/actions";
import { Select } from "../../../Styles/Selector/selector";


export default function TempSelector({setOrder}){
    const dispatch= useDispatch();
    const temper= useSelector((state)=> state.Temperamentos)
    
    
    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    function handleOrderTemp(e){
        e.preventDefault();
        dispatch(orderTemp(e.target.value));
        setOrder(`Ordered ${e.target.value}`)
    }

    return(
        <div>
            <Select onClick={(e)=>handleOrderTemp(e)}>
                <option value='All'>TEMPERAMENTS</option>
                {
                    temper?.map((el)=>{
                        return(
                            <option value={el.name} key={el.id}>{el.name}</option>
                        )
                    })
                }
            </Select>
        </div>
    )
}