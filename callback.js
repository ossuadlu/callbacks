/*function funcionprincipal(callback){

    setTimeout(function(){
        console.log("soy la funcion principal")
        callback()
    },2000)
    
}
funcionprincipal(function(){
    console.log("soy la segunda funcion")
})*/
// declaracion de la funcion principal

function sumar(numero1,numero2,callback){
    setTimeout(function(){

        let suma=numero1+numero2

        callback(numero1,numero2,suma)

    },5000)
}

sumar (5,5, function(numero1,numero2,suma){//cuerpo del callback
    console.log (`la suma es: ${suma}`)
    
    // calcula la resta
    let resta=numero1- numero2

    console.log(`la restaa es : ${resta}`)

})
