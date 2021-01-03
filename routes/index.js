const expres = require("express");
const router = expres.Router();
const batidoController = require('../controllers/batidoControllers');


module.exports = function() {

    //agrega nuevos batidos via POST
    router.post('/batidos/nuevo', 
        batidoController.nuevoBatido
    );

    router.get('/batidos', 
        batidoController.obtenerBatidos
    )


    return router
}