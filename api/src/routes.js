const express = require('express');

const clientController = require('./controllers/clientController');

const clientMiddleware = require('./middlewares/clientMiddleware');

const router = express.Router();

router.get('/is-alive', (req,res) => {
    res.status(200).json({message: 'Backend is alive'});
});


router.get('/client', clientController.findAll);
router.get('/client/:id', clientController.findOrFail);
router.post('/client', clientMiddleware.validateBody, clientController.store);
router.put('/client/:id', clientMiddleware.validateBody, clientController.update);
router.put('/client/:id/delete', clientController.remove);


module.exports = router;