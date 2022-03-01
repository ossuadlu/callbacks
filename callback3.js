function recibirUsuario(nombre,edad,password,callback){
    setTimeout(function(){
        let usuario={
            nombre:nombre,
            edad:edad,
            passsword:password
        }
        callback(usuario)

    }, 3000)
}
recibirUsuario("James",15,"12345678",function(usuario){
    if(usuario.edad>=18){
        console.log("bienvenido" + usuario.nombre)
    }
    else{
        console.log("no eres bienvenido"+usuario.nombre)

    }

})