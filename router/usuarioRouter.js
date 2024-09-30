const express = require('express');

const usuariosController= require('../controller/usuariosController')

const router = express.Router();

router.post('/', usuariosController.comprobarUsuarios); //originalmente estaba en get, pero se cambia a post para poder acceder a la ruta
//usuario y contraseña de cambian para enviar por post a traves del cuerpo de la peticion y no se vea en el URL
//router.get('/', usuariosController.comprobarUsuarios);

module.exports = router; 