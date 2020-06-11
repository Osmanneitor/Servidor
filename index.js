const express = require('express');
const app = express();

let personas = [{ nombre: 'Osman', apellido: 'Cadavid', edad: 23 }, { nombre: 'Juan', apellido: 'Vasquez', edad: 29 }, { nombre: 'Gilberto', apellido: 'Kenedy', edad: 87 }]
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/personas', function (req, res) {

    res.send(personas)
})
app.post('/personas', function (req, res) {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let edad = req.body.edad;
    personas.push({ nombre: nombre, apellido: apellido, edad: edad })
    res.redirect('/')
})
app.put('/', function(req,res){
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let edad = req.body.edad;
    for(let i = 0; i<personas.length;i++){
        if(nombre === personas[i].nombre){
            personas.splice(i,1,{nombre:nombre,apellido:apellido,edad:edad})
        } 
    }
    res.send(personas)
})
app.delete('/', function(req,res){
let nombre= req.body.nombre
for(let i=0;i<personas.length;i++){
    if(nombre===personas[i].nombre){
        personas.splice(i,1)
    }
}
res.send(personas)
})
app.listen(3000)