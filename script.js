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
            while (question == null) {
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

function optionFunction(opcionA, opcionB, opcionC, opcionD) {
    let opciones = [`\nA) ${opcionA}`, `\nB) ${opcionB}`, `\nC) ${opcionC}`, `\nD) ${opcionD}`]

    return opciones
}

function questionOne(question, opciones) {

    let questionOne = prompt(`${question}? 
    \nSi fallas, entrarás en el bucle de la verguenza
    ${opciones}`
    );

    while (questionOne == null) {
        console.log("el while si apretan esc o cancelar en el primer")
        questionOne = prompt(`Tratando de escapar, verdad? \nTe repito la pregunta \n\n${question}? 
        ${opciones}`);
    }

    questionOne = questionOne.toUpperCase();
    return questionOne
}

function questionTwo(question, opciones) {

    alert("Segunda Pregunta!")

    let questionTwo = prompt(`${question}? 
    \nSi fallas, entrarás en el bucle de la verguenza
    ${opciones}`
    );

    while (questionTwo == null) {
        console.log("el while si apretan esc o cancelar en el primer")
        questionTwo = prompt(`Tratando de escapar, verdad? \nTe repito la pregunta \n\n${question}? 
        ${opciones}`);
    }

    questionTwo = questionTwo.toUpperCase();
    return questionTwo
}

function questionThree(question, opciones) {

    alert("Tercera Pregunta!")

    let questionThree = prompt(`${question}? 
    \nSi fallas, entrarás en el bucle de la verguenza
    ${opciones}`
    );

    while (questionThree == null) {
        console.log("el while si apretan esc o cancelar en el primer")
        questionThree = prompt(`Tratando de escapar, verdad? \nTe repito la pregunta \n\n${question}? 
        ${opciones}`);
    }

    questionThree = questionThree.toUpperCase();
    return questionThree
}

function questionFour(question, opciones) {

    alert("Cuarta Pregunta!")

    let questionFour = prompt(`${question}? 
    \nSi fallas, entrarás en el bucle de la verguenza
    ${opciones}`
    );

    while (questionFour == null) {
        console.log("el while si apretan esc o cancelar en el primer")
        questionFour = prompt(`Tratando de escapar, verdad? \nTe repito la pregunta \n\n${question}? 
        ${opciones}`);
    }

    questionFour = questionFour.toUpperCase();
    return questionFour
}

function pushNuevoJugadorInTopFive(){
    if (nombreNuevoJugador.puntajeFinal >= arrTopFive[0].puntajeFinal){

        arrTopFive.unshift(nombreNuevoJugador)
        arrTopFive.pop()
        console.log(arrTopFive)
        mostrarTopFive()
   

        alert("Saliste 1ro! Sos el más simpsonmaniaco del Quizz!")
    } else if (arrTopFive[0].puntajeFinal >= nombreNuevoJugador.puntajeFinal && nombreNuevoJugador.puntajeFinal >= arrTopFive[1].puntajeFinal){
        arrTopFive.splice(1, 0, nombreNuevoJugador)
        arrTopFive.pop()
        console.log(arrTopFive)
        alert("Saliste 2do! Por poco y salis primero!")
    } else if (arrTopFive[1].puntajeFinal >= nombreNuevoJugador.puntajeFinal && nombreNuevoJugador.puntajeFinal >= arrTopFive[2].puntajeFinal){
        arrTopFive.splice(2, 0, nombreNuevoJugador)
        arrTopFive.pop()
        console.log(arrTopFive)
        alert("Saliste 3ro! Formas parte del ranking igual!")

    } else if (arrTopFive[2].puntajeFinal >= nombreNuevoJugador.puntajeFinal && nombreNuevoJugador.puntajeFinal >= arrTopFive[3].puntajeFinal){
        arrTopFive.splice(3, 0, nombreNuevoJugador)
        arrTopFive.pop()
        console.log(arrTopFive)
        alert("Saliste 4to!")
    } else if (arrTopFive[3].puntajeFinal >= nombreNuevoJugador.puntajeFinal && nombreNuevoJugador.puntajeFinal >= arrTopFive[4].puntajeFinal){
        arrTopFive.splice(4, 0, nombreNuevoJugador)
        arrTopFive.pop()
        console.log(arrTopFive)
        alert("Saliste 5to!")
    } else (
        alert("No entraste al ranking")
    )
    
}

const ArrPreguntasHomero = [
    // Pregunta 1 Apellido
    {
        nombre: "HOMERO",
        question: "¿Cuál es el apellido de Homero?",
        help: "el apellido",
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
        duplicaAnswer: true,
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

//valores iniciales de las variables
let puntaje = 0
let intentos = 3
let respuestaCorrecta = 50
let duplicarPuntaje = false

/* Aun no desarrolle las piedras del triunfo, pero la idea seria uno lo consiga cuando sale del bucle al equivocarse, y 
su funcion sea que de una chance (o intento extra) de seguir jugando, en caso que el jugador ya haya llegado con 0 intentos */
let piedrasDelTriunfo = 0

/* const sliceArrPregHomero = ArrPreguntasHomero.slice(0, 1)
const sliceArrPregMilhouse = ArrPreguntasMilhouse.slice(0, 1)

const arrWithCorrectOptions = (opCorrecta, letraCorrecta) => {
    let arr = [opCorrecta, letraCorrecta]
    return arr
}

arrWithCorrectOptions(sliceArrPregHomero[0].op_A_apellidoCorrecta, sliceArrPregHomero[0].letraCorrecta) */

alert("Bienvenido al Proyecto Final: Quizz de los Simpson!")

let arrTopFive = [
    {nombreJugador: "Jorge", puntajeFinal: 600 },
    {nombreJugador: "Alejandra", puntajeFinal: 550 },
    {nombreJugador: "Mariana", puntajeFinal: 500 },
    {nombreJugador: "Agustin", puntajeFinal: 400 },
    {nombreJugador: "Ramiro", puntajeFinal: 355 }
]

let topFive = document.getElementById("topFive")



function mostrarTopFive(){
    for (const top5 of arrTopFive ){
        let li = document.createElement("li")
        li.innerHTML = JSON.stringify(`${top5.nombreJugador}: ${top5.puntajeFinal} puntos `);
        topFive.append(li)
    }
    arrTopFive
}
mostrarTopFive()



class nuevoJugador {
    constructor (nombreJugador, puntajeFinal){
        this.nombreJugador = nombreJugador
        this.puntajeFinal = puntajeFinal
    }
    // Aun no implemente estos gets
    getNombreJugador(){
        return this.nombreJugador
    }
    getPuntajeFinal(){
        return this.puntajeFinal
    }
}


// aun no implmemente esta class
/* class dbTopFive {
    constructor (){
        this.nombreJugador = []
    }
} */

const nombreNuevoJugador = new nuevoJugador(prompt("Ingresa tu nombre, podrias formar parte del Top 5!"), puntaje)

let personaje = prompt(`Hola ${nombreNuevoJugador.nombreJugador}, elegí algún personaje de la lista: \nA)${ArrPreguntasHomero[0].nombre} \nB)${ArrPreguntasMilhouse[0].nombre}`)

while ((personaje != ArrPreguntasHomero[0].nombre && personaje != "a" && personaje != ArrPreguntasMilhouse[0].nombre && personaje != "b") || personaje == null) {
    personaje = prompt(`Por favor, elegi algun personaje de la lista: \nA)${ArrPreguntasHomero[0].nombre} \nB)${ArrPreguntasMilhouse[0].nombre}`);
}

personaje = personaje.toUpperCase();

if (personaje === "a" || personaje === "A" || personaje === ArrPreguntasHomero[0].nombre) {
    questionFunction(
        questionOne(ArrPreguntasHomero[0].question,
            optionFunction(ArrPreguntasHomero[0].op_A_apellidoCorrecta,
                ArrPreguntasHomero[0].op_B_apellido,
                ArrPreguntasHomero[0].op_C_apellido,
                ArrPreguntasHomero[0].op_D_apellido)),
        //answer
        ArrPreguntasHomero[0].op_A_apellidoCorrecta,
        ArrPreguntasHomero[0].help,
        ArrPreguntasHomero[0].nombre,
        ArrPreguntasHomero[0].duplicaAnswer,
        ArrPreguntasHomero[0].letraCorrecta,
        intentos,
        /* opcionesFunction se llama 2 veces debido que una es dentro de la funcion questionOne, y la otra es para 
        que este en la funcion de questionFunction, y poder invocarla las opciones nuevamente pero dentro de dicha funcion
        */
        optionFunction(ArrPreguntasHomero[0].op_A_apellidoCorrecta,
            ArrPreguntasHomero[0].op_B_apellido,
            ArrPreguntasHomero[0].op_C_apellido,
            ArrPreguntasHomero[0].op_D_apellido
        )
    )
    questionFunction(
        questionTwo(ArrPreguntasHomero[1].question,
            optionFunction(ArrPreguntasHomero[1].op_A_edad,
                ArrPreguntasHomero[1].op_B_edadCorrecta,
                ArrPreguntasHomero[1].op_C_edad,
                ArrPreguntasHomero[1].op_D_edad)),
        //answer
        ArrPreguntasHomero[1].op_B_edadCorrecta,
        ArrPreguntasHomero[1].help,
        ArrPreguntasHomero[1].nombre,
        ArrPreguntasHomero[1].duplicaAnswer,
        ArrPreguntasHomero[1].letraCorrecta,
        intentos,
        optionFunction(ArrPreguntasHomero[1].op_A_edad,
            ArrPreguntasHomero[1].op_B_edadCorrecta,
            ArrPreguntasHomero[1].op_C_edad,
            ArrPreguntasHomero[1].op_D_edad
        )
    ),
    questionFunction(
        questionThree(ArrPreguntasHomero[2].question,
            optionFunction(ArrPreguntasHomero[2].op_A_bebida,
                ArrPreguntasHomero[2].op_B_bebidaCorrecta,
                ArrPreguntasHomero[2].op_C_bebida,
                ArrPreguntasHomero[2].op_D_bebida)),
        //answer
        ArrPreguntasHomero[2].op_B_bebidaCorrecta,
        ArrPreguntasHomero[2].help,
        ArrPreguntasHomero[2].nombre,
        ArrPreguntasHomero[2].duplicaAnswer,
        ArrPreguntasHomero[2].letraCorrecta,
        intentos,
        optionFunction(ArrPreguntasHomero[2].op_A_bebida,
            ArrPreguntasHomero[2].op_B_bebidaCorrecta,
            ArrPreguntasHomero[2].op_C_bebida,
            ArrPreguntasHomero[2].op_D_bebida
        )
    ),
    questionFunction(
        questionFour(ArrPreguntasHomero[3].question,
            optionFunction(ArrPreguntasHomero[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasHomero[3].op_B_mejorAmigo,
                ArrPreguntasHomero[3].op_C_mejorAmigo,
                ArrPreguntasHomero[3].op_D_mejorAmigo)),
        //answer
        ArrPreguntasHomero[3].op_A_mejorAmigoCorrecta,
        ArrPreguntasHomero[3].help,
        ArrPreguntasHomero[3].nombre,
        ArrPreguntasHomero[3].duplicaAnswer,
        ArrPreguntasHomero[3].letraCorrecta,
        intentos,
        optionFunction(ArrPreguntasHomero[3].op_A_mejorAmigoCorrecta,
            ArrPreguntasHomero[3].op_B_mejorAmigo,
            ArrPreguntasHomero[3].op_C_mejorAmigo,
            ArrPreguntasHomero[3].op_D_mejorAmigo
        )
    )
    pushNuevoJugadorInTopFive()
    
} else if (personaje === "b"  || personaje === "B" || personaje === ArrPreguntasMilhouse[0].nombre) {
    questionFunction(
        questionOne(ArrPreguntasMilhouse[0].question,
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
        questionTwo(ArrPreguntasMilhouse[1].question,
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
        questionThree(ArrPreguntasMilhouse[2].question,
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
        questionFour(ArrPreguntasMilhouse[3].question,
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
    pushNuevoJugadorInTopFive()
    
}

console.log(intentos + " intentos refresh")
console.log(puntaje)
