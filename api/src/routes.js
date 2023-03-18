const express = require('express');

const userController = require('./controllers/userController');
const clientController = require('./controllers/clientController');
const registerController = require('./controllers/registerController');
const categoryController = require('./controllers/categoryController');
const authController = require ('./controllers/authController');

const userMiddleware = require('./middlewares/userMiddleware');
const clientMiddleware = require('./middlewares/clientMiddleware');
const registerMiddleware = require('./middlewares/registerMiddleware');
const categoryMiddleware = require('./middlewares/categoryMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');


const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem vindo a API!' });
});

router.get('/is-alive', (req, res) => {
    res.status(200).json({ message: 'Backend is alive' });
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

router.get('/register/client/:client_id', registerController.findClientRegisters)
router.get('/register/client/:client_id/:start_date/:end_date', registerController.findClientRegistersFiltered);

router.post('/login', authController.login);

router.get('/very-secret-stuff', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
router.get('/the-big-secret', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=Rvw6gMfs0yk&ab_channel=TheRanger');
});
router.get('/passwords', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=h7T9WipuASA');
});

module.exports = router;