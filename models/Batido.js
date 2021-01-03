const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batidoSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    frutas: {
        type: Array,
        trim: true
    },
    liquido: {
        type: Object,
        trim: true
    },
    proteina: {
        type: String,
        trim: true
    },
    sabor: {
        type: Number,
    },
    valorTotal: {
        type: Number
    }
});

module.exports = mongoose.model('Batido', batidoSchema);