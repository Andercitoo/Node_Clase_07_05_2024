let cursos = {
    programacion:[
        {
            "id": 1,
            "titulo": "Curso de Java",
            "lenguaje": "Java",
            "vistas": 333333,
            "nivel": "easy"
          },
          {
            "id": 2,
            "titulo": "Curso de Python",
            "lenguaje": "Python",
            "vistas": 250000,
            "nivel": "intermediate"
          },
          {
            "id": 3,
            "titulo": "Curso de C++",
            "lenguaje": "C++",
            "vistas": 180000,
            "nivel": "intermediate"
          },
          {
            "id": 4,
            "titulo": "Curso de JavaScript",
            "lenguaje": "JavaScript",
            "vistas": 400000,
            "nivel": "easy"
          },
          {
            "id": 5,
            "titulo": "Curso de HTML y CSS",
            "lenguaje": ["HTML", "CSS"],
            "vistas": 300000,
            "nivel": "easy"
          }
        ],
    matematicas: [ {
        "id": 1,
        "titulo": "Aprende a sumar",
        "tema": "Suma",
        "vistas": 333333,
        "nivel": "easy"
      },
      {
          "id": 2,
        "titulo": "Aprende a restar",
        "tema": "Resta",
        "vistas": 333333,
        "nivel": "easy"
      },
      {
          "id": 3,
        "titulo": "Aprende a multiplicar",
        "tema": "Multiplicacion",
        "vistas": 333333,
        "nivel": "medium"
      },
      {
          "id": 4,
        "titulo": "Aprende a dividir",
        "tema": "Divicion",
        "vistas": 333333,
        "nivel": "hard"
      }
    ],
    empleados: [
        {
            "id": 1,
            "nombre": "Anderson",
            "apellido": "Rodriguez",
            "correo": "andersonrorivera@gmail.com",
            "sueldo": 100000,
            "equipo": "LENOVO",
            "nombre_equipo": "DESKTOP-LPTI9L5"
        },
        {
            "id": 9,
            "nombre": "Harold Mauricio",
            "apellido": "Gomez Zapata",
            "correo": "harolgomez@gmail.com",
            "sueldo": 4400000,
            "equipo": "LENOVO",
            "nombre_equipo": "DESKTOP-LPTI9L5"
        },
        {
            "id": 88,
            "nombre": "Sebastian",
            "apellido": "Presiga",
            "correo": "sebastiaan@gmail.com",
            "sueldo": 200000,
            "equipo": "LENOVO",
            "nombre_equipo": "DESKTOP-LPTI9L5"
        },
        {
            "id": 8,
            "nombre": "Santiago",
            "apellido": "Chavarria",
            "correo": "santiagochaarria2006@gmail.com",
            "sueldo": 550000,
            "equipo": "LENOVO",
            "nombre_equipo": "DESKTOP-LPTI9L5"
        },
    ]
    }



module.exports.cursos = cursos;
module.exports.programacion = cursos.programacion;
module.exports.matematicas = cursos.matematicas;
module.exports.empleados = cursos.empleados