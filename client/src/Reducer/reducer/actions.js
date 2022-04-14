import { DOGS_URL,
DOG_NAME,
DOG_ID,
DOG_POST,
GET_NAME,
GET_DOGS,
GET_DETAIL,
GET_WEIGHT,
GET_HEIGHT,
ORDER_ALPH,
ORDER_CREATE,
ORDER_TEMP,
ORDER_WEIGHT,
ORDER_HEIGHT,
HEIGHT_ROUTE,
WEIGHT_ROUTE,
TEMP_ROUTE,
GET_TEMP,
} 
from "../../components/Constants/Constants";


export function getAllDogs(){
    return function (dispatch){
        return fetch(DOGS_URL)
        .then(response=> response.json())
        .then(res=>{
            dispatch({
                type:GET_DOGS,
                payload: res
            })
        })
    }
}

export function getDogsDetail(id){
    return function(dispatch){
        return fetch(DOG_ID + id)
        .then(response=> response.json())
        .then(res=>{
            dispatch({
                type: GET_DETAIL,
                payload:res
            })
        })
    }
}

export function getHeight(){
    return function(dispatch){
        return fetch(HEIGHT_ROUTE)
        .then(response=> response.json())
        .then(res=>{
            dispatch({
                type: GET_HEIGHT,
                payload: res
            })
        })
    }
}

export function getWeight(){
    return function(dispatch){
        return fetch(WEIGHT_ROUTE)
        .then(response=> response.json())
        .then(res=>{
            dispatch({
                type:GET_WEIGHT,
                payload: res
            })
        })
    }
}


export function getTemperaments() {
    return function (dispatch) {
        return fetch(TEMP_ROUTE)
            .then(response => response.json())
            .then(res => {
                dispatch({
                    type: GET_TEMP,
                    payload: res
                })

            })
    }
   
}

// export function postDogies(payload){
//     return async function(){
//         const response= await axios.post(DOG_POST , payload)
//         return(response)
//     }
// }


export const postDogies = (payload) => () => {
    return fetch(DOG_POST, {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
    })
}


export function orderAlph(payload){
        return{
            type: ORDER_ALPH,
            payload
        }
}

export function orderTemp(payload){
    return{
        type: ORDER_TEMP,
        payload
    }
}

export function orderByCreated(payload){
    return{
        type: ORDER_CREATE,
        payload
    }
}

export function orderByWeight(payload){
    return{
        type: ORDER_WEIGHT,
        payload
    }
}

export function orderByHeight(payload){
    return{
        type: ORDER_HEIGHT,
        payload
    }
}


export function Search(name){
    return function(dispatch){
        try{

            return fetch(DOG_NAME + name)
            .then(response=> response.json())
            .then(res=>{
                dispatch({
                    type: GET_NAME,
                    payload: res
                })
            })

        }catch(error){
            if(error.response){

            alert(Error.response.data)}
        }

    }
}



