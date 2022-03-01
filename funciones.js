function iniciar(){
console.log("estoy procesando el programa")
}
function procesar(){

    setTimeout(function(){
        console.log ("estamos procesando el programa")
    },3000)

}

function finalizar(){
console.log ("estamos procesando el programa")
}

// llamando a mis funciones
iniciar()
procesar()
finalizar()
