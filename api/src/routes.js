const express = require('express');

const userController = require('./controllers/userController');
const expenseController = require('./controllers/expenseController');
const revenueController = require('./controllers/revenueController');
const categoryController = require('./controllers/categoryController');
const authController = require ('./controllers/authController');

const userMiddleware = require('./middlewares/userMiddleware');
const expenseMiddleware = require('./middlewares/expenseMiddleware');
const revenueMiddleware = require('./middlewares/revenueMiddleware');
const categoryMiddleware = require('./middlewares/categoryMiddleware');
const loginMiddleware = require('./middlewares/loginMiddleware')

const middlewareJwt = require('./middlewares/middlewareJwt');
const authorizeMiddleware = require('./middlewares/authorizeMiddleware');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Documentação da API!' });
});

router.get('/is-alive', (req, res) => {
    res.status(200).json({ message: 'Backend is alive' });
});

router.post('/login', loginMiddleware.validateBody,authController.generateToken);

router.use(middlewareJwt.authenticate);

    router.get('/expenses', expenseController.findAll);
    router.get('/expense/:id', expenseController.findOrFail);
    router.post('/expense', expenseMiddleware.validateBody, expenseController.store);
    router.put('/expense/:id', expenseMiddleware.validateBody, expenseController.update);
    router.delete('/expense/:id', expenseController.remove);
    router.get('/expense/user/:user_id', expenseController.findClientRegisters)
    router.get('/expense/user/graphs/:user_id', expenseController.findClientRegisterGraphs)
    router.get('/expense/user/:user_id/:start_date/:end_date', expenseController.findClientRegistersFiltered);

    router.get('/revenues', revenueController.findAll);
    router.get('/revenue/:id', revenueController.findOrFail);
    router.post('/revenue', revenueMiddleware.validateBody, revenueController.store);
    router.put('/revenue/:id', revenueMiddleware.validateBody, revenueController.update);
    router.delete('/revenue/:id', revenueController.remove);
    router.get('/revenue/user/:user_id', revenueController.findClientRegisters)
    router.get('/revenue/user/graphs/:user_id', revenueController.findClientRegisterGraphs)
    router.get('/revenue/user/:user_id/:start_date/:end_date', revenueController.findClientRegistersFiltered);

router.use(authorizeMiddleware.authorize('admin'));

    router.get('/users', userController.findAll);
    router.get('/user/:id', userController.findOrFail);
    router.post('/user', userMiddleware.validateBody, userController.store);
    router.put('/user/:id', userMiddleware.validateBody, userController.update);
    router.delete('/user/:id', userController.remove);

    router.get('/categories', categoryController.findAll);
    router.get('/category/:id', categoryController.findOrFail);
    router.post('/category', categoryMiddleware.validateBody, categoryController.store);
    router.put('/category/:id', categoryMiddleware.validateBody, categoryController.update);
    router.delete('/category/:id', categoryController.remove);
  
module.exports = router;