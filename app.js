require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')

const app = express()

app.use(express.json());

async function startDatabase() {
    const { DB_USER, DB_PASS, DB_NAME } = process.env
    const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@dataaircnc.ijfcmhe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=dataAircnc`;

    try {
        await mongoose.connect(uri);
        console.log("Conectado ao MongoDBAtlas")
    } catch (error){
        console.error('Erro ao conectar ao MongoDBAtlas: ', error.message);
        process.exit(1);
    }
}
 
startDatabase().then ( ()=> {
    const port = process.env.PORT || 3335
    app.listen(port, () =>{
        console.log(`Sevidor rodando na porta ${port}`);
})
 
})