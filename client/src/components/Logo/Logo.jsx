import React from "react";
import { Tittle,Huellita,Logo } from "../../Styles/NavBar/Nav";
import huellitas from '../../Styles/Doges/huellitas.png'
import { Link } from "react-router-dom";
export default function LogoDog(){
    return(
        
                <Logo>
                    <div>
                    <Link to='/'>
                    <Tittle>DOGS PAGE</Tittle>
                    </Link>
                    </div>
                    <Huellita src={huellitas} alt=''/>
                </Logo>

        
    )
}