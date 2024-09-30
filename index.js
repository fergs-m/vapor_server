//requerimientos 
const express = require('express');
const cors = require('cors');
const bunyan = require('bunyan');

require('dotenv').config(); 

const usuarios = require('./router/usuarioRouter');

const viddeojuegos = require('./router/videojuegosRouter')

const logger = bunyan.createLogger({name: 'Servidor'});

const app = express(); 

//aplicacion use:

app.use(cors()); 

app.use(express.json());

app.use('/usuarios', usuarios);

app.use('/videojuegos', viddeojuegos); 


//puerto a escuchar

app.listen(process.env.PORT, () => {

    logger.info('Servidor levantado'); 
})

