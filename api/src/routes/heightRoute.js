const axios= require('axios');
const express= require('express');
const router= express.Router();
const {Op}= require('sequelize');
const {heightController}= require('../controller/DogsController')

router.get('/', async(req,res)=>{
try{
    const heigtDef= await heightController();
    res.status(200).send(heigtDef)

}catch(error){
    console.log(error)
}
})

module.exports= router;