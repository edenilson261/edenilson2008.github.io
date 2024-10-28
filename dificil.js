let preguntas = [
    { pregunta: "¿Cuánto es 12 - 4?", respuestas: [8, 9, 7], correcta: 0 },
    { pregunta: "¿Cuánto es 6 x 3?", respuestas: [18, 15, 20], correcta: 0 },
    { pregunta: "¿Cuánto es 16 ÷ 4?", respuestas: [4, 5, 6], correcta: 0 },
    { pregunta: "¿Cuánto es 15 - 9?", respuestas: [6, 5, 7], correcta: 0 },
    { pregunta: "¿Cuánto es 7 x 2?", respuestas: [14, 12, 15], correcta: 0 },
    { pregunta: "¿Cuánto es 20 ÷ 5?", respuestas: [4, 5, 6], correcta: 0 },
    { pregunta: "¿Cuánto es 11 - 6?", respuestas: [5, 4, 6], correcta: 0 },
    { pregunta: "¿Cuánto es 9 x 2?", respuestas: [18, 19, 20], correcta: 0 },
    { pregunta: "¿Cuánto es 30 ÷ 6?", respuestas: [5, 6, 7], correcta: 0 },
    { pregunta: "¿Cuánto es 14 - 7?", respuestas: [7, 6, 8], correcta: 0 },
    { pregunta: "¿Cuánto es 8 x 2?", respuestas: [16, 14, 15], correcta: 0 },
    { pregunta: "¿Cuánto es 28 ÷ 4?", respuestas: [7, 6, 8], correcta: 0 },
    { pregunta: "¿Cuánto es 10 - 3?", respuestas: [7, 8, 6], correcta: 0 },
    { pregunta: "¿Cuánto es 5 x 5?", respuestas: [25, 20, 30], correcta: 0 },
    { pregunta: "¿Cuánto es 36 ÷ 6?", respuestas: [6, 7, 5], correcta: 0 },
    { pregunta: "¿Cuánto es 18 - 9?", respuestas: [9, 8, 7], correcta: 0 },
];

let preguntaActual;

function iniciarJuego() {
    mostrarPregunta();
}

function mostrarPregunta() {
    if (preguntas.length === 0) {
        mostrarFelicitaciones();
        return;
    }
    preguntaActual = preguntas[Math.floor(Math.random() * preguntas.length)];
    const index = preguntas.indexOf(preguntaActual);
    preguntas.splice(index, 1);

    document.getElementById("pregunta").innerText = preguntaActual.pregunta;

    const opciones = document.querySelectorAll(".opcion");
    let respuestas = [...preguntaActual.respuestas];
    respuestas.sort(() => Math.random() - 0.5);

    opciones.forEach((opcion, i) => {
        opcion.innerText = respuestas[i];
        opcion.onclick = () => verificarRespuesta(respuestas[i]);
    });
}

function verificarRespuesta(respuesta) {
    if (respuesta === preguntaActual.respuestas[preguntaActual.correcta]) {
        mostrarPregunta(); 
    } else {
        document.getElementById("pregunta").innerText = "Respuesta incorrecta";
        setTimeout(() => {
            mostrarPregunta(); 
        }, 1500);
    }
}

function mostrarFelicitaciones() {
    document.getElementById("pregunta").innerText = "¡Felicidades! Completaste el nivel.";
    setTimeout(() => {
        window.location.href = "menu.html";
    }, 3000);
}

window.onload = iniciarJuego;
