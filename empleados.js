const express = require('express');
const cursos = require('./cursos');

// Definir el puerto de conexión del servidor
const PUERTO3 = process.env.PORT || 5000;

const miServidorSEPP = express();

// Rutas
miServidorSEPP.get('/', (req, res) => {
    return res.send("Hola desde la pagina de empleados");
});

miServidorSEPP.get('/curso', (req, res) => {
    // Trae todos los cursos
    return res.send(cursos);
});


miServidorSEPP.get('/curso/empleados', (req, res) => {
    // Trae los cursos de matematicas
    return res.send(cursos.empleados);
});

miServidorSEPP.get('/curso/empleados/:nombre', (req, res) => {
    // Trae los cursos de programación basados en el lenguaje
    const nombre = req.params.nombre;
    const respuesta = cursos.empleados.filter(curso => curso.nombre === nombre);
    if (respuesta.length === 0) {
        return res.status(404).send(`No se encontraron resultados con el parámetro de búsqueda: ${nombre}`);
    }
    return res.send(respuesta);
});

miServidorSEPP.listen(PUERTO3, () => {
    console.log(`Servidor en ejecución en http://localhost:${PUERTO3}`);
});