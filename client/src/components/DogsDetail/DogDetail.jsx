import {React, useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from 'react-router-dom';
import { getDogsDetail} from "../../Reducer/reducer/actions";
import { ContainerDiv,ImgDiv,DetailDiv } from "../../Styles/Detail/detail";
import LoadingPage from "../Loading/loadingPage";

export default function DogsDetail(){
    const{id}= useParams();
    const[loading,setLoading]= useState(true)

    const dispatch = useDispatch();
    const detail= useSelector((state)=> state.Detail);

    useEffect(()=>{
        dispatch(getDogsDetail(id))
    },[dispatch,id])



    return(
        <div>{ 
                loading=== true? (<LoadingPage setLoading={setLoading}/>):

        <ContainerDiv>
            <ImgDiv>
            <img src= {detail.createdInDb === true? detail.image:`https://cdn2.thedogapi.com/images/${detail.image}.jpg`} alt=''/>
            <Link to='/dogs'>
            <button>BACK</button>
            </Link>
            </ImgDiv>
            <DetailDiv>
            <h1>{detail.name}</h1>
            <h3>Weight: </h3>
            <p>MIN:{detail.weightMIN} MAX:{detail.weightMAX}</p>
            <h3>Height: </h3>
            <p>MIN:{detail.heightMIN} MAX:{detail.heightMAX}</p>
            <h3>Life span:</h3>
            <p>MIN: {detail.life_spanMIN} MAX: {detail.life_spanMAX}</p>
            <h3>Temperament:</h3>
            <p>{detail.createdInDb === true? detail.temperaments.map(el=> el.name + ', '): detail.temperaments}</p>
            </DetailDiv>
        </ContainerDiv>}
        </div>
    )
}