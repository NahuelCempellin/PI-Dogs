const {postDogs}= require('../controller/DogsController')
const express= require('express');
const router= express.Router();

router.post('/', postDogs);

module.exports= router;