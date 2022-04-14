import React from "react";
import { Link } from "react-router-dom";
import { CreateButton } from "../../../Styles/Button/buttonCreate";


export default function ButtonForm(){
    return(
        <div>
            <Link to='/form'>
            <CreateButton>CREATE A BREED</CreateButton>
            </Link>
        </div>
    )
}