function questionFunction(question, answer, help, nombre, duplica, letraCorrecta, trying, opciones) {
    /* Si cualquiera de los personajes son true, y el valor de la pregunta(answer) es distinto del valor de respuesta(answer), 
    ingresa en este bucle se falla a la respuesta */

    if ((nombre === ArrPreguntasHomero[0].nombre || nombre === ArrPreguntasMilhouse[0].nombre) && question !== answer && question !== letraCorrecta) {
        // trying (o intentos) se iguala a i y se le resta 1 para que se mantenga siempre la cuenta de intentos a lo largo del quizz
        for (i = trying - 1; i >= 0; i--) {
            console.log(i)
            if (i === 2) {
                alert(`1° error, te quedan ${i} intentos`);
            } else if (i === 1) {
                alert(`2° error, te queda ${i} intento`);
            }
            // } else if (i === 0 && (piedrasDelTriunfo === 1 || piedrasDelTriunfo === 2)) {
            //     i = i + piedrasDelTriunfo
            //     alert(`Las piedras del triunfo te sacaron de la derrota, usala bien! Tenes ${i} intento más`);
            else {
                while (i === 0) {
                    alert(`Has perdido! Eres expulsado de la sociedad de simpsonmaniacos para siempre! 
                    \nY como humillacion final, quedaras atrapado en el while infinito, \njalando el bucle de la verguenza! 
                    \n\nTu puntaje final fue ${puntaje}`);
                }
            }
            // rehace la pregunta 
            question = prompt(`Elige correctamente ${help} de ${nombre} 
            ${opciones}`);

            // en caso que apreten esc o cancelar los deja en el loop
            while (question == null || question === "") {
                console.log("el while si apretan null dentro del ciclo for")
                question = prompt(`Tratando de escapar? \nImposible 
                \nElige correctamente ${help} de ${nombre}
                ${opciones}
                `)
            }
            question = question.toUpperCase();

            if (question === letraCorrecta || question === answer) {
                
                // piedrasDelTriunfo = piedrasDelTriunfo + 1
                duplicarPuntaje = duplica // En caso que duplica sea False, no duplicara el puntaje. 
                stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, i)
                break;
            }
        }
        alert(`Acabas de salir del bucle de la verguenza, ahora cargaras con 1 piedra del triunfo`);

        // alert(`Acabas de salir del bucle de la verguenza, ahora cargaras con ${piedrasDelTriunfo} piedra del triunfo`);

    } else {
        duplicarPuntaje = duplica
        stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, trying)
        console.log(nombreNuevoJugador)
    }
}

function questionStructure(numberQuestion, question, opciones) {

    alert(`${numberQuestion}`)

    let questionType = prompt(`${question}? 
    \nSi fallas, entrarás en el bucle de la verguenza
    ${opciones}`
    );

    while (questionType == null || questionType === "") {
        console.log("el while si apretan esc o cancelar en el primer")
        questionType = prompt(`Tratando de escapar, verdad? \nTe repito la pregunta \n\n${question}? 
        ${opciones}`);
    }

    questionType = questionType.toUpperCase();
    return questionType
}

function optionFunction(opcionA, opcionB, opcionC, opcionD) {
    let opciones = [`\nA) ${opcionA}`, `\nB) ${opcionB}`, `\nC) ${opcionC}`, `\nD) ${opcionD}`]

    return opciones
}

function stackPuntaje(ultimoPuntaje, respuestaCorrecta, doble, tryingIntentos) {
    if (doble === false && tryingIntentos === 3) {
        alert(`Correcto! \nVas bien! Tu puntaje actual es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta)}`)
    } else if (doble === true && tryingIntentos === 3) {
        alert(`Correcto! \nDuplicaste tu puntaje! Ahora tenes ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2} puntos`)
    } else if (doble === true && tryingIntentos === 2) {
        alert(`Correcto! \nDuplicaste tu puntaje! \nPero debido que ya tienes ${tryingIntentos - 1} error, ahora tu puntaje es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25}`)
    } else if (doble === true && tryingIntentos === 1) {
        alert(`Correcto! \nDuplicaste tu puntaje! \nPero debido que ya tienes ${tryingIntentos + 1} errores, ahora tu puntaje es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25}`)
    } else if (tryingIntentos === 2) {
        alert(`Respuesta correcta! \nDebido que tuviste ${tryingIntentos - 1} error, ahora tu puntaje es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 25}`)
    } else if (tryingIntentos === 1) {
        alert(`Respuesta correcta! \nDebido que tuviste ${tryingIntentos + 1} errores, ahora tu puntaje es ${ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 35}`)
    } else if (tryingIntentos === 1 && ultimoPuntaje < 0) {
        alert(`Perdiste por puntaje negativo, tu puntaje final fue ${ultimoPuntaje}`)
    } else {
        alert(`Perdiste error, tu puntaje final fue ${ultimoPuntaje}`)
    }

    puntaje = ultimoPuntaje // puntaje se guarda y cambia su valor
    nombreNuevoJugador.puntajeFinal = ultimoPuntaje
    duplicarPuntaje = false // duplicarPuntaje pasa a false en caso que una respuesta tenga el duplicarPuntaje en true
    intentos = tryingIntentos // intentos se guarda y cambia su valor a los intentos de fallo que tendria para las proximas preguntas

    // if (intentos === 0 && (piedrasDelTriunfo === 2 || piedrasDelTriunfo === 1)){
    //     piedrasDelTriunfo = piedrasDelTriunfo - 1
    // } else if (piedrasDelTriunfo === 0){
    //     piedrasDelTriunfo = piedrasDelTriunfo
    // }
    console.log(tryingIntentos + " en StackPuntaje")
    console.log(piedrasDelTriunfo + " piedras del triunfo")
    console.log(nombreNuevoJugador)
}


function pushNewPlayerInTopFive() {
    if (nombreNuevoJugador.puntajeFinal >= arrayTopFive[0].puntajeFinal) {
        arrayTopFive.unshift(nombreNuevoJugador);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        alert("Saliste 1ro! Sos el más simpsonmaniaco del Quizz!");

    } else if (arrayTopFive[0].puntajeFinal >= nombreNuevoJugador.puntajeFinal && nombreNuevoJugador.puntajeFinal >= arrayTopFive[1].puntajeFinal) {
        arrayTopFive.splice(1, 0, nombreNuevoJugador);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        alert("Saliste 2do! Por poco y salis primero!");
    } else if (arrayTopFive[1].puntajeFinal >= nombreNuevoJugador.puntajeFinal && nombreNuevoJugador.puntajeFinal >= arrayTopFive[2].puntajeFinal) {
        arrayTopFive.splice(2, 0, nombreNuevoJugador);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        alert("Saliste 3ro! Formas parte del ranking igual!");

    } else if (arrayTopFive[2].puntajeFinal >= nombreNuevoJugador.puntajeFinal && nombreNuevoJugador.puntajeFinal >= arrayTopFive[3].puntajeFinal) {
        arrayTopFive.splice(3, 0, nombreNuevoJugador);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        alert("Saliste 4to!");

    } else if (arrayTopFive[3].puntajeFinal >= nombreNuevoJugador.puntajeFinal && nombreNuevoJugador.puntajeFinal >= arrayTopFive[4].puntajeFinal) {
        arrayTopFive.splice(4, 0, nombreNuevoJugador);
        arrayTopFive.pop();
        console.log(arrayTopFive);
        mostrarTopFive(true);
        alert("Saliste 5to!");

    } else (
        alert("No entraste al ranking")
    )

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function mostrarTopFive(refreshTopFive) {

    if (refreshTopFive === true) {
        const oldLi = document.querySelector('#topFive');
        removeAllChildNodes(oldLi);

        for (const top5 of arrayTopFive) {
            let li = document.createElement("li")
            li.innerHTML = `${top5.nombreJugador}: ${top5.puntajeFinal} puntos`;
            liTopFive.append(li)
        }

    } else {
        for (const top5 of arrayTopFive) {
            let li = document.createElement("li")
            li.innerHTML = `${top5.nombreJugador}: ${top5.puntajeFinal} puntos`;
            liTopFive.append(li)
        }

    }
    return liTopFive
}

function mostrarNombrePersonaje(refreshPersonaje, arrayCharacter) {
    if (refreshPersonaje === true) {
        let h3 = document.createElement("h3")
        h3.innerHTML = `${arrayCharacter}`;
        getNombrePersonajeInHTML.append(h3)

    } else {
        console.log("ups")
    }

    return getNombrePersonajeInHTML
}


function mostrarQuestion(refreshQuestion, arrayCharacter) {

    if (refreshQuestion === true) {
        let h3 = document.createElement("h3")
        h3.innerHTML = `${arrayCharacter}`
        getQuestionInHTML.append(h3)

    } else {
        let h3 = document.querySelector('#question');
        removeAllChildNodes(h3)


    }
    return getQuestionInHTML
}

const ArrPreguntasHomero = [
    // Pregunta 1 Apellido
    {
        nombre: "HOMERO",
        question: "¿Cuál es el apellido de Homero?",
        help: "el apellido",
        opciones:
            [
                { text: "SIMPSON", correct: true, color:"btn-primary" },
                { text: "THOMPSON", correct: false, color:"btn-success" },
                { text: "FLIMPSON", correct: false, color:"btn-danger" },
                { text: "PATIÑO", correct: false, color:"btn-warning" },
            ],
        op_A_apellidoCorrecta: "SIMPSON",
        op_B_apellido: "THOMPSON",
        op_C_apellido: "FLIMPSON",
        op_D_apellido: "PATIÑO",
        duplicaAnswer: false,
        letraCorrecta: "A"
    },
    // Pregunta 2 Edad
    {
        nombre: "HOMERO",
        question: "¿Cuál es la edad de Homero?",
        help: "la edad",
        opciones:
            [
                { text: "37", correct: false, color:"btn-primary" },
                { text: "36", correct: true, color:"btn-success" },
                { text: "40", correct: false, color:"btn-danger" },
                { text: "33", correct: false, color:"btn-warning" },
            ],
        op_A_edad: "37",
        op_B_edadCorrecta: "36",
        op_C_edad: "40",
        op_D_edad: "33",
        duplicaAnswer: true,
        letraCorrecta: "B"
    },
    // Pregunta 3 Bebida
    {
        nombre: "HOMERO",
        question: "¿Cuál es la bebida favorita de Homero?",
        help: "la bebida favorita",
        op_A_bebida: "BUZZ COLA",
        op_B_bebidaCorrecta: "CERVEZA DUFF",
        op_C_bebida: "CERVEZA BUZZ",
        op_D_bebida: "MANAOS",
        duplicaAnswer: false,
        letraCorrecta: "B"
    },
    // Pregunta 4 Amigos
    {
        nombre: "HOMERO",
        question: "¿Quíen es el mejor amigo Homero?",
        help: "mejor amigo",
        op_A_mejorAmigoCorrecta: "BARNEY",
        op_B_mejorAmigo: "MOE",
        op_C_mejorAmigo: "LENNY",
        op_D_mejorAmigo: "CARL",
        duplicaAnswer: true,
        letraCorrecta: "A"
    },
]

const ArrPreguntasMilhouse = [
    // Pregunta 1 Apellido
    {
        nombre: "MILHOUSE",
        question: "¿Cuál es el apellido de Milhouse?",
        help: "el apellido",
        op_A_apellido: "MILHOUSE",
        op_B_apellidoCorrecta: "VAN HOUTEN",
        op_C_apellido: "VAN BUUREN",
        op_D_apellido: "BUBBIE",
        duplicaAnswer: false,
        letraCorrecta: "B"
    },
    // Pregunta 2 Edad
    {
        nombre: "MILHOUSE",
        question: "¿Cuál es la edad de Milhouse?",
        help: "la edad",
        op_A_edad: "10",
        op_B_edad: "5",
        op_C_edad: "8",
        op_D_edadCorrecta: "11",
        duplicaAnswer: true,
        letraCorrecta: "D"
    },
    // Pregunta 3 Bebida
    {
        nombre: "MILHOUSE",
        question: "¿Cuál es la bebida favorita de Milhouse?",
        help: "la bebida favorita",
        op_A_bebida: "BUZZ COLA",
        op_B_bebidaCorrecta: "LECHE DE RATA",
        op_C_bebida: "MALTEADAS KRUSTY",
        op_D_bebida: "MALTEADA CON EXTRA AZUCAR DE APU",
        duplicaAnswer: true,
        letraCorrecta: "B"
    },
    // Pregunta 4 Amigos
    {
        nombre: "MILHOUSE",
        question: "¿Quién el mejor amigo de Milhouse?",
        help: "el mejor amigo",
        op_A_mejorAmigoCorrecta: "BART",
        op_B_mejorAmigo: "NELSON",
        op_C_mejorAmigo: "LISA",
        op_D_mejorAmigo: "RAFA",
        duplicaAnswer: false,
        letraCorrecta: "A"
    },
]


const arrayTopFive = []
const arrayQuestions = []
const arrayOptions = []


//valores iniciales de las variables
let puntaje = 0
let intentos = 3
let respuestaCorrecta = 50
let duplicarPuntaje = false

/* Aun no desarrolle las piedras del triunfo, pero la idea seria uno lo consiga cuando sale del bucle al equivocarse, y 
su funcion sea que de una chance (o intento extra) de seguir jugando, en caso que el jugador ya haya llegado con 0 intentos */
let piedrasDelTriunfo = 0

let pruebaDeBotones = document.getElementById("prueba")

function pruebaBotones(arrayPersonaje, question, answer, help, nombre, duplicaAnswer, letraCorrecta, trying, opciones){
    let pregunta = prompt(`${question} ${opciones}`)

    pregunta = pregunta.toUpperCase();

    let arrayOptions = arrayPersonaje.forEach( (e) => {
        let button = document.createElement("button")
        button.innerHTML = `${e.text}`
        console.log(typeof button.value)
    
        button.addEventListener("click", () =>{
            if(e.correct === true){
                stackPuntaje(puntaje, respuestaCorrecta, duplicaAnswer, intentos)
            } else {
                wrongAnswer(question, 
                    answer,
                    help, 
                    nombre, 
                    duplicaAnswer, 
                    letraCorrecta,
                    intentos, 
                    opciones
                )
            }
        })
    
        button.className = `btn ${e.color} mx-2`
        console.log(button)
        pruebaDeBotones.append(button)
    
    })

    if ((nombre === ArrPreguntasHomero[0].nombre || nombre === ArrPreguntasMilhouse[0].nombre) && pregunta !== answer && pregunta !== letraCorrecta) {
        // trying (o intentos) se iguala a i y se le resta 1 para que se mantenga siempre la cuenta de intentos a lo largo del quizz
        for (i = trying - 1; i >= 0; i--) {
            console.log(i)
            if (i === 2) {
                alert(`1° error, te quedan ${i} intentos`);
            } else if (i === 1) {
                alert(`2° error, te queda ${i} intento`);
            }
            // } else if (i === 0 && (piedrasDelTriunfo === 1 || piedrasDelTriunfo === 2)) {
            //     i = i + piedrasDelTriunfo
            //     alert(`Las piedras del triunfo te sacaron de la derrota, usala bien! Tenes ${i} intento más`);
            else {
                while (i === 0) {
                    alert(`Has perdido! Eres expulsado de la sociedad de simpsonmaniacos para siempre! 
                    \nY como humillacion final, quedaras atrapado en el while infinito, \njalando el bucle de la verguenza! 
                    \n\nTu puntaje final fue ${puntaje}`);
                }
            }
            // rehace la pregunta 
            pregunta = prompt(`Elige correctamente ${help} de ${nombre} 
            ${opciones}`);

            // en caso que apreten esc o cancelar los deja en el loop
            while (pregunta == null || pregunta === "") {
                console.log("el while si apretan null dentro del ciclo for")
                pregunta = prompt(`Tratando de escapar? \nImposible 
                \nElige correctamente ${help} de ${nombre}
                ${opciones}
                `)
            }
            pregunta = pregunta.toUpperCase();

            if (pregunta === letraCorrecta || pregunta === answer) {
                
                // piedrasDelTriunfo = piedrasDelTriunfo + 1
                duplicarPuntaje = duplicaAnswer // En caso que duplica sea False, no duplicara el puntaje. 
                stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, i)
                break;
            }
        }
        alert(`Acabas de salir del bucle de la verguenza, ahora cargaras con 1 piedra del triunfo`);

        // alert(`Acabas de salir del bucle de la verguenza, ahora cargaras con ${piedrasDelTriunfo} piedra del triunfo`);

    } else {
        duplicarPuntaje = duplicaAnswer
        stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, trying)
        console.log(nombreNuevoJugador)
    }

}

function wrongAnswer(question, answer, help, nombre, duplica, letraCorrecta, trying, opciones){
    if ((nombre === ArrPreguntasHomero[0].nombre || nombre === ArrPreguntasMilhouse[0].nombre) && answer !== "true" && question !== letraCorrecta) {
        // trying (o intentos) se iguala a i y se le resta 1 para que se mantenga siempre la cuenta de intentos a lo largo del quizz
        for (i = trying - 1; i >= 0; i--) {
            console.log(i)
            if (i === 2) {
                alert(`1° error, te quedan ${i} intentos`);
                
            } else if (i === 1) {
                alert(`2° error, te queda ${i} intento`);
                
            }
            // } else if (i === 0 && (piedrasDelTriunfo === 1 || piedrasDelTriunfo === 2)) {
            //     i = i + piedrasDelTriunfo
            //     alert(`Las piedras del triunfo te sacaron de la derrota, usala bien! Tenes ${i} intento más`);
            else {
                while (i === 0) {
                    alert(`Has perdido! Eres expulsado de la sociedad de simpsonmaniacos para siempre! 
                    \nY como humillacion final, quedaras atrapado en el while infinito, \njalando el bucle de la verguenza! 
                    \n\nTu puntaje final fue ${puntaje}`);
                }
            }
            // rehace la pregunta 
            question = prompt(`Elige correctamente ${help} de ${nombre} 
            ${opciones}`);

            // en caso que apreten esc o cancelar los deja en el loop
            // while (question == null || question === "") {
            //     console.log("el while si apretan null dentro del ciclo for")
            //     question = prompt(`Tratando de escapar? \nImposible 
            //     \nElige correctamente ${help} de ${nombre}
               
            //     `)
            // }
            question = question.toUpperCase();

            if (answer === "true" || question === letraCorrecta || question === answer) {
                // piedrasDelTriunfo = piedrasDelTriunfo + 1
                duplicarPuntaje = duplica // En caso que duplica sea False, no duplicara el puntaje. 
                stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, i)
                break;
            }
        }
        alert(`Acabas de salir del bucle de la verguenza, ahora cargaras con 1 piedra del triunfo`);

        // alert(`Acabas de salir del bucle de la verguenza, ahora cargaras con ${piedrasDelTriunfo} piedra del triunfo`);

    } else {
        duplicarPuntaje = duplica
        stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, trying)
        console.log(nombreNuevoJugador)
    }
}


class newPlayer {
    constructor(nombreJugador, puntajeFinal) {
        this.nombreJugador = nombreJugador
        this.puntajeFinal = puntajeFinal
    }
    getNombreJugador() {
        return `${this.nombreJugador}: `
    }
    getPuntajeFinal() {
        return `${this.puntajeFinal} puntos`
    }
}

const playerOneInTopFive = new newPlayer("Jorge", 600)
const playerTwoInTopFive = new newPlayer("Alejandra", 550)
const playerThreeInTopFive = new newPlayer("Mariana", 500)
const playerFourInTopFive = new newPlayer("Agustin", 400)
const playerFiveInTopFive = new newPlayer("Ramiro", 355)

arrayTopFive.push(playerOneInTopFive, playerTwoInTopFive, playerThreeInTopFive, playerFourInTopFive, playerFiveInTopFive)


let getQuestionInHTML = document.getElementById("question")
let getNombrePersonajeInHTML = document.getElementById("nombrePersonaje")


let liTopFive = document.getElementById("topFive")
mostrarTopFive(false)


// Inicia el programa
alert("Bienvenido al Proyecto Final: Quizz de los Simpson!")

const nombreNuevoJugador = new newPlayer(prompt("Ingresa tu nombre, podrias formar parte del Top 5!"), puntaje)

while (nombreNuevoJugador.nombreJugador == null || nombreNuevoJugador.nombreJugador == "") {
    nombreNuevoJugador.nombreJugador = prompt("Por favor ingresa tu nombre, podrias formar parte del Top 5!")
}

console.log(nombreNuevoJugador)

let personaje = prompt(`Hola ${nombreNuevoJugador.nombreJugador}, elegí algún personaje de la lista: \nA)${ArrPreguntasHomero[0].nombre} \nB)${ArrPreguntasMilhouse[0].nombre}`)

while ((personaje != ArrPreguntasHomero[0].nombre && personaje != "a" && personaje != ArrPreguntasMilhouse[0].nombre && personaje != "b") || personaje == null) {
    personaje = prompt(`Por favor, elegi algun personaje de la lista: \nA)${ArrPreguntasHomero[0].nombre} \nB)${ArrPreguntasMilhouse[0].nombre}`);
}

personaje = personaje.toUpperCase();

if (personaje === "a" || personaje === "A" || personaje === ArrPreguntasHomero[0].nombre) {

    alert("Primer pregunta")
    mostrarNombrePersonaje(true, ArrPreguntasHomero[0].nombre);
    mostrarQuestion(true, ArrPreguntasHomero[0].question)

    pruebaBotones(ArrPreguntasHomero[0].opciones, 
        ArrPreguntasHomero[0].question, 
        ArrPreguntasHomero[0].opciones[0].text,
        ArrPreguntasHomero[0].help,
        ArrPreguntasHomero[0].nombre,
        ArrPreguntasHomero[0].duplicaAnswer,
        ArrPreguntasHomero[0].letraCorrecta,
        intentos,
        optionFunction( ArrPreguntasHomero[0].op_A_apellidoCorrecta,
            ArrPreguntasHomero[0].op_B_apellido,
            ArrPreguntasHomero[0].op_C_apellido,
            ArrPreguntasHomero[0].op_D_apellido)
    )
    
    // mostrarQuestion(false)

    // // ------
    alert("Segunda pregunta")

    mostrarQuestion(true, ArrPreguntasHomero[1].question)
    
    pruebaBotones(ArrPreguntasHomero[1].opciones, 
        ArrPreguntasHomero[1].question, 
        ArrPreguntasHomero[1].opciones[1].text,
        ArrPreguntasHomero[1].help,
        ArrPreguntasHomero[1].nombre,
        ArrPreguntasHomero[1].duplicaAnswer,
        ArrPreguntasHomero[1].letraCorrecta,
        intentos,
        optionFunction( ArrPreguntasHomero[1].op_A_edad,
            ArrPreguntasHomero[1].op_B_edadCorrecta,
            ArrPreguntasHomero[1].op_C_edad,
            ArrPreguntasHomero[1].op_D_edad)
    )
    
    pushNewPlayerInTopFive()

} else if (personaje === "b" || personaje === "B" || personaje === ArrPreguntasMilhouse[0].nombre) {
    questionFunction(
        questionStructure("Primer Pregunta!", ArrPreguntasMilhouse[0].question,
            optionFunction(ArrPreguntasMilhouse[0].op_A_apellido,
                ArrPreguntasMilhouse[0].op_B_apellidoCorrecta,
                ArrPreguntasMilhouse[0].op_C_apellido,
                ArrPreguntasMilhouse[0].op_D_apellido)),
        // answer
        ArrPreguntasMilhouse[0].op_B_apellidoCorrecta,
        ArrPreguntasMilhouse[0].help,
        ArrPreguntasMilhouse[0].nombre,
        ArrPreguntasMilhouse[0].duplicaAnswer,
        ArrPreguntasMilhouse[0].letraCorrecta,
        intentos,
        optionFunction(ArrPreguntasMilhouse[0].op_A_apellido,
            ArrPreguntasMilhouse[0].op_B_apellidoCorrecta,
            ArrPreguntasMilhouse[0].op_C_apellido,
            ArrPreguntasMilhouse[0].op_D_apellido
        )
    ),
        questionFunction(
            questionStructure("Segunda Pregunta!", ArrPreguntasMilhouse[1].question,
                optionFunction(ArrPreguntasMilhouse[1].op_A_edad,
                    ArrPreguntasMilhouse[1].op_B_edad,
                    ArrPreguntasMilhouse[1].op_C_edad,
                    ArrPreguntasMilhouse[1].op_D_edadCorrecta)),
            // answer
            ArrPreguntasMilhouse[1].op_D_edadCorrecta,
            ArrPreguntasMilhouse[1].help,
            ArrPreguntasMilhouse[1].nombre,
            ArrPreguntasMilhouse[1].duplicaAnswer,
            ArrPreguntasMilhouse[1].letraCorrecta,
            intentos,
            optionFunction(ArrPreguntasMilhouse[1].op_A_edad,
                ArrPreguntasMilhouse[1].op_B_edad,
                ArrPreguntasMilhouse[1].op_C_edad,
                ArrPreguntasMilhouse[1].op_D_edadCorrecta
            )
        ),
        questionFunction(
            questionStructure("Tercer Pregunta!", ArrPreguntasMilhouse[2].question,
                optionFunction(ArrPreguntasMilhouse[2].op_A_bebida,
                    ArrPreguntasMilhouse[2].op_B_bebidaCorrecta,
                    ArrPreguntasMilhouse[2].op_C_bebida,
                    ArrPreguntasMilhouse[2].op_D_bebida)),
            // answer
            ArrPreguntasMilhouse[2].op_B_bebidaCorrecta,
            ArrPreguntasMilhouse[2].help,
            ArrPreguntasMilhouse[2].nombre,
            ArrPreguntasMilhouse[2].duplicaAnswer,
            ArrPreguntasMilhouse[2].letraCorrecta,
            intentos,
            optionFunction(ArrPreguntasMilhouse[2].op_A_bebida,
                ArrPreguntasMilhouse[2].op_B_bebidaCorrecta,
                ArrPreguntasMilhouse[2].op_C_bebida,
                ArrPreguntasMilhouse[2].op_D_bebida
            )
        ),
        questionFunction(
            questionStructure("Cuarta Pregunta!", ArrPreguntasMilhouse[3].question,
                optionFunction(ArrPreguntasMilhouse[3].op_A_mejorAmigoCorrecta,
                    ArrPreguntasMilhouse[3].op_B_mejorAmigo,
                    ArrPreguntasMilhouse[3].op_C_mejorAmigo,
                    ArrPreguntasMilhouse[3].op_D_mejorAmigo)),
            //answer
            ArrPreguntasMilhouse[3].op_A_mejorAmigoCorrecta,
            ArrPreguntasMilhouse[3].help,
            ArrPreguntasMilhouse[3].nombre,
            ArrPreguntasMilhouse[3].duplicaAnswer,
            ArrPreguntasMilhouse[3].letraCorrecta,
            intentos,
            optionFunction(ArrPreguntasMilhouse[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasMilhouse[3].op_B_mejorAmigo,
                ArrPreguntasMilhouse[3].op_C_mejorAmigo,
                ArrPreguntasMilhouse[3].op_D_mejorAmigo
            )
        )
    pushNewPlayerInTopFive()
}

console.log(intentos + " intentos refresh")
console.log(puntaje)