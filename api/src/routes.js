const express = require('express');

const userController = require('./controllers/userController');
const clientController = require('./controllers/clientController');
const registerController = require('./controllers/registerController');
const categoryController = require('./controllers/categoryController');

const userMiddleware = require('./middlewares/userMiddleware');
const clientMiddleware = require('./middlewares/clientMiddleware');
const registerMiddleware = require('./middlewares/registerMiddleware');
const categoryMiddleware = require('./middlewares/categoryMiddleware');

const router = express.Router();

router.get('/is-alive', (req,res) => {
    res.status(200).json({message: 'Backend is alive'});
});


router.get('/clients', clientController.findAll);
router.get('/client/:id', clientController.findOrFail);
router.post('/client', clientMiddleware.validateBody, clientController.store);
router.put('/client/:id', clientMiddleware.validateBody, clientController.update);
router.delete('/client/:id', clientController.remove);

router.get('/users', userController.findAll);
router.get('/user/:id', userController.findOrFail);
router.post('/user', userMiddleware.validateBody, userController.store);
router.put('/user/:id', userMiddleware.validateBody, userController.update);
router.delete('/user/:id', userController.remove);

router.get('/categories', categoryController.findAll);
router.get('/category/:id', categoryController.findOrFail);
router.post('/category', categoryMiddleware.validateBody, categoryController.store);
router.put('/category/:id', categoryMiddleware.validateBody, categoryController.update);
router.delete('/category/:id', categoryController.remove)

router.get('/registers', registerController.findAll);
router.get('/register/:id', registerController.findOrFail);
router.post('/register', registerMiddleware.validateBody, registerController.store);
router.put('/register/:id', registerMiddleware.validateBody, registerController.update);
router.delete('/register/:id', registerController.remove);

module.exports = router;