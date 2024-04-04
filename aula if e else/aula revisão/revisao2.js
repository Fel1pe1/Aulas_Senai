let senha

function pular(){
    senha= document.getElementById("senha")
    
    if( senha.value == 123 ){
       location.replace("https://youtu.be/dQw4w9WgXcQ?feature=shared")
    }else{
       alert("Login errado")
    }
    senha.value= ''
    senha.focud()
}