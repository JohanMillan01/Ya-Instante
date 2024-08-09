const {conexion} = require("./basedatos/conexion"); //importa o enlaza la carpeta de conexion.js. Se escribe la direccion del archivo.
const express = require("express"); //importa express.
const cors = require("cors");
const { Collection } = require("mongoose");




//inicializar App
console.log("App de Node Iniciada");

//conectar la base de datos
conexion();

// crea servidor Node
const app = express();//inicializa la app
const puerto = 3900; //crea puerto para http

app.set('view engine', 'ejs');//permite visualiza las rutas

//archivos estaticos, imagenes y videos etc.
app.use(express.static("public"));

//configura cors
app.use(cors());

//convertir body o cualquier objeto a Js para la base de datos.
app.use(express.json());



//crear rutas de prueba(al localhost:3900 se le agrega la ruta creada (localhost3900/probando))

app.get("/login", (req,res)=>{
    res.render("login")
});


app.get("/signup",(req, res)=>{
    res.render("signup")
})

app.post("/signup", async (req, res) =>{
    const data ={
        name: req.body.username,
        password: req.body.password
    };

    try {
        const userdata = await collection.insertMany([data]);
        console.log(userdata);
        res.send("Usuario registrado Correctamente");
    } catch (error) {
        console.error ('Error al registrar el usuario:', error);
        res.status(500) .send("Error al registrar el usuario");
    }
})



app.get("/home",(req,res)=>{
    res.render("home")
})

//crear servidor para escuchar peticiones http
app.listen(puerto,()=>{
    console.log("Servidor creado en puerto "+puerto);// muestra mensaje en consola del puerto http creado.
});
