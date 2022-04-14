const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoutes= require('./dogsRoutes');
const tempsRoutes= require('./temperamentRoute');
const dogiePost= require('./postRoute');
const weightRoute= require('./weightRoute')
const heightRoute= require('./heightRoute')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs',dogsRoutes);
router.use('/dogie',dogiePost);
router.use('/temperaments',tempsRoutes);
router.use('/weight',weightRoute);
router.use('/height',heightRoute)

module.exports = router;
