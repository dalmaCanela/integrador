const preguntas = [
    { pregunta: "¿Cuál es la capital de Francia?", opciones: ["Roma", "Madrid", "París", "Londres"], respuesta: 2 },
    { pregunta: "¿En qué continente se encuentra Egipto?", opciones: ["Asia", "Europa", "África", "América"], respuesta: 2 },
    { pregunta: "¿Quién pintó la Mona Lisa?", opciones: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], respuesta: 2 },
    { pregunta: "¿Cuál es el animal más grande del planeta?", opciones: ["Elefante", "Ballena Azul", "Rinoceronte", "Jirafa"], respuesta: 1 },
    { pregunta: "¿En qué año comenzó la Primera Guerra Mundial?", opciones: ["1912", "1914", "1916", "1920"], respuesta: 1 },
    { pregunta: "¿Qué gas constituye la mayor parte de la atmósfera terrestre?", opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], respuesta: 1 },
    { pregunta: "¿Qué instrumento musical tiene teclas blancas y negras?", opciones: ["Guitarra", "Piano", "Batería", "Trompeta"], respuesta: 1 },
    { pregunta: "¿Quién es el autor de 'Cien años de soledad'?", opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Carlos Fuentes"], respuesta: 0 },
    { pregunta: "¿Cuál es el océano más grande del mundo?", opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"], respuesta: 2 },
    { pregunta: "¿Cuántos continentes hay en el mundo?", opciones: ["5", "6", "7", "8"], respuesta: 2 }
];

let preguntaActual = 0;
let respuestasCorrectas = 0;

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual];
        document.getElementById('pregunta').textContent = pregunta.pregunta;
        const opcionesHTML = pregunta.opciones.map((opcion, index) =>
            `<button class="opcion" onclick="verificarRespuesta(${index})">${opcion}</button>`
        ).join('');
        document.getElementById('opciones').innerHTML = opcionesHTML;
    } else {
        mostrarResultado();
    }
}

function verificarRespuesta(opcionSeleccionada) {
    const pregunta = preguntas[preguntaActual];
    if (opcionSeleccionada === pregunta.respuesta) {
        respuestasCorrectas++;
    }
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultado() {
    const porcentaje = (respuestasCorrectas / preguntas.length) * 100;
    if (porcentaje > 70) {
        document.getElementById('resultado').textContent = `¡Felicidades! Has acertado el ${porcentaje}% de las preguntas.`;
    } else {
        document.getElementById('resultado').textContent = `Has acertado el ${porcentaje}% de las preguntas. Intenta de nuevo.`;
    }
}

mostrarPregunta();
