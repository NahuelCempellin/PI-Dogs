import {React, useState} from "react";
import {useDispatch} from 'react-redux';
import { Search, getAllDogs } from "../../../Reducer/reducer/actions";
import { InputSearch } from "../../../Styles/NavBar/Nav";

export default function SearchBar(){
    const dispatch= useDispatch();
    // eslint-disable-next-line no-unused-vars
    const [name,setName]= useState('');

    function handleSearch(arg){
        arg === ''?
        dispatch(getAllDogs()):
        dispatch(Search(arg))
    }

    function handleInputChange(e){
        e.preventDefault();
        handleSearch(e.target.value);
        setName(e.target.value);
    }



    return(
        <nav>
            <InputSearch placeholder="SEARCH DOGIES..."
            onChange={(e)=>handleInputChange(e)}/>
            
        </nav>
    )
}