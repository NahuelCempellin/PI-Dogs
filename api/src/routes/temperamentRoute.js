const express= require('express');
const axios= require('axios');
const router= express.Router();
const {Op}= require('sequelize');
const {Temperaments}= require('../db');
const e = require('express');

router.get('/', async(req,res,next)=>{
    try{
        const dogies=(await axios.get('https://api.thedogapi.com/v1/breeds/')).data;


        let Arrtemps= dogies?.map((el)=>el.temperament !== undefined || null ?  el.temperament.split(', '): ['no es bravo'])

        let arrTemp=[]


        for(let i= 0 ; i<Arrtemps.length; i++){
          for(let j=0; j<Arrtemps[i].length; j++){
            if(!arrTemp.includes(Arrtemps[i][j])){
                arrTemp.push(Arrtemps[i][j])
            }else{
              continue
            }
          }
        }

        arrTemp.map(async(el)=>{
           
                await Temperaments.findOrCreate({
                    where:{

                        name: el
                    }
                })
            
        })
       
        const dbTemperaments= await Temperaments.findAll()
        res.status(200).send(dbTemperaments)

    }catch(error){
        next(error)}
})


module.exports= router;