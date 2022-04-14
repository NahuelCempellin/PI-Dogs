import React from "react";
import SelectorAlph from "../Selector/SelectorAlph";
import WeightSelector from "../Selector/SelectorWeight";
import TempSelector from "../Selector/SelectTemp";
import FilterCreated from "../Selector/selectorCreated";
import SelectorHeight from "../Selector/SelectorHeight";
import ButtonForm from "../ButtonForm/Button";
import { ContNav } from "../../../Styles/Nav2/Nav2";

export default function NavBar({setOrder}){
    return(
        <ContNav>
            <FilterCreated setOrder={setOrder}/>
            <SelectorAlph setOrder={setOrder}/>
            <SelectorHeight setOrder={setOrder}/>
            <WeightSelector setOrder={setOrder}/>
            <TempSelector setOrder={setOrder}/>
            <ButtonForm/>
        </ContNav>
    )
}