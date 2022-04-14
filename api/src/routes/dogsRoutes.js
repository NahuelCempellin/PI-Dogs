const {Dogs,Temperaments}= require('../db');
const express= require('express');
const router= express.Router();
const{Op}= require('sequelize');
const {getInfo, getDogsName, dogId}= require('../controller/DogsController.js');


router.get('/', async(req,res)=>{
    const{name}= req.query;
    console.log(name)

    if(!name){
        try{

            let Dogies= await getInfo();
            res.status(200).send(Dogies);

        }catch(error){
            console.log(error)
        }
    }else{
        try{
            let dogName= await getDogsName(name);
            dogName? res.status(200).send(dogName):
            res.status(204).json({msg: 'Dog not found!!!'})
        }catch (error){
            console.log(error)
        }
    }
});


router.get('/:id', async(req,res,next)=>{
    const{id}=req.params;

    try{
        let dogieId= await dogId(id);
        dogieId? res.status(200).send(dogieId):
        res.status(204).json({msg: 'Id not Found!!'})
    }catch(error){
        next(error)
    }
});



module.exports= router;

