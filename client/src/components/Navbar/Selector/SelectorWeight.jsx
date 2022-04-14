import {React, useEffect }from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getWeight, orderByWeight } from "../../../Reducer/reducer/actions";
import { Select } from "../../../Styles/Selector/selector";
export default function WeightSelector({setOrder}){
    const dispatch= useDispatch();
    // const weigh= useSelector((state)=> state.Weight)
   

    

    
     
    useEffect(()=>{
        dispatch(getWeight())
    },[dispatch])

    function handleSelectWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setOrder(`Ordered ${e.target.value}`)
    }
    

    return(
        <div>
            <Select onClick={(e)=>handleSelectWeight(e)}>
            {/* <option value='All'>ALL</option> */}
            <option value='ASC'>ASC</option>
            <option value='DESC'>DESC</option>
                {/* <option value='All'>WEIGHT</option>
                {
                   weigh.map((el)=>{
                        return(
                            <option value={el}>{el}</option>
                        )
                    })
                } */}
            </Select>
        </div>
    )
}