let usuario
let senha

function verificador(){
    usuario = document.getElementById("login").value
    senha = document.getElementById("senha").value
    if( usuario == 'admin' && senha == 123 ){
    location.replace("https://youtu.be/dQw4w9WgXcQ?feature=shared")
}else{
    location.replace("https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fdf72b813-905c-47f9-8d29-6c071a223214_620x463.gif")
}
}