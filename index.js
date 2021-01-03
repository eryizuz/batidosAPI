const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

//creamos el servidor
const app = express();

//habilitar cors

app.use(cors());

//conectamos a mongodb

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://jesus:j06012001@cluster0.iqj1e.mongodb.net/batidosdb?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false 
});

//habilitar el bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitar routing

app.use('/', routes() )

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => {
    console.log("servidor iniciado");
})