const express = require('express');

const clientController = require('./controllers/clientController');
const userController = require('./controllers/userController');

const clientMiddleware = require('./middlewares/clientMiddleware');
const userMiddleware = require('./middlewares/userMiddleware');

const router = express.Router();

router.get('/is-alive', (req,res) => {
    res.status(200).json({message: 'Backend is alive'});
});


router.get('/client', clientController.findAll);
router.get('/client/:id', clientController.findOrFail);
router.post('/client', clientMiddleware.validateBody, clientController.store);
router.put('/client/:id', clientMiddleware.validateBody, clientController.update);
router.delete('/client/:id', clientController.remove);

router.get('/user', userController.findAll);
router.get('/user/:id', userController.findOrFail);
router.post('/user', userMiddleware.validateBody, userController.store);
router.put('/user/:id', userMiddleware.validateBody, userController.update);
router.delete('/user/:id', userController.remove);

module.exports = router;