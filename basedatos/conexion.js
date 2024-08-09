const mongoose = require("mongoose"); //importa lo que hay en node_modules.

const conexion = async() =>{

    try{
        mongoose.connect("mongodb://localhost:27017/mi_blog"); //direccion base de datos mongo + nombre base de datos.
        console.log("conexion con la base de datos exitosa"); //si la conexion es exitosa muestra el mensaje por consola.
    }catch(error){
        console.log(error);
        throw new Error("No hay conexion con la base de datos") //mensaje por consola si hay algun error.
    }
} 

module.exports ={
    conexion
}