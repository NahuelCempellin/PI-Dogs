const axios= require('axios');
const {Dog,Temperaments}= require('../db');
const {Op}= require('sequelize');


const getInfo= async()=>{
    try{
        
        const apiInfo= (await axios.get('https://api.thedogapi.com/v1/breeds')).data;
        
      
        const Info= await
        apiInfo?.map(el=> {
            const height= 0;
            return{
                name: el.name,
                id: el.id,
                image: el.image.url === undefined? 'Image Not Found': el.image.url,
                heightMAX: el.height.metric.split('-')[0] !== undefined? el.height.metric.split("-")[0].split(' ,'): 'not found',
                heightMIN: el.height.metric.split("-")[1] !== undefined? el.height.metric.split("-")[1].split(' ,'): 'not found',
                weightMAX: el.weight.metric.split("-")[0] !== NaN? el.weight.metric.split("-")[0].split(' ,'):  0 ,
                weightMIN: el.weight.metric.split("-")[1] !== undefined? el.weight.metric.split("-")[1].split(','): 'not found',
                life_spanMAX: el.life_span.slice(0,7).split('-')[0] !== undefined? el.life_span.split("-")[0].split(' ,'): 'not found',
                life_spanMIN: el.life_span.slice(0,7).split('-')[1] !== undefined? el.life_span.split("-")[1].split(' ,'): 'not found',
                temperaments: el.temperament !==undefined? el.temperament.split(', '): 'The dog havent got a temperament'
            }

        })
       
        
        
        let getDBInfo= await Dog.findAll({
            include:{
                model: Temperaments,
                attributes:['name'],
                through:{attributes:[]},
            },
        })
        
        let allDogsInfo= getDBInfo
        ?[...Info, ...getDBInfo]
        :[...Info];

        
    return allDogsInfo;
    }catch(error){
        console.log(error)
    }
}






const getDogsName= async(name)=>{
    try{
    let dogName= (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)).data;
    const dogDB= await Dog.findAll({
        includes: Temperaments,
        where:{
            name:{
                [Op.iLike]: `%${name}%`
            }
        },
    })

    let dogsNames= dogDB
    ?[...dogName, ...dogDB]
    :[...dogsNames];

    const mapDogs= dogsNames.map((el)=>{
        return{
            name: el.name,
            id: el.id,
            image: `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`,
            heightMAX: el.height.metric.split("-")[0],
            heightMIN: el.height.metric.split("-")[1],
            weightMAX: el.weight.metric.split("-")[0],
            weightMIN: el.weight.metric.split("-")[1],
            life_spanMAX: el.life_span.slice(0,7).split('-')[0],
            life_spanMIN: el.life_span.slice(0,7).split('-')[1],
            temperaments: el.temperament !==undefined? el.temperament: 'The dog havent got a temperament'
        }
    })
    return mapDogs;
    }catch(error){
    console.log(error)
    }
}



const weightController= async()=>{
    try{
        let dogsUrl=(await axios.get('https://api.thedogapi.com/v1/breeds')).data

        let allDogies= [...dogsUrl];
        let weightDog= allDogies.map((el)=>{
            return( el.weight.metric.split('-'))
        })
        
        let arr =[]

    for(let i=0; i<weightDog.length; i++){
        for(let j=0; j<weightDog[i].length; j++){
                if(!arr.includes(weightDog[i][j])){
                    arr.push(weightDog[i][j])
                }else{
                    continue
                }
        }
    }
        
        return arr;
    }catch(error){
        console.log(error)
    }
}


const heightController= async()=>{
    try{
        let dogsUrl=(await axios.get('https://api.thedogapi.com/v1/breeds')).data

        let allDogies= [...dogsUrl];
        let heightDog= allDogies.map((el)=>{
            return( el.height.metric.split('-'))
        })
        
        let arr =[]

    for(let i=0; i<heightDog.length; i++){
        for(let j=0; j<heightDog[i].length; j++){
                if(!arr.includes(heightDog[i][j])){
                    arr.push(heightDog[i][j])
                }else{
                    continue
                }
        }
    }
        
    
        return arr;
    }catch(error){
        console.log(error)
    }
}






const dogId= async(id)=>{
    if(
        id.match( /^[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}$/i)
        ){
            try{
                let dbSearch= await Dog.findAll({
                    where:{id},
                    include:[
                        {model: Temperaments, attributes: ['name'], through:{attributes:[]}},
                        
                    ], 
                })
                return dbSearch[0]
            }catch(error)
            {
                console.log(error);
            }
        }else{
            try{
                let info=(
                    await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)
                ).data;

                let obj ={
                    id: info.id,
                    name: info.name,
                    image: info.reference_image_id,
                    heightMAX: info.height.metric.split("-")[0],
                    heightMIN: info.height.metric.split("-")[1],
                    weightMAX: info.weight.metric.split("-")[0],
                    weightMIN:info.weight.metric.split("-")[1],
                    life_spanMAX: info.life_span.slice(0,7).split('-')[0],
                    life_spanMIN: info.life_span.slice(0,7).split('-')[1],
                    temperaments: info.temperament,
                    origin: info.origin
                }
                return obj;
            }catch(error){
                console.log(error)
            }
        }
}





const postDogs= async(req,res,next)=>{
   
    const{name,image,heightMAX,heightMIN,weightMAX,weightMIN,life_spanMAX,life_spanMIN,temperaments}= req.body;
    try{

        
        const createdInDb= true;

        const newDog= {name,image,heightMAX,heightMIN,weightMAX,weightMIN,life_spanMAX,life_spanMIN, createdInDb};

        const createDog= await Dog.create(newDog);

        for(let i of temperaments){
            const temps= await Temperaments.findOne({
                where:{
                    name: i
                }

            })
        
            createDog.addTemperaments(temps)
        }
        res.status(200).send(createDog.id);
    }
    catch(error)
    {
        next(error)
    }
}


module.exports={
    getInfo,
    getDogsName,
    dogId,
    postDogs,
    weightController,
    heightController
    
}