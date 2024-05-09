const express = require('express');
const cursos = require('./cursos');

// Definir el puerto de conexión del servidor
const PUERTO1 = process.env.PORT || 3000;

const miServidorSPP = express();

// Rutas
miServidorSPP.get('/', (req, res) => {
    return res.send("Hola desde la pagina de matematicas");
});

miServidorSPP.get('/curso', (req, res) => {
    // Trae todos los cursos
    return res.send(cursos);
});


miServidorSPP.get('/curso/matematicas', (req, res) => {
    // Trae los cursos de matematicas
    return res.send(cursos.matematicas);
});

miServidorSPP.get('/curso/matematicas/:tema', (req, res) => {
    // Trae los cursos de matematicas y trae los temas
    const tema = req.params.tema;
    const respuesta = cursos.matematicas.filter(curso => curso.tema === tema);
    if (respuesta.length === 0) {
        return res.status(404).send(`No se encontraron resultados con el parámetro de búsqueda: ${tema}`);
    }
    return res.send(respuesta);
});

miServidorSPP.listen(PUERTO, () => {
    console.log(`Servidor en ejecución en http://localhost:${PUERTO}`);
});

