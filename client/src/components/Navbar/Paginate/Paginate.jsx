import React from "react";
import { PaginButton } from "../../../Styles/Paginate/paginate";

export default function Paginate({dogPerPage,dogs,pag}){
    const pageNumbers=[]

    for(let i=1; i<= Math.ceil(dogs/dogPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav key={dogs}>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number=>
                        <PaginButton onClick={()=>pag(number)}>{number}</PaginButton>)
                }
            </ul>
        </nav>
    )
}