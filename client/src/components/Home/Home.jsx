import {React, useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllDogs } from "../../Reducer/reducer/actions";
import SearchBar from "../Navbar/Searchbar/Searchbar";
import DogCard from "./Cards";
import NavBar from '../Navbar/Nav/NavBar'
import Paginate from "../Navbar/Paginate/Paginate";
import { GridCards } from "../../Styles/Cards/GridCards";
import { Nav,  } from "../../Styles/NavBar/Nav";
import LogoDog from "../Logo/Logo";
import { NOT_FOUND } from "../Constants/Constants";
import { ContN } from "../../Styles/Loading/notFound";

export default function Home(){
    const dogs= useSelector((state)=> state.Dogs);
    const dispatch= useDispatch();

    const [currentPage, setCurrentPage]= useState(1);
    const[dogPerPage]= useState(8);
    const indexOfLastDog= currentPage*dogPerPage;
    const indexOfFirstDog= indexOfLastDog - dogPerPage;
    // eslint-disable-next-line no-unused-vars
    const currentDog= dogs.slice(indexOfFirstDog, indexOfLastDog);
    // eslint-disable-next-line no-unused-vars
    const [order,setOrder]= useState('');
    const pag=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

   
    useEffect(()=>{
        dispatch(getAllDogs())
    },[dispatch])

    return(
        <div>
            <Nav>
            <LogoDog/>
            <SearchBar/>
            </Nav>
            <NavBar setOrder={setOrder}/>
            <Paginate
            dogPerPage={dogPerPage}
            dogs={dogs.length}
            pag={pag}
            />
           
            <div>
                <GridCards>
                <span>
                {dogs.length=== 0?(
                    <ContN>
                        <div>
                            
                        <h2>NOT FOUND...</h2>
                        </div>
                        <div>
                        <img src={NOT_FOUND} alt=''/>
                        </div>
                    </ContN>
                ):
                    currentDog?.map((dog)=>{
                    return(
                        <div key={dog.id}>
                       <DogCard
                       id={dog.id}
                       name={dog.name}
                       image={dog.image}
                       heightMAX={dog.heightMAX}
                       weightMAX={dog.weightMAX}
                       heightMIN={dog.heightMIN}
                       weightMIN={dog.weightMIN}
                       createdInDb={dog.createdInDb}
                       temperaments={dog.temperaments}/>
                       
                        </div>
                    )})
                }
                </span>
            </GridCards>
            </div>
            <Paginate
            dogPerPage={dogPerPage}
            dogs={dogs.length}
            pag={pag}
            />
        </div>
    )
}