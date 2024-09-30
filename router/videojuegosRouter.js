const express = require('express');

const videojuegosController = require('../controller/videojuegosController'); //se exporta el archivo con la funcion que uno quiere usar

const router = express.Router(); //se crean las rutas

//rutas get
router.get('/', videojuegosController.traerVideojuegos); //ruta para el videojuego
router.get('/:usuario', videojuegosController.traeMisVideojuegos)//ruta dinamica, la 
//igual lo que haya despues de los : siempre sera algun usuario de la página. 
//Ruta dinamica es a la cual se le pasa una variable
router.get('/queVideojuego/:id', videojuegosController.buscarVideojuego);
router.get('/todas/todasResenas', videojuegosController.traeTodas); //si solo se pone '/todas' el servidor se confunde y piensa que es una ruta dinamica
//como la de arriba, por lo tanto se debe poner /un distintivo
router.get('/filtrar/:puntuacion',videojuegosController.filtrado);//me hara una ruta para el filtro para la puntuacion

//rutas post
router.post('/', videojuegosController.crearVideojuego);

//rutas put
router.put('/', videojuegosController.editarVideojuegos);

//rutas delete
router.delete('/:id', videojuegosController.eliminarVideojuego)



module.exports = router;