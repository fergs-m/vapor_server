const bd = require('../conexion/db');

const usuariosController = {

     //va a comprobas si los usuarios estan en la bese de datos o no

    comprobarUsuarios(req,res){

        let usuario = req.body.usuario;

        //let {usuario} = req.body => destructurar el objeto


        let contra = req.body.contrasena; 

        //let {contrasena} = req.body => destructurar el objeto. la variable deve llamarce igual a lo que se esta buscando

            console.log(req.body)


        bd.query(' SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?', [usuario, contra], (err,results) => {

            if (err){

                console.log(err);
            }

            if (results.length == 0) { //si me trae un resultado de 0 significa que no esta por lo tanto es vacio

                res.json({mensajeError: 'Usuario no encontrado'}).status(401)

                //console.log(results);
            } else {

                res.json( results [0] ).status(200) //[0] pq me trae un array de una posicion que siempre parte de 0 y se necesita decir que es de 0 para que me tome los datos
            }

      
        })



    }
}

module.exports = usuariosController; 