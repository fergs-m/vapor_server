//requerimientos
const bd = require('../conexion/db');


//trae todos los datos de la base de datos usando los controles
const videojuegosController = {

    traerVideojuegos(req,res){

        bd.query('SELECT * FROM videojuegos ORDER BY id_videojuegos DESC LIMIT 3', (err, results) => {
        //SELECT * FROM videojuegos -> este es para traer todos los videojuegos
//SELECT * FROM videojuegos ORDER BY id_videojuegos DESC LIMIT 3 -> ordena los VIDEOJUEGOS POR SU ID de forma descendente (del ultimo al primero) y que solo muestre 3 registros
            if  (err){

                console.log(err);
            }

            //console.log(results) -> importante para ver en consola de servidor que traiga los datos

            res.json(results).status(200) //me aparece en el navegador los datos
        })
    }, traeMisVideojuegos ( req,res){

        let usuario = req.params.usuario; 
        //console.log(req.params.usuario) //se comprueba que datos trae

        bd.query('SELECT * FROM videojuegos WHERE usuario_escritor = ?', [usuario], (err, resultado) => {


            if (err){

                res.json({error: 'Error en la consulta'}).status(500)

            }
            res.json(resultado).status(200)
        })
    }, crearVideojuego(req,res){

        let usuario = req.body.usuario_escritor;
        let review = req.body.review;
        let nombre = req.body.nombre;
        let puntuacion = req.body.puntuacion

        bd.query('INSERT INTO videojuegos(nombre,review,puntuacion,usuario_escritor) VALUES (?,?,?,?)'
        , [nombre,review,puntuacion,usuario], (err,resultado) => {

            if(err){
                res.json({error: 'Error en la inserccion'}).status(500)
            }

            res.json({insercion: 'Okay'}).status(200)

            //console.log(resultado)

        })

    },

    buscarVideojuego(req,res){

        //console.log(req.params)

        let {id} = req.params; //let id = req.params.id aqui se descontruye el objeto

        bd.query('SELECT * FROM videojuegos WHERE id_videojuegos = ?',[id],(err,resultados) => {

            //console.log(resultados) aqui REVISA EN LA CONSOLA DEL SERVIDOR SI FUNCIONA

            if (err){
                res.json({error: 'Error en la consulta'}).status(500)
            }

            res.json(resultados[0]).status(200)//le digo directamente que busque en la posicion 0 que es donde esta la id
        })
    },

    editarVideojuegos(req,res){

        //console.log(req.body)
        let id = req.body.id_videojuegos; 
        let {nombre,review,puntuacion} = req.body;

        bd.query('UPDATE videojuegos SET nombre= ?, puntuacion = ?, review = ? WHERE id_videojuegos = ?',
            [nombre,puntuacion,review,id],(err, resultado) => {

                
            if (err){
                res.json({error: 'Error en la consulta'}).status(500)
            }

            res.json({mensaje: 'Okay'}).status(200)


        })

    },
    eliminarVideojuego(req,res){//me permitira eliminar un videojuego de la base de datos

       // console.log(req.params) //es params pq el valor viene de la URL

       let id = req.params.id;

       bd.query('DELETE FROM videojuegos WHERE id_videojuegos = ?', [id], (err, resultados) => {

           // console.log(resultados)

           res.json({borrar:'Okay'}).status(200);

       })

    },

    traeTodas(req,res){

        bd.query('SELECT * FROM videojuegos', (err,resultado) => {


           // console.log(resultado)

           res.json(resultado).status(200);
        })


    },

    filtrado(req,res){


      //  console.log(req.params.puntuacion)

      let valor = req.params.puntuacion;

      bd.query('SELECT * FROM videojuegos WHERE puntuacion >= ?', [valor], (err,resultado) => {

        //console.log(resultado)//me trae en consola de servidor las puntuaciones mayores o iguales al numero que ponga en el input en la pagina
      
        res.json(resultado).status(200)
     })
    }

};

module.exports = videojuegosController; 