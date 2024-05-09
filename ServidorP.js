const express = require('express');
const cursos = require('./cursos');

// Definir el puerto de conexión del servidor
const PUERTO = process.env.PORT || 3000;

const miServidorARR = express();

// Rutas
miServidorARR.get('/', (req, res) => {
    return res.send("Hola desde la pagina de programacion");
});

miServidorARR.get('/curso', (req, res) => {
    // Trae todos los cursos
    return res.send(cursos);
});


miServidorARR.get('/curso/programacion', (req, res) => {
    // Trae los cursos de programación
    return res.send(cursos.programacion);
});

miServidorARR.get('/curso/programacion/:lenguaje', (req, res) => {
    // Trae los cursos de programación basados en el lenguaje
    const lenguaje = req.params.lenguaje;
    const respuesta = cursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if (respuesta.length === 0) {
        return res.status(404).send(`No se encontraron resultados con el parámetro de búsqueda: ${lenguaje}`);
    }
    return res.send(respuesta);
});

miServidorARR.get('/curso/programacion/:nivel', (req, res) => {
    // Trae los cursos de programación basados en el lenguaje
    const nivel = req.params.nivel;
    const respuesta1 = cursos.programacion.filter(curso => curso.nivel === nivel);
    if (respuesta.length === 0) {
        return res.status(404).send(`No se encontraron resultados con el parámetro de búsqueda: ${nivel}`);
    }
    return res.send(respuesta1);
});


miServidorARR.listen(PUERTO, () => {
    console.log(`Servidor en ejecución en http://localhost:${PUERTO}`);
});



////////////////////////////////////////////////////





const PUERTO1 = process.env.PORT || 4000;

const miServidorArr2 = express();

// Rutas
miServidorArr2.get('/', (req, res) => {
    return res.send("Hola desde la pagina de matematicas");
});

miServidorArr2.get('/curso', (req, res) => {
    // Trae todos los cursos
    return res.send(cursos);
});


miServidorArr2.get('/curso/matematicas', (req, res) => {
    // Trae los cursos de matematicas
    return res.send(cursos.matematicas);
});

miServidorArr2.get('/curso/matematicas/:tema', (req, res) => {
    // Trae los cursos de matematicas y trae los temas
    const tema = req.params.tema;
    const respuesta = cursos.matematicas.filter(curso => curso.tema === tema);
    if (respuesta.length === 0) {
        return res.status(404).send(`No se encontraron resultados con el parámetro de búsqueda: ${tema}`);
    }
    return res.send(respuesta);
});

miServidorArr2.listen(PUERTO1, () => {
    console.log(`Servidor en ejecución en http://localhost:${PUERTO1}`);
});


///////////////////////////////////////////////////////




const PUERTO3 = process.env.PORT || 5000;

const miServidorANRR = express();

// Rutas
miServidorANRR.get('/', (req, res) => {
    return res.send("Hola desde la pagina de empleados");
});

miServidorANRR.get('/curso', (req, res) => {
    // Trae todos los cursos
    return res.send(cursos);
});


miServidorANRR.get('/curso/empleados', (req, res) => {
    // Trae los cursos de matematicas
    return res.send(cursos.empleados);
});

miServidorANRR.get('/curso/empleados/:nombre', (req, res) => {
    // Trae los cursos de programación basados en el lenguaje
    const nombre = req.params.nombre;
    const respuesta = cursos.empleados.filter(curso => curso.nombre === nombre);
    if (respuesta.length === 0) {
        return res.status(404).send(`No se encontraron resultados con el parámetro de búsqueda: ${nombre}`);
    }
    return res.send(respuesta);
});

miServidorANRR.listen(PUERTO3, () => {
    console.log(`Servidor en ejecución en http://localhost:${PUERTO3}`);
});





