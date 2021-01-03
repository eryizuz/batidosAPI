const Batido = require("../models/Batido");

//cuando se crea un nuevo batido

exports.nuevoBatido = async(req,res,next) => {
    //to do: insertar en la db

    //creamos objeto de batido con los datos

    const batido = new Batido(req.body);

    try {
        await batido.save();
        res.json({mensaje: "batido agregado correctamente"});

    } catch (error) {
        console.log(error);
        next();
    }

}

exports.obtenerBatidos = async(req,res,next) => {

    try {
        const batidos = await Batido.find({});
        res.json(batidos);
    } catch (error) {
        console.log(error);
        next();
    }

}
