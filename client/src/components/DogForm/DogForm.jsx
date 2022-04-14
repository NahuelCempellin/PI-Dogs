import {React, useEffect,useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { postDogies, getTemperaments } from "../../Reducer/reducer/actions";
import validate from "./validate";
import { ContForm, DivInt, FormButton, DivTemps,SelectTemps, DogUl, UlCont } from "../../Styles/Form/formDog";


export default function DogieForm(){
    const dispatch= useDispatch();
    const history= useNavigate();
    const temper= useSelector((state)=>state.Temperamentos)

    const [error, setError]= useState({});

    const[input, setInput]= useState({
        name:'',
        image:'',
        heightMAX:'',
        weightMAX:'',
        heightMIN:'',
        weightMIN:'',
        life_spanMAX:'',
        life_spanMIN:'',
        temperaments:[]

    })

    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    function handleSubmit(e){
        e.preventDefault();
        setError(validate(input))
        const errorSave=validate(input);
        if(Object.values(errorSave).length !== 0){
            alert('Please, fullfil the required Camps...')
        }else{
            dispatch(postDogies(input));
            alert('Puppie posted successfully!!')
            history('/dogs')
        }
        setInput({
            name:'',
            heightMAX:'',
            weightMAX:'',
            heightMIN:'',
            weightMIN:'',
            life_spanMAX:'',
            life_spanMIN:'',
            image:'',
            temperaments:[]
        })
        console.log(setInput)
    }



    function handleSelectTemperament(e){
        console.log(handleSelectTemperament)
        
        if(!input.temperaments.includes(e.target.value)&& e.target.value !== 'Temperaments'){
         setInput({
             ...input,
             temperaments:[ ...input.temperaments ,e.target.value]
         })
 
        }
         
     }

     function deleteTemperament(p){
        setInput({
            ...input,
            temperaments: input.temperaments.filter((el)=> el!== p)
        });
        setError(
            validate({
            ...input,
            temperaments: [...input.temperaments]
        }))
        
    }


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    return(
        <ContForm>
                <h1>CREATE A BREED</h1>
            <form>
                <DivInt>
                    
                    <input placeholder="Breed..."
                    type='text'
                    value={input.name}
                    name='name'
                    onChange={(e)=>handleChange(e)}/>
                    {
                        error.name &&(
                            <p className="err">{error.name}</p>
                        )
                    }
                </DivInt>
                <DivInt>
                   
                    <input 
                    placeholder='Height max..'
                    type='number'
                    min={0}
                    max={100}
                    value={input.heightMAX}
                    name='heightMAX'
                    onChange={(e)=>handleChange(e)}
                    />
                    {
                        <p className="err">{error.heightMAX}</p>
                    }
                    
                </DivInt>
                <DivInt>
                    
                    <input 
                    placeholder='Height min..'
                    type='number'
                    min={0}
                    max={100}
                    value={input.heightMIN}
                    name='heightMIN'
                    onChange={(e)=>handleChange(e)}
                    />
                    {
                        <p className="err">{error.heightMIN}</p>
                    }
                    
                </DivInt>
                <DivInt>
                    
                    <input
                    placeholder='Weight max..'
                    type='number'
                    value={input.weightMAX}
                    name='weightMAX'
                    onChange={(e)=>handleChange(e)}
                    />
                    {
                        <p className="err">{error.weightMAX}</p>
                    }
                    
                </DivInt>
                <DivInt>
                    
                    <input 
                    placeholder='Weight min..'
                    type='number'
                    value={input.weightMIN}
                    name='weightMIN'
                    onChange={(e)=>handleChange(e)}
                    />
                    {
                        <p className="err">{error.weightMIN}</p>
                    }
                    
                </DivInt>
                <DivInt>
                    
                    <input 
                    placeholder='Life span max..'
                    type='number'
                    value={input.life_spanMAX}
                    name='life_spanMAX'
                    min={0}
                    max={20}
                    onChange={(e)=>handleChange(e)}/>
                    {
                        <p className="err">{error.life_spanMAX}</p>
                    }
                </DivInt>
                <DivInt>
                    
                    <input 
                    placeholder='Life span min..'
                    type='number'
                    value={input.life_spanMIN}
                    name='life_spanMIN'
                    min={0}
                    max={20}
                    onChange={(e)=>handleChange(e)}/>
                    {
                        <p className="err">{error.life_spanMIN}</p>
                    }
                </DivInt>
                <DivTemps>
                    <SelectTemps onClick={(e)=>handleSelectTemperament(e)}
                    defaultValue='default'>
                        <option  
                        hidden selected>Temperaments</option>
                        {
                            temper.map((el)=>{
                                return(
                                    <option value={el.name} >{el.name}</option>
                                )
                            })
                        }
                    </SelectTemps>
                    {
                        <p className="err">{error.temperaments}</p>
                    }
                    <div>
                    <DogUl>{input.temperaments?.map((el)=>{
                        return(
                            (<UlCont key={el}>
                                <li>{el}</li>
                            <button onClick={()=>{deleteTemperament(el)}}>x</button>
                            </UlCont>)
                            )})}
                            </DogUl>
                    
                    </div>
                </DivTemps>
                <DivInt>
                    
                    <input 
                    type='url'
                    value={input.image}
                    name='image'
                    onChange={(e)=>handleChange(e)}/>
                {
                    <p className="err">{error.image}</p>
                }
                </DivInt>
                
            </form>
            <div>
            <FormButton type='submit' onClick={(e)=>handleSubmit(e)}>Submit</FormButton>
            <Link to='/dogs'>
                <FormButton>Back</FormButton>
            </Link>
            </div>
        </ContForm>
    )
}