//requerimientos
const mysql = require('mysql2');
const bunyan = require('bunyan');
const logBD = bunyan.createLogger({name:'Log de la base de datos'}) //console.log mejorados


//crea la coneccion a la base de datos
const conexion = mysql.createConnection  ( { 

    host: process.env.HOST_BD,
    user: process.env.USUARIO_BD,
    password: process.env.CONTRA_BD,
    database: process.env.BASE_BD,
    port: process.env.PORT_DB

});


//si existe el error que salga un mensaje y si no que haga un console.log de que todo esta bien
conexion.connect (err => {

    if (err) {

        console.log(err)

        //logBD.error(err)
    }

    logBD.info('Conectado satisfactoriamente')
}) 

module.exports = conexion; //commonjs (jd comun) -> servidor

//export default div; // ecma script modules -> cliente