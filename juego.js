function generarNumero (){
    let valorDado = Math.floor(Math.random() * 6) + 1;
    return valorDado
}

let puntosGanar = 20;
let ejecutar= true;
let turno = true;
let puntaje1 = 0;
let puntaje2 = 0;

const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const resultado1 = document.getElementById("resultadoJugador1");
const resultado2 = document.getElementById("resultadoJugador2");


dado1.addEventListener("click", function oprimirBoton1 (){
        if (!turno) return;
        let numeroGenerado1 = generarNumero();
        puntaje1 += numeroGenerado1;
    
        console.log("numero generado 1: ",numeroGenerado1)
        console.log("acomulado 1: ",puntaje1);
    
        dado1.textContent = numeroGenerado1;
        resultado1.textContent = (`Puntaje: ${puntaje1}`);
    
        
        if (numeroGenerado1 === 1) {
            alert("Jugador 1 perdió el turno");
            turno = false;
        }
    
        if (puntaje1 >= puntosGanar) {
            alert("🎉 ¡Jugador 1 gana!");
            deshabilitarJuego();
        }
        
})

dado2.addEventListener("click", function oprimirBoton2(){
        if (turno) return;
        let numeroGenerado2 = generarNumero();
        puntaje2 += numeroGenerado2;
    
        console.log("numero generado 2: ",numeroGenerado2)
        console.log("acomulado 2: ",puntaje2);
    
        dado2.textContent = numeroGenerado2;
        resultado2.textContent = (`Puntaje: ${puntaje2}`);
    
        if (numeroGenerado2 === 1) {
            alert("Jugador 2 perdió el turno");
            turno = true; 
        }
    
        if (puntaje2 >= puntosGanar) {
            alert("🎉 ¡Jugador 2 gana!");
            deshabilitarJuego();
        }
       
})

function deshabilitarJuego() {
    dado1.removeEventListener("click", arguments.callee);
    dado2.removeEventListener("click", arguments.callee);
}




/*
function generarNumero (){
    let valorDado = Math.floor(Math.random() * 6) + 1;
    return valorDado
}

puntosGanar = 20;

let ejecutar= true;
let turno = 1;
let puntaje1 = 0;
let puntaje2 = 0

while(ejecutar){

    
    puntaje1 = puntaje1 + generarNumero();
    puntaje2 = puntaje2 + generarNumero();

    console.log(`En el turno ${turno} el jugador 1 acomuló:${puntaje1} y el jugador 2 acomuló:${puntaje2} `);
    turno++;
    

    if(puntaje1 >= puntosGanar || puntaje2 >= puntosGanar ){
        ejecutar = false;
    }
}

if(puntaje1 > puntaje2){
    console.log("El ganador es el jugador 1")

}else if(puntaje2 > puntaje1){
    console.log("El ganador es el jugador 2")

}else{
    console.log("Hubo empate")
}*/