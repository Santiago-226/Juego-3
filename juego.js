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
}


