const axios= require('axios');
const express= require('express');
const router= express.Router();
const {Op}= require('sequelize');
const {weightController}= require('../controller/DogsController')

router.get('/', async(req,res)=>{
try{
    const weigtDef= await weightController();
    res.status(200).send(weigtDef)

}catch(error){
    console.log(error)
}
})

module.exports= router;