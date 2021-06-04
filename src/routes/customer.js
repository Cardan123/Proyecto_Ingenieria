const express = require('express');
const router = express.Router();

const customerControllers = require('../controllers/customerControllers.js');


router.get('/', customerControllers.init);
router.get('/index', customerControllers.index);
router.get('/map', customerControllers.map);
router.get('/foro', customerControllers.foro);
router.get('/chatbot', customerControllers.chatbot);
router.get('/login', customerControllers.formlogin);
router.post('/login', customerControllers.login);
router.post('/add_publicacion', customerControllers.add_publicacion);
router.get('/salir', customerControllers.salir);
router.get('/delete_publicacion/:id', customerControllers.delete_publicacion);
router.get('/update_publicacion/:id', customerControllers.edit_publicacion);
router.post('/update_publicacion/:id', customerControllers.update_publicacion);
router.get('/register',customerControllers.formnewuser);
router.post('/register',customerControllers.insertusuario);


router.post('/add',customerControllers.save);
router.get('/delete/:id',customerControllers.delete);

router.get('/update/:id',customerControllers.edit);
router.post('/update/:id',customerControllers.update);

module.exports = router;