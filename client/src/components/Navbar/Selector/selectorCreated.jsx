import React from "react";
import {useDispatch} from 'react-redux';
import { orderByCreated } from "../../../Reducer/reducer/actions";
import { Select } from "../../../Styles/Selector/selector";


export default function FilterCreated({setOrder}){
    const dispatch= useDispatch();

    function handleOrderCreate(e){
        e.preventDefault();
        dispatch(orderByCreated(e.target.value))
        setOrder(`Ordered ${e.target.value}`)
    }

    return(
        <div>
            <Select onClick={(e)=>handleOrderCreate(e)}>
                <option value='All'>API OR DB</option>
                <option value='created'>Db Dogies</option>
                <option value='notCreated'>Api Dogies</option>
            </Select>
        </div>
    )
}