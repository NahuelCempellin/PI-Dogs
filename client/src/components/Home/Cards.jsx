import React from "react";
import { Link } from "react-router-dom";
import { DogCards, DogImg, ImgDiv,Ptemps, DivDetail } from "../../Styles/Cards/cards";

export default function DogCard({name,id,image,heightMAX,heightMIN,weightMAX,weightMIN,temperaments, createdInDb}){
 
    return(
        <DogCards>
            <ImgDiv>
            {image === undefined?<p>image not found</p>
            :<DogImg src={image} alt=''/>}
            
            </ImgDiv>
            <DivDetail>
            <Link to={`/dogs/${id}`}>
            <h2>{name}</h2>
            </Link>
            <p>Weight:</p>
            <p> Min: {weightMIN}  Max: {weightMAX}</p>
            <p>Temperaments:</p>
            <Ptemps>{ createdInDb === true? temperaments.map(el=> el.name + ', ')  : temperaments + ', '}</Ptemps>
            </DivDetail>
        </DogCards>
    )
}