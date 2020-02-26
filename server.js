const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const dashboard = require('./routes/routes');

require("dotenv").config();

//Uso de middlewares
const app = express();
app.use(cors());
app.use(express.json());

//Conectar ao banco de dados
const uri = process.env.Mongo_DB
var db = mongoose.connection;
//MONGODB_URI e a variavel por default que heroku usa como addons para conectar ao banco de dados
mongoose.connect(process.env.MONGODB_URI || uri , {useNewUrlParser: true, useUnifiedTopology: true} );
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function(){
    console.log("Conexao exitosa com MongoDB")
});


//Validacao para deployment em Heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    // app.get('/*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'client','build','index.html'));
    // });
};

app.use("/dashboard", dashboard);


port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port: ${port}` ));