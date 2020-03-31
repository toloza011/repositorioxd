'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose= require('mongoose')
var  PersonaController= require('./controladores/personaController');
const Product =require('./modelos/product')

const app = express()


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin','Authorization, X-API-KEY, Origin, X-Requested-');
    res.header('Access-Control-Allow-Origin','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
 });

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

 

app.post('/persona',PersonaController.creaPersona);
app.get('/personas',PersonaController.listarpersonas);








mongoose.connect('mongodb+srv://tolozaxd:mipass@dbweb-kibyw.gcp.mongodb.net/test?retryWrites=true&w=majority',(err,res)=>{
    if(err) throw err
    console.log('Conexion exitosa')
    app.listen(3004,()=>{
        console.log("Esta corriendo en puerto 3004")
    })
})



