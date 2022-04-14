
import { GET_DOGS,
GET_DETAIL,
DOG_POST, 
GET_NAME,
ORDER_ALPH,
ORDER_CREATE,
ORDER_WEIGHT,
ORDER_HEIGHT,
ORDER_TEMP,
GET_HEIGHT,
GET_WEIGHT,
GET_TEMP} from "../../components/Constants/Constants";


const initialState={
    Dogs:[],
    AllDogies:[],
    Detail:[],
    Temperamentos:[],
    Weight:[],
    Height:[]
}

const reducer=(state= initialState, action)=>{
    switch(action.type){
        case GET_DOGS:

            return{
                ...state,
                Dogs:action.payload,
                AllDogies: action.payload,
                

            }
        case GET_HEIGHT:
            return{
                ...state,
                Height: action.payload
            }
            case GET_WEIGHT:
                return{
                    ...state,
                    Weight: action.payload
                }
        case GET_DETAIL:
            return{
                ...state,
                Detail: action.payload,
            }
        case GET_NAME:
            return{
                ...state,
                Dogs: action.payload
            }
        case GET_TEMP:
            return{
                ...state,
                Temperamentos: action.payload
            }

        case ORDER_ALPH:
            
            const sortAlph=
            action.payload === "A-Z"
            ? state.AllDogies.sort((a, b) => a.name.localeCompare(b.name))
            : state.AllDogies.sort((a, b) => b.name.localeCompare(a.name));

            return{
                ...state,
                Dogs: sortAlph
            }
        case ORDER_TEMP:
            return{
                ...state,
                Dogs: action.payload=== 'All'
                ? state.AllDogies
                : state.AllDogies.filter(el=> el.temperaments.includes(action.payload))

            }
        case ORDER_WEIGHT:
            // const w1 =   state.AllDogies.filter(el=> el.weightMAX[0] === action.payload);
            // const w2= state.AllDogies.filter(el=> el.weightMIN[0] === action.payload);
            const w1= state.AllDogies.sort((a,b)=> a.weightMAX[0].localeCompare(b.weightMAX[0]))
            const w2= state.AllDogies.sort((a,b)=> b.weightMAX[0].localeCompare(a.weightMAX[0]))
                
            return{
                ...state,
                
                Dogs: action.payload === 'ASC'?  w1: w2
            }
        case ORDER_HEIGHT:
        const h1 =   state.AllDogies.filter(el=> el.heightMAX[0] === action.payload);
        const h2= state.AllDogies.filter(el=> el.heightMIN[0] === action.payload);

            return{
                ...state,
                Dogs: action.payload === 'All'? state.AllDogies
                : h1.length? h1
                :h2
                
                
                
                
            }
        case ORDER_CREATE:
            const filt=  state.AllDogies.filter((el)=> el.createdInDb);
            const notFilt=  state.AllDogies.filter((el)=> !el.createdInDb)
            return{
                ...state,
                Dogs: action.payload === 'All'
                ? state.AllDogies
                : action.payload === 'created'
                ? filt
                : notFilt

            }
        
        case DOG_POST:
            return{
                ...state,
            }
        default:
            return {
            ...state
        }
    }
}


export default reducer;