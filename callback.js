function funcionprincipal(callback){

    setTimeout(function(){
        console.log("soy la funcion principal")
        callback()
    },2000)
    
}
funcionprincipal(function(){
    console.log("soy la segunda funcion")
})



