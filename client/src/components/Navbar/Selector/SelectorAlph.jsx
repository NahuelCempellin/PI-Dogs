import React from "react";
import { orderAlph } from "../../../Reducer/reducer/actions";
import { useDispatch } from "react-redux";
import { Select } from "../../../Styles/Selector/selector";

export default function SelectorAlph({setOrder}){
    const dispatch= useDispatch();

    function handleOrder(e){
        e.preventDefault();
        dispatch(orderAlph(e.target.value));
        setOrder(`Ordered ${e.target.value}`)
    }


    return(
        <div>
            <Select onChange={(e)=>handleOrder(e)}
            defaultValue='default'>
                <option value='default' disabled>NAME</option>
                <option value='A-Z'>ASC</option>
                <option value='Z-A'>DESC</option>
            </Select>
        </div>
    )
}