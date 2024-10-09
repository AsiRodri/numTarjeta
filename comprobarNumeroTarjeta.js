"use strict";
let numTarj=prompt("Dame el numero de la tarjeta, son 16 digitos");

function verificarnumeroTarjeta(numTarj){
    let suma=0;
    let longitud=numTarj.length;
    for (let i=0;i<numTarj.length;i++) {
        let digito=numTarj[longitud-1-i];
        if(i%2!=0){
            digito=digito*2;
            if(digito>9){
                digito=digito-9;
            }
        }
        suma=suma+digito;
    }
    return suma%10===0;
};

if (verificarnumeroTarjeta(numTarj)) {
    alert("El número de tarjeta es válido.");
} else {
    alert("El número de tarjeta NO es válido.");
}