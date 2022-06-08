function pushNewPlayerInTopFive() {
    if (jugadorNuevo[0].puntajeFinal >= arrayTopFive[0].puntajeFinal) {
        arrayTopFive.unshift(jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        // showModalAlerts("Saliste 1ro! Sos el más simpsonmaniaco del Quizz!");
        Swal.fire({
            title: '🏆🥇Saliste 1°!🥇🏆 ',
            html:
                'Sos el más simpsonmaniaco del Quizz!<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/primerLugar.gif',
            imageAlt: 'primerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        hideDiv("divPreguntas"),
        showDivPlayAgain("divPlayAgain"),
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[0].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[1].puntajeFinal) {
        arrayTopFive.splice(1, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        // showModalAlerts("Saliste 2do! Por poco y salis primero!");
        Swal.fire({
            title: '🥈Saliste 2°!🥈',
            html:
                'Ese que salió primero sí que te bailo sabroso<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/segundoLugar.gif',
            imageAlt: 'segundoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        hideDiv("divPreguntas"),
        showDivPlayAgain("divPlayAgain"),
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[1].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[2].puntajeFinal) {
        arrayTopFive.splice(2, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        // showModalAlerts("Saliste 3ro! Formas parte del ranking igual!");
        Swal.fire({
            title: '🥉Saliste 3°!🥉',
            html:
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/tercerLugar.gif',
            imageAlt: 'tercerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        hideDiv("divPreguntas"),
        showDivPlayAgain("divPlayAgain"),
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[2].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[3].puntajeFinal) {
        arrayTopFive.splice(3, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        Swal.fire({
            title: '🎖Saliste 4°!🎖  ',
            html:
                'No es verguenza caer ante el mejor<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/cuartoLugar.gif',
            imageAlt: 'cuartoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        showDivPlayAgain("divPlayAgain"),
        hideDiv("divPreguntas"),
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[3].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[4].puntajeFinal) {
        arrayTopFive.splice(4, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        Swal.fire({
            title: '🎖Saliste 5°!🎖  ',
            html:
                'Por lo menos no se puede caer más bajo..!<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/quintoLugar.gif',
            imageAlt: 'quintoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        showDivPlayAgain("divPlayAgain"),
        hideDiv("divPreguntas"),
        cargarLocalStorage(arrayTopFive)

    } else (
        acomodarDivIntentosPuntaje(),
        hideDiv("divPreguntas"),
        showDivPlayAgain("divPlayAgain"),
        showDiv("divHeader"),
        Swal.fire({
            title: 'Oh no! ',
            html:
                `<b>${puntaje} puntos</b> no son suficientes para entrar en la cumbancha.<br />` +
                `<b>Gracias, vuelvan prontos!</b>`,
            confirmButtonText:
                'PERO..!',
            imageUrl: './images/graciasVuelvaPronto.jpg',
            imageAlt: 'primerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })        
    )

}



function stackPuntaje(ultimoPuntaje, respuestaCorrecta, doble, tryingIntentos) {
    if (doble === false && tryingIntentos === 3) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta)
    } else if (doble === true && tryingIntentos === 3) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2
    } else if (doble === true && tryingIntentos === 2) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25
    } else if (doble === true && tryingIntentos === 1) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25
    } else if (tryingIntentos === 2) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 25
    } else if (tryingIntentos === 1) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 35
    } else if (tryingIntentos === 1 && ultimoPuntaje < 0) {
         ultimoPuntaje
    } else {
        ultimoPuntaje
    }

    puntaje = ultimoPuntaje // puntaje se guarda y cambia su valor
    jugadorNuevo[0].puntajeFinal = ultimoPuntaje
    duplicarPuntaje = false // duplicarPuntaje pasa a false en caso que una respuesta tenga el duplicarPuntaje en true
    intentos = tryingIntentos // intentos se guarda y cambia su valor a los intentos de fallo que tendria para las proximas preguntas
    console.log(tryingIntentos + " en StackPuntaje")
    console.log(jugadorNuevo[0])
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function hideDiv(id_div) {
    document.getElementById(id_div).className = "d-none"

}

function showDiv(id_div) {
    document.getElementById(id_div).className = `d-flex justify-content-around text-center align-items-center bgGradientAlpha`
}

function showDivPlayAgain(id_div) {
    document.getElementById(id_div).className = `d-block`
    containerPlayAgainCumbancha.style = "position:absolute; display:flex;flex-wrap:wrap; justify-content: center "
}

class newPlayer {
    constructor(nombreJugador, puntajeFinal) {
        this.nombreJugador = nombreJugador
        this.puntajeFinal = puntajeFinal
    }
}

const playerOneInTopFive = new newPlayer("Jorge", 590)
const playerTwoInTopFive = new newPlayer("Alejandra", 550)
const playerThreeInTopFive = new newPlayer("Mariana", 500)
const playerFourInTopFive = new newPlayer("Agustin", 400)
const playerFiveInTopFive = new newPlayer("Ramiro", 355)


function cargarLocalStorage(top5) {
    localStorage.setItem("jugadoresTop5", JSON.stringify(top5))
}

let arrMedallas =["🥇","🥈","🥉"]

function mostrarTopFive(refreshTopFive) {
    if (refreshTopFive === true) {
        const oldLi = document.querySelector('#topFive');
        removeAllChildNodes(oldLi);
        arrayTopFive.forEach( (top5, puesto) => { 
            let li = document.createElement("li")
            // li.innerHTML = `<b>${puesto + 1}</b>° ${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}`;
            if(puesto +1 === 1){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(162,100,0,1) 0%, rgba(255,188,0,1) 46%, rgba(255,240,177,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else if(puesto + 1 === 2){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(101,101,101,1) 0%, rgba(167,167,167,1) 44%, rgba(235,235,235,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else if (puesto + 1 === 3){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(71,42,0,1) 0%, rgba(215,101,0,1) 49%, rgba(255,224,193,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else {
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background-color:#e1e1e1; padding:11px; border-radius:5px">
                                    <b style="color:#000000">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            }
            li.style.display = ""
            liTopFive.append(li)

        })
    } else {
        arrayTopFive.forEach( (top5, puesto) => { 
            let li = document.createElement("li")
            // li.innerHTML = `<b>${puesto + 1}</b>° ${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}`;
            if(puesto +1 === 1){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(162,100,0,1) 0%, rgba(255,188,0,1) 46%, rgba(255,240,177,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else if(puesto + 1 === 2){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(101,101,101,1) 0%, rgba(167,167,167,1) 44%, rgba(235,235,235,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else if (puesto + 1 === 3){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(71,42,0,1) 0%, rgba(215,101,0,1) 49%, rgba(255,224,193,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else {
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background-color:#e1e1e1; padding:11px; border-radius:5px">
                                    <b style="color:#000000">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            }
            li.style.display = ""
            liTopFive.append(li)

        })
    }
}


function nuevoJugador() {
    let arrNuevoJugador

    let nuevoJugador = document.getElementById("nuevoJugador")

    if (nuevoJugador.value == null || nuevoJugador.value == "") {
        Swal.fire({
            title: 'Ingrese su nombre',
            text:'Sin nombre no nos iremos en la cumbancha',
            confirmButtonText:
                'Di-je..SU-BA!',
            imageUrl: './images/dijeSuba.webp',
            imageAlt: 'dijeSuba',
            imageWidth: 300,
            imageHeight: 200,
        })
        // showModalAlerts("Sin nombre no hay cumbancha")
    } else if(nuevoJugador.value.length > 18){
        Swal.fire({
            title: 'Nombre muy largo',
            text:'Los dedos que uso para tipear son demasiado gruesos. Para obtener una barra especial oprima todas las teclas con la palma.',
            confirmButtonText:
                'WAAA..!!😱',
            imageUrl: './images/dedosGruesos.webp',
            imageAlt: 'nombreLargo',
            imageWidth: 300,
            imageHeight: 200,
        })
    } else if(nuevoJugador.value.includes("<") || nuevoJugador.value.includes(">") ){
        Swal.fire({
            title: 'Hacker',
            text:'Ha tratado de mandar un <script> aunque no quiera confesarlo. Un autopatrulla va a ir en este momento a su casa. Mientras tanto puede tratar de seguir jugando poniendo su nombre.',
            confirmButtonText:
                'PORQUEE..?!',
            imageUrl: './images/hackerImg.jpg',
            imageAlt: 'hack',
            imageWidth: 300,
            imageHeight: 200,
        })
    } else {
        hideDiv("divShowForm")
        hideDiv("divHeader")
        nuevoJugador = new newPlayer(nuevoJugador.value, puntaje)
        arrNuevoJugador = nuevoJugador
        jugadorNuevo.push(arrNuevoJugador)
    }


    console.log(jugadorNuevo)

    return arrNuevoJugador
}

let arrayTopFive = []
let listaEnLocalStorageTop5 = JSON.parse(localStorage.getItem("jugadoresTop5"))
let liTopFive = document.getElementById("topFive")



function localStorageOrNot() {
    if (listaEnLocalStorageTop5) {
        arrayTopFive = listaEnLocalStorageTop5
        mostrarTopFive(true)
    } else {
        arrayTopFive.push(playerOneInTopFive, playerTwoInTopFive, playerThreeInTopFive, playerFourInTopFive, playerFiveInTopFive)
        mostrarTopFive(false)

    }
}



let puntaje = 0
let intentos = 3
let respuestaCorrecta = 50
let duplicarPuntaje = false


const ingresarQuizz = document.querySelector("#ingresarQuizz")

const personaje1 = document.querySelector("#personaje1")
const personaje2 = document.querySelector("#personaje2")
// const personaje3 = document.querySelector("#personaje3")
const personaje4 = document.querySelector("#personaje4")

const jugadorNuevo = []
const arrPersonajeElegido = []

// Al iniciar el programa verifica si hay una lista de jugadores en el localStorage
// en caso que no haya, crea la lista por players que se crean por defecto 
localStorageOrNot()

// Es el form para ingresar nuevos jugadores a la base de datos local
ingresarQuizz.onclick = (e) => {
    e.preventDefault();
    let nombreJugador = document.getElementById("nombreJugador")
    let nameJugador = nuevoJugador()
    nameJugador == null || nameJugador == "" ? "" : showDiv("divElegirPersonaje");
    nombreJugador.innerHTML = `<h3>Hola ${nameJugador.nombreJugador}</h3>`

}

function elegirPersonaje(idPersonajeElegido) {
    let personajeElegido = document.getElementById(idPersonajeElegido)
    let personajeSelected = document.getElementById("personajeSelected")
    
    hideDiv("divElegirPersonaje")
    showDiv("divPersonajeSeleccionado")
    personajeSelected.innerHTML = `<h4>Elegiste a <span style="font-weight:700; color:rgba(255,209,0,1)">${personajeElegido.value}</span></h4>`
    arrPersonajeElegido.push(personajeElegido.value)
}

const personajeSelected = document.querySelector("#personajeSelected")
const cambiarPersonajeBoton = document.querySelector("#cambiarPersonaje")
const comenzarQuizz = document.querySelector("#comenzarQuizz")
const questionNumber_HTML = document.getElementById("questionNumber")
const question_HTML = document.getElementById("question")
const opcionA_HTML = document.getElementById("opcionA")
const opcionB_HTML = document.getElementById("opcionB")
const opcionC_HTML = document.getElementById("opcionC")
const opcionD_HTML = document.getElementById("opcionD")
const intentos_HTML = document.getElementById("intentos")
const puntaje_HTML = document.getElementById("puntaje")

personaje1.onclick = () => {
    elegirPersonaje("personaje1")
}

personaje2.onclick = () => {
    elegirPersonaje("personaje2")
}
// personaje3.onclick = () => {
//     elegirPersonaje("personaje3")
// }
personaje4.onclick = () => {
    elegirPersonaje("personaje4")
}

cambiarPersonajeBoton.onclick = () => {
    hideDiv("divPersonajeSeleccionado")
    showDiv("divElegirPersonaje")
    arrPersonajeElegido.pop()
}

let nadieQuiereMilhouse = document.getElementById("nadieQuiereMilhouse")

personaje2.onmouseover = () => {
    nadieQuiereMilhouse.innerHTML="¿Enserio vas a elegir a Milhouse?"
}
personaje2.onmouseleave = () => {
    nadieQuiereMilhouse.innerHTML="(NADIE QUIERE A MILHOUSE)"
}

function createButtonContainer(buttonType, buttonColor, option) {
    buttonType.className = `btn ${buttonColor} appearEffect`
    buttonType.style.padding = "15px 50px 15px 50px"
    buttonType.style.fontSize = "1.4em"
    buttonType.value = `${option}`
    buttonType.innerText = `${option}`
}

function removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber) {
    createButtonA.remove()
    createButtonB.remove()
    createButtonC.remove()
    createButtonD.remove()
    createQuestion.remove()
    questionNumber.remove()
}

// En esta funcion se pasan todos los parametros para validar las respuestas y tambien se crean los botones correspondientes a los que
// se les pasa por medio de los parametros varios de sus valores
function quizzForm(questionID, question, answer, opcionA, opcionB, opcionC, opcionD, duplica, arrayLength) {
    intentos_HTML.textContent = `Intentos: ${intentos}`
    puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`

    let createQuestion = document.createElement("h3")
    createQuestion.className = "appearEffect text-white"
    createQuestion.textContent = `${question}`

    let questionNumber = document.createElement("h6")
    questionNumber.textContent = `PREGUNTA ${questionID} DE ${arrayLength}`
    questionNumber.className = "text-white my-4"

    let createButtonA = document.createElement("button")
    createButtonContainer(createButtonA, "btn-primary", opcionA)

    let createButtonB = document.createElement("button")
    createButtonContainer(createButtonB, "btn-success", opcionB)

    let createButtonC = document.createElement("button")
    createButtonContainer(createButtonC, "btn-danger", opcionC)

    let createButtonD = document.createElement("button")
    createButtonContainer(createButtonD, "btn-warning", opcionD)

    let valueOpcionA = opcionA_HTML.appendChild(createButtonA)
    let valueOpcionB = opcionB_HTML.appendChild(createButtonB)
    let valueOpcionC = opcionC_HTML.appendChild(createButtonC)
    let valueOpcionD = opcionD_HTML.appendChild(createButtonD)
    question_HTML.appendChild(createQuestion)
    questionNumber_HTML.appendChild(questionNumber)


    valueOpcionA.onclick = () => {
        correctOrNot(answer, valueOpcionA.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionB.onclick = () => {
        correctOrNot(answer, valueOpcionB.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionC.onclick = () => {
        correctOrNot(answer, valueOpcionC.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionD.onclick = () => {
        correctOrNot(answer, valueOpcionD.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }

}


// Ésta funcion hace que pase de una pregunta a otra
function goNextQuestion(id) {
    if (arrPersonajeElegido[0] === "Homero") {
        if (id === 2) {
            getPreguntas(1,"./preguntasHomero.json")
        } else if (id === 3) {
            getPreguntas(2,"./preguntasHomero.json")
        } else if (id === 4) {
            getPreguntas(3,"./preguntasHomero.json")
        } else {
            pushNewPlayerInTopFive()
        }

    } else if (arrPersonajeElegido[0] === "Milhouse") {
        if (id === 2) {
            getPreguntas(1, "./preguntasMilhouse.json")
        } else if (id === 3) {
            getPreguntas(2, "./preguntasMilhouse.json")
        } else if (id === 4) {
            getPreguntas(3, "./preguntasMilhouse.json")
        } else {
            pushNewPlayerInTopFive()
        }

    } else if (arrPersonajeElegido[0] === "Random") {
        if (id === 2) {
            getPreguntas(1, "./preguntasRandom.json")

        } else if (id === 3) {
            getPreguntas(2, "./preguntasRandom.json")

        } else if (id === 4) {
            getPreguntas(3, "./preguntasRandom.json")

        } else {
            pushNewPlayerInTopFive()
        }
    }
}

let divIntentosPuntaje = document.getElementById("divIntentosPuntaje")

function acomodarDivIntentosPuntaje(){
    divIntentosPuntaje.style.top=""
    divIntentosPuntaje.style.bottom="1px"
    divIntentosPuntaje.style.borderRadius="25px 25px 0px 0px"
    divIntentosPuntaje.style.boxShadow="5px 0px 7px rgb(82, 82, 82)"
}

const getPreguntas= async (i, dataJson) => {
    let response = await fetch(dataJson)
    let data = await response.json()
    quizzForm(data[i].id,
        data[i].question,
        data[i].answer,
        data[i].op_A,
        data[i].op_B,
        data[i].op_C,
        data[i].op_D,
        data[i].duplicaAnswer,
        data.length
        )
}

comenzarQuizz.onclick = () => {
    hideDiv("divPersonajeSeleccionado")
    showDiv("divPreguntas")
    showDiv("divIntentosPuntaje")
    showHearts(intentosHearts, heart1, heart2, heart3)
    console.log(arrPersonajeElegido)
    if (arrPersonajeElegido[0] === "Homero") {
        getPreguntas(0, "./preguntasHomero.json")

    } else if (arrPersonajeElegido[0] === "Milhouse") {
        getPreguntas(0, "./preguntasMilhouse.json")

    } else if (arrPersonajeElegido[0] === "Random") {
        getPreguntas(0, "./preguntasRandom.json")
    }
}

let heart1 = document.getElementById("heart1")
let heart2 = document.getElementById("heart2")
let heart3 = document.getElementById("heart3")
let intentosHearts = document.getElementById("intentosHearts")

let playAgain = document.getElementById("playAgain")
playAgain.onclick = () =>{
    location.reload()
}

let messagePlayAgain = document.getElementById("messagePlayAgain")

let noPlay = document.getElementById("noPlay")
noPlay.onclick = () => {
    messagePlayAgain.innerText="Elegiste..No"
}

let containerPlayAgainCumbancha = document.getElementById("containerPlayAgainCumbancha")

function showHearts(intentosHearts, heart1, heart2, heart3) {
    heart1.style.display = "block"
    heart2.style.display = "block"
    heart3.style.display = "block"
    intentosHearts.style.display = "block"
}

function changeHeartColor(heart) {
    heart.style.color = "#eaeaea"
    heart.style.transition = ".5s ease"
}

function correctOrNot(answer, value, duplica) {
    console.log(answer)
    console.log(value)

    if (answer !== value) {
        intentos--
        if (intentos == 2) {
            Toastify({
                text: "❌DOH!❌",
                duration: 500,
                position:"center",
                gravity: "bottom",
                positionLeft: false,
              }).showToast();
            changeHeartColor(heart3)

        } else if (intentos == 1) {
            Toastify({
                text: "❌DOH!❌",
                duration: 500,
                position:"center",
                gravity: "bottom",
                positionLeft: false,
              }).showToast();
            changeHeartColor(heart2)

        }
        console.log(intentos)
        showDivPlayAgain("divPlayAgain")
        if (intentos === 0) {
            Swal.fire({
                title: 'Has perdido!',
                html:
                    'Eres expulsado de la sociedad de simpsonmaniacos para siempre! <br />' +
                    'Y como humillacion final, tendrás que irte de quizz jalando tras de ti, la piedra de la verguenza! <br />' +
                    `Tu puntaje final fue <b>${puntaje} puntos</b> `,
                text: "",
                imageUrl: './images/gifPiedraVerguenza.gif',
                imageAlt: 'Custom image',
            })
            acomodarDivIntentosPuntaje()
            showDiv("divIntentosPuntaje"),
            hideDiv("divPreguntas"),
            showDiv("divHeader")
            showDivPlayAgain("divPlayAgain"),
            changeHeartColor(heart1)
        }

    } else {
        console.log("Correcto!")
        Toastify({
            text: "✔️YUHUU!✔️",
            duration: 500,
            position:"center",
            gravity: "bottom",
            positionLeft: false,
          }).showToast();
        duplicarPuntaje = duplica
        stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, intentos)
        jugadorNuevo[0].puntajeFinal = puntaje
        console.log(jugadorNuevo[0])
    }
    return intentos
}

