function generarNumero (){
    let valorDado = Math.floor(Math.random() * 6) + 1;
    return valorDado
}

puntosGanar = 20;

let ejecutar= true;
let contador = 0;
let puntaje1 = 0;
let puntaje2 = 0

while(ejecutar){
    
    puntaje1 = puntaje1 + generarNumero();
    console.log("puntaje 1 =", puntaje1);

    puntaje2 = puntaje2 + generarNumero();
    console.log("puntaje 2 =", puntaje2);

    if(puntaje1 >= puntosGanar || puntaje2 >= puntosGanar ){
        ejecutar = false;
    }
}


