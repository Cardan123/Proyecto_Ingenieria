const express = require('express');
const router = express.Router();

const customerControllers = require('../controllers/customerControllers.js');


router.get('/', customerControllers.index);
router.get('/map', customerControllers.map);
router.get('/foro', customerControllers.foro);
router.get('/chatbot', customerControllers.chatbot);
router.get('/login', customerControllers.formlogin);
router.post('/login', customerControllers.login);
router.post('/add_publicacion', customerControllers.add_publicacion);

router.post('/add',customerControllers.save);
router.get('/delete/:id',customerControllers.delete);

router.get('/update/:id',customerControllers.edit);
router.post('/update/:id',customerControllers.update);

module.exports = router;